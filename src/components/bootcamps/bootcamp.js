import React, { Component } from 'react';
import { db } from '../config/firebase';
import BootcampFind from './bootcampFind';


const bootcamps = [
  {name: 'bootcamps'}
]
class Bootcamp extends Component {
  state = { 
    bootcamps: null
  };

  componentDidMount(){
    //console.log('mounted')
    db.collection('bootcamps')
    .get()
    .then( snapshot => {
      const bootcamps = snapshot.docs.map( doc => doc.data());
      this.setState({ bootcamps: bootcamps });
      //console.log(snapshot)
    })
    .catch( error => console.log(error))
  }
    render() {
    return (
      <div className="courseOfferings">
        {
          this.state.bootcamps &&
          this.state.bootcamps.map( bootcamp => {
            return (
              
              <div onClick={ ()=>{window.location.href="/bootcamps/" + bootcamp.id} } class="container col s12 m6">
                <div className="card z-depth-0 blue lighten-3 bootcamp-summary">
                <div className="card-content white-text text-darken-3">
                <h5>{bootcamp.name}</h5>
                
              </div>
              </div>
              </div>
              
            )
            
          })
          
        }
        <BootcampFind />
      </div>
      
    );
  }
}

export default Bootcamp;

