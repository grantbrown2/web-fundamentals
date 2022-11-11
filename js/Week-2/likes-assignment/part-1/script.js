var likeCount = document.querySelector("#subtext");
var count = 3;

function like() {
    count++;
    likeCount.innerText = count + " Like(s)";
    console.log(count);
}