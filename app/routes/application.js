import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    this.get('store').findAll('set', {include: 'terms'});
  }
});
