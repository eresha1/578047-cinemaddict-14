
// import {getUsersRank} from "../utils/common.js";
// import {getObjectElementsGenres, getTopGenre} from "../utils/get-genres.js";
// import {GENRES} from './film.js';


// export const generateStatistics = (films) => {
//   const totalWatchedMovies = films.filter((film) => film.isWatched);
//   const totalDuration = totalWatchedMovies.map((film) => film.duration).reduce((a, b) => a + b);
//   const arrGenre = totalWatchedMovies.map((film) => film.genres);
//   const topGenre = getTopGenre(getObjectElementsGenres(GENRES, arrGenre));
//   return {
//     rank: getUsersRank(totalWatchedMovies),
//     totalMovies: totalWatchedMovies.length,
//     totalDuration,
//     topGenre
//   };
// };
