import AbstractView from './abstract.js';
import {SORT_TITLE} from '../utils/const.js';

const createSortItemMarkup = (item, isActive) => {
  return `<li><a href="#" class="sort__button ${isActive ? 'sort__button--active' : ''}">${item}</a></li>`;
};

const createSortMarkup = () => {
  return  SORT_TITLE.map((item, id) => createSortItemMarkup(item, id === 0)).join('\n');
};

const createSortTemplate = () => {
  return `<ul class="sort">
  ${createSortMarkup()}
</ul>`;
};

export default class Sort extends AbstractView {
  getTemplate() {
    return createSortTemplate();
  }
}
