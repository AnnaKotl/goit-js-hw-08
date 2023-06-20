import '../css/common.css';
import '../css/03-feedback.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.getElementById('vimeo-player');
const player = new Player(playerEl);

const saveCurrentTime = () => {
  player
    .getCurrentTime()
    .then(time => {
      localStorage.setItem('videoplayer-current-time', time);
    })
    .catch(error => {
      console.error('Error getting current time:', error);
    });
};

const restorePlayback = () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime).catch(error => {
      console.error('Error setting current time:', error);
    });
  }
};

const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);

player.on('timeupdate', throttledSaveCurrentTime);

restorePlayback();
