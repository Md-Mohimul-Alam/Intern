import React, { useState } from 'react';
import './css/dashboard.css';
import Header from './Header/Header';
import Sidebar from './Sidebar.jsx';
import Banner from './static/img/banner-desktop.jpg';
import Footer from './Footer/footer.jsx';
import { Typography, Link } from '@mui/material';
import Cart_Details from './Cart/Cart_Details.jsx';

const Term = () => {
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
                <div className="container pb-5 terms margin-lg margin-md p-3" style={{marginBottom:'150px'}}>
                    <Typography variant="h1" component="h1" className="pt-0">
                        Terms and Conditions
                    </Typography>
                    <Typography variant="h2" component="h2" className="pt-1">
                        Acceptance of Terms of Use
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Method
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        These Terms of Use govern your use of the online and mobile website (the “Website” or, collectively, the "Websites"), and the tablet, smartphone and other applications and platforms, including but not limited to the Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket web platform (
                        <Link href="https://dhakagro.com">https://dhakagro.com</Link>
                        ), available through third-party "Application" or, collectively, the "Applications", owned and/or operated by Cimplux Corp. and its affiliates. If you do not agree to these Terms of Use, you should not use the Websites or Applications. These Terms of Use are an ongoing contract between you and Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket and apply to your use of the Websites or Applications. These Terms of Use affect your rights and you should read them carefully.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Privacy and Personal Information
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket is committed to protecting the privacy of the personal information you provide us on our Websites and Applications. Any information submitted on the Websites and Applications is subject to our Privacy Policy, the terms of which are incorporated herein. Please review our Privacy Policy to understand our practices.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Your Account
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        If you use the Websites or Applications, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, smartphone or tablet, and you agree to accept responsibility for all activities that occur under your account or password. The Websites and Applications sell products to adults, who can purchase with a credit card. If you are under 18, you may use the Websites and Applications only with involvement of a parent or guardian. Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket and its affiliates reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in their sole discretion.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Websites and Applications
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        These Terms of Use apply to all users of the Websites and Applications. The Websites and Applications may contain links to third-party websites or applications, or may be made available through third-party devices, that are not owned or controlled by Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket. Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites, applications or devices. By using the Websites or Applications, you expressly relieve Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket from any and all liability arising from your use of any third-party website, application or device.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Website/Application Access
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket hereby grants you permission to use the Websites and Applications as set forth in this Terms of Use, provided that: (i) your use of the Websites and Applications as permitted are solely for your personal, noncommercial use; (ii) you will not copy or distribute any part of the Websites or Applications in any medium without Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket prior written authorization; (iii) you will not alter or modify any part of the Websites or Applications; and (iv) you will comply with the terms and conditions of these Terms of Use.
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        In order to access some features of the Websites or Applications, you will have to create an account. You may never use another's account without permission. When creating your account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. You must notify Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket immediately of any breach of security or unauthorized use of your account.
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        You agree not to use or launch any automated system, including without limitation, "robots," "spiders," "offline readers," etc., that accesses the Websites or Applications in a manner that sends more request messages to the Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket servers in a given period of time than a human can reasonably produce in the same period by using a convention on-line web browser.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Intellectual Property Rights
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        The content on the Websites and Applications, except all User Submissions (as defined below), including without limitation, the text, software, scripts, graphics, photos, sounds, music, videos, interactive features and the like ("Content") and the trademarks, service marks and logos contained therein ("Marks"), are owned by or licensed to Cimplux Corp., subject to copyright and other intellectual property rights under United States and foreign laws and international conventions. If you download or print a copy of the Content for personal use, you must retain all copyright and other proprietary notices contained therein. You agree not to circumvent, disable or otherwise interfere with security-related features of the Websites and Applications.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Warranty Disclaimer
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        YOU AGREE THAT YOUR USE OF DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET WEBSITE SHALL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE WEBSITE AND YOUR USE THEREOF. DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THIS SITE'S CONTENT OR THE CONTENT OF ANY SITES LINKED TO THIS SITE AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR WEBSITE, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR WEBSITE, (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH OUR WEBSITE BY ANY THIRD PARTY, AND/OR (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET WEBSITE. DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET WEBSITE OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        In addition to the terms set forth above neither, Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket, nor its affiliates, information providers or content partners shall be liable regardless of the cause or duration, for any errors, inaccuracies, omissions, or other defects in, or untimeliness or unauthenticity of the information contained within the Websites or Applications, or for any delay or interruption in the transmission thereof to the user, or for any claims or losses arising therefrom or occasioned thereby. None of the foregoing parties shall be liable for any third-party claims or losses of any nature, including, but not limited to, lost profits, punitive or consequential damages. Neither, Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket nor its affiliates, information providers or content providers warrant or guarantee the timeliness, sequence, accuracy or completeness of this information. Additionally, there are no warranties as to the results obtained from the use of the information.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Limitation of Liability
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        UNDER NO CIRCUMSTANCES SHALL DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR WEBSITE, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR WEBSITE, (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR WEBSITE BY ANY THIRD PARTY, AND/OR (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET WEBSITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        YOU SPECIFICALLY ACKNOWLEDGE THAT DHAKA SUPERMARKET AND HALAL MEAT | NO 1 ASIAN SUPERMARKET SHALL NOT BE LIABLE FOR USER SUBMISSIONS OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU.
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        The Website and Applications are controlled and offered by Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket from its facilities in the United States of America. Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket makes no representations that the Websites or Applications are appropriate or available for use in other locations. Those who access or use the Websites or Applications from other jurisdictions do so at their own volition and are responsible for compliance with local law.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Indemnity
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        You agree to defend, indemnify and hold harmless Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket, its affiliates, officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Websites or Applications; (ii) your violation of any term of these Terms of Use; (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that one of your User Submissions caused damage to a third party. This defense and indemnification obligation will survive these Terms of Use and your use of the Websites or Applications.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Ability to Accept Terms of Use
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        You affirm that you are either more than 18 years of age, or an emancipated minor, or possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms of Use, and to abide by and comply with these Terms of Use.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Assignment
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        These Terms of Use, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket without restriction.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        General
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        You agree that: (i) the Websites and Applications shall be deemed solely based in New Jersey; and (ii) the Websites and Applications shall be deemed a passive website that does not give rise to personal jurisdiction over Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket, either specific or general, in jurisdictions other than New Jersey. These Terms of Use shall be governed by the internal substantive laws of the State of New Jersey, without respect to its conflict of laws principles. Any claim or dispute between you and Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket that arises in whole or in part from the Websites or Applications shall be decided exclusively by a court of competent jurisdiction located in the State of New Jersey. These Terms of Use, together with the Privacy Policy and any other legal notices published by Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket on the Websites or Applications, shall constitute the entire agreement between you and Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket concerning the Websites or Applications. If any provision of these Terms of Use is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect. No waiver of any term of these Terms of Use shall be deemed a further or continuing waiver of such term or any other term, and Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket's failure to assert any right or provision under these Terms of Use shall not constitute a waiver of such right or provision.
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        Dhaka Supermarket and Halal Meat | No 1 Asian Supermarket reserves the right to amend these Terms of Use at any time and without notice, and it is your responsibility to review these Terms of Use for any changes. Your use of the Websites or Applications following any amendment of these Terms of Use will signify your assent to and acceptance of its revised terms.
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Contact Us
                    </Typography>
                    <Typography variant="body1" component="p" sx={body1Style}>
                        If you have any questions or concerns about these Terms of Use or the Websites or Applications, please contact us at: 
                        <Link href="mailto:contact@dhakagro.com">contact@dhakagro.com</Link>.
                    </Typography>
                    </div>

            </div>
            <Footer style={{width: isSidebarOpen ? '86.5%' : '100%', marginLeft: isSidebarOpen ? '13.5%' : '0%',}}/>

        </div>
    );
};

export default Term;
