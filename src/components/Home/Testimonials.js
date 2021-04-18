import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import TestimonialDetails from './TestimonialDetails';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("https://peaceful-journey-87547.herokuapp.com/reviews")
          .then((res) => res.json())
          .then((data) => setTestimonials(data));
      }, []);
    return (
        <section id="testimonial">
            <div className="title-text">
                <p>TESTIMONIAL</p>
                <h1>What Client Says</h1>
            </div>
            <div className="testimonial-row">
                {
                    testimonials.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                }
            </div>

    </section>

    );
};

export default Testimonials;