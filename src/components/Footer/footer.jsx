import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = ({ style }) => {
  return (
    <div className="footer container-fluid footer-pos" style={style}>
      <div className="row">
        <div className="col-lg-5 col-md-6 footer-content order-last order-md-1">
          <p className="copyright">
            Copyright ©Dhaka Supermarket &amp; Halal Meat 2024. 
            <span>All Rights Reserved.</span>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 footer-content hidden-md-down order-md-2">
          <div className="footer-link" onClick={() => window.open('https://www.facebook.com/Dhakagro', '_blank', 'noopener noreferrer')}>
            <FaFacebookF />
          </div>
        </div>
        <div className="col-lg-5 col-md-6 footer-content order-md-3">
          <ul className="footer-menu">
            <li>
              <Link className="footer-menu-item" to="/contact/">Contact</Link>
            </li>
            <li>
              <Link className="footer-menu-item" to="/about/">About Us</Link>
            </li>
            <li>
              <Link className="footer-menu-item" to="/terms-of-use/">Terms of Use</Link>
            </li>
            <li>
              <Link className="footer-menu-item" to="/Privacy_policy/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
