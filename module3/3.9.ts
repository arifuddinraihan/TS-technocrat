{
  // Abstraction in OOP --> TS
  // in two ways --> 1. Interface 2. Abstract

  // Interface -- Abstraction
  // Creating Idea in [Vehicle1] interface
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: 2000,
  //   };

  // to write class like interface I need to use keyword - implements
  // implementing the IDEA from interface wrote above
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting Car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping Car engine`);
    }
    move(): void {
      console.log(`I am moving the Car`);
    }
    test() {
      console.log(
        `I am testing after fulfilling the implements from interface`
      );
    }
  }

  const toyotaCar = new Car1();

  //   toyotaCar.startEngine();
  //   toyotaCar.stopEngine();
  //   toyotaCar.test();

  // Abstract -- Abstraction

  // If I created Abstract Class I cannot make any instance out of this class
  // I must create child class to make instance
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(
        `I am testing after fulfilling the implements from interface`
      );
    }
  }

  // Child class for abstract Parent class for creating some instance
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting Car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping Car engine`);
    }
    move(): void {
      console.log(`I am moving the Car`);
    }
  }

  const hyundaiCar = new ToyotaCar();

    // hyundaiCar.startEngine();
    // hyundaiCar.move();
    hyundaiCar.stopEngine();

  // End of code and scope
}
