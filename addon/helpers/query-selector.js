import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

const errorPrefix = 'ember-query-selector: ';

export default helper(function querySelector([selector], { optional = false }) {
  assert(
    `${errorPrefix}'selector' must be a string, but was ${selector}`,
    typeof selector === 'string'
  );

  const element = document.querySelector(selector);

  if (!optional) {
    assert(
      `${errorPrefix}can not find any element for the selector '${selector}'`,
      element
    );
  }

  return element;
});
