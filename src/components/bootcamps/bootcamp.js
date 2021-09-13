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
    // set boolean based on input field name (will be bootcamp id)
    // each bootcamp card will have it's own piece of state
    // you can also id of a bootcamp in place of name
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

    if(this.state.bootcamp){
      return (
          <div className="courseOfferings">
            {
              // destructuring to pull keys off of the object
              this.state.bootcamps.map( ({name, length, price, description, bootcamps, id}) => {
                return (
                    <Link to={`/bootcamps/${id}`}>
                      {/* did not look how you are showing or closing but you can use this boolean*/}
                      <div className={`container col s12 m6 ${this.state[id] === true && 'collapse'}`}>
                        <div className="card z-depth-0 blue lighten-3 bootcamp-summary">
                          <div className="card-content white-text text-darken-3">
                             {/*<p>{bootcamps}</p>*/}
                            <h5>{name}</h5>
                            <Link class='btn' to={`/bootcamps/${id}`}>
                              Bootcamp Details
                            </Link>
                            <p>{description}</p>
                            <p>Length of course: {length}</p>
                            <p>Price of course: {price}</p>
                          </div>
                        </div>
                        <button onClick={()=> this.handleBootcampDetailsChange(id)}>Toggle Open</button>
                      </div>
                    </Link>
                )
              })
            }
          </div>
      );
    }else{
      return <p>Loading...</p>
    }

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
