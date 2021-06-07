import {getUsersRank} from '../utils/common.js';

const getMarkupProfile = (films) => {
  const userRank = getUsersRank(films);

  return userRank === '' ? '' : `<p class="profile__rating">${userRank}</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">`;
};

export const createProfileTemplate = (films) => {
  return `<section class="header__profile profile">
${getMarkupProfile(films)}
</section>`;
};
