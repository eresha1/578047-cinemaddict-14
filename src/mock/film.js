import {getRandomIntegerNumber, getRandomArrayItem, generateRandomBoolean, getRandomQuantityElements, generateRandomDate} from '../utils/random.js';

import {generateCommentsList} from '../mock/comment.js';

const FILMS = [
  {
    title: 'Made for Each Other',
    poster: 'images/posters/made-for-each-other.png',
  },
  {
    title: 'Popeye Meets The Sailor',
    poster: 'images/posters/popeye-meets-sinbad.png',
  },
  {
    title: 'Sagebrush Trail',
    poster: 'images/posters/sagebrush-trail.jpg',
  },
  {
    title: 'Santa Claus Conquers The Martians',
    poster: 'images/posters/santa-claus-conquers-the-martians.jpg',
  },
  {
    title: 'The Dance of Life',
    poster: 'images/posters/the-dance-of-life.jpg',

  },
  {
    title: 'The Great Flamarion',
    poster: 'images/posters/the-great-flamarion.jpg',
  },
  {
    title: 'The Man with The Golden Arm',
    poster: 'images/posters/the-man-with-the-golden-arm.jpg',
  },
];

const DESCRIPTION_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

const teamFilm = {
  ACTORS: ['Jason Statham', 'Bruce Willis', 'Johnny Depp', 'Keanu Reeves', 'Dwayne Johnson', 'Vin Diesel', 'Tom Cruise', 'Leonardo DiCaprio'],
  PRODUCER: ['Steven Spielberg', 'Peter Jackson', 'Martin Scorsese', 'Christopher Nolan', 'Steven Soderbergh', 'Ridley Scott', 'Quentin Tarantino', 'Michael Mann', 'James Cameron'],
  SCREENWRITERS: ['Quentin Tarantino', 'Nora Ephron', 'Charlie Kaufman', 'Francis Ford Coppola', ' William Goldman', 'Woody Allen', ' Ernest Lehman'],
};

const GENRES = ['Musical', 'Western', 'Cartoon', 'Mystery', 'Horror', 'Comedy', 'Fantasy', 'Drama'];

const COUNTRIES = ['China', 'Mali', 'United States', 'France', 'China', 'India', 'Nigeria', 'Mauritania', 'Montserrat', 'New Caledonia', 'Mexico'];

const AGE_RATINGS = ['0+', '6+', '12+', '16+', '18+'];

const getDuration = () => {
  return getRandomIntegerNumber(MinCount.MINUTES, MaxCount.MINUTES);
};

const getRating = (max) => {
  return (Math.random() * max).toFixed(1);
};

const getCommentsCount = (min, max) => {
  return getRandomIntegerNumber(min, max);
};

const getGenres = () => {
  const items = [];
  const max = getRandomIntegerNumber(MinCount.GENRES, MaxCount.GENRES);
  for (let i = 0; i < max; i++) {
    items.push(getRandomArrayItem(GENRES));
  }
  return items;
};

export const MinCount = {
  RATING: 0,
  HOURS: 1,
  MINUTES: 70,
  DESCRIPTION_COUNT: 1,
  COMMENTS: 0,
  GENRES: 1,
  WRITERS: 1,
  ACTORS: 3,
};

export const MaxCount = {
  RATING: 10,
  HOURS: 3,
  MINUTES: 200,
  DESCRIPTION_COUNT: 5,
  DESCRIPTION_LENGTH: 140,
  COMMENTS: 5,
  GENRES: 4,
  WRITERS: 4,
  ACTORS: 5,
};

export const CardCount = {
  ALL: 22,
  TOP_RATED: 2,
  MOST_COMMENTED: 2,
};

export const generateFilm = () => {
  const film = getRandomArrayItem(FILMS);
  const title = film.title;
  const poster = film.poster;
  const originalTitle = film.title;
  const arrDescriptionFull = DESCRIPTION_TEXT.split('. ');
  const descriptionFull = getRandomQuantityElements(arrDescriptionFull, MinCount.DESCRIPTION_COUNT, arrDescriptionFull.length, '. ');
  const genres = getGenres(GENRES);
  const commentsCount = getCommentsCount(MinCount.COMMENTS, MaxCount.COMMENTS);
  const dateRelease = generateRandomDate();

  return {
    poster,
    title,
    originalTitle,
    rating: getRating(MaxCount.RATING),
    ageRating: getRandomArrayItem(AGE_RATINGS),
    dateRelease,
    duration: getDuration(),
    genres,
    genreFirst: genres[0],
    description: descriptionFull,
    comments: generateCommentsList(commentsCount),
    producer: getRandomArrayItem(teamFilm.PRODUCER),
    writers: getRandomQuantityElements(teamFilm.SCREENWRITERS, MinCount.WRITERS, MaxCount.WRITERS, ', '),
    actors: getRandomQuantityElements(teamFilm.ACTORS, MinCount.ACTORS, MaxCount.ACTORS, ', '),
    countries: getRandomArrayItem(COUNTRIES),
    isFavorite: generateRandomBoolean(),
    isAtWatchlist: generateRandomBoolean(),
    isWatched: generateRandomBoolean(),
  };
};
