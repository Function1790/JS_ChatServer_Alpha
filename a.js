const fs = require("fs")
const __dir = ".\\templete\\"
let chat = fs.readFileSync(__dir + "chatbox.html", 'utf8')
chat.replaceAll("d","a")
console.log(chat)