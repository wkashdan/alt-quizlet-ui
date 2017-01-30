import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: faker.random.words(),
  termCount: 10,
  desciption: faker.random.words(),

  afterCreate(set, server) {
    server.createList('term', 15, {set});

  }
});
