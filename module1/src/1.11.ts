{
  //

  // Ternary Operator
  // Optional Operator
  // Nullish Coalescing Operator

  const age: number = 18;

  //   if (age >= 17) {
  //     console.log("Adult");
  //   } else {
  //     console.log("Minor");
  //   }

  // Ternary Operator | Optional Operator

  const isAdult = age >= 18 ? "Adult" : "Minor";
  //   console.log({ isAdult });

  // Nullish Coalescing Operator
  // [??] Two question mark will be used for Nullish Coalescing Operator
  // only used for if you want an result when the output is Null | Undefined

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ result1 });
  console.log({ result2 });

  // Optional Chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Arif",
    address: {
      city: "Dhaka",
      road: "11/5",
      presentAddress: "Salimullah Road",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address Found";
  console.log({ permanentAddress });

  //
}
