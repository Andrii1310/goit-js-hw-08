// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

// Create gallery.
const createItem = galleryItems
  .map(
    el =>
      `<li>
     <a class="gallery__item" href="${el.original}">
     <img class="gallery__image"
          src="${el.preview}"
          alt="${el.description}"
      />
      </a>
    </li>`,
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', createItem);

// On SimpleLightbox.
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';



console.log(galleryItems);
