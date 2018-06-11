class ListableSpotCollection {

  list = []

  /**
   *
   * @param {ListableSpot} spot
   */
  add(spot) {
    this.list.push(spot)
  }

  getList() {
    return this.list
  }
}

export default ListableSpotCollection
