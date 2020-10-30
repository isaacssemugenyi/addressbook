const { assert } = require('chai');
const { deleteContactFromFile } = require('../features/deleteContact');

describe('Deleting A Contact', () => {
  const deleteContact = deleteContactFromFile;
  
  // Testing Deleting functionality
  it('checks the deleteContact function', () => {
    assert.equal(deleteContact({ name: 'Alice' }));
  });
});
