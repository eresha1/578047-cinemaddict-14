import AbstractView from './abstract.js';

const createFooterStatisticsTemplate = (number) => {
  return `<p>
  ${number} movies inside
  </p>`;
};

export default class FooterStatistics extends AbstractView {
  constructor(number) {
    super();
    this._number = number;
  }
  getTemplate() {
    return createFooterStatisticsTemplate(this._number);
  }
}
