import React from 'react';
import Book from './Book';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                    <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <Book />
            </div>
            
        </div>
    );
};

export default Dashboard;