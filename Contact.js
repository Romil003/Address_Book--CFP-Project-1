const readline = require('readline-sync');
const addPerson = require('./Utility').addPerson
const fs = require('fs');

let firstNameRgx = RegExp('^[A-Z]{1}[a-z]{3,}$');
let lastNameRgx = RegExp('^[A-Z]{1}[a-z]{3,}$');
let addressRgx = RegExp('^[A-Za-z]{4,}$');
let cityRgx = RegExp('^[A-Za-z]{4,}$');5

let stateRgx = RegExp('^[A-Za-z]{4,}$');
let zipcodeRgx = RegExp('^[0-9]{6,10}$');
let phoneNumberRgx = RegExp('^([0-9]{2})?[0-9]{10}$');
let emailRgx = RegExp('^[A-Za-z]{3,}[.]?[a-z0-9]*@([a-z]+)[.]?[a-z]+[.]?[a-z]*$');

let addressBook = new Array();

class Contact {
    //property

    // firstName;
    // lastName;
    // address;
    // city;
    // state;
    // zipcode;
    // phoneNumber;
    // email;

    //constructor
    
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zipcode = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    // getter and setter

    get firstName() { return this._firstName ; }
    set firstName(firstName) { 
        let nameRgx = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRgx.test(firstName)){
        this._firstName = firstName;
        }
        else {
            console.log("Firstname is incorrect !!!");
            firstName = readline.question("Enter valid firstName.");
            this._firstName=firstName;
        }
    }

    get lastName() {return this._lastName; }
    set lastName(lastName) {
        let nameRgx = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRgx.test(lastName)){
        this._lastName = lastName;
        }
        else {
            console.log("Lastname is incorrect !!!");
            lastName = readline.question("Enter valid lastname !!!");
            this._lastName = lastName;
        }
    }

    get address() { return this._address; }
    set address ( address) {
        let nameRgx = RegExp('^[A-Za-z]{4,}$');
        if(nameRgx.test(address)){
        this._address = address;
        }
        else {
            console.log("Address is incorrect !!!");
            address = readline.question("Enter valid Address !!!");
            this._address = address;
        }
    }

    get city() { return this._city; }
    set city ( city) {
        let nameRgx = RegExp('^[A-Za-z]{4,}$');
        if(nameRgx.test(city)){
        this._city = city;
        }
        else {
            console.log("City is incorrect !!!");
            city = readline.question("Enter valid City !!!");
            this._city = city;
        }
    }

    get state() { return this._state; }
    set state ( state) {
        let nameRgx = RegExp('^[A-Za-z]{4,}$');
        if(nameRgx.test(state)){
        this._state = state;
        }
        else {
            console.log("State is incorrect !!!");
            state = readline.question("Enter valid State !!!");
            this._state = state;
        }
    }

    get zipcode() { return this._zipcode; }
    set zipcode ( zipcode) {
        let nameRgx = RegExp('^[0-9]{6,10}$');
        if(nameRgx.test(zipcode)){
        this._zipcode = zipcode;
        }
        else {
            console.log("zipcode is incorrect !!!");
            zipcode = readline.question("Enter valid zipcode !!!");
            this._zipcode = zipcode;
        }
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber ( phoneNumber) {
        let nameRgx = RegExp('^([0-9]{2})?[0-9]{10}$');
        if(nameRgx.test(phoneNumber)){
        this._phoneNumber = phoneNumber;
        }
        else {
            console.log("phoneNumber is incorrect !!!");
            phoneNumber = readline.question("Enter valid phoneNumber !!!");
            this._phoneNumber = phoneNumber;
        }
    }

    get email() { return this._email; }
    set email ( email) {
        let nameRgx = RegExp('^[A-Za-z]{3,}[.]?[a-z0-9]*@([a-z]+)[.]?[a-z]+[.]?[a-z]*$');
        if(nameRgx.test(email)){
        this._email = email;
        }
        else {
            console.log("email is incorrect !!!");
            email = readline.question("Enter valid email !!!");
            this._email = email;
        }
    }

    toString() {
        return "Firstname => " + this.firstName + " ,Lastname => " + this.lastName + 
        " ,Address => " + this.address + " ,City => " + this.city + " ,State => " + this.state +
        " ,Zipcode => " + this.zipcode + " ,Phonenumber => " + this.phoneNumber + " ,Email => " + this.email ;
    }

}



