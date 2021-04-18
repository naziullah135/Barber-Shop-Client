import React from 'react';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div className="testimonial-col">
        <div className="user">
            <img src={testimonial.imageURL} />
            <div className="user-info">
                <h4>{testimonial.name} <i className="fa fa-twitter"></i></h4>
                <small>{testimonial.userName}</small>
            </div>
        </div>
    <p>{testimonial.review}</p>
    </div>
    );
};

export default TestimonialDetails;