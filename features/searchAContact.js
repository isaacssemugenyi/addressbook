const inquirer = require('inquirer')
const fs = require('fs');

let contactArray = [];

function searchContact(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter name to search?"
        }
    ]).then(answers => {
           return checkContact(answers['name']);
      }).catch(error => console.log(error.message));    
}

function checkContact(name){
    fs.readFile('addressbook.json', 'utf8', (err, data)=>{
        if (err){ 
            console.log(err); 
        } else {
            contactArray = JSON.parse(data);
            let contactStatus = name;          

            contactArray.find(contact => {
                 contact.name == contactStatus ? console.log(`name: ${contact.name}, phone: ${contact.phone}`) : ''
            });
        }
    });
}

module.exports = searchContact;