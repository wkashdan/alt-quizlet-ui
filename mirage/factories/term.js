import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  term() {
    return faker.random.word();
  },
  definition() {
    return faker.random.words();
  }
});
