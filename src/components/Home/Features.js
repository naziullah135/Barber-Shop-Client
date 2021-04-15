import React from 'react';
import barber from '../../images/barber-man.jpg';
import './Features.css';

const Features = () => {
    return (
        <section id="feature">
        <div class="title-text">
            <p>FEATURES</p>
            <h1>Why Choose Us</h1>
        </div>
        <div class="feature-box">
            <div class="features">
                <h1>Experienced Staff</h1>
                <div class="features-des">
                    <div class="features-icon">
                        <i class="fa fa-shield"></i>
                    </div>
                    <div class="features-text">
                        <p>Donec eget ultaricies sapi. Sad porttitor,maruis ater lob facilisis, elite sapie eleifend lingula.</p>
                    </div>
                </div>
                <h1>Pre-Booking Online</h1>
                <div class="features-des">
                    <div class="features-icon">
                        <i class="fa fa-check-square-o"></i>
                    </div>
                    <div class="features-text">
                        <p>Donec eget ultaricies sapi. Sad porttitor,maruis ater lob facilisis, elite sapie eleifend lingula.</p>
                    </div>
                </div>
                <h1>Affordable Cost</h1>
                <div class="features-des">
                    <div class="features-icon">
                        <i class="fa fa-inr"></i>
                    </div>
                    <div class="features-text">
                        <p>Donec eget ultaricies sapi. Sad porttitor,maruis ater lob facilisis, elite sapie eleifend lingula.</p>
                    </div>
                </div>
            </div>
            <div class="features-img">
                <img src={barber} />
            </div>
        </div>

    </section>

    );
};

export default Features;