class ListableSpot {

  /**
   * @type {RecordableSpot}
   */
  location

  /**
   * @type {FormWasFilled}
   */
  data

  /**
   * @param {FormWasFilled} data
   * @param {RecordableSpot} location
   */
  constructor (data, location) {
    this.data = data
    this.location = location
  }

  getLocation() {
    return this.location
  }

  getData() {
    return this.data
  }
}

export default ListableSpot
