import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
  
const galeryEl = document.querySelector('.gallery');


const galeryImages = galleryItems
.map(image =>
    `<div class="gallery__item">
    <a class="gallery__link" 
    href="${image.original}">
    <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/> 
    </a>
    </div>`
    );

    galeryEl.insertAdjacentHTML('afterbegin', galeryImages.join(''));
    galeryEl.addEventListener("click", onImgClick);

    function onImgClick(event) {
        event.preventDefault();
        if (event.target.nodeName !== "IMG") {
            return;
        }
        
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" >`)

    instance.show()
    }


   