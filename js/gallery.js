
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

function createGalleryItem(image) {
  const li = document.createElement('li');
  li.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;
  link.dataset.source = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.alt = image.description;

  link.appendChild(img);
  li.appendChild(link);

  return li;
}

const galleryContainer = document.querySelector('.gallery');
const galleryItems = images.map(createGalleryItem);

galleryContainer.append(...galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryItems = images.map(image => {
  const li = document.createElement('li');
  li.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.original;
  link.dataset.source = image.original; // Додавання даних для зручності

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.alt = image.description;

  link.appendChild(img);
  li.appendChild(link);

  return li;
});

galleryContainer.append(...galleryItems);

galleryContainer.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  const targetLink = event.target.closest('.gallery-link');

  if (!targetLink) {
    return;
  }

  const largeImageUrl = targetLink.dataset.source;
  const altText = targetLink.querySelector('.gallery-image').alt;

  openModal(largeImageUrl, altText);
}

function openModal(largeImageUrl, altText) {
  const instance = basicLightbox.create(
    `<img src="${largeImageUrl}" alt="${altText}">`,
    {
      onShow: (instance) => {
        document.addEventListener('keydown', handleKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', handleKeyPress);
      }
    }
  );

  instance.show();

  function handleKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}