

class CommandController {

  commands = [
    {
      "create_parking_lot": this.CreateSlot,
    }
  ]

  createSlot() {
    console.log("Create slot")
  }


  run(line) {
    line = line.split(" ");  

    let command = line[0] 
    console.log(command);
  }
  
}



	// "park":               allocateSlot,
	// "leave":              leaveSlot,
	// "leave_count":        showStatusLeaveCount,
	// "status":             showStatusSlot,
	// "registration_numbers_for_cars_with_colour": showRegNoByColour,
	// "slot_numbers_for_cars_with_colour":         showSlotNoByColour,
	// "slot_number_for_registration_number":       showSlotByRegNo,
	// "exit":                                      exit,

module.exports = CommandController
