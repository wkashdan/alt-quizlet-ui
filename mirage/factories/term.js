import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  term: faker.random.word(),
  definition: faker.random.words()
});
