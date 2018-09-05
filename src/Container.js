class Container {

  /**
   * @type {Map<string, Function>}
   */
  static services = new Map();

  /**
   * @param {string} name
   * @returns {Function}
   * @throws TypeError
   */
  static get(name) {
    const service = this.services.get(name)
    return service.definition
  }

  /**
   * @param {string} name
   * @param definition
   * @param {boolean} hasCached
   */
  static add(name, definition, hasCached = true) {
    this.services.set(name, {
      definition,
      hasCached
    })
  }

  /**
   * @param service
   * @returns {boolean}
   */
  static isClass(service) {
    console.log(service)
    return typeof service.definition === 'function'
  }
}

export default Container
