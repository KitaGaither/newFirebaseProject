import React, { Component } from 'react';
import { db } from '../components/bootcamps/config/firebase';


const bootcamps = [
  {name: 'bootstrap'} //change this back to bootstrap
]
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
                <p>{bootcamp.indexOf[3]}</p>
                {/* <p>{bootcamp.id}</p>
                <p>{bootcamp.name}</p>
                <p>b{bootcamp.description}</p>
                <p>{bootcamp.length}</p>
                <p>{bootcamp.description}</p>


                <p>Length of course: {bootcamp.length}</p>
                <p>Price of course: {bootcamp.price}</p> */}

                

              </div>
            )
          })
        }
      </div>
    );
  }
}

export default CourseOfferings;