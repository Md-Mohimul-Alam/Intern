import React, { useState } from 'react';
import './css/dashboard.css';
import Header from './Header/Header';
import Sidebar from './Sidebar.jsx';
import Banner from './static/img/banner-desktop.jpg';
import Footer from './Footer/footer.jsx';
import Typography from '@mui/material/Typography';
import Cart_Details from './Cart/Cart_Details.jsx';

const Privacy = () => {
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
                <div style={{display:'flex',alignItem:'center', justifyContent:'center', mamrginLeft:'225px'}}>
                    <img src={Banner} className="Bannar" alt="Bannar" style={{width: isSidebarOpen ? '80%' : '80%',paddingTop:'70px'}}/>
                </div>
                <div className="container pb-5 terms margin-lg margin-md p-3" style={{marginBottom:'150px', fontFamily:'Muli,sans-serif'}}>
                    <Typography variant="h2" component="h2">Privacy Policy</Typography>
                    <Typography variant="body1" component="p" sx={body1Style} >
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket, which sometimes refers to itself as “we” or “us” in this Privacy Policy, is committed to
                        protecting your privacy. This Privacy Policy explains our data collection and processing practices and your options regarding the use of your
                        personal data. If you have any requests or questions concerning your personal information, please contact us at <a href="mailto:info@dhakagro.com">info@dhakagro.com</a>
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Please be advised that Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket’s practices with respect to data collected and used by Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket in connection
                        with this website and each other Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket website with links to this policy are governed by this online privacy policy (“Privacy Policy”)
                        as amended from time to time, and not by the privacy policy in effect at the time the data was collected. Please review our Privacy Policy regularly.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}><strong>If you have objections to the Privacy Policy, you should immediately discontinue use of the Site and the Products and Services enabled by the Site.</strong></Typography>
                    <Typography variant="h4" component="h4">Information Collected</Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket collects the information which is provided by you on registration, together with information we
                        learn about you from your use of our service, your visits to our web site, and your visits to other sites accessible from our web site. We also collect information about the
                        transactions you undertake, including details of payment cards used.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        We may collect additional information in connection with your participation in any promotional programs
                        offered by Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket, and information you provide when giving us feedback or completing profile forms. We also monitor customer traffic patterns and site usage, which enables us to
                        improve the products and services which Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket and its Members provide. In addition, Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket will access the information retrieved through your use of your Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket Membership Card.
                    </Typography>
                    <Typography variant="h4" component="h4">Use of Your Information and Your Preferences</Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        We will use your information to provide and personalize Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket’s services, to help us improve our service
                        to you, and to make our communications more relevant. For instance, whenever
                        you buy products at your local Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket using your Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket Membership Card, we can automatically add those
                        products to your “favorite products” list for Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket’s online grocery service.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        We will also use your contact details to regularly communicate with you. We may use your information to send
                        you offers and information from Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket, as well as other carefully selected companies which we think may be of interest to you.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        If you wish to discontinue receiving any promotional emails, or notification of any sort via your email, you
                        are suggested to email us to request for the discontinuation of the emails.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket would like to hear your views to help us improve our service. From time to time, we may contact you
                        to solicit your opinions. Again, if you do not wish to be contacted for this purpose,
                        please email us to not being asked about your opinion.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Please note that there may be instances where it may be necessary for us to communicate with you, regardless
                        of your contact preferences, for administrative or operational reasons relating to our service.
                    </Typography>
                    <Typography variant="h4" component="h4">Disclosures of Your Information</Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Your information may be used by Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket, all of its related companies, and all of its Members. We will never
                        pass your personal data to anyone else, except for any successors to our business and the organizations that process data on our behalf. We may also use and disclose information
                        in the aggregate (so that no individual customers are identified) for marketing programs, advertisers, and partners.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket may display targeted advertisements based on personal information. Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket does not provide any
                        individual personal information to the advertiser when you interact with or view a targeted ad. Advertisers (including ad serving companies) may, however, assume that people who interact
                        with, view, or click targeted ads meet the targeting criteria—for example, women ages 18-24 from a particular geographic area.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        We may transfer information about you if Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket is acquired by or merged with another company. In this
                        event, Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket will notify you before information about you is transferred and becomes subject to a different privacy policy by updating this page.
                    </Typography>
                    <Typography variant="h4" component="h4">Legal Disclaimer</Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        We reserve the right to disclose your personally identifiable information as required by law and when believe
                        it is necessary to share information in order to investigate, prevent, or take
                        action regarding illegal activities, suspected fraud, situations involving potential threats to the physical
                        safety of any person, violations of Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket terms of use, or as otherwise required by law.
                    </Typography>
                    <Typography variant="h4" component="h4">Other Web Sites</Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket‘s web site may contain links to other web sites which are outside Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket’s control and are,
                        therefore, not covered by this Privacy Policy. If you access other sites using the
                        links provided, the operators of these sites may collect information from you which will be used by them in
                        accordance with their privacy policy, which may differ from ours.
                    </Typography>
                    <Typography variant="h4" component="h4">Cookies</Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        “Cookies” are small pieces of information sent by a web server to a web browser, which enables the server to
                        collect information from the browser. Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket uses cookies for a number of
                        purposes, for instance to enable us to simplify the logging on process for registered users, to help ensure
                        the security and authenticity of registered users, to provide the mechanisms
                        for online shopping and to enable traffic monitoring.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket uses both session ID cookies and/or persistent cookies. We use session cookies to make it easier for
                        you to navigate our site. A session ID cookie expires when you close your browser.
                        A persistent cookie remains on your hard drive for an extended period of time, unless you remove the cookie
                        in the manner determined by your particular Internet browser. Disabling the cookie
                        function for your Internet browser will restrict the online services you can use at the Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket website.
                    </Typography>
                    <Typography variant="h4" component="h4">Clear Gifs (Web Beacons)</Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        We use clear gifs on our sites from Google Analytics and other 3rd party vendors. This enables us to gauge
                        the effectiveness of our services and marketing programs.
                    </Typography>
                    <Typography variant="h4" component="h4">Security</Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        The security of your personal information is very important to us. When you enter sensitive information (such
                        as a credit card number) on our order forms, we encrypt that information using
                        secure socket layer technology (SSL). Once we receive the data it is immediately re-encrypted prior to
                        storage. By default, payment card data is permanently destroyed within 91 days of submission.
                    </Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket follows generally accepted industry standards to protect the personal information submitted by you,
                        both during transmission and upon Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket’s receipt. No method of transmission
                        over the Internet, or method of electronic storage, is 100% secure. Therefore, while Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket strives to use
                        commercially acceptable means to protect your personal information, we cannot
                        guarantee its absolute security.
                    </Typography>
                    <Typography variant="h4" component="h4">Changes in this Privacy Statement</Typography>
                    <Typography variant="body1" component="p"sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket reserves the right to modify this privacy statement at any time, so please review it frequently. If
                        we make material changes to this policy, we will notify you here.
                    </Typography>
                    </div>
            </div>
            <Footer style={{width: isSidebarOpen ? '86.5%' : '100%', marginLeft: isSidebarOpen ? '13.5%' : '0%',}}/>

        </div>
    );
};

export default Privacy;
