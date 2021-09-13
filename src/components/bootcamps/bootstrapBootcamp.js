import React, { Component } from 'react'
import { db } from '../config/firebase';

const bootcamps = [
    {name: 'bootcamps'}
  ]

class BootstrapBootcamp extends Component {
    render() {
        return (
            <div>
                <div onClick={ ()=>{window.location.href="/bootcamps/bootcampdetails/"} } class="container col s12 m6">
                    <div className="card z-depth-0 blue lighten-3 bootcamp-summary">
                    <div className="card-content white-text text-darken-3">
                    {/* <p>{bootcamps.bootcamps}</p> */}
                    <h5>{bootcamps.name}</h5>
                    {/* <button onclick="location.localhost:3000/bootcampdetails.com">Bootcamp Details</button> */}
                    {/* <p>{bootcamp.description}</p>
                    <p>Length of course: {bootcamp.length}</p>
                    <p>Price of course: {bootcamp.price}</p> */}
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapBootcamp;







// function BootstrapBootcamp() {
//     return(
//         <React.Fragment>
//             <h1 class="center-align">Bootstrap Bootcamp</h1>
//             <p>Bootstrap is a giant collection of handy, reusable bits of code written in HTML, CSS, and JavaScript. It’s a front-end development framework to quickly build fully responsive websites.</p>
//         </React.Fragment>
//     );
// }

// export default BootstrapBootcamp;


