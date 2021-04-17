import React, { useEffect, useState } from 'react';
import './Services.css';
import pic1 from '../../images/pic-1.jpg';
import pic2 from '../../images/pic-2.jpg';
import pic3 from '../../images/pic-3.jpg';
import pic4 from '../../images/pic-4.jpg';
import ServiceDetails from './ServiceDetails';
import { Link } from 'react-router-dom';

// const serviceData = [
//     {
//         name: 'Hair Styling',
//         img: pic1
//     },
//     {
//         name: 'Beard Trim',
//         img: pic2
//     },
//     {
//         name: 'Hair Cut',
//         img: pic3
//     },
//     {
//         name: 'Dry Shampoo',
//         img: pic4
//     },
// ]

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);
    return (
        <section id="service">
        <div className="title-text">
            <p>SERVICES</p>
            <h1>We Provide Better</h1>
        </div>
        <div className="service-box d-flex">
            <Link to="/login">
            {
                services.map(service =><ServiceDetails service={service}></ServiceDetails>)
            }
            </Link>
        </div>
    </section>
    );
};

export default Services;