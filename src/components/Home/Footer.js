import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section id="footer">
        <div class="title-text">
            <p>CONTACT</p>
            <h1>Visit Shop Today</h1>
        </div>
        <div class="footer-row">
            <div class="footer-left">
                <h1>Opening Hours</h1>
                <p><i class="fa fa-clock-o"></i>Monday to Friday - 9am to 9pm</p>
                <p><i class="fa fa-clock-o"></i>Saturday and Sunday - 8am to 11pm</p>
            </div>
            <div class="footer-right">
                <h1>Get In Touch</h1>
                <p>#30 abc Colony,Rupayan city<i class="fa fa-map-marker"></i></p>
                <p>info@barbershop.<i class="fa fa-paper-plane"></i></p>
                <p>+01 1239089098<i class="fa fa-phone"></i></p>
            </div>
        </div>
        <div class="social-links">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-youtube-play"></i>
            <p>Copyright Naziullah Shawan</p>
        </div>
    </section>
    );
};

export default Footer;