const readline = require('readline-sync');




const addPerson = (data) => {

    let contact = createObj;

    let firstName = readline.question("Enter a firstname => ")
    let lastName = readline.question("Enter a lastname => ")
    let address = readline.question("Enter a address => ")
    let city = readline.question("Enter a city => ")
    let state = readline.question("Enter a state => ")
    let zipcode = readline.question("Enter a zipcode => ")
    let phoneNumber = readline.question("Enter a phonenumber => ")
    let email = readline.question("Enter a email => ")
    
    // let person = new Contact(firstName,lastName,address,city,state,zipcode,phoneNumber,email);
    // data.push(person);
    // console.log(data);
    
    contact.firstName==firstName;
    contact.lastName==lastName;
    contact.address==address;
    contact.city==city;
    contact.state==state;
    contact.zipcode==zipcode;
    contact.phoneNumber==phoneNumber;
    contact.email==email;

    data.push(contact);
    console.log(data);

    // return firstName,lastName,address,city,state,zipcode,phoneNumber,email;
}

module.exports = {addPerson};