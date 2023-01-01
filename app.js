
var colorArrayy = [
    "lightblue",
    "lightgreen",
    "blue",
    "pink",
    "brown",
    "pink",
    "pink",
    "gray",
    "yellow"
]
var lifeLineArray = ['❤️', '❤️', '❤️', '❤️', '❤️']
document.getElementById("lifelIne").innerText = "Life Line: " + lifeLineArray.join('');
var findColor = colorArrayy[Math.floor(Math.random() * colorArrayy.length)]
console.log(findColor)
for (let i = 1; i <= 24; i++) {
    var randomColor = colorArrayy[Math.floor(Math.random() * colorArrayy.length)];
    document.getElementById("ballon-" + i).style.backgroundColor = randomColor;
}

var boxRandom = document.getElementById("randomColor");
boxRandom.style.backgroundColor = findColor;

var score = 0;

function Ballons(ballonPick) {
    var ballonColors = document.getElementById(ballonPick);
    if (findColor.toLowerCase() === ballonColors.style.backgroundColor) {
        score = score + 1;
        document.getElementById("score").innerText = "Score: " + score;
        ballonColors.style.backgroundColor = "lightgreen";
    }
    else {
        score = score - 1;
        document.getElementById("score").innerText = "Score: " + score;
        lifeLineArray.pop();
        document.getElementById("lifelIne").innerText = "Life Line: " + lifeLineArray.join('');
        var randomColor = colorArrayy[Math.floor(Math.random() * colorArrayy.length)];
        ballonColors.style.backgroundColor = randomColor;
        if (lifeLineArray == '') {
            document.getElementById("lifelIne").innerText = "Life Line: " + "😞";
        }
    }
}


var startingMintes = 1;
var time = startingMintes * 60;
var countDown = document.getElementById("Timer");
var settime = setInterval(updateCountDown, 1000)
function updateCountDown() {
    var minutes = Math.floor(time / 60)
    let second = time % 60;
    second = second < 1 ? '0' + second : second;
    countDown.innerText = `${minutes} : ${second}`;
    time--;
    if (minutes === 0 && second == 00) {
        clearInterval(settime);
        if (score >= 1){
            document.getElementById("score").innerText = "You Win 🏆";
        }
        else if(score <= 0){
            document.getElementById("score").innerText = "You Lose 💔"
        }
    }
}

