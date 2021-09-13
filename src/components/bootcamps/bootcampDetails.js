import React, { Component } from 'react';
import { db } from '../config/firebase';
//import CreateBootcamp from './createBootcamp';


const bootcamps = [
  {name: 'bootcamps'} 
]
class BootcampDetails extends Component {
  constructor(props) {
    super(props);
    //debugger
    this.state = {
      bootcampId: props.match.params.id,
      bootcamps: null
    }
  }
  state = { 
    bootcamps: null
  
  };
  componentDidMount(){
    console.log('mounted')
    db.collection('bootcamps')
    .get()
    .then( snapshot => {
      const bootcamps = []
      snapshot.forEach( doc => {
        const data = doc.data()
        bootcamps.push(data)
      })
      const bootcamp = bootcamps.find(bootcamp => String(bootcamp.id) === this.state.bootcampId)

      this.setState({ bootcamp, bootcamps: bootcamps })
      //debugger
      //console.log(snapshot)
    })
    .catch( error => console.log(error))
  }
  render() {
    return (
      <div className="courseOfferings">
        {
          // this.state.bootcamps &&
          // this.state.bootcamps.map( bootcamp => {
             this.state.bootcamp && (
              <div class="container col s12 m6">
                <div className="card z-depth-0 blue lighten-3 bootcamp-summary">
                <div className="card-content white-text text-darken-3">
                {/* <p>{bootcamps.bootcamps}</p> */}
                <h5>{this.state.bootcamp.name}</h5>
                <p>{this.state.bootcamp.description}</p>
                <p>Length of course: {this.state.bootcamp.length}</p>
                <p>Price of course: {this.state.bootcamp.price}</p>
              </div>
              </div>
              </div>         
            )
          //})
        }
      </div>
    );
  }
}

export default BootcampDetails;
