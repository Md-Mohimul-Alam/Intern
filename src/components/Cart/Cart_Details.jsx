import React, { useState } from 'react';
import "./cart.css";
import Cart_iM from "./cart-w.png";
import { useCart } from "../ContextApi";
import PopupComponent from '../Header/PopupComponent';
import { addOrder, getUserByEmail } from '../indexedDB'; // Ensure clearOrders is a function that clears cart/order data

const Cart_Details = ({ isOpen, onCartClick, toggleCart }) => {
    const { items,handleIncrement, handleDecrement, removeFromCart, clearCart } = useCart();
    const { cart, totalPrice, totalItems } = useCart();
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [user, setUser] = useState(null);

    const handleShowLoginPopup = () => {
        setShowLoginPopup(true);
    };

    const handlePlaceOrder = async (userId) => {
        // Retrieve data from localStorage
        const cart = JSON.parse(window.localStorage.getItem('cart')) || [];
        const totalPrice = parseFloat(window.localStorage.getItem('totalPrice')) || 0;
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
        // Prepare order details
        const orderDetails = {
            userId: userId,
            items: await Promise.all(cart.map(async (cartItem) => {
                const item = items.find(i => i.id === cartItem.id); // Retrieve the full item details
                if (!item) {
                    console.warn(`Item with ID ${cartItem.id} not found in items.`);
                    return null; // Skip if item not found
                }
                const { name, price } = item; // Extract name from the item
                const { id, quantity } = cartItem;
                const total = price * quantity;
                return {
                    id: id,
                    name: name, // Include product name
                    price: price,
                    quantity: quantity,
                    total: total,
                };
            })),
            totalPrice: totalPrice,
            totalItems: totalItems,
        };
    
        console.log("Prepared order details:", orderDetails); // Log prepared order details
    
        try {
            const orderId = await addOrder(orderDetails); // Call addOrder with orderDetails
            console.log("Order placed successfully with ID:", orderId);
            clearCart();
        } catch (error) {
            console.error("Failed to place order:", error);
        }
    };
    
    
    const handleCloseLoginPopup = () => setShowLoginPopup(false);

    const handleLoginSuccess = async (email) => {
        try {
            const userData = await getUserByEmail(email);
            setUser(userData);
            if (userData && userData.id) {
                await handlePlaceOrder(userData.id);
                console.log("Login was successful and order placed!");
                clearCart();
                setShowLoginPopup(false); 
            }
        } catch (error) {
            console.error("Failed to fetch user data or place order:", error);
        }
    };

    
    
    return (
        <div style={{ cursor: 'pointer' }}>
            {!isOpen ? (
                <div>
                    <div className="floating-cart" onClick={onCartClick}>
                        <div className="wrapper">
                            <div className="cart-items">
                                <img className="img-fluid" src={Cart_iM} alt="Cart Icon" />
                                <h5 id="cart-overview-total-item">
                                    {totalItems} items
                                </h5>
                            </div>
                            <h4 id="cart-overview-price">${totalPrice.toFixed(2)}</h4>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="floating-cart after_expand" style={{ height: '840px', zIndex: '2' }}>
                    <div className="shoppingCartWrapper">
                        <div className="header_cart">
                            <div className="cart">
                                <svg version="1.1" id="Calque_1" x="0px" y="0px" style={{ fill: '#FDD670', stroke: '#FDD670', width: '21px', height: '32px' }} viewBox="0 0 100 160.13">
                                    <g>
                                        <polygon points="11.052,154.666 21.987,143.115 35.409,154.666"></polygon>
                                        <path d="M83.055,36.599c-0.323-7.997-1.229-15.362-2.72-19.555c-2.273-6.396-5.49-7.737-7.789-7.737c-6.796,0-13.674,11.599-16.489,25.689l-3.371-0.2l-0.19-0.012l-5.509,1.333c-0.058-9.911-1.01-17.577-2.849-22.747c-2.273-6.394-5.49-7.737-7.788-7.737c-8.618,0-17.367,18.625-17.788,37.361l-13.79,3.336l0.18,1.731h-0.18v106.605l17.466-17.762l18.592,17.762V48.06H9.886l42.845-10.764l2.862,0.171c-0.47,2.892-0.74,5.865-0.822,8.843l-8.954,1.75v106.605l48.777-10.655V38.532l0.073-1.244L83.055,36.599z M36.35,8.124c2.709,0,4.453,3.307,5.441,6.081c1.779,5.01,2.69,12.589,2.711,22.513l-23.429,5.667C21.663,23.304,30.499,8.124,36.35,8.124z M72.546,11.798c2.709,0,4.454,3.308,5.44,6.081c1.396,3.926,2.252,10.927,2.571,18.572l-22.035-1.308C61.289,21.508,67.87,11.798,72.546,11.798z M58.062,37.612l22.581,1.34c0.019,0.762,0.028,1.528,0.039,2.297l-23.404,4.571C57.375,42.986,57.637,40.234,58.062,37.612z M83.165,40.766c-0.007-0.557-0.01-1.112-0.021-1.665l6.549,0.39L83.165,40.766z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="itemCount" style={{ width: '80%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <span style={{ paddingTop: '10px', paddingLeft: '15px' }}>{totalItems} ITEMS</span>
                            </div>
                            <button className="closeCartButtonTop" onClick={toggleCart}>Close</button>  
                        </div>
                        <div className="body" style={{ overflowY: 'auto', maxHeight: '700px' }}>
                            {cart.length > 0 ? (
                                <div>
                                    <div className="shoppingBagItems" style={{ width: '98%', overflowY: 'auto', overflowX:'hidden',height:'600px', }}>
                                        <ul style={{ paddingLeft: '0px' }}>
                                            {cart.map((cartItem, index) => {
                                                const item = items.find(i => i.id === cartItem.id);
                                                if (!item) return null;
                                                const { name, price, image, tott } = item;
                                                const { quantity } = cartItem;
                                                return (
                                                    <li key={index} className="item_dis" style={{ width: '320px',height:'auto', display: 'flex', flexDirection: 'row', marginLeft: '0px' }}>
                                                        <div className="Button" style={{ height: 'auto', width: 'auto', flex:'1'}}>
                                                            <div type="button" className="minusQuantity" id='same' onClick={() => handleDecrement(cartItem.id)}>–</div>
                                                            <div className="QuantityTextContainer">
                                                                <span>{quantity}</span>
                                                            </div>
                                                            <div type="button" className="plusQuantity" id='same' onClick={() => handleIncrement(cartItem.id)}>+</div>
                                                        </div>
                                                        <div className="product-img" style={{ width: '40px', height: '40px' , flex:'1'}}>
                                                            <img src={image} alt={name} style={{ width: '40px', height: '40px' }} />
                                                        </div>
                                                        <div className="name" style={{ display: 'block' , flex:'1'}}>
                                                            <div>
                                                                {name}
                                                            </div>
                                                            <div>
                                                                {tott}
                                                            </div>
                                                        </div>
                                                        <div className="price" style={{ display: 'block' , flex:'1'}}>
                                                            <div style={{ color: '#e43215' }}>
                                                                ${price * quantity}
                                                            </div>
                                                        </div>
                                                        <div className="remove" title="Remove from bag" onClick={() => removeFromCart(cartItem.id)} style={{ cursor: 'pointer' , flex:'1'}}>
                                                            <span>&nbsp;&nbsp;X&nbsp;</span>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="footer_cart">
                                        <div className="shoppingCartActionButtons" onClick={handleShowLoginPopup}>
                                            <div id="placeOrderButton">
                                                <span className="placeOrderText" style={{ display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',}}>
                                                    <span>Place Order</span>
                                                </span>
                                                <span className="totalMoneyCount">
                                                    <span>$ </span>
                                                    <span>{totalPrice.toFixed(2)}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="emptyCart" style={{ width:'100%',paddingTop: '20px' }}>
                                    <div className="nothingToSeeHereMoveOn">
                                        <div>
                                            <img  style={{width:'230px', height:'230px'}} src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-523/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&webp=1&alpha=1" alt="Empty Shopping Bag" />
                                        </div>
                                        <span>Your shopping bag is empty. Start shopping</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {showLoginPopup && <PopupComponent show={showLoginPopup} handleClose={handleCloseLoginPopup} onLoginSuccess={handleLoginSuccess} />}
        </div>
    );
};

export default Cart_Details;