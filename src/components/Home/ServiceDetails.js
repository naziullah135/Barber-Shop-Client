import React from "react";
import { Link } from "react-router-dom";

const ServiceDetails = (props) => {
  const {name,imageURL,price,_id} = props.service;
  return (
    <Link to={`/dashboard/${_id}`}>
      <div className=" d-flex single-service">
      <img src={imageURL} />
      <div className="overlay"></div>
      <div className="service-desc">
        <h3>{name}</h3>
        <hr />
        <p>
          this is test under description of barber foundation this is test under
          description of barber foundation.
        </p>
        <h3>Cost: {price}</h3>
      </div>
    </div>
    </Link>
  );
};

export default ServiceDetails;
