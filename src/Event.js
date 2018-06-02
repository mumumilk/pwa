import EventEmitter from 'wolfy87-eventemitter'

class Event {

  /**
   * @type EventEmitter
   */
  event;

  constructor() {
    this.event = new EventEmitter()
  }

  /**
   * @param {string} eventType
   * @param {Function} listener
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
}

export default Event
