import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | query-selector', function(hooks) {
  setupRenderingTest(hooks);

  test('it works', async function(assert) {
    await render(hbs`
      <div class="portal" data-test></div>
      {{#in-element (query-selector "div.portal")}}
        div.portal
      {{/in-element}}
    `);

    assert.dom('[data-test]').hasText('div.portal');

    await render(hbs`
      <div id="portal" data-test></div>
      {{#in-element (query-selector "#portal")}}
        #portal
      {{/in-element}}
    `);

    assert.dom('[data-test]').hasText('#portal');
  });
});
