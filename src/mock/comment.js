import {getRandomArrayItem, getRandomIntegerNumber} from '../utils/random.js';
import {COMMENTS_EMOTION} from '../utils/const.js';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

const COMMENTS_AUTORS = [
  'Lilly Sanchez',
  'Leah Rodriguez',
  'Uthman Alexander',
  'Delilah Long',
  'Seamus Hall',
  'Quirino Gonzalez',
  'Penn Robinson',
  'Giselle Watson',
  'Soren Phillips',
  'Ibraheem Gonzales',
  'Arabella Rogers',
  'Royal Jackson',
  'Xander Baker',
];

const COMMENTS_TEXTS = [
  'Booooooooooring',
  'Very very old. Meh',
  'Almost two hours? Seriously?',
  'Interesting setting and a good cast',
];


export const generateComment = () => {
  const commentDate = dayjs().add(-(getRandomIntegerNumber(0, 10)), 'day');
  return {
    id: nanoid(),
    text: getRandomArrayItem(COMMENTS_TEXTS),
    author: getRandomArrayItem(COMMENTS_AUTORS),
    emodjies: getRandomArrayItem(COMMENTS_EMOTION),
    date: commentDate,
  };
};

export const generateCommentsList = (count) => {
  return new Array(count).fill('').map(() => generateComment());
};
