let enterEl = document.querySelector('#enter');
let enterButton = document.querySelector('#enter button');
enterButton.onclick = function () {
  enterEl.parentNode.removeChild(enterEl);
  initSpheres();
  prepareVideos();
};

function initSpheres() {
  let prevVideo;
  let videosphere = document.querySelector('a-videosphere');

  document.querySelectorAll('a-sphere').forEach(sphere => {
    sphere.onclick = function () {
      let id = sphere.getAttribute('src');
      let video = document.querySelector(id);
      let src = video.src;

      videosphere.setAttribute('src', id);

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }

      if (prevVideo !== undefined && video !== prevVideo) {
        prevVideo.pause();
      }

      prevVideo = video;
    };
  });
}

// prepare video elements
function prepareVideos() {
  document.querySelectorAll('video').forEach(video => {
    video.setAttribute('preload', true);
    video.setAttribute('autoplay', true);
    video.playsinline = true;
    video.muted = false;
    video.setAttribute('crossorigin', 'anonymous');
    video.play();
    video.pause();
  });
}
