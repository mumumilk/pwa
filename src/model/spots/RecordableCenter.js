class RecordableCenter {

  /**
   * @type number
   */
  latitude

  /**
   * @type number
   */
  longitude

  /**
   * @type number
   */
  zoom

  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} zoom
   */
  constructor(latitude, longitude, zoom) {
    this.longitude = longitude
    this.latitude = latitude
    this.zoom = zoom
  }

  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} zoom
   */
  static build(latitude, longitude, zoom) {
    return new RecordableCenter(latitude, longitude, zoom)
  }

  /**
   * @returns {number}
   */
  getLatitude() {
    return this.latitude
  }

  /**
   * @returns {number}
   */
  getLongitude() {
    return this.longitude
  }

  /**
   * @returns {number}
   */
  getZoom() {
    return this.zoom
  }
}

export default RecordableCenter
