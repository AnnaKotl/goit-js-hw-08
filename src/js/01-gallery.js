// Add imports above this line
import '../css/common.css';
import '../css/03-feedback.css';
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const li = document.querySelectorAll('li')

createImageEl();

function createImageEl() {
  const importImage = createImageElements(galleryItems);
  galleryEl.innerHTML = importImage.join('');
}

function createImageElements(items) {
  return items.map( item => `
    <a class="gallery__link"
      href="${item.original}">
      <img class="gallery__image"
        src="${item.preview}" 
        data-source="${item.original}" 
        alt="${item.description}"/>
    </a>`
  );
}

let gallery = new SimpleLightbox('.gallery a');