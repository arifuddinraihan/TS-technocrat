{

    // Type Alias
    // I need to declare first the type of object, and types of values inside it
    type Student = {
        name: string;
        age: number;
        phone?: string;
        gender: string;
        address?: string;
        isCoursePurchased: boolean;
    }

    const student1: Student = {
        name: "Arif",
        age: 28,
        phone: "01728846666",
        gender: "Male",
        address: "Dhaka",
        isCoursePurchased: true,
    }

    const student2: Student = {
        name: "Jennifer",
        age: 26,
        phone: "01728846666",
        gender: "Female",
        address: "Dhaka",
        isCoursePurchased: false,
    }

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = "arifUddin";
    const isAdmin: IsAdmin = true;

    type Add = (number1: number, number2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;

    const checkFunction = add(55, 85)
    console.log(checkFunction)



}