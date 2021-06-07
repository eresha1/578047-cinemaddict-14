import {generateFilters} from '../utils/filters.js';

const createFilterItemMarkup = (item, isActive) => {
  const {title, link, count} = item;
  const isCount = title !== 'All movies' ? `<span class="main-navigation__item-count">${count}</span>` : '' ;

  return `<a href="#${link}" class="main-navigation__item ${isActive ? 'main-navigation__item--active' : ''}">${title}
  ${isCount}
    </a>`;
};

const createFiltersMarkup = (films) => {
  const filters = generateFilters(films);
  return filters.map((item, id) => createFilterItemMarkup(item, id === 0)).join('\n');
};

export const createFiltersTemplate = (films) => {
  return `<div class="main-navigation__items">
  ${createFiltersMarkup(films)}
  </div>`;
};