const addContact = () => {
    let firstName = readline.question("Enter a firstname => ")
    let lastName = readline.question("Enter a lastname => ")
    let address = readline.question("Enter a address => ")
    let city = readline.question("Enter a city => ")
    let state = readline.question("Enter a state => ")
    let zipcode = readline.question("Enter a zipcode => ")
    let phoneNumber = readline.question("Enter a phonenumber => ")
    let email = readline.question("Enter a email => ")
    
    let person = new Contact(firstName,lastName,address,city,state,zipcode,phoneNumber,email);
    addressBook.push(person);
    writeFile(addressBook);
    console.log(addressBook);
    
    // addPerson(addressBook);
    // let person = new Contact(addPerson());
    // addressBook.push(person);
    // console.log(addressBook);
    
}

const editData = () => {

    let name = readline.question("Enter name of contact to edit \n");
    addressBook.filter(contact => contact.firstName==name).forEach(contact => {
        console.log("Contact found");
        let option = readline.questionInt("Enter following option to edit \n 1.firstname\n 2.lastname\n 3.address\n 4.city\n 5.state\n 6.zipcode\n 7.phonenumber\n 8.email\n 9.all\n 10.none\n")
        
        switch(option){
            case 1 :
                    let firstName = readline.question("Enter firstname to edit");
                    if(firstNameRgx.test(firstName)){
                    contact.firstName = firstName;
                    } else {
                        console.log("Entered value is incorrect");
                        let firstName1 = readline.question("Enter valid name");
                        contact.firstName = firstName1;
                    }
                    break;
            case 2 :
                    let lastName = readline.question("Enter lastname to edit => ");
                    if(lastNameRgx.test(lastName)){
                        contact.lastName = lastName;
                    } else {
                        console.log("Entered value is incorrect");
                        let lastName1 = readline.question("Enter valid name");
                        contact.lastName = lastName1;
                    }
                    break;
            case 3 :
                    let address = readline.question("Enter address to edit => ");
                    if(addressRgx.test(address)){
                    contact.address = address;
                    } else {
                        console.log("Entered value is incorrect");
                        let address1 = readline.question("Enter valid address");
                        contact.address = address1;
                    }
                    break;
            case 4 :
                    let city = readline.question("Enter city to edit => ");
                    if(cityRgx.test(city)){
                    contact.city = city;
                    } else {
                        console.log("Entered value is incorrect");
                        let city1 = readline.question("Enter valid city");
                        contact.city = city1;
                    }
                    break;
            case 5 :
                    let state = readline.question("Enter state to edit => ");
                    if(stateRgx.test(state)){
                    contact.state = state;
                    } else {
                        console.log("Entered value is incorrect");
                        let state1 = readline.question("Enter valid state");
                        contact.state = state1;
                    }
                    break;
            case 6 :
                    let zipcode = readline.question("Enter zipcode to edit => ");
                    if(zipcodeRgx.test(zipcode)){
                    contact.zipcode = zipcode;
                    } else {
                        console.log("Entered value is incorrect");
                        let zipcode1 = readline.question("Enter valid zipcode");
                        contact.zipcode = zipcode1;
                    }
                    break;
            case 7 :
                    let phoneNumber = readline.question("Enter phoneNumber to edit => ");
                    if(phoneNumberRgx.test(phoneNumber)){
                    contact.phoneNumber = phoneNumber;
                    } else {
                        console.log("Entered value is incorrect");
                        let phoneNumber1 = readline.question("Enter valid phoneNumber");
                        contact.phoneNumber = phoneNumber1;
                    }
                    break;
            case 8 :
                    let email = readline.question("Enter email to edit => ");
                    if(emailRgx.test(email)){
                    contact.email = email;
                    } else {
                        console.log("Entered value is incorrect");
                        let email1 = readline.question("Enter valid email");
                        contact.email = email1;
                    }
                    break;
            case 9 :
                    let firstName1 = readline.question("Enter firstname to edit");
                    if(firstNameRgx.test(firstName1)){
                    contact.firstName = firstName1;
                    } else {
                        console.log("Entered value is incorrect");
                        let firstName11 = readline.question("Enter valid name");
                        contact.firstName = firstName11;
                    }
                    let lastName1 = readline.question("Enter lastname to edit => ");
                    if(lastNameRgx.test(lastName1)){
                        contact.lastName = lastName1;
                    } else {
                        console.log("Entered value is incorrect");
                        let lastName11 = readline.question("Enter valid name");
                        contact.lastName = lastName11;
                    }
                    let address1 = readline.question("Enter address to edit => ");
                    if(addressRgx.test(address1)){
                    contact.address = address1;
                    } else {
                        console.log("Entered value is incorrect");
                        let address11 = readline.question("Enter valid address");
                        contact.address = address11;
                    }
                    let city1 = readline.question("Enter city to edit => ");
                    if(cityRgx.test(city1)){
                    contact.city = city1;
                    } else {
                        console.log("Entered value is incorrect");
                        let city11 = readline.question("Enter valid city");
                        contact.city = city11;
                    }
                    let state1 = readline.question("Enter state to edit => ");
                    if(stateRgx.test(state1)){
                    contact.state = state1;
                    } else {
                        console.log("Entered value is incorrect");
                        let state11 = readline.question("Enter valid state");
                        contact.state = state11;
                    }
                    let zipcode1 = readline.question("Enter zipcode to edit => ");
                    if(zipcodeRgx.test(zipcode1)){
                    contact.zipcode = zipcode1;
                    } else {
                        console.log("Entered value is incorrect");
                        let zipcode11 = readline.question("Enter valid zipcode");
                        contact.zipcode = zipcode11;
                    }
                    let phoneNumber1 = readline.question("Enter phoneNumber to edit => ");
                    if(phoneNumberRgx.test(phoneNumber1)){
                    contact.phoneNumber = phoneNumber1;
                    } else {
                        console.log("Entered value is incorrect");
                        let phoneNumber11 = readline.question("Enter valid phoneNumber");
                        contact.phoneNumber = phoneNumber11;
                    }
                    let email1 = readline.question("Enter email to edit => ");
                    if(emailRgx.test(email1)){
                    contact.email = email1;
                    } else {
                        console.log("Entered value is incorrect");
                        let email11 = readline.question("Enter valid email");
                        contact.email = email11;
                    }
                    break;
            case 10 :
                    console.log("None to edit.")
                    break;
        }
        writeFile(addressBook);
        console.log(contact);
    })

    console.log(addressBook);

}

