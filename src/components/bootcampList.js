import React, { Component } from 'react';
import { db } from '../components/bootcamps/config/firebase';


const bootcamps = [
  {name: 'bootcamps'} //change this back to bootstrap
]
class BootcampList extends Component {
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
                <div className="card z-depth-0 bootcamp-summary">
                <div className="card-content gray-text text-darken-3">
                {/* <p>{bootcamps.bootcamps}</p> */}
                <h5>{bootcamp.name}</h5>
                <p>{bootcamp.description}</p>
                <p>Length of course: {bootcamp.length}</p>
                <p>Price of course: {bootcamp.price}</p>
              </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default BootcampList;