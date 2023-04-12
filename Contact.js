class Contact {
    //property

    // firstName;
    lastName;
    address;
    city;
    state;
    zipcode;
    phoneNumber;
    email;

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
        console.log("Setter for firstname.")
        this._firstName = firstName; }

    toString() {
        return "Firstname => " + this.firstName + " ,Lastname => " + this.lastName + 
        " ,Address => " + this.address + " ,City => " + this.city + " ,State => " + this.state +
        " ,Zipcode => " + this.zipcode + " ,Phonenumber => " + this.phoneNumber + " ,Email => " + this.email ;
    }

}

let contact1 = new Contact("Romil","Ghadge","Lalbaug","Mumbai","Maharashtra",400012,1234567876,"romil11@gmail.com");
console.log(contact1.toString());
contact1.firstName="Gamer";
console.log(contact1.toString());