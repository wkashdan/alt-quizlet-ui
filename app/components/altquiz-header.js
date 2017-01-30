import Ember from 'ember';

export default Ember.Component.extend({

  /*

  Description: this component is a header component specifically
  for the AltQuiz Application

  */

  tagName: 'header',
  classNames: ['altquiz-header'],

  /*

  Passed In Attributes:

  - Name[string]: the title in the header

  */

  title: '',

  /*

  Actions:

  - searchDecks: action passed to aq-input to handle
  keyPress of text input, consumes keyPress event 

  */

  actions: {
    searchDecks: function(event) {
      console.log(event);
    }
  }

});
