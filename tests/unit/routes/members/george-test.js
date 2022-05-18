import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | members/george', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:members/george');
    assert.ok(route);
  });
});
