// 1. Create a TypeScript interface named Person that represents a person with the following properties:
// • name (string) 
// • lastName (string) 
// • age (number) 
// • email (string) 
// • phoneNumber (number) 

interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

// 2.  Create a TypeScript interface named PersonInfo that Extends  Person type from the previous exercise and add the following properties: 
// • country (optional string property) 
// • greeting  (optional method that return welcome message) 

interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

// 3. Create an object with properties of type Person using the interface from exercise one 
const firstPerson: Person = {
    name: "Aleksandar",
    lastName: "Ivanov",
    age: 24,
    email: "alex01vanov@abv.bg",
    phoneNumber: 359891274182,
};

// console.log(`Name: ${firstPerson.name} ${firstPerson.lastName}`);
// console.log(`Age: ${firstPerson.age}`);
// console.log(`Email: ${firstPerson.email}`);
// console.log(`Phone: ${firstPerson.phoneNumber}`);

// 4.  Create an object of type PersonInfo using the interface from Exercise two and declare an object person2 with properties of type PersonInfo.
const person2: PersonInfo = {
    name: "Ivailo",
    lastName: "Stoqnov",
    age: 30,
    email: "ivalo359@mail.com",
    phoneNumber: 359896542284,
    country: "Bulgaria",
    greeting () {
        return `Welcome ${this.name}!`;
    },
};

console.log(`Country: ${person2.country}`);
console.log(person2.greeting?.());
