import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

// Create gallery.
const createItem = galleryItems
  .map(
    el =>
      `<div class="gallery__list">
     <a class="gallery__item" href="${el.original}">
     <img class="gallery__image"
          src="${el.preview}"
          alt="${el.description}"
      />
      </a>
    </div>`,
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', createItem);

// Create SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);