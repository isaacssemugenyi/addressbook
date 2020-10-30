const inquirer = require('inquirer');

// Import all functionalities
const { readAllContacts } = require('./features/readAllContacts');
const { addNewContact } = require('./features/addContact');
const { searchContact } = require('./features/searchAContact');
const { deleteContact } = require('./features/deleteContact');

// Prompting the user for a selection and switch to functionality based on input

inquirer.prompt([{
    type: 'rawlist',
    name: 'name',
    message: 'What\'s your name?',
    choices: ['View all Contact', 'Add new Contact', 'Update a Contact', 'Search a Contact', 'Delete a Contact'],
    default: 'View all Contact'
  }])
  .then(answers => {
      switch(answers['name']){
        case 'View all Contact':
            readAllContacts('addressbook.json'); break;
        case 'Add new Contact':
            addNewContact(); break;
        case 'Update a Contact':
            console.log('Sorry, I was unable to make the update work'); break;
        case 'Search a Contact':
            searchContact(); break;
        case 'Delete a Contact':
            deleteContact(); break;
      }
  })
  .catch(error => console.log(error.message));

