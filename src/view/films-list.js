import AbstractView from './abstract.js';

const createFilmsListTemplate = (extra = '', title = 'All movies. Upcoming') => {
  return  `<section class="films-list${extra}">
    <h2 class="films-list__title ${extra ? '' : 'visually-hidden'}">${title}</h2>
  </section>`;
};

export default class FilmsList extends AbstractView {
  constructor(extra, title) {
    super();
    this._extra = extra;
    this._title = title;
  }

  getTemplate() {
    return createFilmsListTemplate(this._extra, this._title);
  }
}
