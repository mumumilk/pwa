import EventEmitter from 'wolfy87-eventemitter'

class Event {

  /**
   * @type EventEmitter
   */
  event

  /**
   * @type Event
   */
  static instance

  constructor() {
    this.event = new EventEmitter()
  }

  /**
   * @param {string} eventType
   */
  add(eventType, listener) {
    this.event.addListener(eventType, listener)
  }

  /**
   * @param {string} eventType
   */
  dispatch(eventType) {
    this.event.emitEvent(eventType)
  }

  /**
   * @returns {Event}
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new Event()
    }

    return this.instance
  }
}

export default Event
