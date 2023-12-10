const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const galleryContainer = document.querySelector('.gallery');

const galleryItems = images.map(image => {
  const li = document.createElement('li');
  li.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.dataset.source = image.original;
  img.alt = image.description;

  link.appendChild(img);
  li.appendChild(link);

  return li;
});

galleryContainer.append(...galleryItems);

galleryContainer.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageUrl = event.target.dataset.source;

  // Виклик функції для відкриття модального вікна зі збільшеною версією зображення.
  openModal(largeImageUrl);
}
function openModal(largeImageUrl) {
  const instance = basicLightbox.create(`<img src="${largeImageUrl}">`);
  instance.show();

  // Прослуховування події натискання клавіші Escape
  document.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      // Прибрати обробник події після закриття модального вікна
      document.removeEventListener('keydown', handleKeyPress);
    }
  }
}
// Дані для галереї
const images = [
  // Об'єкти зображень тут
];

// Отримання посилання на велике зображення
function getLargeImageSrc(index) {
  return images[index].original;
}

// Прослуховування кліка по зображенню в галереї
document.querySelector('.gallery').addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.tagName === 'IMG') {
    const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);

    // Отримання посилання на велике зображення
    const largeImageSrc = getLargeImageSrc(index);

    // Встановлення значення атрибута src для модального вікна
    document.getElementById('lightbox-image').src = largeImageSrc;

    // Відкриття модального вікна
    const lightbox = new basicLightbox(document.getElementById('lightbox'));
    lightbox.show();

    // Прослуховування клавіші Escape
    document.addEventListener('keydown', function closeLightboxOnEscape(event) {
      if (event.key === 'Escape') {
        // Закриття модального вікна
        lightbox.close();
        // Видалення події клавіші Escape
        document.removeEventListener('keydown', closeLightboxOnEscape);
      }
    });

    // Прослуховування кліка на кнопці "Close"
    document.getElementById('close-lightbox').addEventListener('click', function () {
      // Закриття модального вікна
      lightbox.close();
    });
  }
});