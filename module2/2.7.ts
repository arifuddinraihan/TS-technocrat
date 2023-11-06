{
  // Generic Constraints with *keyof* operator in TS

  type Vehicles = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner1 = "bike" | "car" | "ship"; // manually typed

  type Owner2 = keyof Vehicles; // **keyof** mainly refer to properties inside an typed Object

  const person1: Owner1 = "car";

  // keyof operator referred
  const person2: Owner2 = "ship";

  const user = {
    name: "Arif",
    age: 20,
    address: "Dhaka",
  };
  const userName = user["name"]; // "Arif"
  const userAge = user["age"]; // 20

  function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
  }

  interface User {
    name: string;
    age: number;
    address: string;
  }

  const newUser : User = {
    name: "Tamin",
    age: 29,
    address: "Dhaka",
  }
  
  const car = {
    model : "Corolla X",
    year : 2000
  }

  const checkProperty = getPropertyValue(newUser, "age")
  const checkCarProperty = getPropertyValue(car, "model")
//   console.log(checkProperty)
  console.log(checkCarProperty)

  // End of code and scope
}
