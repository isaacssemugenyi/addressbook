const { assert } = require('chai');
const { newContact } = require('../features/addContact');
const sinon = require('sinon');
const faker = require('faker');

describe('Adding A Contact', () => {
  it('checks the newContact function', () => {
    assert.equal(newContact({ name: 'Alice', phone: 790059046 }));
  });
});