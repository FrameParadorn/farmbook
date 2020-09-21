
const Slot = require("./slot.js")

class Parking {

  constructor() {
    this.slots = []
    this.countLeave = 0
  }


  createSlot(quantity) {
    for(let i = 0; i<quantity; i++) {
      let slot = new Slot
      slot.no = i + 1
      this.slots.push(slot)
    } 

    console.log(this.slots);
  }


  isAlready(car) {

    let already = false
    this.slots.map(slot => {
      if(slot.car !== null && slot.car.regNo === car.regNo) {
          already = true 
      }
    })

    return already

  }


  allocate(car) {

    if(this.isAlready(car)) {
      console.log("Car is already allocated")
      return
    }

    let slotFull = true
    this.slots.map( ( slot, i ) => {
      if(slot.car === null && slotFull) {
        this.slots[i].car = car
        console.log("Allocated slot number: " + slot.no);
        slotFull = false
      }
    })

    if ( slotFull ) {
      console.log("Sorry, parking lot is full");
    }
    
  }




}


module.exports = Parking
