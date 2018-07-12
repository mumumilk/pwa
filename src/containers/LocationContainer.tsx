import * as React from 'react'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'

import RecordableCenter from '../model/spots/RecordableCenter'

import { fetchLocation } from '../actions/locationActions'
import { recordCenter } from '../actions/spotActions'

import Loader from '../components/Loader'

interface Location {
 coords: Coordinates
}

interface LocatableContainer {
  recordCenter: Function,
  fetchLocation: Function,
  location: Location
}

class LocationContainer extends React.Component<LocatableContainer> {

  /**
   * @type GoogleMap
   */
  private map: GoogleMap

  constructor(props: any) {
    super(props)

    this.getRef = this.getRef.bind(this)
    this.recordCenter = this.recordCenter.bind(this)
  }

  private getRef(ref: GoogleMap) {
    this.map = ref
  }

  private recordCenter() {
    const { lat, lng } = this.map.getCenter()
    const zoom = this.map.getZoom()

    const center = new RecordableCenter(lat(), lng(), zoom)
    this.props.recordCenter(center)
  }

  public componentDidMount() {
    this.props.fetchLocation()
  }

  public render() {
    return Object.keys(this.props.location).length !== 0
      ? <GoogleMap
          ref={this.getRef}
          onCenterChanged={this.recordCenter}
          defaultZoom={17}
          defaultCenter={{ lat: this.props.location.coords.latitude, lng: this.props.location.coords.longitude }}>

          {this.props.children}
        </ GoogleMap>
      : <Loader text="Carregando mapa" />
  }
}

const mapActionsToProps = (dispatch: any) => ({
  fetchLocation: () => dispatch(fetchLocation()),
  recordCenter: (center: RecordableCenter) => dispatch(recordCenter(center))
})

const mapStateToProps = (state: any) => state

const MapProps = {
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCFD7Qay7_Wzw9JH3NqBMnlPBgRpmi2YDo&v=3.exp',
  loadingElement: <Loader text="Carregando mapa" />,
  containerElement: <div style={{ height: `calc(100vh - 50px)` }} />,
  mapElement: <div style={{ height: `100%` }} />
}

export default compose(
  withProps(MapProps),
  withScriptjs,
  withGoogleMap,
  connect(mapStateToProps, mapActionsToProps)
)(LocationContainer)
