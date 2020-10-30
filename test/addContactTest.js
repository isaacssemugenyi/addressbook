const { assert } = require('chai');
const addNewContact = require('../features/addContact');

describe('Recursive Factorial', () => {
  const newContact = addNewContact;
  // Failing test
  it('Failing test', () => {
    assert.equal(newContact(2), 0);
  });

  //   Checks if number < 0 returns a string
  it('factorial(-5) is String', () => {
    assert.isString(newContact(-5));
  });
});