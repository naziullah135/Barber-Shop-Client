import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                    <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h1>This is dashboard</h1>
            </div>
            
        </div>
    );
};

export default Dashboard;