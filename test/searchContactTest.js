const { assert } = require('chai');
const {checkContact} = require('../features/searchAContact');

describe('Searching A Contact', () => {
  
  // Testing searching functionality
  it('checks the checkContact function', () => {
    assert.equal(checkContact({ name: 'Alice' }));
  });
});
