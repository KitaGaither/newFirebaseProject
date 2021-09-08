import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
//import { db, auth } from './config/firebase';
import Dashboard from './components/dashboard/dashboard';
import BootcampDetails from './components/bootcamps/bootcampDetails';
import BootcampList from './config/bootcampList';
//import CourseOfferings from './components/courseOfferings';

class App extends Component {
  // state = { 
  //   bootcamps: null
  // };
  // componentDidMount(){
  //   console.log('mounted')
  //   db.collection('bootcamps')
  //   .get()
  //   .then( snapshot => {
  //     const bootcamps = []
  //     snapshot.forEach( doc => {
  //       const data = doc.data()
  //       bootcamps.push(data)
  //     })
  //     this.setState({ bootcamps: bootcamps })
  //     //console.log(snapshot)
  //   })
  //   .catch( error => console.log(error))
  // }
    render() {
    return (
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <h3>Bootcamp Courses</h3>
              {/* {
                this.state.bootcamps &&
                this.state.bootcamps.map( bootcamp => {
                  return (
                    <div>
                      <h5>Course</h5>
                      <p>{bootcamp.name}</p>

                      <p>{bootcamp.description}</p>


                      <p>Length of course: {bootcamp.length}</p>
                      <p>Price of course: {bootcamp.cost}</p>
                    </div>
                  )
                })
              } */}
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='bootcamp/:id' component={BootcampList} />
                <Route path='bootcamp/:id' component={BootcampDetails} />
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
