{
  // 2-9 Conditional Types

  //   type a1 = null;
  //   type b1 = undefined;
  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  // Conditional Types with other Generic Types
  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  type CheckSheikhVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckSheikhVehicle<"plane">;

  // End of code and scope
}
