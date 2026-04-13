// Function to add two numbers
const addTwoNumbers = (num1, num2) => num1 + num2;
console.log(addTwoNumbers(10, 20));

//Function to find the difference of two numbers
const calculateDifference = (num1, num2) => num1 - num2;
console.log(calculateDifference(12, 6));

//Function to calculate for the product of two numbers
const calculateProduct = (num1, num2) => num1 * num2;
console.log(calculateProduct(3, 12));

//Function to find the quotient of two numbers
function calculateQuotient(num1, num2) {
    if (num2 === 0) {
        return "Error: Division is by Zero";
    }
    return num1 / num2;
}
console.log(calculateQuotient(3, 0));
console.log(calculateQuotient(6, 2));


//Function to find the expontial of a number
const calculateSqrt = num => Math.pow(num, 4);
console.log(calculateSqrt(2));


//Function to find the square root of a number
const calculateSquareRoot = num => Math.sqrt(num);
console.log(calculateSquareRoot(9));
console.log(calculateSquareRoot(81));

//Function to find the cube root of a number 
const calculateCubeRoot = num => Math.cbrt(num);
console.log(calculateCubeRoot(27));

//Function to find the remainder of two numbers
const calculateRemainder = (num1, num2) => num1 % num2;
console.log(calculateRemainder(3, 2));
console.log(calculateRemainder(9, 6));