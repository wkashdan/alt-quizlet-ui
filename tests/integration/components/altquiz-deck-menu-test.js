import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('altquiz-deck-menu', 'Integration | Component | altquiz deck menu', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{altquiz-deck-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#altquiz-deck-menu}}
      template block text
    {{/altquiz-deck-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
