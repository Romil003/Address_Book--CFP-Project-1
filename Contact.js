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
        else throw "Firstname is incorrect !!!";
    }

    get lastName() {return this._lastName; }
    set lastName(lastName) {
        let nameRgx = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRgx.test(lastName)){
        this._lastName = lastName;
        }
        else throw "LastName is incorrect !!!";
    }

    get address() { return this._address; }
    set address ( address) {
        let nameRgx = RegExp('^[A-Za-z]{4,}$');
        if(nameRgx.test(address)){
        this._address = address;
        }
        else throw "Address is incorrect !!!";
    }

    get city() { return this._city; }
    set city ( city) {
        let nameRgx = RegExp('^[A-Za-z]{4,}$');
        if(nameRgx.test(city)){
        this._city = city;
        }
        else throw "City is incorrect !!!";
    }

    get state() { return this._state; }
    set state ( state) {
        let nameRgx = RegExp('^[A-Za-z]{4,}$');
        if(nameRgx.test(state)){
        this._state = state;
        }
        else throw "State is incorrect !!!";
    }

    get zipcode() { return this._zipcode; }
    set zipcode ( zipcode) {
        let nameRgx = RegExp('^[0-9]{6,10}$');
        if(nameRgx.test(zipcode)){
        this._zipcode = zipcode;
        }
        else throw "Zipcode is incorrect !!!";
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber ( phoneNumber) {
        let nameRgx = RegExp('^([0-9]{2})?[0-9]{10}$');
        if(nameRgx.test(phoneNumber)){
        this._phoneNumber = phoneNumber;
        }
        else throw "Phonenumber is incorrect !!!";
    }

    get email() { return this._email; }
    set email ( email) {
        let nameRgx = RegExp('^[A-Za-z]{3,}[.]?[a-z0-9]*@([a-z]+)[.]?[a-z]+[.]?[a-z]*$');
        if(nameRgx.test(email)){
        this._email = email;
        }
        else throw "Email is incorrect !!!";
    }

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