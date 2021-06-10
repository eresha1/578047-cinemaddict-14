import AbstractView from './abstract.js';

const createButtonShowMoreTemplate = () => {
  return `<button class="films-list__show-more">
  Show more
  </button>`;
};

export default class buttonShowMore extends AbstractView {
  constructor() {
    super();

    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createButtonShowMoreTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.clickButtonMore();
  }

  setClickHandler(callback) {
    this._callback.clickButtonMore = callback;
    this.getElement().addEventListener('click', this._clickHandler);
  }
}
