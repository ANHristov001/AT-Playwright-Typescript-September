// Steps
// 1.Create an interface Product with the following fields: 
// name: string  
// price: number  
// category: "food" | "clothes" | "electronics" 
// 2.Create a type Category with the possible categories (food, clothes, electronics) 
// 3.Create an interface Customer with the following fields: 
// name: string   
// email: string 
// cart: Product[] — an array containing the products in the customer’s cart 
// 4. Create two example products (e.g., an apple and a T-shirt). 
// 5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product {
    name: string;
    price: number;
    category: Category;
}

interface Customer {
    name: string;
    email: string;
    cart: Product[]
}

const apple: Product = {name: "Apple", price: 2, category:"food"};
const tShirt: Product = {name: "T-Shirt", price: 20, category: "clothes"};

// Adding Electronics or other types in the products
const iphone: Product = {name: "Iphone 17 pro", price: 2000, category: "electronics"};
const headphones: Product = {name: "Headphones", price: 99, category: "electronics"};
const bread: Product = {name: "Bread", price: 1.5, category: "food"};
const jeans: Product = {name: "Pause Jeans", price: 70, category: "clothes"};
// add more products especially for electronics

const products: Product[] = [apple, tShirt, iphone, headphones, bread, jeans];

const customer: Customer = {name: "Mladen Petrov", email: "mladentsg@mail.com", cart: [apple, tShirt, jeans]};
const customer2: Customer = {name: "Ilian Zlatarov", email: "izlatarov@mail.com", cart: [headphones, bread, iphone]};
// add second customer

// add function displayCart - display cart customer name and products, 
// add function filterByCategory - receive products and category as parameters and filter the products by given category
// add function calculateTotalPrice - receive customer data and combine all products price
// hint: customer.cart[0].price
// customer.cart[1].price

function displayCart(c: Customer): void {
  console.log(`\nCart for ${c.name} <${c.email}>`);
  if (c.cart.length === 0) {
    console.log("(empty)");
    return;
  }
  c.cart.forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.name} — ${p.category} — ${p.price.toFixed(2)}`);
  });
  const total = c.cart.reduce((sum, p) => sum + p.price, 0);
  console.log(`Total: ${total.toFixed(2)}`);
}

function filterByCategory(items: Product[], category: Category): Product[] {
  return items.filter(p => p.category === category);
}

function calculateTotalPrice(c: Customer): number {
    return c.cart.reduce((sum, p) => sum +p.price, 0);
}

// displayCart(customer);
// displayCart(customer2);

// console.log("\nFiltered products:");
// console.table({
//     food: filterByCategory(products, "food").map(p => p.name),
//     clothes: filterByCategory(products, "clothes").map(p => p.name),
//     electronics: filterByCategory(products, "electronics").map(p => p.name),
// });


export {};