{

    const arr: string[] = ["I am", "Learning", "Level 2 PH"];
    console.log(arr);

    const newArr: [number, string, boolean] = [232, "Arif Uddin", false]
    console.log(newArr);

    // I must not push or unshit any element from array if that is a tuple array

    newArr.push("Oh testing and learning")
    console.log(newArr);

    //maping array in TS

    const numberArr: number[] = [4, 10, 11];
    console.log(numberArr);

    const mappedArr: number[] = numberArr.map((element: number) => element * element);
    console.log(mappedArr);


}