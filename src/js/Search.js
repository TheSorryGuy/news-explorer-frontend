export default class Search {
  constructor(input, container, creator) {
    this.input = input;
    this.container = container;
    this.creator = creator;
  }

  getArticles(initialList) {
    initialList.forEach(article => {
      this.creator.create(article);
    });
  }
}
