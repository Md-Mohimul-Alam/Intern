import React from 'react';
import { Modal } from 'react-bootstrap';
import './header_cart.css';
const Card_drop = ({ show, handleClose }) => {

  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Body>
      <Modal.Header closeButton >
          <Modal.Title style={{paddingLeft:'140px'}}>Cart Items</Modal.Title>
      </Modal.Header>
                <div className="arrow-up"></div>
                <div className="cart-wrapper nav-cart" id="scrollbar">
                    <div className="table-responsive bor-bot-3  ">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Price ($)</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className="cart-content" id="cart-content">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <table className="w-100">
                    <tbody>
                        <tr className="bag-bigtxt row">
                            <td className="col-md-2">&nbsp;</td>
                            <td className="col-md-5 text-center">Estimated Total</td>
                            <td className="col-md-4 cart-price text-center" id="cart-price">
                                $ 0.00</td>
                            <td className="col-md-1">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <div className="order-wrap text-right pb-0 mb-1" >  
                    <div className="btn btn-checkout">Select Delivery</div>
                </div>               

      </Modal.Body>
    </Modal>
  );
};

export default Card_drop;
