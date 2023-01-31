import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const currentTime = localStorage.getItem(CURRENT_TIME_KEY)
  ? localStorage.getItem(CURRENT_TIME_KEY)
  : 0;

function getCurrentTime(event) {
  localStorage.setItem(CURRENT_TIME_KEY, event.seconds);
}

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(currentTime);
