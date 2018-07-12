import FilledForm from "./FilledForm";
import RecordableCenter from "./RecordableCenter";

class ListableSpot {

  /**
   * @type {RecordableCenter}
   */
  private readonly location: RecordableCenter

  /**
   * @type {FilledForm}
   */
  private readonly data: FilledForm

  /**
   * @param {FilledForm} data
   * @param {RecordableCenter} location
   */
  constructor (data: FilledForm, location: RecordableCenter) {
    this.data = data
    this.location = location
  }

  /**
   * @returns {RecordableCenter}
   */
  getLocation(): RecordableCenter {
    return this.location
  }

  /**
   * @returns {FilledForm}
   */
  getData(): FilledForm {
    return this.data
  }
}

export default ListableSpot
