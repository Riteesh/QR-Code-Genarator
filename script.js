let container = document.querySelector(".contianer");
let qrInput = document.querySelector("#text")
let genarateBtn = document.querySelector("#genarate")
let img = document.querySelector("#qr-img")
let preInput

genarateBtn.onclick = function(){
    let input = qrInput.value.trim()

    if(!input || input===preInput){
        return 
    }
    else{
        preInput = input;
        genarateBtn.innerText = "Generating QR Code...."
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
        img.onload=function(){
        container.classList.add("active")
        genarateBtn.innerText = "Genarate QR Code"
    }
    }   
}