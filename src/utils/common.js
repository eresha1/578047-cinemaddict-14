export const getShortDescription = (text, maxCount) => {
  return text.length <= maxCount ? text :
    text.substring(0, maxCount).trim() + '...';
};

export const getUsersRank = (films) => {
  const totalMoviesViewed = films.filter((film) => film.isWatched).length;
  switch (true) {
    case (totalMoviesViewed === 0):
      return '';

    case (totalMoviesViewed > 0 && totalMoviesViewed <= 10):
      return 'novice';

    case (totalMoviesViewed > 10 && totalMoviesViewed <= 20):
      return 'fan';

    case (totalMoviesViewed > 20):
      return 'movie buff';
  }
};
