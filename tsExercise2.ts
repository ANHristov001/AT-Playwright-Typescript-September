// 1. Create an array of strings and add a new element at the end  of the array. Log the result. 
let namesForTest: string [] = ["Stoqn", "Petar", "Aleksandar"];
namesForTest.push("Lachezar");
// console.log(namesForTest);

// 2. Create an array of numbers and remove the first element from the array. Log the result. 
let numbersForTest: number [] = [0, 1, 2, 3, 4, 5];
numbersForTest.shift();
// console.log(numbersForTest);

// 3. Use the map method to create a new array and divide each number by 2  “num / 2”  from [1, 2, 3, 4, 5].  Log the result.
const num1: number [] = [1, 2, 3, 4, 5];
const newNum1: number [] = num1.map((x) => x / 2);
// console.log(newNum1);

// 4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result. 
const num2: number [] = [3, 7, 1, 9, 12, 4];
const filternum2: number [] = num2.filter((num: number) => num > 5);
// console.log(filternum2);

// 5. Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result. 
const sortNumbers: number [] = [9, 3, 7, 2, 8, 5];
const newSortedNums: number [] = sortNumbers.sort((a: number, b: number) => a - b);
// console.log(newSortedNums);

// 6. Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result. 
const sliceWords: string [] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let newSliceWords: string [] = sliceWords.slice(0,3);
// console.log(newSliceWords);

// 7. Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
const spliceWords: string [] = ['car', 'bike', 'bus', 'train', 'boat'];
let newSpliceWords: string [] = spliceWords.splice(1,2)
// console.log(spliceWords);

// 8. Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result. 
function findLargest(number1: number, number2: number, number3: number): number {
    let largest: number;
    if(number1 >= number2 && number1 >= number3) {
        largest = number1;
    } else if(number2 >= number1 && number2 >= number3) {
        largest = number2;
    } else {
        largest = number3;
    }
    return largest;
}

// console.log(findLargest(15,20,25));

// 9. Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter. 
// lets say 1 inch is 2.54 centimeters
function convertToCentimeters(inches: number): number {
    const centimeters = inches * 2.54;
    return centimeters
}

// console.log(convertToCentimeters(20));

// 10. Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
function calculateArea( width: number, height?: number): number {
    if(height) {
        return width * height;
    } else {
        return width * width;
    }
}
// console.log(calculateArea(5));
// console.log(calculateArea(10,8));
