import React, { Component } from 'react'

import LocationContainer from '../../containers/LocationContainer'

class ListSpots extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="list-spots">
        <LocationContainer />
      </div>
    )
  }
}

export default ListSpots
