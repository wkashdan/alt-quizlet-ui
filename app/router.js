import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('set', {path: '/'}, function() {
    this.route('term', {path: 'set/:term_id'});
  });
});

export default Router;
