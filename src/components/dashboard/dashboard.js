import React, { Component } from 'react';
//import Notifications from './notifications';
import BootcampList from '../../config/bootcampList';

class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <BootcampList />
                    <div className="col s12 m5 offset-m1">
                        
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default Dashboard;