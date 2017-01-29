import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('altquiz-header', 'Integration | Component | altquiz header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{altquiz-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#altquiz-header}}
      template block text
    {{/altquiz-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
