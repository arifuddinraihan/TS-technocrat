const user: {
    company: "Leisure Bangladesh Limited"; //type - literal type
    readonly companyLocation: string; //access modifier for making this property only read only
    firstName: string;
    middleName?: string; //type - optional Type
    lastName: string;
    age: number;
    roll: number;
    isMarried: boolean;
} = {
    company: "Leisure Bangladesh Limited",
    companyLocation: "Gulshan - 2",
    firstName: "Arif",
    middleName: "Uddin",
    lastName: "Raihan",
    age: 29,
    roll: 331,
    isMarried: true,
};

console.log(user)