const { assert } = require('chai');
const { newContact } = require('../features/addContact');
const sinon = require('sinon');

describe('Adding A Contact', () => {

  // Testing Adding functionality
  it('checks the newContact function', () => {
    assert.equal(newContact({ name: 'Alice', phone: 790059046 }));
  });
});