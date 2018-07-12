class ListableSpotCollection {

  /**
   * @type {any[]}
   */
  private list: Array<any> = []

  /**
   * @param spot
   */
  add(spot: any) {
    this.list.push(spot)
  }

  /**
   * @returns {Array<any>}
   */
  public getList() {
    return this.list
  }
}

export default ListableSpotCollection
