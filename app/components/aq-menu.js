import Ember from 'ember';

export default Ember.Component.extend({

  //====================================
  // Style Properties
  //====================================

  classNames: ['aq-menu'],
  tagName: 'ul',

  //====================================
  // Required Properties
  //====================================

  items: null,
  displayAttrName: null,

  //====================================
  // Computed Properties
  //====================================
  itemsWDisplayAttrName: Ember.computed('displayAttrName', 'items.[]', function() {
    //adds to property to each item called displayName
    return this.get('items').map((item) => {
      let attrName = this.get('displayAttrName');
      item.set('displayValue', item.get(attrName));
      return item;
    });
  }),

  //====================================
  // Closure Actions
  //====================================

  actions: {
    onItemClick(item) {
      this.sendAction('onItemClick', item);
    }
  }
});
