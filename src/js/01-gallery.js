// Імпорт бібліотеки SimpleLightbox
import SimpleLightbox from './simplelightbox';


// Імпорт стилів бібліотеки SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css';

// Імпорт масиву галереї
import { galleryItems } from './gallery-items.js';

// Вибір контейнера галереї
const galleryList = document.querySelector('.gallery');

// Створення HTML для кожного елемента галереї
const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`;

// Створення розмітки галереї на основі даних з galleryItems
const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);


// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true, // Увімкнути підписи до зображень
  captionDelay: 250, // Затримка перед відображенням підпису
});
