import {Filters} from './const.js';

const getFilterCount = (name, films) => {
  switch (name) {
    case 'Favorites':
      return films.filter((film) => film.isFavorite).length;
    case 'History':
      return films.filter((film) => film.isWatched).length;
    case 'Watchlist':
      return films.filter((film) => film.isAtWatchlist).length;
    default: return 0;
  }
};

export const generateFilters = (films) => {
  return Filters.map((it) => {
    return {
      title: it.title,
      link: it.link,
      count: getFilterCount(it.title, films),
    };
  });
};
