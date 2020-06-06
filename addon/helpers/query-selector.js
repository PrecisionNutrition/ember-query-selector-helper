import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

export default helper(function querySelector([selector], { strict = true }) {
  assert(
    `Expected 'selector' to be a string, but was ${selector}`,
    typeof selector === 'string'
  );

  const element = document.querySelector(selector);

  if (strict) {
    assert(`Can not find any element for the selector '${selector}'`, element);
  }

  return element;
});
