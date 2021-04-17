import React from 'react';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div className="testimonial-col">
        <div className="user">
            <img src={testimonial.img} />
            <div className="user-info">
                <h4>{testimonial.name} <i className="fa fa-twitter"></i></h4>
                <small>{testimonial.user}</small>
            </div>
        </div>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A perferendis aperiam temporibus nobis deserunt nihil dignissimos ducimus repellendus ipsum repellat ab, similique suscipit iure praesentium obcaecati minus odio rerum sapiente?</p>
    </div>
    );
};

export default TestimonialDetails;