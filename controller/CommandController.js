const Parking = require("../model/parking.js")
const Car = require("../model/car.js")

class CommandController {


  constructor() {
    this.parking = new Parking
  }

  createSlot(args) {
    if(args.length <= 0) {
      this.commandInv()
      return
    }
    this.parking.createSlot(args[0])
  }


  allocateSlot(args) {
    if(args.length < 2) {
      this.commandInv()
      return
    }

    let car = new Car
    car.regNo = args[0]
    car.color = args[1]
    this.parking.allocate(car)
  }


  leaveSlot(args) {
    if(args.length < 1) {
      this.commandInv()
      return
    }

    this.parking.leave(args[0])
  }    


  showStatusSlot() {
    this.parking.status()
  }

  showRegNoByColor(args) {
    if(args.length < 1) {
      this.commandInv()
      return
    }
    let slots = this.parking.find("color", args[0])

    let result = []
    slots.map(( slot, i ) => {
      result.push(slot.car.regNo)
    })
    if(result.length === 0) {
      console.log("No found slot color is : " + args[0]);
      return
    }

    console.log(result.toString()); 

  }

  showSlotNoByColor(args) {
    if(args.length < 1) {
      this.commandInv()
      return
    }
    let slots = this.parking.find("SlotNo", args[0])

    let result = []
    slots.map(( slot, i ) => {
      result.push(slot.no)
    })

    if(result.length === 0) {
      console.log("No found slot color is : " + args[0]);
      return
    }

    console.log(result.toString()); 

  }


  showSlotByRegNo(args) {
    if(args.length < 1) {
      this.commandInv()
      return
    }
    let slots = this.parking.find("RegNo", args[0])

    let result = []
    slots.map(( slot, i ) => {
      result.push(slot.no)
    })

    if(result.length === 0) {
      console.log("No found slot number is : " + args[0]);
      return
    }

    console.log(result.toString()); 

  }

  commandInv() {
    console.log("Command Invalid");
  }


  run(line) {
    line = line.split(" ")  

    let command = line[0] 
    let args = line.slice(1)

    switch(command) {
      case "create_parking_lot" :
        this.createSlot(args)
        break
      case "park":
        this.allocateSlot(args)
        break
      case "leave" :
        this.leaveSlot(args)
        break
      case "status" :
        this.showStatusSlot()
        break
      case "registration_numbers_for_cars_with_colour" :
        this.showRegNoByColor(args)
        break
      case "slot_numbers_for_cars_with_colour" :
        this.showSlotNoByColor(args)
        break
      case "slot_number_for_registration_number":
        this.showSlotByRegNo(args)
        break
      default:
        this.commandInv()
    }
  }
  
}


module.exports = CommandController
