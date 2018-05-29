import React, { Component } from 'react'

import LocationContainer from '../containers/LocationContainer'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <LocationContainer />
      </div>
    )
  }
}

export default Home
