import React, { useState, useEffect } from 'react';
import './css/dashboard.css';
import Header from './Header/Header';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer/footer.jsx';
import Cart_Details from './Cart/Cart_Details.jsx';
import { getRoute } from './graphhopperService';
import MapComponent from './MapComponent';

const Contact = () => {
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
        top: '0',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        objectFit: 'cover',
    };
    const [route, setRoute] = useState(null);

    useEffect(() => {
      const fetchRoute = async () => {
        try {
          const coordinates = ['48.8566,2.3522', '51.5074,-0.1278']; // Example coordinates (Paris to London)
          const data = await getRoute(coordinates);
          const routeCoordinates = data.paths[0].points.coordinates.map(point => ({
            lat: point[1],
            lng: point[0],
          }));
          setRoute({ coordinates: routeCoordinates });
        } catch (error) {
          console.error('Error fetching route data:', error);
        }
      };
  
      fetchRoute();
    }, []);

    
    return (
        <div>
            <Header className="Header" onHamburgerClick={handleClick} />
            <Sidebar isOpen={isSidebarOpen} />
            <Cart_Details isOpen={isCartOpen} onCartClick={handleClickCart} toggleCart={toggleCart} />
            <div style={{ top: '0', paddingBottom: '300px' }}>
                <div style={divStyle}>
                    <section className="about mx-4 md:mx-8 lg:mx-16 py-8"style={{alignItems:'center',justifyContent:'center'}}>
                        <div className="container mx-auto">
                            <div className="contact-title mb-8">
                            <h2 className="text-2xl font-semibold">Contact</h2>
                            <a 
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                About Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket
                            </a>
                            </div>
                            <div>
                                <h1>Route Visualization</h1>
                                {route ? <MapComponent route={route} /> : <p>Loading map...</p>}
                            </div>
                            <div className="flex justify-center">
                            <div className="w-full max-w-4xl">
                                <div className="bg-white p-6 shadow-md rounded-lg">
                                <h2 className="text-xl font-semibold mb-4">Address</h2>
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2 md:pr-4">
                                    <address className="text-gray-700">
                                        <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
                                        369 E. 204 ST. Bronx, NY 10467
                                        <br />
                                        <a href="#" className="flex items-center text-blue-500 hover:text-blue-700">
                                        <i className="fas fa-phone mr-2"></i>
                                        718-798-1480
                                        </a>
                                        <br />
                                        <a href="mailto:info@dhakagro.com" target="_top" className="flex items-center text-blue-500 hover:text-blue-700">
                                        <i className="far fa-envelope mr-2"></i>
                                        info@dhakagro.com
                                        </a>
                                    </address>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;
