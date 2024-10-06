import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { addOrder, getPreviousOrders } from '../indexedDB'; // Ensure the function is imported correctly
import './header_cart.css';

const Card_drop = ({ show, handleClose, userId }) => {
  const [orderDetails, setOrderDetails] = useState({ items: [], totalPrice: 0 });
  const [previousOrders, setPreviousOrders] = useState([]);
  const [totalPriceDrop, setTotalPriceDrop] = useState(0);

  useEffect(() => {
    // Fetch cart details from localStorage
    const cartData = window.localStorage.getItem('cartdrop');
    if (cartData) {
      try {
        const parsedData = JSON.parse(cartData);
        const totalPrice = parsedData.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setOrderDetails({ items: parsedData, totalPrice });
      } catch (error) {
        console.error('Failed to parse cartdrop data:', error);
      }
    }

    // Fetch totalPrice from localStorage
    const storedTotalPrice = window.localStorage.getItem('totalPriceDrop');
    if (storedTotalPrice) {
      setTotalPriceDrop(parseFloat(storedTotalPrice));
    }

    // Fetch previous orders from IndexedDB
    const fetchPreviousOrders = async () => {
      try {
        const orders = await getPreviousOrders(userId); // Fetch orders using the userId
        setPreviousOrders(orders);
      } catch (error) {
        console.error('Error fetching previous orders:', error);
      }
    };

    fetchPreviousOrders();
  }, [show, userId]);

  const items = orderDetails.items;
  const totalPrice = orderDetails.totalPrice;

  // Function to handle the "Last Order" button click
  const handleLastOrder = async () => {
    if (items.length === 0) {
      console.warn('No items to order');
      return; // Prevents submitting if there are no items
    }

    const orderData = {
      userId: userId, // Ensure userId is passed
      items: items, // Store all items in the order
      totalPrice: totalPrice,
      totalItems: items.reduce((acc, item) => acc + item.quantity, 0), // Calculate total items
    };

    console.log('Storing order data:', orderData); // Debugging log

    try {
      await addOrder(orderData); // Add order to IndexedDB
      console.log('Order stored successfully');

      // Clear cart data from localStorage
      window.localStorage.removeItem('cartdrop');
      window.localStorage.removeItem('totalPriceDrop');

      handleClose(); // Close the modal after storing the order
    } catch (error) {
      console.error('Error storing order:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Previous Orders</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="arrow-up"></div>
        <div className="cart-wrapper nav-cart" id="scrollbar">
          <div className="table-responsive bor-bot-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Qty</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Price ($)</th>
                  <th scope="col">Total ($)</th>
                </tr>
              </thead>
              <tbody className="cart-content" id="cart-content">
                {items.length > 0 ? (
                  items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.quantity}</td>
                      <td>{item.name}</td>
                      <td>{item.price.toFixed(2)}</td>
                      <td>{(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">No items in the cart</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Display Previous Orders */}
        <div className="previous-orders">
          <h5>Previous Orders</h5>
          {previousOrders.length > 0 ? (
            previousOrders.map((order, index) => (
              <div key={index} className="order">
                <h6>Order #{order.id}</h6>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Qty</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Price ($)</th>
                      <th scope="col">Total ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, itemIndex) => (
                      <tr key={itemIndex}>
                        <td>{item.quantity}</td>
                        <td>{item.name}</td>
                        <td>{item.price.toFixed(2)}</td>
                        <td>{(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="order-total">
                  <strong>Total: ${order.totalPrice.toFixed(2)}</strong>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No previous orders found.</div>
          )}
        </div>

        <table className="w-100">
          <tbody>
            <tr className="bag-bigtxt row">
              <td className="col-md-2">&nbsp;</td>
              <td className="col-md-5 text-center">Estimated Total</td>
              <td className="col-md-4 cart-price text-center" id="cart-price-drop">
                ${totalPriceDrop.toFixed(2)}
              </td>
              <td className="col-md-1">&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="order-wrap text-right pb-0 mb-1">
          <button className="btn btn-checkout" onClick={handleLastOrder}>Proceed to deliver</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Card_drop;
