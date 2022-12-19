const send_content = document.getElementById("send_content")
const send_submit_container = document.getElementById("send_submit_container")

send_content.addEventListener("keyup", () =>  {
    if(send_content.value.replace(" ","").length > 0){
        send_submit_container.style.display="flex"
    }else{
        send_submit_container.style.display="none"
    }
})