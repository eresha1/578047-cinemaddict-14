import {FilmsSection} from '../utils/const.js';
import {createButtonShowMoreTemplate} from './show-more.js';
import {createFilmTemplate} from './film.js';

const getCountFilmsMarkup = (count) => {
  let countFilmsMarkup = '';
  for(let i = 0; i < count; i++) {
    countFilmsMarkup += createFilmTemplate();
  }
  return countFilmsMarkup;
};

const createFilmsSectionMarkup = (data) => {
  const {title, type, count} = data;
  const upcomingTitle = type === 'upcoming';
  const classTitle = upcomingTitle ? 'films-list' : 'films-list films-list--extra';
  const classhidden = upcomingTitle ? 'films-list__title visually-hidden' : 'films-list__title';
  const isButton = upcomingTitle ? createButtonShowMoreTemplate() : '';


  return `<section class="${classTitle}">
    <h2 class="${classhidden}">${title}</h2>
    <div class="films-list__container">
    ${getCountFilmsMarkup(count)}
    </div>
    ${isButton}
  </section>`;
};

export const createFilmsListTemplate = () => {
  return FilmsSection.map((item) =>
    createFilmsSectionMarkup(item)).join('\n');
};
