import FilledForm from "./FilledForm";
import RecordableCenter from "./RecordableCenter";

class ListableSpot {

  /**
   * @type {RecordableCenter}
   */
  location

  /**
   * @type {FilledForm}
   */
  data

  /**
   * @param {FilledForm} data
   * @param {RecordableCenter} location
   */
  constructor (data, location) {
    this.data = data
    this.location = location
  }


  /**
   * @param {FilledForm} data
   * @param {RecordableCenter} location
   */
  static build(data, location) {
    return new ListableSpot(data, location)
  }

  /**
   * @returns {RecordableCenter}
   */
  getLocation() {
    return this.location
  }

  /**
   * @returns {FilledForm}
   */
  getData() {
    return this.data
  }
}

export default ListableSpot
