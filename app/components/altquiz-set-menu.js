import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['altquiz-set-menu'],
  tagName: 'ul',

  click(event) {
    console.log(this.get('sets'));
  }
});
