import React from 'react';
import './Footer.css'
import {assets} from "../../assets/frontend_assets/assets.js";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ducimus eum harum magni
                        quaerat qui quisquam, repellendus voluptatibus. Distinctio, provident.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="link-facebook"/>
                        <img src={assets.twitter_icon} alt="link-twitter"/>
                        <img src={assets.linkedin_icon} alt="link-linkedin"/>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+84-869-098-696</li>
                        <li>tnduc27@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className={'footer-copyright'}>Copyright © Tomato.com - All Right Reserved</p>
        </div>
    );
};

export default Footer;
