import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceDetails from './ServiceDetails';
import { Link } from 'react-router-dom';

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
       
            <Link to="/login">
            <div className="service-box">
            {
                services.map(service =><ServiceDetails service={service}></ServiceDetails>)
            }
             </div>
            </Link>
       
    </section>
    );
};

export default Services;