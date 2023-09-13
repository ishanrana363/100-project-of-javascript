const number = document.querySelector(".number")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*1000)
    number.innerHTML = random
})
