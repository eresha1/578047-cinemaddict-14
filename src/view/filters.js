import {Filters} from '../utils/const.js';

const createFilterItemMarkup = (item, isActive) => {
  const {title, link} = item;
  const isCount = title !==  'All movies' ? '<span class="main-navigation__item-count">8</span>' : '' ;

  return `<a href="#${link}" class="main-navigation__item ${isActive ? 'main-navigation__item--active' : ''}">${title}
  ${isCount}
    </a>`;
};

const createFiltersMarkup = () => {
  return Filters.map((item, id) => createFilterItemMarkup(item, id === 0)).join('\n');
};

export const createFiltersTemplate = () => {
  return `<div class="main-navigation__items">
  ${createFiltersMarkup()}
  </div>`;
};
