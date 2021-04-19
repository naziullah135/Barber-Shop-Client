import React, { useEffect, useState } from 'react';
import ManageService from './ManageService';
import Sidebar from './Sidebar';

const ManageServices = () => {
    const [services,setServices] = useState([]);
    
  useEffect(() => {
    fetch("https://peaceful-journey-87547.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div className="d-flex">
          <Sidebar />
        <div className="m-5">
          <h2>Manage Services</h2>
          <br/>
          <table style={{width:"800px"}}>
            <tr>
              <th>Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {services.map((service) => (
            <ManageService service={service}></ManageService>
          ))}
          </table>
        </div>
      </div>
    );
  };

export default ManageServices;