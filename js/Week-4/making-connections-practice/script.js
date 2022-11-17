console.log("page loaded...");

// NAME CHANGE

var nameChange = document.querySelector("#name");

function changeName(element) {
    nameChange.innerText = "James Doe";
}

// REMOVE REQUEST & BONUS 

var request1 = document.querySelector("#cardlist");
var request2 = document.querySelector("#cardlist2");
var connectionReq = document.querySelector("#badge");
var yourConnections = document.querySelector("#badge2");
var yourCount = 418;
var connectCount = 2;

function addReq() {
    connectCount++;
    yourCount++;
    connectionReq.innerText = connectCount;
    yourConnections.innerText = yourCount;
    request1.remove();
}

function removeReq() {
    connectCount++;
    connectionReq.innerText = connectCount;
    request1.remove();
}

function addReq2() {
    connectCount++;
    yourCount++;
    connectionReq.innerText = connectCount;
    yourConnections.innerText = yourCount;
    request2.remove();
}

function removeReq2() {
    connectCount++;
    connectionReq.innerText = connectCount;
    request2.remove();
}