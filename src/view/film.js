import AbstractView from './abstract.js';
import {getShortDateFormat, runtimeAdapter} from '../utils/time-format.js';
import {getShortDescription} from '../utils/common.js';
import {DESCRIPTION_LENGTH} from '../utils/const.js';

const createFilmTemplate = (film) => {
  const {title, rating, dateRelease, duration, genres, poster, description, comments, isFavorite, isAtWatchlist, isWatched} = film;
  const releaseShortFormat = getShortDateFormat(dateRelease);
  const durationFormat = runtimeAdapter(duration);
  const shortDescription = getShortDescription(description, DESCRIPTION_LENGTH);
  const commentsLength = comments.length < 2 ? `${comments.length} comment` : `${comments.length} comments`;
  const isActive = (status) => {
    return status ? 'film-card__controls-item--active' : '';
  };

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${releaseShortFormat}</span>
    <span class="film-card__duration">${durationFormat}</span>
    <span class="film-card__genre">${genres[0]}</span>
  </p>
  <img src="./${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${shortDescription}</p>
  <a class="film-card__comments">${commentsLength}</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isActive(isAtWatchlist)}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isActive(isWatched)}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${isActive(isFavorite)}" type="button">Mark as favorite</button>
  </div>
</article>`;
};

export default class Film extends AbstractView {
  constructor(film) {
    super();
    this._film = film;

    this._popupOpenHandler = this._popupOpenHandler.bind(this);
  }
  getTemplate() {
    return createFilmTemplate(this._film);
  }

  _popupOpenHandler(evt) {
    evt.preventDefault();
    this._callback.clickPopupOpen();
  }

  setPopupOpenHandler(callback) {
    this._callback.clickPopupOpen = callback;
    this.getElement().querySelector('.film-card__poster').addEventListener('click', this._popupOpenHandler);
    this.getElement().querySelector('.film-card__title').addEventListener('click', this._popupOpenHandler);
    this.getElement().querySelector('.film-card__comments').addEventListener('click', this._popupOpenHandler);
  }
}
