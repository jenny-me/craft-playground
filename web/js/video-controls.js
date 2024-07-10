var supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {
    var video = document.getElementById('video');
    // Hide the default controls
    video.controls = false;

    var playpause = document.getElementById('playpause');

    playpause.addEventListener('click', function(e) {
      if (video.paused || video.ended) {
        video.play();
        playpause.textContent = 'Pause Video';
      }
      else {
        video.pause();
        playpause.textContent = 'Play Video';
      }
      playpause.classList.toggle('paused');
    });

    var n = 0;
    video.addEventListener("ended", function() {
      ++n < 2 && this.play();
    });
} else {
  var playpause = document.getElementById('playpause');
  playpause.style.display = "none";
}