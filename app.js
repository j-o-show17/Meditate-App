let playIcon = document.querySelector(".play-icon");
let audio = document.querySelector(".audio");
let video = document.querySelector("video");
let replayIcon = document.querySelector(".replay-icon");
let timer = document.querySelector(".timer")
let timeSelector = document.querySelectorAll("#time button");
let selector = document.querySelectorAll("#selector i");
//let pauseIcon = document.querySelector(".fa-pause");
let distance = 2;
let min = 0;
let sec = 0;
//updating audio time alogside progress circle and play icon
audio.ontimeupdate = function() {
    //min = 0
    let currentTime = audio.currentTime;
    let timeLeft = distance - currentTime;
    let progress = (timeLeft / distance) * 100;
    document.querySelector(".progress-bar").style.background = "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink " + progress + "%, pink 0)";
    let msec = Math.floor(currentTime);
    if (Math.floor(currentTime) < 10) {
        min = 0;
    }
    sec = msec % 60;
    if (sec === 59) {
        min = +1;

    }
    timer.textContent = min + " : " + sec;
    if (currentTime >= distance) {
        audio.pause();
        audio.currentTime = 0;
        playIcon.className = "play-icon fa-sharp fa-regular fa-circle-play fa-xl";
        video.pause();
    }
}

function setProgress(progress) {
    document.querySelector(".progress-bar").style.background = "radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(hotpink " + progress + "%, pink 0)";

}


//when play button is clicked on and checking if audio/video is already on
playIcon.addEventListener("click", () => {

    if (playIcon.className == "fa-solid fa-pause") {
        audio.pause();
        video.pause();
        playIcon.className = "play-icon fa-sharp fa-regular fa-circle-play fa-xl";
    } else {
        audio.src = "sounds/rain.mp3";
        video.src = "video/rain.mp4";
        checkPlay(audio);
    }

});

function checkPlay(audio) {
    if (audio.paused) {
        audio.play();
        video.play();
        playIcon.className = "fa-solid fa-pause"
    } else {
        audio.pause();
        video.pause();
        playIcon.className = "play-icon fa-sharp fa-regular fa-circle-play fa-xl";

    }
}

//looping through selected icon and assigning audio
selector.forEach(selected => {
    selected.addEventListener("click", function() {
        audio.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");
        checkPlay(audio);
    })
});



replayIcon.addEventListener("click", () => {
    replay(audio)
})

let replay = audio => {
    let currentTime = audio.currentTime;
    audio.currentTime = 0;

}

//setting on screen timer and countdown 
timer.textContent = "0:00";

timeSelector.forEach(selected => {
    selected.addEventListener("click", function() {
        distance = this.getAttribute("data-time");
        timer.textContent = distance + ":00";
        distance = distance * 60;
    })
})