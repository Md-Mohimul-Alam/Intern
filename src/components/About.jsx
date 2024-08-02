import React, { useState } from 'react';
import './css/dashboard.css';
import Header from './Header/Header';
import Sidebar from './Sidebar.jsx';
import Banner from './static/img/banner-desktop02.jpg';
import Footer from './Footer/footer.jsx';
import { Typography, Container } from '@mui/material';
import Cart_Details from './Cart/Cart_Details.jsx';

const About = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        toggleSidebar();
    };
    const handleClickCart = () => {
        setIsActive(!isActive);
        toggleCart();
    };
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const divStyle = {
        width: isSidebarOpen  ? '91.8%' : '100%' || isCartOpen  ? '91.8%' : '100%',
        height:'100%',
        marginLeft: isSidebarOpen ? '8.4%' : '0%',
        marginRight:isCartOpen  ? '-320px' : '100%',
        transition: 'width 0.3s ease, margin-left 0.3s ease',
        top:'0px',
        zIndex: '100',
        display:'flex',
        flexDirection:'column',
        overflowX:'hidden',
        objectFit:'cover',
    };
    const body1Style = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        fontWeight:'100',
        color: '#343a40;'
      };

    
    return (
        <div>
            <Header className="Header" onHamburgerClick={handleClick} />
            <Sidebar isOpen={isSidebarOpen} style={{position:'fixed'}}/>
            <Cart_Details isOpen={isCartOpen} onCartClick={handleClickCart} toggleCart={toggleCart}/>

            <div style={divStyle}>
                <div>
                    <img src={Banner} className="Bannar" alt="Bannar" style={{width: isSidebarOpen ? '100%' : '100%',paddingTop:'70px'}}/>
                </div>
                <Container maxWidth="md" className="mt-5"style={{marginBottom:'150px', fontFamily:'Muli,sans-serif'}}>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                        <div className="card-block">
                            <div className="row">
                            <div className="col-md-12">
                                <Typography variant="h3" gutterBottom>
                                ABOUT Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket
                                </Typography>
                                <Typography variant="body1" gutterBottom sx={body1Style}>
                                Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket is one of the leading online grocery shops in New York providing all sorts of grocery items including halal products to its customers with prompt delivery and store pickup service.
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                OUR OFFERS
                                </Typography>
                                <Typography variant="body1" gutterBottom sx={body1Style}>
                                Get Free delivery with minimum $25 purchase.
                                </Typography>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Container>
            </div>
            <Footer style={{width: isSidebarOpen ? '86.5%' : '100%', marginLeft: isSidebarOpen ? '13.5%' : '0%',}}/>

        </div>
    );
};

export default About;
