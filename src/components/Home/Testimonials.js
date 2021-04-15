import React from 'react';
import './Testimonials.css';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';

const Testimonials = () => {
    return (
        <section id="testimonial">
            <div class="title-text">
                <p>TESTIMONIAL</p>
                <h1>What Client Says</h1>
            </div>
            <div class="testimonial-row">
                <div class="testimonial-col">
                    <div class="user">
                        <img src={img1} />
                        <div class="user-info">
                            <h4>Ken Norman <i class="fa fa-twitter"></i></h4>
                            <small>@kennorman</small>
                        </div>
                    </div>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A perferendis aperiam temporibus nobis deserunt nihil dignissimos ducimus repellendus ipsum repellat ab, similique suscipit iure praesentium obcaecati minus odio rerum sapiente?</p>
                </div>
                <div class="testimonial-col">
                    <div class="user">
                        <img src={img2} />
                        <div class="user-info">
                            <h4>Liara Karian<i class="fa fa-twitter"></i></h4>
                            <small>@Liarakarian</small>
                        </div>
                    </div>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A perferendis aperiam temporibus nobis deserunt nihil dignissimos ducimus repellendus ipsum repellat.</p>
                </div>
                <div class="testimonial-col">
                    <div class="user">
                        <img src={img3} />
                        <div class="user-info">
                            <h4>Ricky Danial<i class="fa fa-twitter"></i></h4>
                            <small>@rickydanial</small>
                        </div>
                    </div>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A perferendis aperiam temporibus nobis deserunt nihil dignissimos ducimus repellendus ipsum repellat ab, similique suscipit iure praesentium obcaecati minus odio rerum sapiente?</p>
                </div>
            </div>

    </section>

    );
};

export default Testimonials;