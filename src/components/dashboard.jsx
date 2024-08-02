import React, { useState } from 'react';
import './css/dashboard.css';
import Header from './Header/Header';
import Sidebar from './Sidebar.jsx';
import Banner from './static/img/banner-desktop.jpg';
import TopCategories from './TopCatagory.jsx';
import Footer from './Footer/footer.jsx';
import Cart_Details from './Cart/Cart_Details.jsx';
import { useCart } from './ContextApi';

const Dashboard = () => {
    const { items, categories} = useCart();
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
        width: isSidebarOpen ? '86.5%' : isCartOpen ? '84.8%' : '1920px',
        height: '100%',
        marginLeft: isSidebarOpen ? '13.4%' : '0%',
        transition: 'width 0.3s ease, margin-left 0.3s ease',
        top: '0px',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        objectFit: 'cover',
        position:'absolute',
        paddingBottom:'300px',
    };

    return (
        <div>
            <Header className="Header" onHamburgerClick={handleClick} />
            <Sidebar isOpen={isSidebarOpen} />
            <Cart_Details isOpen={isCartOpen} onCartClick={handleClickCart} toggleCart={toggleCart} />
            <div style={{ top: '0', paddingBottom: '300px' }}>
                <div style={divStyle}>
                    <div>
                        <img src={Banner} className="Bannar" alt="Bannar" style={{ width: isSidebarOpen ? '100%' : '100%', paddingTop: '65px' }} />
                    </div>
                    <div>
                        <TopCategories style={{ marginLeft: isSidebarOpen ? '20.4%' : '0%' }} categories={categories} items={items}/>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Dashboard;
