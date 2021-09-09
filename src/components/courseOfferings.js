import React, { Component } from 'react';
import { db, auth } from '../config/firebase';

class CourseOfferings extends Component {
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
        <h1>Bootcamp Courses</h1>
        {
          this.state.bootcamps &&
          this.state.bootcamps.map( bootcamp => {
            return (
              <div>
                <h5>{bootcamp.name}</h5>

                <p>{bootcamp.description}</p>


                <p>Length of course: {bootcamp.length}</p>
                <p>Price of course: {bootcamp.price}</p>

                

              </div>
            )
          })
        }
      </div>
    );
  }
}

export default CourseOfferings;