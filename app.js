let playIcon = document.querySelector(".play-icon");
let audio = document.querySelector(".audio");
//let progress = 0;


let video = document.querySelector(".video video");

let replayIcon = document.querySelector(".replay-icon");
let timer = document.querySelector(".timer")
let timeSelector = document.querySelectorAll("#time");

audio.ontimeupdate = function() {
    let currentTime = audio.currentTime;
    //console.log(currentTime);
    //let elapsed = distance - currentTime;
    let timeLeft = distance - currentTime;
    //let seconds = Math.floor(elapsed % 60);
    //let minutes = Math.floor(elapsed / 60);
    // timer.textContent = '${minutes}:${seconds}';
    let progress = (timeLeft / distance) * 100;
    document.querySelector(".progress-bar").style.background = "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink " + progress + "%, pink 0)";
    //setProgress(progress);

    //outline.style.strokeDashoffset = progress;

    if (currentTime >= destination) {
        audio.pause();
        audio.currentTime = 0;
        play.src = "./svg/play.svg";
        video.pause();
    }
}






function setProgress(progress) {
    document.querySelector(".progress-bar").style.background = "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink " + progress + "%, pink 0)";

}

//const outline = document.querySelector(".moving-outline circle");
//const outlineLength = outline.getTotalLength();
//let selector = document.querySelectorAll()
// const outline = document.querySelector(".moving-outline circle");



playIcon.addEventListener("click", () => {
    //var audio1 = new Audio('sounds/rain.mp3');
    // audio1.play();
    checkPlay(audio);
});

//music
let selector = document.querySelectorAll("#selector button");
let distance = 2 * 60;
selector.forEach(selected => {
    selected.addEvenListener("click", () => {
        audio.src = this.getAttribute("mood-sound");
        video.src = this.getAttribute("mood-video");
        checkPlay(audio);
    })
});

function checkPlay(audio) {
    if (audio.paused) {
        audio.play();
        video.play();
        playIcon.className = "fa-solid fa-reply replay-icon"
    } else {
        audio.pause();
        video.pause();
        playIcon.src = "";

    }
}


replayIcon.addEventListener("click", () => {
    replay(audio)
})

let replay = audio => {
    let currentTime = audio.currentTime;
    audio.currentTime = 0;

}

let min = (1000 * 60 * 60 * 24) / (1000 * 60 * 60);
let sec = (1000 * 60) / 1000;
timer.textContent = min + " : " + sec;

timeSelector.forEach(selected => {
    selected.addEventListener("click", () => {
        distance = this, getAttribute("data-time");
        timer.textContent = distance + ":00";
    })
})