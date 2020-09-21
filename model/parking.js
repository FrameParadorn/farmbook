
const Slot = require("./slot.js")

class Parking {

  constructor() {
    this.slots = []
    this.countLeave = 0
  }


  createSlot(quantity) {
    let i;
    for(i = 0; i<quantity; i++) {
      let slot = new Slot
      slot.no = i + 1
      this.slots.push(slot)
    } 

    console.log("Created a parking lot with " + (i) + " slots");
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


  leave(slotNo) {
	  let found = false
    this.slots = this.slots.map((slot, i) => {
      if( slot.no == slotNo ) {
        slot.car = null
			  found = true
      }
      return slot
    })

    if ( found ) {
      console.log("Slot number " + slotNo + " is free"); 
      return
    }

    console.log("Slot number " + slotNo + " not found");
  }


  status() {
    console.log("Slot No.  Registrator No.    Color");
    this.slots.map((slot, i) => {
      if(slot.car !== null) {
        console.log(slot.no + "         " + slot.car.regNo + "      " + slot.car.color);
      }
    })
  }


  findByColor(keyword) {
    let result = [] 
    this.slots.map(slot => {
      if(slot.car !== null && slot.car.color === keyword) {
        result.push(slot)
      }
    })
    return result
  }

  findByRegNo(keyword) {
    let result = [] 
    this.slots.map(slot => {
      if(slot.car !== null && slot.car.regNo === keyword) {
        result.push(slot)
      }
    })
    return result
  }


  find(column, keyword) {
    switch(column) {
      case "color":
      case "SlotNo":
        return this.findByColor(keyword)
        break
      default :
        return this.findByRegNo(keyword)
    }

  }

}


module.exports = Parking
