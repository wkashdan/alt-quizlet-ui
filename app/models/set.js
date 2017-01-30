import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  termCount: DS.attr(),
  descriptiption: DS.attr(),
  terms: DS.hasMany()
});
