import React, { Component } from 'react';
import { db } from '../config/firebase';
import {Link} from 'react-router-dom';


const bootcamps = [
  {name: 'bootcamps'}
]
class Bootcamp extends Component {
  state = { 
    bootcamps: null
  };

  handleBootcampDetailsChange(id) {
    // each bootcamp card will have it's own piece of state
    if(this.state[id] !== undefined){
      // set previous state to opposite of itself, if false set to true and vice versa
      this.setState( { ...this.state, [id]: !this.state[id]});
    }else{
      // this is the first time we are attempting to interact with a particular bootcamp
      this.setState({...this.state, [id]: true});
    }
  }

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

export default Bootcamp;

/* GENERAL COMMENTS
*
* I would recommend breaking this up into two components. First, you have the main bootcamp dashboard that renders all bootcamps.
* This bootcamp component would then represent only ONE bootcamp. You would store the state of all bootcamp components in the "main bootcamp component"
*
* You also need a new ShowBootcamp route/component that shows details of component. I've included an example of how to use the react-router-dom Link element.
* You will use this Link element to show details using page. You already were on the right path, now these links will trigger line 23 in app JS
*
* Always use the Link component instead of window.location when using react-router-dom
*
* */
