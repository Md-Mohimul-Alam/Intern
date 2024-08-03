import React, { useState, useEffect } from 'react';
import './css/dashboard.css';
import Header from './Header/Header';
import Sidebar from './Sidebar';
import Banner from './static/img/banner-desktop.jpg';
import TopCategories from './TopCatagory';
import Footer from './Footer/footer';
import Cart_Details from './Cart/Cart_Details';
import { useCart } from './ContextApi';
const Dashboard = () => {
    const { items, categories } = useCart();
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

    useEffect(() => {
        const container = document.querySelector('.container');

        if (container) {
            const viewportWidth = window.innerWidth;

            if (viewportWidth < 576) {
                container.style.width = '75%';
            } else if (viewportWidth < 768) {
                container.style.width = '80%';
            } else if (viewportWidth < 992) {
                container.style.width = '85%';
            } else if (viewportWidth < 1200) {
                container.style.width = '90%';
            } else {
                container.style.width = '100%';
            }
        }
    }, []);

    const divStyle = {
        width: isSidebarOpen ? '82.5%' : isCartOpen ? '84.8%' : '100%',
        height: '100%',
        marginLeft: isSidebarOpen ? '17.6%' : '0%',
        transition: 'width 0.3s ease, margin-left 0.3s ease',
        top: '0px',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        objectFit: 'cover',
        position: 'absolute',
        paddingBottom: '300px',
    };

    return (
        <div className="container">
            <Header className="Header" onHamburgerClick={handleClick} />
            <Sidebar isOpen={isSidebarOpen} />
            <Cart_Details isOpen={isCartOpen} onCartClick={handleClickCart} toggleCart={toggleCart} />
            <div className="middle">
                <div style={divStyle}>
                    <div className="Bannar">
                        <img src={Banner} alt="Bannar" style={{ width: '100%', paddingTop: '65px' }} />
                    </div>
                    <div className="TopCategories">
                        <TopCategories categories={categories} items={items} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
