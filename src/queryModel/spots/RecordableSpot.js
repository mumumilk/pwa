class RecordableSpot {

  latitude

  longitude

  zoom

  /**
   * @param latitude
   * @param longitude
   * @param zoom
   */
  constructor(
    latitude,
    longitude,
    zoom
  ) {
    this.longitude = longitude
    this.latitude = latitude
    this.zoom = zoom
  }

  getLatitude() {
    return this.latitude
  }

  getLongitude() {
    return this.longitude
  }

  getZoom() {
    return this.zoom
  }
}

export default RecordableSpot
