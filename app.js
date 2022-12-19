const express = require("express")
const fs = require("fs")

const __dir = ".\\templete\\"
const app = express()
const port = 3000

const chat_data = []

class Chatbox {
    constructor(sender, content) {
        this.sender = sender
        this.content = content
    }
    toHTML() {
        if (this.sender === "me") {
            return ` 
            <div class="chat_box_container sender_isme">
                <div class="chat_box_textdata_container">
                    <div class="chat_box_textdata">
                        ${this.content}
                    </div>
                </div>
            </div>
            `
        } else {
            return `
            < div class="chat_box_usericon" >
                <img src="./images/user1.png" alt="user1">
                </>
                <div class="chat_box_textdata_container">
                    <div class="chat_box_textdata">
                        ${this.content}
                    </div>
                </div>
            `
        }
    }
}

app.use(express.static('templete'))

app.get("/", (req, res) => {
    const header = fs.readFileSync(__dir + "header.html", 'utf8')
    let chat = fs.readFileSync(__dir + "chatbox.html", 'utf8')
    let chat_record = ""
    for (var i = 0; i < chat_data.length; i++) {
        chat_record += chat_data[i].toHTML()
    }
    chat=chat.replaceAll("${chat_data}", chat_record)
    res.send(header + chat)
})

app.get("/send_message", (req, res) => {
    let content = req.query.content
    if(content!=""){
        chat_data.push(new Chatbox("me", content))
    }
    res.writeHead(302, { Location: `/` });
    res.end()
})

app.listen(port, () => {
    console.log(`Run Server => localhost:${port} `)
})