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
// import FilmPopupView from './view/film-popup.js';
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

const navigationComponent = new NavigationView(films);
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

for (let i = 0; i < Math.min(FilmCount.FILM_COUNT_PER_STEP, films.length); i++) {
  render(filmsListContainerComponent.getElement(), new FilmView(films[i]).getElement(), RenderPosition.BEFOREEND);
}
console.log(filmsSectionComponent.getElement() );

if (films.length > FilmCount.FILM_COUNT_PER_STEP) {
  let renderedFilmCount = FilmCount.FILM_COUNT_PER_STEP;

  const buttonShowMoreComponent = new buttonShowMoreView();
  render(filmsListComponent.getElement(), buttonShowMoreComponent.getElement(), RenderPosition.BEFOREEND);

  const showMoreButton = filmsListComponent.getElement().querySelector('.films-list__show-more');

  showMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + FilmCount.FILM_COUNT_PER_STEP)
      .forEach((film) =>  render(filmsListContainerComponent.getElement(), new FilmView(film).getElement(), RenderPosition.BEFOREEND));

    renderedFilmCount += FilmCount.FILM_COUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      showMoreButton.remove();
    }
  });
}

for (let i = 0; i < FilmCount.TOP_RATED; i++) {
  render(filmsListContainerRatedComponent.getElement(), new FilmView(films[i]).getElement(), RenderPosition.BEFOREEND);
}

for (let i = 0; i < FilmCount.MOST_COMMENTED; i++) {
  render(filmsListContainerCommentedComponent.getElement(), new FilmView(films[i]).getElement(), RenderPosition.BEFOREEND);
}


// render(document.body, new FilmPopupView(films[0]).getElement(), 'beforeend');
