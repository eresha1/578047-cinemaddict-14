import AbstractView from './abstract.js';

const createButtonShowMoreTemplate = () => {
  return `<button class="films-list__show-more">
  Show more
  </button>`;
};

export default class buttonShowMore extends AbstractView {
  getTemplate() {
    return createButtonShowMoreTemplate();
  }
}
