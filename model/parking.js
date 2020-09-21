
const Slot = require("./slot.js")

class Parking {

  constructor() {
    this.slots = []
    this.countLeave = 0
  }


  createSlot(quantity) {
    let slot = new Slot

    for(let i = 0; i<quantity; i++) {
      this.slots.push(slot)
    } 

    console.log(this.slots);
  }


}


module.exports = Parking
