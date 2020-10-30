const inquirer = require('inquirer');
const fs = require('fs');

let contactArray = [];

// Receiving details from the user
function addNewContact(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter contact name?',
            default: 'anonymous'
        },
        {
            type: 'input',
            name: 'phone',
            message: 'Enter contact number?',
            default: 0
        }
    ]).then(answers => {
           return newContact(answers);
      }).catch(error => console.log(error.message));    
}

// Saving Details to JSON file
function newContact(userInput){
    fs.readFile('addressbook.json', 'utf8', (err, data)=>{
        if (err){ 
            console.log(err); 
        } else {
            contactArray = JSON.parse(data);
            contactArray.length < 11 ? contactArray.push(userInput) : console.log('Address book full');
            let json = JSON.stringify(contactArray);
            fs.writeFile('addressbook.json', json, 'utf8', ()=>{});
        }
    });
}

module.exports = { addNewContact, newContact };

