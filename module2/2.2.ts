{
    // 2-2

    // interface
    // for all premetive type I will use Type Alias
    // for objects i can use Interface type or Type Alias

    type User1 = {
        name: string;
        age: number;
    };

    type rollNumber = number;
    // interface
    interface User2 {
        name: string;
        age: number;
    }
    // Objects
    type UserWithRoll = User1 & { role: string };

    // interface
    interface UserWithRoll1 extends User1 {
        role: string;
    }

    const user1: UserWithRoll1 = {
        name: "Arif",
        age: 56,
        role: "Student"
    };
    // Arrays
    // Type Alias
    type Rolls1 = number[]

    // Type Interface
    interface Rolls2 {
        [index: number]: number;
    }

    const rollNumberList: Rolls2 = [1, 2, 3]

    // Function
    // Type Alias
    type AddFunction1 = (num1: number, num2: number) => number

    // Type Interface
    interface AddFunction2 {
        (num1: number, num2: number): number;
    }

    const add: AddFunction2 = (num1, num2) => num1 + num2;

    console.log(add(7, 5))












    //
}