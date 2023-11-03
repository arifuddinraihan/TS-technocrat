"use strict";
{
    //
    // Nullable Types | Unknown Types
    // Nullable Types
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    //   searchName(null);
    // Unknown Types --> typeof
    // unknown type will be used when we don't know what kind of value will be inserted as input from form or function
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The Speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === "string") {
            const [numberValue, unit] = value.split(" ");
            const result = (parseFloat(numberValue) * 1000) / 3600;
            console.log(result);
        }
        else {
            console.log("Wrong Input");
        }
    };
    // getSpeedInMeterPerSecond(`2000 Km`);
    // Never Type
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError(`This is a test error text`);
    //
}
