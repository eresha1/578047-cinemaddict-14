
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector('.header');
render(headerElement, createProfileTemplate(), 'beforeend');

