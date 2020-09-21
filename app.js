const readline = require('readline');
const CommandController = require("./controller/CommandController.js")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.setPrompt("$ ")
rl.prompt();

let command = new CommandController()
rl.on("line", line => {
  command.run(line)
  rl.prompt();
})

