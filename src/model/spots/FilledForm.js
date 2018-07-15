class FilledForm {

  /**
   * @type string
   */
  name

  /**
   * @type boolean
   */
  street

  /**
   * @type boolean
   */
  longboard

  /**
   * @type boolean
   */
  free

  /**
   * @param {string} name
   * @param {boolean} street
   * @param {boolean} longboard
   * @param {boolean} free
   */
  constructor(name, street, longboard, free) {
    this.name = name
    this.street = street
    this.longboard = longboard
    this.free = free
  }

  /**
   * @param {string} name
   * @param {boolean} street
   * @param {boolean} longboard
   * @param {boolean} free
   * @returns {FilledForm}
   */
  static build (name, street, longboard, free) {
    return new FilledForm(name, street, longboard, free)
  }

  /**
   * @returns {string}
   */
  getName() {
    return this.name
  }

  /**
   * @returns {boolean}
   */
  hasStreet() {
    return this.street
  }

  /**
   * @returns {boolean}
   */
  hasFree() {
    return this.free
  }

  /**
   * @returns {boolean}
   */
  hasLongboard() {
    return this.longboard
  }
}

export default FilledForm
