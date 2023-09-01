import Player from 'vimeo-player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 236203659, 
});

player.on('timeupdate', throttle(async (data) => {
  // Отримайте поточний час відтворення
  const currentTime = await player.getCurrentTime();

  // Збережіть час в локальному сховищі
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000)); // Оновлення кожну секунду

document.addEventListener('DOMContentLoaded', async () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    await player.setCurrentTime(parseFloat(savedTime));
  }
});

