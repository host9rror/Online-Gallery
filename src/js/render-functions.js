import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(data, galleryImages) {
  if (!Array.isArray(data)) {
    console.error(Error);
    return;
  }

  const galleryMarkup = data
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `<li class="gallery-item">
        <a href="${largeImageURL}">
          <img
            src="${webformatURL}"
            data-source="${largeImageURL}"
            alt="${tags}"
          />
          <ul class="gallery-description">
            <li class="gallery-desc-item"><div class="desc-info"><h3>Likes</h3><p>${likes}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Views</h3><p>${views}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Comments</h3><p>${comments}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Downloads</h3><p>${downloads}</p></div></li>
          </ul>
        </a>
      </li>`;
    })
    .join('');

  if (galleryImages) { 
    galleryImages.innerHTML = galleryMarkup;
    const lightbox = new SimpleLightbox('.gallery-item a', {
      captionsData: 'alt',
      captionDelay: 250
    });
  } else {
    console.error(Error);
  }
}