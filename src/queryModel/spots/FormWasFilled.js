class FormWasFilled {

  name

  street

  longboard

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

  getName() {
    return this.name
  }

  hasStreet() {
    return this.street
  }

  hasFree() {
    return this.free
  }

  hasLongboard() {
    return this.longboard
  }
}

export default FormWasFilled
