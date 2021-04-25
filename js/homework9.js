let ul = document.getElementById('ul')

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
li2.innerHTML ="1"
li3.innerHTML ="2"
li2.classList.add("item-list")
li3.classList.add("item-list")
btn1.addEventListener('click' , addli)
btn2.addEventListener('click' , addli2)
btn3.addEventListener('click' , delli)
btn4.addEventListener('click' , delli2)
btn5.addEventListener('click' , shedemeri)

function addli(){
    ul.append(li2)
}
function addli2 (){
    ul.prepend(li3)
}
function delli () {
    ul.lastElementChild.remove();
}
function delli2 () {
    ul.firstElementChild.remove();
}
function shedemeri () {
    document.body.firstElementChild.remove();
    document.body.style.backgroundColor = "#000"

}


