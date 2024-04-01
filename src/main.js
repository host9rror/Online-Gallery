import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import { imageSearch } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const searchForm = document.querySelector('#search-form');
const galleryImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

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