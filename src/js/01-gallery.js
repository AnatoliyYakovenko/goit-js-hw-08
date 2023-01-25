import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />`;
  })
  .join('');

galleryEl.innerHTML = markup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
