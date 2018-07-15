import ListableSpot from './ListableSpot'

class ListableSpotCollection {

  /**
   * @type {any[]}
   */
  list = []

  /**
   * @param {ListableSpot} spot
   */
  add(spot) {
    this.list.push(spot)
  }

  /**
   * @returns {Array<any>}
   */
  getList() {
    return this.list
  }
}

export default ListableSpotCollection
