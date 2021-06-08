import ProfileView from './view/profile.js';
import NavigationView from './view/navigation.js';
import FiltersView from './view/filters.js';
import NavigationStatsView from './view/navigation-stats.js';
import SortView from './view/sort.js';
import FooterStatisticsView from './view/footer-statistics.js';
import FilmsListView from './view/films-list.js';
import FilmsSectionView from './view/films-section.js';
import FilmsContainerView from './view/films-container.js';
import buttonShowMoreView from './view/show-more.js';
import FilmView from './view/film.js';
import FilmPopupView from './view/film-popup.js';
import {generateFilm} from './mock/film.js';
import {FilmCount} from './utils/const.js';
import {render, RenderPosition} from './utils/render.js';

const films = new Array(FilmCount.ALL).fill('').map(generateFilm);
const moviesInside = films.length;

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

const profileComponent = new ProfileView(films);
render(headerElement, profileComponent.getElement(), RenderPosition.BEFOREEND);

const navigationComponent = new NavigationView();
render(mainElement, navigationComponent.getElement(), RenderPosition.AFTERBEGIN);

const filtersComponent = new FiltersView(films);
render(navigationComponent.getElement(), filtersComponent.getElement(), RenderPosition.BEFOREEND);

const navigationStatsComponent = new NavigationStatsView();
render(navigationComponent.getElement(), navigationStatsComponent.getElement(), RenderPosition.BEFOREEND);

const sortComponent = new SortView();
render(mainElement, sortComponent.getElement(), RenderPosition.BEFOREEND);

const footerStatisticComponent = new FooterStatisticsView(moviesInside);
render(footerElement, footerStatisticComponent.getElement(), RenderPosition.BEFOREEND);

const filmsSectionComponent = new FilmsSectionView();
render(mainElement, filmsSectionComponent.getElement(), RenderPosition.BEFOREEND);


const filmsListComponent = new FilmsListView();
const filmsListContainerComponent = new FilmsContainerView();

render(filmsSectionComponent.getElement(), filmsListComponent.getElement(), RenderPosition.BEFOREEND);
render(filmsListComponent.getElement(), filmsListContainerComponent.getElement(), RenderPosition.BEFOREEND);

const filmsListRatedComponent = new FilmsListView('--extra', 'Top rated');
const filmsListContainerRatedComponent = new FilmsContainerView();

render(filmsSectionComponent.getElement(), filmsListRatedComponent.getElement(), RenderPosition.BEFOREEND);
render(filmsListRatedComponent.getElement(), filmsListContainerRatedComponent.getElement(), RenderPosition.BEFOREEND);

const filmsListCommentedComponent = new FilmsListView('--extra', 'Most commented');
const filmsListContainerCommentedComponent = new FilmsContainerView();

render(filmsSectionComponent.getElement(), filmsListCommentedComponent.getElement(), RenderPosition.BEFOREEND);
render(filmsListCommentedComponent.getElement(), filmsListContainerCommentedComponent.getElement(), RenderPosition.BEFOREEND);


const renderFilm = (filmListElement, film) => {
  const filmComponent = new FilmView(film);
  const filmPopupComponent = new FilmPopupView(film);

  const escPressHandler = (evt) => {
    const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

    if (isEscKey) {
      evt.preventDefault();
      replacePopupToCard();
    }
  };

  const replaceCardToPopup = () => {
    document.body.classList.add('hide-overflow');
    document.body.appendChild(filmPopupComponent.getElement());
    document.addEventListener('keydown', escPressHandler);
  };

  const replacePopupToCard = () => {
    document.body.classList.remove('hide-overflow');
    document.body.removeChild(filmPopupComponent.getElement());
    document.removeEventListener('keydown', escPressHandler);
  };

  const filmCardClickHandler = () => {
    replaceCardToPopup();
  };

  const posterElement = filmComponent.getElement().querySelector('.film-card__poster');
  const titleElement = filmComponent.getElement().querySelector('.film-card__title');
  const commentsElement = filmComponent.getElement().querySelector('.film-card__comments');

  titleElement.addEventListener('click', filmCardClickHandler);
  posterElement.addEventListener('click', filmCardClickHandler);
  commentsElement.addEventListener('click', filmCardClickHandler);

  const closeButtonElement = filmPopupComponent.getElement().querySelector('.film-details__close-btn');

  closeButtonElement.addEventListener('click', () => replacePopupToCard());

  render(filmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);
};

for (let i = 0; i < Math.min(FilmCount.FILM_COUNT_PER_STEP, films.length); i++) {
  renderFilm(filmsListContainerComponent.getElement(),  films[i]);
}

if (films.length > FilmCount.FILM_COUNT_PER_STEP) {
  let renderedFilmCount = FilmCount.FILM_COUNT_PER_STEP;

  const buttonShowMoreComponent = new buttonShowMoreView();
  render(filmsListComponent.getElement(), buttonShowMoreComponent.getElement(), RenderPosition.BEFOREEND);

  const showMoreButton = filmsListComponent.getElement().querySelector('.films-list__show-more');

  showMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + FilmCount.FILM_COUNT_PER_STEP)
      .forEach((film) =>  renderFilm(filmsListContainerComponent.getElement(), film));

    renderedFilmCount += FilmCount.FILM_COUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      showMoreButton.remove();
    }
  });
}

for (let i = 0; i < FilmCount.TOP_RATED; i++) {
  renderFilm(filmsListContainerRatedComponent.getElement(), films[i]);
}

for (let i = 0; i < FilmCount.MOST_COMMENTED; i++) {
  renderFilm(filmsListContainerCommentedComponent.getElement(), films[i]);
}
