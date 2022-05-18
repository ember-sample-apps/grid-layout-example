import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | members/john', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:members/john');
    assert.ok(route);
  });
});
