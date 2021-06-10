import ProfileView from './view/profile.js';
import NavigationView from './view/navigation.js';
import FiltersView from './view/filters.js';
import NavigationStatsView from './view/navigation-stats.js';
import SortView from './view/sort.js';
import FooterStatisticsView from './view/footer-statistics.js';
import FilmsListView from './view/films-list.js';
import FilmsSectionView from './view/films-section.js';
import FilmsContainerView from './view/films-container.js';
import NoFilmsView from './view/no-films.js';
import buttonShowMoreView from './view/show-more.js';
import FilmView from './view/film.js';
import FilmPopupView from './view/film-popup.js';
import {generateFilm} from './mock/film.js';
import {FilmCount, ShowingFilmsCount} from './utils/const.js';
import {render, RenderPosition} from './utils/render.js';

const films = new Array(FilmCount.ALL).fill('').map(generateFilm);
const moviesInside = films.length;

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');

render(footerElement, new FooterStatisticsView(moviesInside).getElement(), RenderPosition.BEFOREEND);

render(headerElement, new ProfileView(films).getElement(), RenderPosition.BEFOREEND);

const navigationComponent = new NavigationView();
render(mainElement, navigationComponent.getElement(), RenderPosition.AFTERBEGIN);

render(navigationComponent.getElement(), new FiltersView(films).getElement(), RenderPosition.BEFOREEND);

render(navigationComponent.getElement(), new NavigationStatsView().getElement(), RenderPosition.BEFOREEND);

render(mainElement, new SortView().getElement(), RenderPosition.BEFOREEND);

const filmsSectionComponent = new FilmsSectionView();
render(mainElement, filmsSectionComponent.getElement(), RenderPosition.BEFOREEND);

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

const renderListAll = (container, films) => {
  const filmsListComponent = new FilmsListView();

  const filmsListContainerComponent = new FilmsContainerView();

  if (films.length === 0) {
    render(container, new NoFilmsView().getElement(), RenderPosition.BEFOREEND);
    return;
  }

  render(container, filmsListComponent.getElement(), RenderPosition.BEFOREEND);
  render(filmsListComponent.getElement(), filmsListContainerComponent.getElement(), RenderPosition.BEFOREEND);

  for (let i = 0; i < Math.min(ShowingFilmsCount.FILM_COUNT_PER_STEP, films.length); i++) {
    renderFilm(filmsListContainerComponent.getElement(),  films[i]);
  }

  if (films.length > ShowingFilmsCount.FILM_COUNT_PER_STEP) {
    let renderedFilmCount = ShowingFilmsCount.FILM_COUNT_PER_STEP;

    const buttonShowMoreComponent = new buttonShowMoreView();
    render(filmsListComponent.getElement(), buttonShowMoreComponent.getElement(), RenderPosition.BEFOREEND);

    buttonShowMoreComponent.getElement().addEventListener('click', (evt) => {
      evt.preventDefault();
      films
        .slice(renderedFilmCount, renderedFilmCount + ShowingFilmsCount.FILM_COUNT_PER_STEP)
        .forEach((film) =>  renderFilm(filmsListContainerComponent.getElement(), film));

      renderedFilmCount += ShowingFilmsCount.FILM_COUNT_PER_STEP;

      if (renderedFilmCount >= films.length) {
        buttonShowMoreComponent.getElement().remove();
        buttonShowMoreComponent.removeElement();
      }
    });
  }
};

const renderListExtra = (container, films) => {
  const filmsListExtraContainerComponent = new FilmsContainerView();

  render(container, filmsListExtraContainerComponent.getElement(), RenderPosition.BEFOREEND);

  const showingFilmsCount = ShowingFilmsCount.EXTRA_FILM;
  films.slice(0, showingFilmsCount)
    .forEach((film) => {
      renderFilm(filmsListExtraContainerComponent.getElement(), film);
    });
};

renderListAll(filmsSectionComponent.getElement(), films);

const filmsListRatedComponent = new FilmsListView('--extra', 'Top rated');
render(filmsSectionComponent.getElement(), filmsListRatedComponent.getElement(), RenderPosition.BEFOREEND);
renderListExtra(filmsListRatedComponent.getElement(), films);

const filmsListCommentedComponent = new FilmsListView('--extra', 'Most commented');
render(filmsSectionComponent.getElement(), filmsListCommentedComponent.getElement(), RenderPosition.BEFOREEND);
renderListExtra(filmsListCommentedComponent.getElement(), films);

