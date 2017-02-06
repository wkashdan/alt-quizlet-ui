import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onItemClick: function(set){
      console.log('handling event in controller');
      console.log(set);
      this.transitionToRoute('set.term', set);
    }
  }
});
