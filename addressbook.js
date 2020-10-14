const inquirer = require('inquirer');
const fs = require('fs');

const readAllContacts = require('./readAllContacts')
const addNewContact = require('./addContact')
const searchContact = require('./searchAContact')
const deleteContact = require('./deleteContact')

inquirer.prompt([{
    type: 'rawlist',
    name: 'name',
    message: "What's your name?",
    choices: ['View all Contact', 'Add new Contact', 'Update a Contact', 'Search a Contact', 'Delete a Contact'],
    default: 'View all Contact'
  }])
  .then(answers => {
      switch(answers['name']){
        case 'View all Contact':
            readAllContacts("addressbook.json"); break;
        case 'Add new Contact':
            addNewContact(); break;
        case 'Update a Contact':
            console.log(4); break;
        case 'Search a Contact':
            searchContact(); break;
        case 'Delete a Contact':
            deleteContact(); break;
      }
  })
  .catch(error => console.log(error.message));

