const fotoConteiner = document.querySelector('.big-picture');
const body = document.querySelector('body');
const socialComments = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.comments-count');
const likesCount = document.querySelector('.likes-count');


const addFotoClick= (picture, { url, likes, description, comments }) => {
    picture.addEventListener('click', () => {

      pictureContainer.classList.remove('hidden');
      commentCount.classList.add('hidden');
      commentLoader.classList.add('hidden');
      body.classList.add('modal-open');

      pictureImg.src = url;
      pictureLikesCount.textContent = likes;
      pictureDescription.textContent = description;

      commentsCount.innerHTML = '';
      comments.forEach(({ message, avatar, name }) => {
        commentCount.insertAdjacentHTML('afterbegin',
          `<li class="social__comment">
            <img class="social__picture" src=${avatar} alt=${name} width="35" height="35">
            <p class="social__text">${message}</p>
          </li>`);
      });
    });
  };

  for (let i = 0; i < pictureList.length; i++) {
    addPictureClickHandler(pictureList[i], photos[i]);
  }

  const closeConteiner = (evt) => {
    if (evt.key === 'Escape' || evt.target === pictureCloseButton) {
      pictureContainer.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  };
   
openConteiner.addEventListener('click', function (evt) {
    evt.preventDefault();
    fotoConteiner.classList.remove('hidden');
  });
document.addEventListener('keydown', function (evt) {
    if (evt.code === 27) {
        fotoConteiner.classList.add('hidden');
        body.classList.remove('modal-open');
    }
});
