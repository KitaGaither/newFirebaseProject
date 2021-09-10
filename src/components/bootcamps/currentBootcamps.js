import React, { Component } from 'react'
import BootcampList from '../bootcampList'

class CurrentBootcamps extends Component {
  render() {
    return (
      <div>
        <h1 >Current Bootcamps</h1>
        <BootcampList />
      </div>
    )
  }
}

export default CurrentBootcamps;

