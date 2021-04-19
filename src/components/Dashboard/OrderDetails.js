import React from 'react';

const OrderDetails = ({order}) => {
    return (
        <div className="col-md-6">
            <div className="card mb-3" style={{maxWidth:"450px"}}>
            <div className="row">
              <div className="col-md-5">
                <img style={{width:'100%',height:'100%'}} src={order.imageURL} alt="..." />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="card-title">{order.name}</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, vero.
                  </p>
                  <h3 className="card-title">{order.price}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default OrderDetails;