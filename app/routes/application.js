import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    RSVP.hash({
      sets: this.get('store').findAll('set', {include: 'terms'})
    })
  }
});
