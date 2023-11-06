{
    // 2-1

    // Type Assertion

    let anything: any;

    anything = "Testing type assertion";
    anything = 5856;

    (anything as number)

    const kgToGram = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The Converted Value is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
        else {
            return `This is undefined function`;
        }
    }

    // as **number** assertion
    const result1 = kgToGram(100) as number;
    console.log(result1);

    // as **string** assertion
    const result2 = kgToGram("100") as string;
    console.log(result2);

    type CustomError = {
        message : string;
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
    }




    //
}