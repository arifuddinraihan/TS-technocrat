{
    //

    // interface
    // for all premetive type I will use Type Alias
    // for objects i can use Interface type or Type Alias

    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    }

    const user1: User2 = {
        name: "Arif",
        age: 56,
    };















    //
}