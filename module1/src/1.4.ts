const arr :string[] = ["I am", "Learning", "Level 2 PH"];
console.log(arr);

const newArr :[number, string, boolean] = [232, "Arif Uddin", false]
console.log(newArr);

// I must not push or unshit any element from array if that is a tuple array

newArr.push("Oh testing and learning")
console.log(newArr);


function add(num1: number, num2: number): number {
    return num1 + num2
}
console.log(add(4, 6));

const arrowFunction = (num1: number, num2: number): number => num1 + num2;

console.log(arrowFunction(20, 56));