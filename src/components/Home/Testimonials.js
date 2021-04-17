import React from 'react';
import './Testimonials.css';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';
import TestimonialDetails from './TestimonialDetails';

const testimonialData = [
    {
        name: 'Ken Norman',
        img: img1,
        userName: '@kennorman',
    },
    {
        name: 'Liara Karian',
        img: img2,
        userName: '@Liarakarian',
    },
    {
        name: 'Ken Norman',
        img: img3,
        userName: '@rickydania',
    },
]

const Testimonials = () => {
    return (
        <section id="testimonial">
            <div className="title-text">
                <p>TESTIMONIAL</p>
                <h1>What Client Says</h1>
            </div>
            <div className="testimonial-row">
                {
                    testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                }
            </div>

    </section>

    );
};

export default Testimonials;