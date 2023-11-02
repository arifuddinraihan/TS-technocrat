"use strict";
{
    // Spread Operators
    // Rest Operators
    // Destructurung
    //learning Spread Operators
    const bros1 = ["Shahin", "Antor", "Tanvir"];
    const bros2 = ["Bijoy", "Nafis", "Rabbi"];
    bros1.push(...bros2);
    console.log(bros1);
    const mentors1 = {
        typescript: "Mezbah",
        redux: "Mir",
        bdms: "Tonmoy",
    };
    const mentors2 = {
        prism: "Tanvir",
        nextjs: "Anwar",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // learn rest opeartor
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abul", "Babul", "Kabul");
}
