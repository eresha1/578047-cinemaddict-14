import {createFiltersTemplate} from './filters.js';

export const createNavigationTemplate = (films) => {
  return `<nav class="main-navigation">
  ${createFiltersTemplate(films)}
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};
