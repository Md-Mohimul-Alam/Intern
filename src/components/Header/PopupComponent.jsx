import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../Header/header.css';
import { addUser, getUserByEmail, getUserByPhone, userExists, addPersonalInfo } from '../indexedDB';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import gif from '../Header/output-onlinegiftools.gif';
import { addOrder } from '../indexedDB'; // Adjust the path as needed
import { useCart } from "../ContextApi";






const PopupComponent = ({ show, handleClose, onLoginSuccess }) => {
    const { items, clearCart } = useCart();
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(true);
    const [usePhone, setUsePhone] = useState(true);

    // User personal info
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [road, setRoad] = useState('');
    const [house, setHouse] = useState('');
    const [block, setBlock] = useState('');
    const [deliveryType, setDeliveryType] = useState('home-delivery');

    // Snackbar states
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success'); // default to 'success'

    const handleRadioChange = (e) => {
      setDeliveryType(e.target.value);
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
    useEffect(() => {
        if (alertSeverity === 'success' && open && userId) {
            const placeOrderAndClose = async () => {
                try {
                    await handlePlaceOrder(userId);
                    handleClose();
                    if (onLoginSuccess) onLoginSuccess(userId);
                } catch (error) {
                    console.error("Error placing order:", error);
                }
            };
            const timer = setTimeout(placeOrderAndClose, 5000);
            return () => clearTimeout(timer);
        }
    }, [alertSeverity, open, handleClose, onLoginSuccess, userId]);
    

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          if (usePhone) {
              if (isRegister) {
                  if (await userExists(phone, 'phone')) {
                      setAlertMessage('User already exists');
                      setAlertSeverity('error');
                      setOpen(true);
                      return;
                  }
                  await addUser({ phone, password }, 'phone');
                  setAlertMessage('User registered successfully');
                  setAlertSeverity('success');
                  setOpen(true);
              } else {
                  const user = await getUserByPhone(phone);
                  if (user && user.password === password) {
                      setAlertMessage('Login successful');
                      setAlertSeverity('success');
                      setOpen(true);
                      setUserId(user.id); // Set userId after successful login
                  } else {
                      setAlertMessage('Invalid credentials');
                      setAlertSeverity('error');
                      setOpen(true);
                  }
              }
          } else {
              if (isRegister) {
                  if (await userExists(email, 'email')) {
                      setAlertMessage('User already exists');
                      setAlertSeverity('error');
                      setOpen(true);
                      return;
                  }
                  await addUser({ email, password }, 'email');
                  setAlertMessage('User registered successfully');
                  setAlertSeverity('success');
                  setOpen(true);
              } else {
                  const user = await getUserByEmail(email);
                  if (user && user.password === password) {
                      setAlertMessage('Login successful');
                      setAlertSeverity('success');
                      setOpen(true);
                      setUserId(user.id); // Set userId after successful login
                  } else {
                      setAlertMessage('Invalid credentials');
                      setAlertSeverity('error');
                      setOpen(true);
                  }
              }
          }
      } catch (error) {
          console.error('Error during authentication:', error); // Log detailed error information
          setAlertMessage('An error occurred');
          setAlertSeverity('error');
          setOpen(true);
      }
  };
  
    const handlePersonalInfoSubmit = async (e) => {
        e.preventDefault();
        if (userId) {
            try {
                await addPersonalInfo({ id: userId, name, address, road, house, block,deliveryType });
                setAlertMessage('Personal info submitted successfully');
                clearCart
                setAlertSeverity('success');
                setOpen(true);
            } catch (error) {
                setAlertMessage('Failed to submit personal info');
                setAlertSeverity('error');
                setOpen(true);
            }
        }
    };

    const toggleForm = () => setIsRegister(!isRegister);

    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title style={{ paddingLeft: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span> </span>
                    <span>
                        {userId ? 'Personal Info' : (isRegister ? 'Register' : 'Login')}
                    </span>
                    <span> </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="bodyTable1">
                    <div className="phoneNumberLogin outsideDialog authForm">
                        {!userId && (
                            <>
                                <button className="facebookLoginButton loginBtn loginButton" style={{ background: '#49639f', color: 'white' }} onClick={() => console.log('Facebook login button clicked')}>
                                    <svg width="20px" height="20px" style={{ fill: 'white', stroke: 'white', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 430.113 430.114">
                                        <path id="Facebook" d="M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,19.321-17.354c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,0C155.878-0.004,158.081,72.48,158.081,83.3z" />
                                    </svg>
                                    <div className="buttonText">
                                        <span>Sign Up or Login with <b>Facebook</b></span>
                                    </div>
                                </button>
                                <button className="loginBtn emailLoginBtn" onClick={toggleForm}>
                                    <img src={gif} alt="" style={{ display: 'inline-block', verticalAlign: 'middle' }} width="30px" height="30px" />
                                    <span>{isRegister ? 'Register ' : 'Login '}</span>
                                </button>
                                <button className="loginBtn emailLoginBtn" onClick={() => setUsePhone(!usePhone)}>
                                    <svg style={{ display: 'inline-block', verticalAlign: 'middle' }} width="25px" height="25px" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 491.52 491.52">
                                        <rect y="85.914" style={{ fill: '#F6C358' }} width="491.52" height="319.693" />
                                        <polygon style={{ fill: '#FCD462' }} points="245.76,217.258 491.52,405.604 0,405.604" />
                                        <polygon style={{ fill: '#DC8744' }} points="245.76,291.673 0,85.916 491.52,85.916" />
                                        <polygon style={{ fill: '#FCD462' }} points="245.76,274.261 0,85.916 491.52,85.916" />
                                    </svg>
                                    <span>{usePhone ? 'Switch to Email Login' : 'Switch to Phone Login'}</span>
                                </button>
                                <div className="orContainer">
                                    <span>or</span>
                                </div>
                            </>
                        )}
                        {userId ? (
                            <div className="personalInfoHeader">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span> </span>
                                    <h4>User ID: {userId}</h4>
                                </div>
                                <form className="personalInfoInputContainer" onSubmit={handlePersonalInfoSubmit}>
                                    <div style={{ paddingBottom: '5px' }}>
                                        <input
                                            style={{ width: '100%', paddingBottom: '5px', borderBottom: 'solid 2px #c9c9c9' }}
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '5px' }}>
                                        <input
                                            style={{ width: '100%', paddingBottom: '5px', borderBottom: 'solid 2px #c9c9c9' }}
                                            type="text"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Enter your contact Number"
                                            required
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '5px' }}>
                                        <input
                                            style={{ width: '100%', paddingBottom: '5px', borderBottom: 'solid 2px #c9c9c9' }}
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your Email"
                                            required
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '5px' }}>
                                        <input
                                            style={{ width: '100%', paddingBottom: '5px', borderBottom: 'solid 2px #c9c9c9' }}
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Enter your address"
                                            required
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '5px' }}>
                                        <input
                                            style={{ width: '100%', paddingBottom: '5px', borderBottom: 'solid 2px #c9c9c9' }}
                                            type="text"
                                            value={road}
                                            onChange={(e) => setRoad(e.target.value)}
                                            placeholder="Enter your road"
                                            required
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '5px' }}>
                                        <input
                                            style={{ width: '100%', paddingBottom: '5px', borderBottom: 'solid 2px #c9c9c9' }}
                                            type="text"
                                            value={house}
                                            onChange={(e) => setHouse(e.target.value)}
                                            placeholder="Enter your house"
                                            required
                                        />
                                    </div>
                                    <div style={{ paddingBottom: '5px' }}>
                                        <input
                                            style={{ width: '100%', paddingBottom: '5px', borderBottom: 'solid 2px #c9c9c9' }}
                                            type="text"
                                            value={block}
                                            onChange={(e) => setBlock(e.target.value)}
                                            placeholder="Enter your block"
                                            required
                                        />
                                    </div>
                                    <div className="delivery-wrap">
                                      <div className="delivery-tab" id="home-delivery">
                                        <input
                                          type="radio"
                                          name="delivery_type"
                                          className="form-check-input"
                                          id="delivery_type_home"
                                          value="home-delivery"
                                          checked={deliveryType === 'home-delivery'}
                                          onChange={handleRadioChange}
                                        />
                                        <label htmlFor="delivery_type_home" className="form-check-label label-delivery">
                                          Home Delivery
                                        </label>
                                      </div>

                                      <div className="delivery-tab" id="store-pickup">
                                        <input
                                          type="radio"
                                          name="delivery_type"
                                          className="form-check-input"
                                          id="delivery_type_store"
                                          value="store-pickup"
                                          checked={deliveryType === 'store-pickup'}
                                          onChange={handleRadioChange}
                                        />
                                        <label htmlFor="delivery_type_store" className="form-check-label label-delivery">
                                          Store Pickup
                                        </label>
                                      </div>
                                    </div>
                                    <div className="actions">
                                        <button className='loginBtn' type="submit">Submit Personal Info</button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <form className="authForm" onSubmit={handleSubmit}>
                                {usePhone ? (
                                    <>
                                        <div className="phoneNumberLoginField focused">
                                            <div className='phone-i' style={{ color: 'black' }}>
                                                <PhoneInput
                                                    style={{ paddingLeft: '15px' }}
                                                    inputStyle={{ color: 'black', width: '250px' }}
                                                    value={phone}
                                                    onChange={(phone) => setPhone(phone)}
                                                    inputclassName="phone-input"
                                                    dropdownclassName="phone-dropdown"
                                                    placeholder='e.g. +8801672955886'
                                                />
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: '5px' }}>
                                            <div className="passwordInputField">
                                                <input
                                                    style={{ width: '100%' }}
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Enter your password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div style={{ paddingBottom: '5px' }}>
                                            <div className="emailInputField">
                                                <input
                                                    style={{ width: '100%' }}
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: '5px' }}>
                                            <div className="passwordInputField">
                                                <input
                                                    style={{ width: '100%' }}
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Enter your password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="actions">
                                    <button className="loginBtn" type="submit">
                                        {isRegister ? 'SIGN UP' : 'LOGIN'}
                                    </button>
                                </div>
                                <div className="recaptcha">
                                    <h5 className="recaptchaTxt">
                                        <span>This site is protected by reCAPTCHA and the Google </span>
                                        <div href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</div>
                                        <span> and </span>
                                        <div href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</div>
                                        <span> apply.</span>
                                    </h5>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                        <Alert onClose={handleCloseSnackbar} severity={alertSeverity} sx={{ width: '100%' }}>
                            {alertMessage}
                        </Alert>
                    </Snackbar>
                </Stack>
            </Modal.Footer>
        </Modal>
    );
};

export default PopupComponent;