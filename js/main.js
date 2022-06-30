function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
function checkStringLength (string, length) {
  return string.length <= length;
};
const createDescription = [
  'Good',
  'Not good',
  'Interesting moment',
  'Something new',
  'Something foto',
  'Do not like moment'
];
const namesInComments = [
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
const commentsFoto = [
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
    message: commentsFoto[getRandomPositiveInteger(0, commentsFoto.length - 1)],
    name: namesInComments[getRandomPositiveInteger(0, namesInComments.length - 1)],
  };
};
const createUsers = () => {
  return {
    id: getRandomPositiveInteger(0, 25),
    url: `photo/${getRandomPositiveInteger(1,25)}.jpg`,
    description: [getRandomPositiveInteger (0, createDescription.length - 1)],
    likes: getRandomPositiveInteger(15, 200),
    comments: createComments (),
  };
};
const similarUsers = Array.from({length: similarUsersCount}, createUsers);
console.log(createUsers);
