import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['aq-input'],

  keyPress(event) {
    this.get('keyPress')(event);
  }
});
