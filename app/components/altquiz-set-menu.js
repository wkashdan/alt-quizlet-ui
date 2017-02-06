import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onItemClick: function(item) {
      console.log('Handling item click in altquiz-set-menu');
      this.sendAction('onItemClick', item);
    }
  }
});
