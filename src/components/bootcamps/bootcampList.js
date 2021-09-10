import React, { Component } from 'react'

class BootcampList extends Component {
  render() {
    return (
      <div>
        <h1>Hello Yall</h1>
      </div>
    )
  }
}

export default BootcampList




// import React, { Component } from 'react';
// //import BootcampSummary from '../bootcamps/bootcampSummary';

// export class BootcampList extends Component {
//   render() {
//     return (
//       <div className="bootcamp-list section">
//         {/* <BootcampSummary /> */}
//         <h1>Hello Yall</h1>
//       </div>
//     );
//   }
// }

// export default BootcampList;







// import React, { Component } from 'react';
// import CourseOfferings from '../courseOfferings';
// import { db } from './config/firebase';

// class BootcampList extends Component {
//   state = { 
//     bootcamps: null
//   };


//   componentDidMount(){
//     //console.log('mounted')
//     db.collection('bootcamps')
//     .get()
//     .then( snapshot => {
//       const bootcamps = []
//       snapshot.forEach( doc => {
//         const data = doc.data()
//         bootcamps.push(data)
//       })
//       this.setState({ bootcamps: bootcamps })
//       //console.log(snapshot)
//     })
//     .catch( error => console.log(error))
//   }


//     render() {
//     return (
//       <div className="bootcamp-list section">
//         <div class="row">
//           <div class="col s12 m6">
//             <div class="card purple darken-3">
//               <div class="card-content white-text">
//                 <span class="card-title"></span>
//                   <CourseOfferings />
//               </div>
//               </div>
//             </div>
//           </div>
//       </div>            
//     );
//   }
// }
// export default BootcampList;



