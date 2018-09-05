import React, { Component } from 'react'

import { withHandlers } from 'recompose'

import Button from '../../../components/Button'

import RecordSpotData from './RecordSpotData'
import RecordSpotImages from './RecordSpotImages'

import Container from '../../../Container'
import EventType from '../../../EventType'

import LocationContainer from '../../../containers/LocationContainer'

class NewSpot extends Component {
  state = {
    isRecordSpotDataVisible: false,
    isRecordSpotImagesVisible: false
  }

  constructor(props) {
    super(props)

    this.formDataWasSubmit = this.formDataWasSubmit.bind(this)
    this.recordSpotData = this.recordSpotData.bind(this)
    this.imagesWasSubmit = this.imagesWasSubmit.bind(this)
  }

  recordSpotData() {
    Container.get('event').dispatch(EventType.CENTER_WAS_RECORDED)

    this.setState({
      isRecordSpotImagesVisible: true
    })
  }

  imagesWasSubmit() {
    this.setState({
      isRecordSpotDataVisible: true,
      isRecordSpotImagesVisible: false
    })
  }

  formDataWasSubmit(event) {
    event.preventDefault()

    const {
      name,
      street,
      longboard,
      free,
      upload
    } = event.target

    const data = {
      name: name.value,
      hasFree: !!free.checked,
      images: null,
      modalities: {
        street: street.checked,
        longboard: longboard.checked,
      }
    }

    this.props.recordPossibleSpot(data)
  }

  render() {
    const {
      isRecordSpotDataVisible,
      isRecordSpotImagesVisible
    } = this.state

    return (
      <div className="new-spot">
        {isRecordSpotImagesVisible && <RecordSpotImages onClick={this.imagesWasSubmit} />}
        {isRecordSpotDataVisible && <RecordSpotData onSubmit={this.formDataWasSubmit} />}

        <i className="icon--marker new-spot__marker" />

        <Button
          full
          black
          onClick={this.recordSpotData}
          className="new-spot__button"
          text="Confirmar essa posição" />

        <LocationContainer
          event={this.event}
          className="new-spot__location" />
      </div>
    )
  }
}

const mapHandlers = ({
  recordPossibleSpot: props => data => {
    return props.firebase.push('analyze', {
      type: 'spots',
      location: props.spot,
      uid: props.auth.id,
      data
    })
  }
})

export default withHandlers(mapHandlers)(NewSpot)
