const readline = require('readline-sync');
const addContact = require('./Contact').addContact;
const Contact = require('./Contact');
const displayAll = require('./Contact').displayAll;
const editData = require('./Contact').editData;
const deleteData = require('./Contact').deleteData;

const AddressBook = () => {

    console.log("\n");
    console.log("Welcome to Address book program .... \n");
    let option;
    do{
        option = readline.question("Select an option to do operation on address book => \n1.Add Contact \n2.Edit Contact \n3.Display all contacts \n4.Delete Contact \n5.Exit \n ");
        switch(option) {
            case "1" :
                console.log("Adding contact to address book\n");
                addContact();
                break;
            case "2" :
                console.log("Editing contact from address book\n");
                editData();
                break;
            case "3" :
                console.log("Displaying all contacts");
                displayAll();
                break;
            case "4" :
                deleteData();
                console.log("Contact deleted successfully");
                break;    
            default :
                console.log("Exiting from book");
                break;                    
        }

    }while(option != 5);
    // addContact();
    // displayAll();
    // editData();
    // deleteData();


}

AddressBook();