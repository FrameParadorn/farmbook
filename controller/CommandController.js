const parking = require("../model/parking.js")

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

    this.parking = new parking

  }

  createSlot(args) {
    this.parking.createSlot(args[0])
  }


  run(line) {
    line = line.split(" ")  

    let command = line[0] 
    let args = line.slice(1)

    switch(command) {
      case "create_parking_lot" :
        this.createSlot(args)
        break;
    }
  }
  
}


module.exports = CommandController
