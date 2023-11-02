{
    // Spread Operators
    // Rest Operators
    // Destructurung

    //learning Spread Operators

    const bros1: string[] = ["Shahin", "Antor", "Tanvir"];
    const bros2: string[] = ["Bijoy", "Nafis", "Rabbi"];

    bros1.push(...bros2);
    console.log(bros1)


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

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    // learning rest opeartor

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends("Abul", "Babul", "Kabul")

}