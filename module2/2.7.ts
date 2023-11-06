{
    // Generic Constraints with *keyof* operator in TS

    type Vehicles = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner1 = "bike" | "car" | "ship"   // manually typed

    type Owner2 = keyof Vehicles;  // **keyof** mainly refer to properties inside an typed Object

    const person1 : Owner1 = "car";

    // keyof operator referred 
    const person2 : Owner2 = "ship";

    

















    // End of code and scope
}