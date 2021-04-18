import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import TestimonialDetails from './TestimonialDetails';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
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