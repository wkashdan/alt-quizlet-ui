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
  itemsWDisplayAttrName: Ember.computed('displayAttrName', 'items.[]', function() {
    return this.get('items').map((item) => {
      let attrName = this.get('displayAttrName');
      item.set('displayValue', item.get(attrName));
      return item;
    });
  })
});
