import Ember from 'ember';
import ENV from 'alt-quizlet-ui/config/environment';

export default Ember.Route.extend({
  model() {
    this.get('store').query('set', {
      client_id: ENV.APP.client_id,
      q: 'finance'
    })
  }
});
