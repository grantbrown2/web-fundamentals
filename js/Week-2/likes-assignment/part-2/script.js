var likeList = [9, 12, 9];
var span = [
    document.querySelector("#subtext"),
    document.querySelector("#subtext-2"),
    document.querySelector("#subtext-3")
];

function like(id) {
    likeList[id]++;
    span[id].innerHTML = likeList[id] + " Like(s)";
}