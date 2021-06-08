import AbstractView from './abstract.js';

const createNavigationTemplate = (films) => {
  return `<nav class="main-navigation">
  </nav>`;
};

export default class Navigation extends AbstractView {
  constructor(films) {
    super();
    this._films = films;
  }
  getTemplate() {
    return createNavigationTemplate(this._films);
  }
}
