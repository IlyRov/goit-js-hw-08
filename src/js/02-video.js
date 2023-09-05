import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Ініціалізація плеєра
const player = new Player('vimeo-player', {
  id: 236203659, // ID відео
});

// Відстежування події timeupdate з обмеженням через throttle
player.on('timeupdate', throttle(async (data) => {
  // Отримайте поточний час відтворення
  const currentTime = await player.getCurrentTime();

  // Збереження часу в локальному сховищі
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000)); // Оновлення кожну секунду

// Відновлення часу під час завантаження сторінки
document.addEventListener('DOMContentLoaded', async () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    await player.setCurrentTime(parseFloat(savedTime));
  }
});
