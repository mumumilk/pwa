class RecordableCenter {

  /**
   * @type number
   */
  private readonly latitude: number

  /**
   * @type number
   */
  private readonly longitude: number

  /**
   * @type number
   */
  private readonly zoom: number

  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} zoom
   */
  constructor(
    latitude: number,
    longitude: number,
    zoom: number
  ) {
    this.longitude = longitude
    this.latitude = latitude
    this.zoom = zoom
  }

  /**
   * @returns {number}
   */
  getLatitude(): number {
    return this.latitude
  }

  /**
   * @returns {number}
   */
  getLongitude(): number {
    return this.longitude
  }

  /**
   * @returns {number}
   */
  getZoom(): number {
    return this.zoom
  }
}

export default RecordableCenter
