import AbstractView from './abstract.js';

const createNavigationStatsTemplate = () => {
  return '<a href="#stats" class="main-navigation__additional">Stats</a>';
};

export default class NavigationStats extends AbstractView {
  getTemplate() {
    return createNavigationStatsTemplate();
  }
}

