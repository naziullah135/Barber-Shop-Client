import React from "react";

const ServiceDetails = ({service}) => {
  return (
    <div className="single-service">
      <img src={service.imageURL} />
      <div className="overlay"></div>
      <div className="service-desc">
        <h3>{service.name}</h3>
        <hr />
        <p>
          this is test under description of barber foundation this is test under
          description of barber foundation.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
