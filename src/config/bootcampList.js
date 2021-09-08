import React, { Component } from 'react';
import CourseOfferings from '../components/courseOfferings';
import { db } from './firebase';

// const BootcampList = () => {
//     return (
//         <div className="bootcamp-list section">
//             <div class="row">
//               <div class="col s12 m6">
//                 <div class="card purple darken-3">
//                   <div class="card-content white-text">
//                     <span class="card-title">Bootstrap</span>
//                     <Card />
//                   </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//     )
// }

// export default BootcampList;


class BootcampList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = { 
    bootcamps: null
  };


  componentDidMount(){
    //console.log('mounted')
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
      <div className="bootcamp-list section">
        <div class="row">
          <div class="col s12 m6">
            <div class="card purple darken-3">
              <div class="card-content white-text">
                <span class="card-title">Bootstrap</span>
                  <CourseOfferings />
              </div>
              </div>
            </div>
          </div>
      </div>            
    );
  }
}
export default BootcampList;