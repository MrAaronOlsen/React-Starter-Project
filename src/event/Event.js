export default class Event {
    static THING_CHANGED = new Event('THING_CHANGED')
  
    #name
  
    constructor(name) {
      this.#name = name
    }
  
    getName() {
      return this.#name
    }
  }