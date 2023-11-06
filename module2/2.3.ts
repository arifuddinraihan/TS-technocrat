{
    // Generic Types
    // type GenericArray<param> = Array<param>
    // For industry standard I will use <T> as param in TS Generic Types declaration
    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [5, 6, 8];
    const rollNumbers: GenericArray<number> = [5, 6, 8];

    // const mentors: string[] = ["Arif", "Uddin", "Raihan"];
    const mentors: GenericArray<string> = ["Arif", "Uddin", "Raihan"];

    // const isAdmin: boolean[] = [true, false, true];
    const isAdmin: GenericArray<boolean> = [true, false, true];

    // console.log(rollNumbers);
    // console.log(mentors);
    // console.log(isAdmin);

    // Generic Object Array
    const users: GenericArray<{ name: string, age: number }> = [
        {
            name: "Arif",
            age: 200
        },
        {
            name: "Uddin",
            age: 400
        },
    ]

    // Tuple Array
    const manush: [string, string] = ["Mr. X", "Mr. Y"]

    // Generic Tuple Array
    type GenericTuple<x, y> = [x, y];

    const manush1: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

    type User = {
        name: string;
        email: string;
    }

    const userDetails: GenericTuple<number, User> = [
        564,
        {
            name: "Arif",
            email: "y@gmail.com"
        }
    ]

    // End of code and scope
}