import {createProfileTemplate} from './view/profile.js';
import {createNavigationTemplate} from './view/navigation.js';
import {createSortTemplate} from './view/sort.js';
import {createFilmsSectionTemplate} from './view/films-section.js';
import {createFooterStatisticsTemplate} from './view/footer-statistics.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createFilmPopupTemplate} from './view/film-popup.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

render(headerElement, createProfileTemplate(), 'beforeend');
render(mainElement, createNavigationTemplate(), 'beforeend');
render(mainElement, createSortTemplate(), 'beforeend');
render(mainElement, createFilmsSectionTemplate(), 'beforeend');
render(footerElement, createFooterStatisticsTemplate(), 'beforeend');

const filmsSectionElement = mainElement.querySelector('.films');

render(filmsSectionElement, createFilmsListTemplate(), 'beforeend');

render(document.body, createFilmPopupTemplate(), 'beforeend');

