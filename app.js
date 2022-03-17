const os = document.getElementById('os');

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator?.userAgentData?.platform ?? window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

os.innerText = getOS();

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var setTimer = 4,
    display = document.querySelector('#time');

  startTimer(setTimer, display);
};

setTimeout(() => {
  if (getOS() == 'iOS') {
    window.location.href = 'https://www.apple.com/app-store/';
  } else if (getOS() == 'Mac OS') {
    window.location.href = 'https://apps.apple.com/us/genre/mac/id39?mt=12';
  } else if (getOS() == 'Android') {
      window.location.href = 'https://play.google.com/store';
    }
    window.location.href = 'https://www.microsoft.com/en-us/store/apps/windows';
  
}, 4000);
