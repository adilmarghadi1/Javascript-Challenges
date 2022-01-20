const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const container = document.querySelector('.container')
 
if(snowBtn.addEventListener("click", snowClick)) {
    snowClick()
}

else if (christmasBtn.addEventListener("click", chrismas)){
     chrismas()
}

else {
    console.log("True")
}


function snowClick() {
    greeting.style.fontFamily = 'Roboto'
    greeting.style.color = '#003049'
    body.style.backgroundColor="blue"
    container.style.backgroundColor = '#cfbaf0'
 
}


function chrismas() {
     greeting.style.fontFamily = ''
    greeting.style.color = ''
    body.style.backgroundColor=""
    container.style.backgroundColor = ""
}
 