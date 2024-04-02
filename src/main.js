import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import { imageSearch, requestForImgs } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const searchForm = document.querySelector('#search-form');
const galleryImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const moreButton = document.querySelector('.more-btn');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    galleryImages.innerHTML = '';
    const query = event.target.querySelector('#search-input').value.trim();

    if (query) {
        loader.classList.add('loading');

        imageSearch(query)
          .then(data => {
            if (data === null) {
                iziToast.error({
                  position: "topRight",
                  title: '❌',
                  icon: '',
                  message: "Sorry, there are no images matching your search query. Please try again!",
                });
            } else {
                renderImages(data.hits, galleryImages); 
                toggleMoreButton(data.hits);
            }
          })
          .catch(error => {
            console.error(error);
          })
          .finally(() => {
            loader.classList.remove('loading');
          });
    } 
    event.target.reset();
});

moreButton.addEventListener('click', (event) => {
  requestForImgs(event); 
});


function toggleMoreButton(data) {
    moreButton.classList.toggle('is-hidden', data.length === 0);
}
