import {createProfileTemplate} from './view/profile.js';
import {createNavigationTemplate} from './view/navigation.js';
import {createSortTemplate} from './view/sort.js';
import {createFilmsSectionTemplate} from './view/films-section.js';
import {createFooterStatisticsTemplate} from './view/footer-statistics.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createFilmTemplate} from './view/film.js';
import {createFilmPopupTemplate} from './view/film-popup.js';
import {generateFilm} from './mock/film.js';
import {FilmCount} from './utils/const.js';

const films = new Array(FilmCount.ALL).fill('').map(generateFilm);

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

const filmsListElement = filmsSectionElement.querySelector('.films-list__container[data-list="all-movies"]');
const filmsListRatedElement = filmsSectionElement.querySelector('.films-list__container[data-list="top-rated"]');
const filmsListCommentedElement = filmsSectionElement.querySelector('.films-list__container[data-list="most-commented"]');

for (let i = 0; i < FilmCount.ALL; i++) {
  render(filmsListElement, createFilmTemplate(films[i]), 'beforeend');
}

// render(document.body, createFilmPopupTemplate(films[0]), 'beforeend');

