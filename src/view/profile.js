import AbstractView from './abstract.js';
import {getUsersRank} from '../utils/common.js';

const getMarkupProfile = (films) => {
  const userRank = getUsersRank(films);

  return userRank === '' ? '' : `<p class="profile__rating">${userRank}</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">`;
};

const createProfileTemplate = (films) => {
  return `<section class="header__profile profile">
${getMarkupProfile(films)}
</section>`;
};

export default class Profile extends AbstractView {
  constructor(films) {
    super();
    this._films = films;
  }
  getTemplate() {
    return createProfileTemplate(this._films);
  }
}
