const { assert , expect } = require('chai');
const JSONfile = require('../addressbook.json');
const { readAllContacts } = require('../features/readAllContacts');
const sinon = require('sinon');

describe('Reading a Contact', () => {
  const readContact = readAllContacts;
  
  // const fake = sinon.fake.yields(null, { 'name': 'Alice', 'phone': 7959959549 });
  // sinon.replace(JSONfile, fake);

  it('should getAllContacts 1', (done) => {
    readContact(fake);
        done();
    });
});


