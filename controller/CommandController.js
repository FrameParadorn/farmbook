const Parking = require("../model/parking.js")
const Car = require("../model/car.js")

class CommandController {


  constructor() {
    // this.commands = {
    //     "create_parking_lot": this.createSlot,
    //     "park":               this.allocateSlot,
    //     "leave":              this.leaveSlot,
    //     "leave_count":        this.showStatusLeaveCount,
    //     "status":             this.showStatusSlot,
    //     "registration_numbers_for_cars_with_colour": this.showRegNoByColour,
    //     "slot_numbers_for_cars_with_colour":         this.showSlotNoByColour,
    //     "slot_number_for_registration_number":       this.showSlotByRegNo,
    //     "exit":                                      this.exit,
    // }

    this.parking = new Parking

  }

  createSlot(args) {
    console.log();
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
        this.leave(args)
      default:
        this.commandInv()
    }
  }
  
}


module.exports = CommandController
