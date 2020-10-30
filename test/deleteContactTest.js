const { assert } = require('chai');
const { deleteContactFromFile } = require('../features/deleteContact');

describe('Deleting A Contact', () => {
  const deleteContact = deleteContactFromFile;
  // Failing test
  it('checks the deleteContact function', () => {
    assert.equal(deleteContact({ name: 'Alice' }));
  });
});
