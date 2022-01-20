const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")

const audio = new Audio('music.mp3');

playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)
stopBtn.addEventListener("click", stop)

function play() {
    audio.play()
}
 
 function pause() {
    audio.pause()
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}
 