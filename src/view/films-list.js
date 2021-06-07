import {FilmsSectionsTitles} from '../utils/const.js';

const createFilmsSectionMarkup = (data) => {
  const {title, type, dataAtr} = data;
  const upcomingTitle = type === 'upcoming';
  const classTitle = upcomingTitle ? 'films-list' : 'films-list films-list--extra';
  const classhidden = upcomingTitle ? 'films-list__title visually-hidden' : 'films-list__title';
  const dataAttribute = `data-list="${dataAtr}"`;

  return `<section class="${classTitle}">
    <h2 class="${classhidden}">${title}</h2>
    <div class="films-list__container" ${dataAttribute}>
    </div>
  </section>`;
};

export const createFilmsListTemplate = () => {
  return FilmsSectionsTitles.map((item) =>
    createFilmsSectionMarkup(item)).join('\n');
};
