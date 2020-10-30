const inquirer = require('inquirer');
const fs = require('fs');

let contactArray = [];

// Receiving input of name to delete from user
function deleteContact(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name to delete?'
        }
    ]).then(answers => {
           return deleteContactFromFile(answers['name']);
      }).catch(error => console.log(error.message));    
}

// Logic to delete the name from JSON file

function deleteContactFromFile(name){
    fs.readFile('addressbook.json', 'utf8', (err, data)=>{
        if (err){ console.log(err); 
        } else {
            contactArray = JSON.parse(data);
            var i = contactArray.length;
            while(i--){
                if( contactArray[i] && contactArray[i].hasOwnProperty('name') 
                    && (arguments.length > 0 && contactArray[i]['name'] === name ) ){ 
                    contactArray.splice(i,1);
                    console.log(`${name} has been deleted from the address book`); 
                }
            }
            let json = JSON.stringify(contactArray);
            fs.writeFile('addressbook.json', json, 'utf8', ()=>{});   
             
        }
    });
}

module.exports = { deleteContact, deleteContactFromFile };