{
  // Mapped Types

  const arrayOfNumbers: number[] = [1, 4, 5];
  //   const arrayOfStrings: string[] = ["1", "4", "5"];

  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );

  // console.log(arrayOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   }

  // Mapped Type Array Creation
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  type AreaBoolean = {
    [key in keyof AreaNumber]: boolean;
  };

  // Look up type
  type Height = AreaString["height"];

  // Generic Mapped types with lookup

  //   declaring a type for area which have unique types and value
  interface Area {
    height: string;
    width: number;
    fullAreaFilled: boolean;
  }

  // Generic Mapped types with lookup
  // T = interface Area { height: string; width: number; fullAreaFilled: boolean;}
  // key = T["height"], T["width"]

  type NewAreaString<T> = {
    [key in keyof T]: T[key]; // T[key] represents the dynamic type of properties passed to its argument
  };

  // Variable declaration
  const area1: NewAreaString<Area> = {
    height: "500",
    width: 300,
    fullAreaFilled: true,
  };

  // console.log(area1);

  // End of code and scope
}
