import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.random.words();
  },
  termCount() {
    return 10
  },
  desciption() {
    return faker.random.words();
  },

  afterCreate(set, server) {
    let terms = server.createList('term', 15, {set});
  }
});
