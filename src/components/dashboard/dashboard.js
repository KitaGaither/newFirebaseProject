import React, { Component } from 'react';
//import BootcampList from '../bootcamps/bootcampList';
import codingpic from '../bootcamps/images/codingpic.png';


class Dashboard extends Component {
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"></div>
                    <img
                        src = {codingpic}
                        className= "codingpic"
                        alt="pic of empty closing tag"
                    />
                    <div className="col s12 m5 offset-m1"></div>
                </div>
            </div>  
        );
    }
}
    
export default Dashboard;