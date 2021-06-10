export const FilmCount = {
  ALL: 22,
  TOP_RATED: 2,
  MOST_COMMENTED: 2,
};

export const ShowingFilmsCount = {
  ON_START: 5,
  FILM_COUNT_PER_STEP: 5,
  EXTRA_FILM: 2,
};


export const FilmsSectionsTitles = [
  {
    title: 'All movies. Upcoming',
    dataAtr: 'all-movies',
    type: 'upcoming',
  },
  {
    title: 'Top rated',
    dataAtr: 'top-rated',
    type: 'extra',
  },
  {
    title: 'Most commented',
    dataAtr: 'most-commented',
    type: 'extra',
  },
];

export const Filters = [
  {
    title: 'All movies',
    link: 'all',
  },
  {
    title: 'Watchlist',
    link: 'watchlist',
  },
  {
    title: 'History',
    link: 'history',
  },
  {
    title: 'Favorites',
    link: 'favorites',
  },
];

export const SORT_TITLE = [
  'Sort by default',
  'Sort by date',
  'Sort by rating',
];

export const COMMENTS_EMOTION = [
  'smile',
  'sleeping',
  'puke',
  'angry',
];

export const DESCRIPTION_LENGTH = 140;
