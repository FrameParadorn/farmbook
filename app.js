const readline = require('readline');
const CommandController = require("./controller/CommandController.js")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.setPrompt("$ ")
rl.prompt();

rl.on("line", line => {
  let command = new CommandController()
  command.run(line)
  rl.prompt();
})

