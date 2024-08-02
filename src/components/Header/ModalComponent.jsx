import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import './header_cart.css';
const ModalComponent = ({ show, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <Modal show={show} onHide={handleClose} top >
      <Modal.Header closeButton s>
        <Modal.Title style={{paddingLeft:'120px'}}>
          <span>
            Search Your Order
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <input type="hidden" name="csrfmiddlewaretoken" value="UKWFTAeNRpSLMP0ArgQxe6BFEMOraCBA4NnMOUxLHB5IKl1WKAPEFqZkpFsl9iZz" />
          <Form.Group controlId="formEmail">
            <Form.Control type="email" name="email" placeholder="Email" required />
          </Form.Group>
          <br></br>
          <Form.Group controlId="formOrderId">
            <Form.Control type="number" name="order_id" placeholder="Order Number" required />
          </Form.Group>
          <br></br>
          <div className="order-wrap text-right pb-0 mb-1" >  
              <div className="btn btn-checkout">Click to Search</div>
          </div>       
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
