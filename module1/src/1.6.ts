//Learning Function
// Normal Function
// Arrow Function

function add(num1: number, num2: number): number {
    return num1 + num2
}
console.log(add(4, 6));

const arrowFunction = (num1: number, num2: number): number => num1 + num2;

console.log(arrowFunction(20, 56));

// object -- function --> method
// if I write a function inside an object it must be -- normal anonymous function
// we can set string type as result for a method which receives number as value type
const newUser = {
    name: "",
    balance: 0,
    addBalance(balance:number): string{
        return `My new balance is : ${this.balance + balance}`;
    },
};