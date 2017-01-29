import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aq-menu-item', 'Integration | Component | aq menu item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{aq-menu-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#aq-menu-item}}
      template block text
    {{/aq-menu-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
