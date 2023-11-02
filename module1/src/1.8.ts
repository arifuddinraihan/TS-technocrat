{

    // destructuring

    const user = {
        id: 331,
        name: {
            firstName: "Arif",
            middleName: "Uddin",
            lasatName: "Raihan",
        },
        phone: "01728846666",
        address: {
            homeAdress: "House #25, North Area",
            city: "Dhaka",
            country: "Bangladesh",
        },
    };

    // I will not use type of property value inside a destructuring object
    // using type names will take that as "Name-alias" of property as it need to declare by clone (:)

    // Object destructuring
    const {
        phone: mobile,
        name: {
            middleName: midName
        }
    } = user;

    console.log(mobile)

    // Array destructuring

    const myFrieds = ["Ross", "Chandler", "Joey", "Rachel", "Monica", "Phebea"];

    // const [a, b, myBestFriend, ...restFriends] = myFrieds;

    const [, , myBestFriend, ...restFriends] = myFrieds;

    console.log(`I am his best friend ${myBestFriend}`);
    console.log(`These are his rest firneds ${restFriends}`);









}