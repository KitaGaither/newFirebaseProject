import React, { Component } from 'react';
import { db } from '../config/firebase';


const bootcamps = [
  {name: 'bootcamps'}
]
class Bootcamps extends Component {
  state = { 
    bootcamps: null
  };
  componentDidMount(){
    //console.log('mounted')
    db.collection('bootcamps')
    .get()
    .then( snapshot => {
      const bootcamps = snapshot.docs.map( doc => doc.data());
      this.setState({ bootcamps: bootcamps })
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
            
              //function onClickHandler() {}
              <div onClick={ ()=>{window.location.href="/bootcamps/bootcampdetails/"} } class="container col s12 m6">
                <div className="card z-depth-0 blue lighten-3 bootcamp-summary">
                <div className="card-content white-text text-darken-3">
                {/* <p>{bootcamps.bootcamps}</p> */}
                <h5>{bootcamp.name}</h5>
                {/* <button onclick="location.localhost:3000/bootcampdetails.com">Bootcamp Details</button> */}
                {/* <p>{bootcamp.description}</p>
                <p>Length of course: {bootcamp.length}</p>
                <p>Price of course: {bootcamp.price}</p> */}
              </div>
              </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Bootcamps;