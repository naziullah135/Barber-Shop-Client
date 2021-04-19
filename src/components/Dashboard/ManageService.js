import React from 'react';
import deleteIcon from '../../images/delete.png';
import editIcon from '../../images/edit.png';
import './ManageServices.css';


const ManageService = (props) => {
    const {name,price,imageURL,_id} = props.service;

    const deleteService = (id) => {
        fetch(`https://peaceful-journey-87547.herokuapp.com/deleteService/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            alert('Deleted successfully.');
          });
      };
    return (
            <tr>
              <td><img style={{width:"60px"}} src={imageURL} alt=""/></td>
              <td>{name}</td>
              <td>{price}</td>
              <td>
                <img style={{width:"40px"}} src={editIcon} alt=""/>
                &nbsp;
                <button className="delete-btn" onClick={() => deleteService(_id)}>
                  <img style={{width:"40px"}} src={deleteIcon} alt=""/>
                </button>
              </td>
            </tr>
    );
};

export default ManageService;