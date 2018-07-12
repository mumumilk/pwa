class FilledForm {

  /**
   * @type string
   */
  private readonly name: string

  /**
   * @type boolean
   */
  private readonly street: boolean

  /**
   * @type boolean
   */
  private readonly longboard: boolean

  /**
   * @type boolean
   */
  private readonly free: boolean

  /**
   * @param {string} name
   * @param {boolean} street
   * @param {boolean} longboard
   * @param {boolean} free
   */
  public constructor(
    name: string,
    street: boolean,
    longboard: boolean,
    free: boolean
  ) {
    this.name = name
    this.street = street
    this.longboard = longboard
    this.free = free
  }

  /**
   * @returns {string}
   */
  public getName(): string {
    return this.name
  }

  /**
   * @returns {boolean}
   */
  public hasStreet(): boolean {
    return this.street
  }

  /**
   * @returns {boolean}
   */
  public hasFree(): boolean {
    return this.free
  }

  /**
   * @returns {boolean}
   */
  public hasLongboard(): boolean {
    return this.longboard
  }
}

export default FilledForm
