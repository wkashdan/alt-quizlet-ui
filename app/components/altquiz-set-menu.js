import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['altquiz-set-menu'],

  click(event) {
    console.log(this.get('sets'));
  }
});