const displayAll = () => {
    addressBook.forEach(contact => console.log(contact));
}

const deleteData = () => {
    
    let name = readline.question("Enter name of contact to delete \n");
    addressBook.filter(contact => contact.firstName==name).forEach(contact => {
        console.log("Contact found")
        let position = addressBook.indexOf(contact);
        addressBook.splice(position,1);
        writeFile(addressBook);
        console.log("Contact deleted successfully.")
    })

    console.log(addressBook);
    
}

function writeFile(data) {

    const jsonContent = JSON.stringify(data);
    fs.writeFileSync("addressBook.json", jsonContent);

}

function readFile() {
    let data = fs.readFileSync("addressBook.json");
    let data1 = JSON.parse(data);
    console.log(data1);
}



module.exports = {Contact,addContact,displayAll,editData,deleteData}
// let contact1 = new Contact("Romil","Ghadge","Lalbaug","Mumbai","Maharashtra",400012,1234567876,"romil11@gmail.com");
// console.log(contact1.toString());
// contact1.firstName="Gamer";
// console.log(contact1.toString());

// let contact2 = new Contact("Vaibhav","Gopale","Ghatkopar","Mumbai","Maharashtra",400043,1233214566,"vaibu.1@gmail.com");

// let addressBook = new Array();
// addressBook.push(contact1);
// addressBook.push(contact2);
// console.log(addressBook);

// // to find contact by name 

// addressBook.filter(contact => contact.firstName=="Romil").forEach(contact => { contact.firstName="Bappa";console.log(contact.toString())});

// // to find contact by name and delete it

// addressBook.filter(contact => contact.firstName=="Vaibhav").forEach(contact => {
//     let position = addressBook.indexOf(contact);
//     addressBook.splice(position,1);
// });
// console.log(addressBook);

// addContact();

