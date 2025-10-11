import { module, test } from 'qunit';
import { setupTest } from 'web-app/tests/helpers';

module('Unit | Route | fax-my-rep', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:fax-my-rep');
    assert.ok(route);
  });
});
