import {getFullDateFormat, runtimeAdapter, getCommentDateFormat} from '../utils/time-format.js';
import {COMMENTS_EMOTION} from '../utils/const.js';

const createGenresMarkup = (genres) => {
  return genres
    .map((genre) => {
      return `<span class="film-details__genre">${genre}</span>`;
    })
    .join('\n');
};

const createEmojiTemplate = (names) => {
  return names.map((name) => {
    return (
      `<input
        class="film-details__emoji-item visually-hidden"
        name="comment-emoji"
        type="radio"
        id="emoji-${name}"
        value="${name}"
      >
      <label class="film-details__emoji-label" for="emoji-${name}">
        <img src="images/emoji/${name}.png" width="30" height="30" alt="emoji">
      </label>`
    );
  }).join('\n');
};

const createCommentsTemplate = (comments) => {
  return comments.map((comment) => {
    const {text, author, emodjies, date} = comment;
    const dateFormat = getCommentDateFormat(date);
    return (
      `<li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="images/emoji/${emodjies}.png" width="55" height="55" alt="emoji-{emotion}">
              </span>
              <div>
                <p class="film-details__comment-text">${text}</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">${author}</span>
                  <span class="film-details__comment-day">${dateFormat}</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>`
    );
  }).join('\n');
};

export const createFilmPopupTemplate = (film) => {
  const {title, originalTitle, rating, ageRating, dateRelease, duration, genres, poster, description, writers, producer, actors, countries,  comments, isFavorite, isAtWatchlist, isWatched} = film;

  const releaseFullFormat = getFullDateFormat(dateRelease);
  const durationFormat = runtimeAdapter(duration);
  const genresCount = genres.length > 1 ? 'Genres' : 'Genre';
  const isChecked = (status) => {
    return status ? 'checked' : '';
  };
  const commentsLength = comments.length === 1 ? 'comment ' : 'comments ';


  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./${poster}" alt="">

          <p class="film-details__age">${ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${originalTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${producer}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${releaseFullFormat}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${durationFormat}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${countries}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genresCount}</td>
              <td class="film-details__cell">
               ${createGenresMarkup(genres)}
            </tr>
          </table>

          <p class="film-details__film-description">
          ${description}.
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isChecked(isAtWatchlist)}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isChecked(isWatched)}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isChecked(isFavorite)}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">${commentsLength}<span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">
         ${createCommentsTemplate(comments)}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
         ${createEmojiTemplate(COMMENTS_EMOTION)}
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};
