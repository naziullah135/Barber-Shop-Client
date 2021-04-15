import React from 'react';
import './Services.css';
import pic1 from '../../images/pic-1.jpg';
import pic2 from '../../images/pic-2.jpg';
import pic3 from '../../images/pic-3.jpg';
import pic4 from '../../images/pic-4.jpg';

const Services = () => {
    return (
        <section id="service">
        <div class="title-text">
            <p>SERVICES</p>
            <h1>We Provide Better</h1>
        </div>
        <div class="service-box">
            <div class="single-service">
                <img src={pic1} />
                <div class="overlay"></div>
                <div class="service-desc">
                    <h3>Hair Styling</h3>
                    <hr/>
                    <p>this is test under description of barber foundation this is test under description of barber foundation.</p>
                </div>
            </div>
            <div class="single-service">
                <img src={pic2} />
                <div class="overlay"></div>
                <div class="service-desc">
                    <h3>Beard Trim</h3>
                    <hr/>
                    <p>this is test under description of barber foundation this is test under description of barber foundation.</p>
                </div>
            </div>
            <div class="single-service">
                <img src={pic3} />
                <div class="overlay"></div>
                <div class="service-desc">
                    <h3>Hair Cut</h3>
                    <hr/>
                    <p>this is test under description of barber foundation this is test under description of barber foundation.</p>
                </div>
            </div>
            <div class="single-service">
                <img src={pic4} />
                <div class="overlay"></div>
                <div class="service-desc">
                    <h3>Dry Shapoo</h3>
                    <hr/>
                    <p>this is test under description of barber foundation this is test under description of barber foundation.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Services;