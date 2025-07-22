// video controller

let video = document.getElementById("video");
let playButton = document.getElementById("play");
let stopButton = document.getElementById("stop");
let rewindButton = document.getElementById("rewind");
let fastRewindButton = document.getElementById("fast-rewind");
backToInitial = document.getElementById("initial");
let speedInput = document.getElementById("speed");
let fastForwardButton = document.getElementById("fast-forward");
let muteButton = document.getElementById("mute");
playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.textContent = "Pause";
  } else {
    video.pause();
    playButton.textContent = "Play";
  }
});

stopButton.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  playButton.textContent = "Play";
});
rewindButton.addEventListener("click", () => {
  video.currentTime = 0;
});
fastForwardButton.addEventListener("click", () => {
  video.currentTime += 5;
});
fastRewindButton.addEventListener("click", () => {
  video.currentTime -= 5;
});
muteButton.addEventListener("click", () => {
  video.muted = !video.muted;
  muteButton.textContent = video.muted ? "Unmute" : "Mute";
});
backToInitial.addEventListener("click", () => {
  video.currentTime = video.duration;
});
speedInput.addEventListener("input", () => {
  video.playbackRate = speedInput.value;
});

// problem 2
let text = document.getElementById("text");
let ranges = document.getElementById("ranges");

ranges.addEventListener("input", () => {
  let red = document.getElementById("r").value;
  let green = document.getElementById("g").value;
  let blue = document.getElementById("b").value;

  text.style.color = `rgb(${red}, ${green}, ${blue})`;
});
