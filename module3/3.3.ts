{
  // Type Guards

  // Type Guards ==> **typeof**
  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    // use of typeof**
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  console.log(add(2, 7));
  console.log(add("2", 7));

  // Type Guards ==> **In**
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const checkUser = (user: NormalUser | AdminUser) => {
    // use of in**
    if("role" in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    } else {
        console.log(`My name is ${user.name} and I am normal user`)
    }
  };

  const normalUser : NormalUser = {
    name : "Arif Uddin"
  } 

  const adminUser : AdminUser = {
    name : "Arif Uddin",
    role : "Admin",
  } 

  checkUser(adminUser);

  // End of code and scope
}
