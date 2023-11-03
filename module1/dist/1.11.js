"use strict";
var _a, _b;
{
    //
    // Ternary Operator
    // Optional Operator
    // Nullish Coalescing Operator
    const age = 18;
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
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 });
    console.log({ result2 });
    const user = {
        name: "Arif",
        address: {
            city: "Dhaka",
            road: "11/5",
            presentAddress: "Salimullah Road",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address Found";
    console.log({ permanentAddress });
    //
}
