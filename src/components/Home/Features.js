import React from 'react';
import barber from '../../images/barber-man.jpg';
import './Features.css';

const Features = () => {
    return (
        <section id="feature">
        <div className="title-text">
            <p>FEATURES</p>
            <h1>Why Choose Us</h1>
        </div>
        <div className="feature-box">
            <div className="features">
                <h1>Experienced Staff</h1>
                <div className="features-des">
                    <div className="features-icon">
                        <i className="fa fa-shield"></i>
                    </div>
                    <div className="features-text">
                        <p>Donec eget ultaricies sapi. Sad porttitor,maruis ater lob facilisis, elite sapie eleifend lingula.</p>
                    </div>
                </div>
                <h1>Pre-Booking Online</h1>
                <div className="features-des">
                    <div className="features-icon">
                        <i className="fa fa-check-square-o"></i>
                    </div>
                    <div className="features-text">
                        <p>Donec eget ultaricies sapi. Sad porttitor,maruis ater lob facilisis, elite sapie eleifend lingula.</p>
                    </div>
                </div>
                <h1>Affordable Cost</h1>
                <div className="features-des">
                    <div className="features-icon">
                        <i className="fa fa-inr"></i>
                    </div>
                    <div className="features-text">
                        <p>Donec eget ultaricies sapi. Sad porttitor,maruis ater lob facilisis, elite sapie eleifend lingula.</p>
                    </div>
                </div>
            </div>
            <div className="features-img">
                <img src={barber} />
            </div>
        </div>

    </section>

    );
};

export default Features;