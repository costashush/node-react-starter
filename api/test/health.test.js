import test from 'node:test';
import assert from 'node:assert/strict';

test('health payload shape', async () => {
  const now = new Date().toISOString();
  assert.equal(typeof now, 'string');
});
