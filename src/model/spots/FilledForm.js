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
   * @type {Array}
   */
  images

  /**
   * @param {string} name
   * @param {boolean} street
   * @param {boolean} longboard
   * @param {boolean} free
   * @param {Array} images
   */
  constructor(name, street, longboard, free, images) {
    this.name = name
    this.street = street
    this.longboard = longboard
    this.free = free
    this.images = images
  }

  /**
   * @param {string} name
   * @param {boolean} street
   * @param {boolean} longboard
   * @param {boolean} free
   * @param {Array} images
   * @returns {FilledForm}
   */
  static build (name, street, longboard, free, images = []) {
    return new FilledForm(name, street, longboard, free, images)
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

  /**
   * @returns {Array}
   */
  getImages() {
    return this.images
  }
}

export default FilledForm
