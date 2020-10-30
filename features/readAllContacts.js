const fs = require('fs');

// Reading all contacts in the phonebook
function readAllContacts(file){
    var contacts = fs.readFileSync(file);
    if (!contacts) {
        return [];
    } else {
        JSON.parse(contacts).forEach(result => {
            console.log(`Name : ${result.name} , Phone: ${result.phone}`);
        });
    }
}

module.exports = { readAllContacts };