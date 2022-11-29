var cookieRemove = document.querySelector(".cookies");
function accept() {
    cookieRemove.remove();
}


var red1 = document.querySelector(".red1");
var red2 = document.querySelector(".red2");
var red3 = document.querySelector(".red3");
var red4 = document.querySelector(".red4");
var blue1 = document.querySelector(".blue1");
var blue2 = document.querySelector(".blue2");
var blue3 = document.querySelector(".blue3");
var blue4 = document.querySelector(".blue4");
function changeDegree() {
    red1.innerText = "-4°"
    blue1.innerText = "-7°"
    red2.innerText = "-2°"
    blue2.innerText = "-7°"
    red3.innerText = "-6°"
    blue3.innerText = "-8°"
    red4.innerText = "-3°"
    blue4.innerText = "-6°"
}