
const readline = require('readline');
const fs = require('fs');
const CommandController = require("./controller/CommandController.js")

const args = process.argv.slice(2);


let command = new CommandController()


const readByStdin = () => {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });


  rl.setPrompt("$ ")
  rl.prompt();

  rl.on("line", line => {
    command.run(line)
    rl.prompt();
  })
}


const readByFile = () => {
  const rl = readline.createInterface({
    input: fs.createReadStream(args[0]),
    output: process.stdout,
    terminal: false,
  });

  rl.on("line", line => {
    command.run(line)
  })

}



if(args.length === 0) {
  readByStdin()
}else {
  readByFile()
}

