import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    const{name,_id} = services;

    useEffect(() => {
        fetch("https://peaceful-journey-87547.herokuapp.com/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);
    return (
        <section id="service">
        <div className="title-text">
            <p>SERVICES</p>
            <h1>We Provide Better</h1>
        </div>
            <div className="service-box">
            {
                services.map(service =><ServiceDetails service={service}></ServiceDetails>)
            }
            </div>
    </section>
    );
};

export default Services;