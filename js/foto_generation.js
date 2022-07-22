const photos = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').textContent;
const photosFragment = document.createDocumentFragment();
photoDescription.forEach(({url, likes, comments}) => {
    const element = photosTemplate.cloneNode(true);
    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__comments').textContent = comments.length;
    photosFragment.appendChild(element);
  });
  photos.appendChild(photosFragment);