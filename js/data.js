const CREATE_DESCRIPTION = [
  'Good',
  'Not good',
  'Interesting moment',
  'Something new',
  'Something foto',
  'Do not like moment'
];
const NAMES_IN_COMMENTS = [
  'Ivan',
  'Huan',
  'Juli',
  'Alex',
  'Joy',
  'Karl',
  'Stefa',
  'Roman',
  'Klara',
  'Dony'
];
const COMMENTS_FOTO = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const similarUsersCount = 25;

const createComments = () => {
  return {
    id: getRandomPositiveInteger(0,1000),
    avatar: `img(avatar-${getRandomPositiveInteger(1,6)}.svg))`,
    message: COMMENTS_FOTO[getRandomPositiveInteger(0, COMMENTS_FOTO.length - 1)],
    name: NAMES_IN_COMMENTS[getRandomPositiveInteger(0, NAMES_IN_COMMENTS.length - 1)],
  };
};

const createUsers = () => {
  return {
    id: getRandomPositiveInteger(0, 25),
    url: `photo/${getRandomPositiveInteger(1,25)}.jpg`,
    description: [getRandomPositiveInteger (0, CREATE_DESCRIPTION.length - 1)],
    likes: getRandomPositiveInteger(15, 200),
    comments: createComments (),
  };
};
const similarUsers = Array.from({length: similarUsersCount}, createUsers);

console.log(createUsers);
