const inquirer = require('inquirer');
const fs = require('fs');

let contactArray = [];

// Still trying to configure the update function to perform actual updating of data
function updateContact(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name to update?'
        }
    ]).then(answers => {
           return contactToUpdate(answers['name']);
      }).catch(error => console.log(error.message));    
}

function contactToUpdate(enteredName){
    fs.readFile('addressbook.json', 'utf8', (err, data)=>{
        if (err){ 
            console.log(err); 
        } else {
            contactArray = JSON.parse(data);
            let contactStatus = enteredName;          

            contactArray.map(contact => contact.name === contactStatus ? console.log(contact.name) : 'Not available');
        }
    });
}

updateContact();


