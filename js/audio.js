const audio = document.getElementById('my-audio');
const playPauseButton = document.getElementById('play-pause-button');

let isPlaying = false;

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playPauseButton.classList.remove('playing');
  } else {
    audio.play();
    playPauseButton.classList.add('playing');
  }
  isPlaying = !isPlaying;
}

playPauseButton.addEventListener('click', togglePlayPause);

