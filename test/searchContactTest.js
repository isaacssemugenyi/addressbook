const { assert } = require('chai');
const {checkContact} = require('../features/searchAContact');

describe('Searching A Contact', () => {
  // Failing test
  it('checks the checkContact function', () => {
    assert.equal(checkContact({ name: 'Alice' }));
  });
});
