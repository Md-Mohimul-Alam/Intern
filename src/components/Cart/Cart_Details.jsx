import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./cart.css";
import Cart_iM from "./cart-w.png";
import { useCart } from "../ContextApi";
import PopupComponent from '../Header/PopupComponent';
import { addOrder, getUserByEmail, getUserByPhone } from '../indexedDB';

const Cart_Details = ({ isOpen, onCartClick, toggleCart }) => {
    const { items, handleIncrement, handleDecrement, removeFromCart, clearCart } = useCart();
    const cart = JSON.parse(window.localStorage.getItem('cart')) || [];
    const totalPrice = parseFloat(window.localStorage.getItem('totalPrice')) || 0;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    const handleShowLoginPopup = () => {
        setShowLoginPopup(true);
    };

    const handlePlaceOrder = async (userId) => {
        if (cart.length === 0) {
            console.warn("Cart is empty. Cannot place order.");
            return;
        }
        
        setIsLoading(true);

        const orderDetails = {
            userId: userId,
            items: await Promise.all(cart.map(async (cartItem) => {
                const item = items.find(i => i.id === cartItem.id);
                if (!item) {
                    console.warn(`Item with ID ${cartItem.id} not found in items.`);
                    return null;
                }
                const { name, price } = item;
                const { id, quantity } = cartItem;
                const total = price * quantity;
                return {
                    id: id,
                    name: name,
                    price: price,
                    quantity: quantity,
                    total: total,
                };
            })),
            totalPrice: totalPrice,
            totalItems: totalItems,
        };

        console.log("Prepared order details:", orderDetails);

        try {
            const orderId = await addOrder(orderDetails);
            console.log("Order placed successfully with ID:", orderId);
            if (window.confirm("Order placed successfully! Do you want to clear the cart?")) {
                clearCart();
            }
        } catch (error) {
            console.error("Failed to place order:", error);
            alert("Failed to place order. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseLoginPopup = () => setShowLoginPopup(false);

    const handleLoginSuccess = async (input) => {
        try {
            let userData;
            if (input.includes('@')) {
                userData = await getUserByEmail(input);
            } else {
                userData = await getUserByPhone(input); // Fetch user by phone
            }

            setUser(userData);

            if (userData && userData.id) {
                await handlePlaceOrder(userData.id);
                console.log("Login was successful and order placed!");
                clearCart();
                setShowLoginPopup(false);
            }
        } catch (error) {
            console.error("Failed to fetch user data or place order:", error);
            alert("Login failed. Please check your credentials.");
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
                                {/* SVG Icon */}
                            </div>
                            <div className="itemCount" style={{ width: '80%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <span style={{ paddingTop: '10px', paddingLeft: '15px' }}>{totalItems} ITEMS</span>
                            </div>
                            <button className="closeCartButtonTop" onClick={toggleCart}>Close</button>
                        </div>
                        <div className="body" style={{ overflowY: 'auto', maxHeight: '700px' }}>
                            {cart.length > 0 ? (
                                <div>
                                    <div className="shoppingBagItems" style={{ width: '98%', overflowY: 'auto', overflowX: 'hidden', height: '600px' }}>
                                        <ul style={{ paddingLeft: '0px' }}>
                                            {cart.map((cartItem, index) => {
                                                const item = items.find(i => i.id === cartItem.id);
                                                if (!item) return null;
                                                const { name, price, image, tott } = item;
                                                const { quantity } = cartItem;
                                                return (
                                                    <li key={index} className="item_dis" style={{ width: '320px', height: 'auto', display: 'flex', flexDirection: 'row', marginLeft: '0px' }}>
                                                        <div className="Button" style={{ height: 'auto', width: 'auto', flex: '1' }}>
                                                            <div type="button" className="minusQuantity" id='same' onClick={() => handleDecrement(cartItem.id)}>–</div>
                                                            <div className="QuantityTextContainer">
                                                                <span>{quantity}</span>
                                                            </div>
                                                            <div type="button" className="plusQuantity" id='same' onClick={() => handleIncrement(cartItem.id)}>+</div>
                                                        </div>
                                                        <div className="product-img" style={{ width: '40px', height: '40px', flex: '1' }}>
                                                            <img src={image} alt={name} style={{ width: '40px', height: '40px' }} />
                                                        </div>
                                                        <div className="name" style={{ display: 'block', flex: '1' }}>
                                                            <div>{name}</div>
                                                            <div>{tott}</div>
                                                        </div>
                                                        <div className="price" style={{ display: 'block', flex: '1' }}>
                                                            <div style={{ color: '#e43215' }}>
                                                                ${price * quantity}
                                                            </div>
                                                        </div>
                                                        <div className="remove" title="Remove from bag" onClick={() => removeFromCart(cartItem.id)} style={{ cursor: 'pointer', flex: '1' }}>
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
                                                <span className="placeOrderText" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                                <div className="emptyCart" style={{ width: '100%', paddingTop: '20px' }}>
                                    <div className="nothingToSeeHereMoveOn">
                                        <div>
                                            <img style={{ width: '230px', height: '230px' }} src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-523/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&webp=1&alpha=1" alt="Empty Shopping Bag" />
                                        </div>
                                        <span>Your shopping bag is empty. Start shopping</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {isLoading && <div>Loading...</div>}
            {showLoginPopup && <PopupComponent show={showLoginPopup} handleClose={handleCloseLoginPopup} onLoginSuccess={handleLoginSuccess} />}
        </div>
    );
};

// Prop Types for Cart_Details Component
Cart_Details.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCartClick: PropTypes.func.isRequired,
    toggleCart: PropTypes.func.isRequired,
};

export default Cart_Details;
