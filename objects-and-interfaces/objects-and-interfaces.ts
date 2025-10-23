// Interface declaration
interface Car{
    type: string;
    model: string;
    color: string;
    horsePower: number;
}


// Object declaration
const car: Car = {
    type: "Fiat",
    model: "Punto",
    color: "white",
    horsePower: 150
};

// Interface person object
interface Person {
    name: string;
    lastName: string;
    address: string;
    age: number;
    hobbies: string[];
    greeting: () => string;
};

// object with method and array value

const person: Person = {
    name: "Ivan",
    lastName: "Ivanov",
    address: "Bul. Bulgaria 30A",
    age: 30,
    hobbies: ["football", "Tennis", "Handball"],
    greeting: function () {
        return `Hello! My name is Ivan.`;
    },
};

// Properties access!
person.name;
person.age;
person["address"];

const key = "name";
const testObj = {name: "Pesho", age: 30};
// console.log(testObj[key]);

person.greeting();
person["greeting"]();

// properties redeclaration
person.age = 35;

//let vs const redeclaration
let dog = {name: "Spark"};
dog.name = "Bobb";
dog = {name: "Kitty"};

const cat = { name: "Lusi", age: 10};
cat.name = "Kitty";
// cat = {name: "Tom", age: 15};

// explicit object type
const mouse: {name: string, favFood: string, age: number} = {
    name: "Jerry",
    favFood: "Cheese",
    age: 10,
};

// Interfaces - optional parameters, read only and string literals

interface User {
    name: string;
    email: string;
    // string literals
    role: "user" | "admin" | "superadmin" | "superuser";
    //optional parameter
    job?: string;
    password?: string | number;
};
const user: User = {
    name: `Tom`,
    email: "tomtest@mail.com",
    role: "superadmin",
    job: `QA`,
};
// optional parameter added later
user.password = 665851;

const secondUser: User = {
    name: `Tom`,
    email: "tomtest@mail.com",
    role: "superuser",
    job: `QA`,
};

interface UserPermissions extends User {
    permissions: string;
}

const thirdUser: UserPermissions = {
    name: `Tom`,
    email: "tomtest@mail.com",
    role: "superuser",
    job: `QA`,
    permissions: "denied",
};

// exercise sym total price
interface Product {
    name: string;
    price: number;
    getTotalPrice: (quantity: number) => number;
}

const phone: Product = {
    name: 'Nokia',
    price: 100,
    getTotalPrice: function(quantity: number) {
        return quantity * this.price;
    },
};

function orderDetails(quantity: number, product: Product) {    
    console.log(`Order for: ${product.name}`);
    console.log(`Product quantity: ${quantity}`);
    console.log(`Product unit price: ${product.price}$`);
    console.log(`Total price: ${product.getTotalPrice(quantity)}$`);
}

orderDetails(5, phone);
