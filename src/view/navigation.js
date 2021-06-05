import {createFiltersTemplate} from './filters.js';

export const createNavigationTemplate = () => {
  return `<nav class="main-navigation">
  ${createFiltersTemplate()}
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};
