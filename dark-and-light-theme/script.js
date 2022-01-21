let toggle = document.getElementById('toggle')
let body = document.getElementById('body')
let h1 = document.getElementById('h1')
let header = document.querySelector('#header')

toggle.addEventListener("click", check)
function check() {
    if (toggle.checked){
       h1.style.color='#264653'
       header.style.backgroundColor='#03071e'
       body.style.backgroundColor='#003049'
    }
    
    else {
      h1.style.color=''
      body.style.backgroundColor=''
       header.style.backgroundColor=''
    }
   
}
 