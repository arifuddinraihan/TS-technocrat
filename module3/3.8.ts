{
  // Polymorphism

  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  //   getSleepingHours(person1);
  //   getSleepingHours(person2);
  //   getSleepingHours(person3);

  // *** NEW CLASS DECLARE TO UNDERSTAND ==> Polymorphism
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // *** Must followed - in Polymorphism - method structure must be similar in child classes
  class Circle extends Shape {
    // As I need to follow the structure thats why I am declaring [Radius] as Class - constructor
    constructor(public radius: number) {
      super();
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    // As I need to follow the structure thats why I am declaring [Radius] as Class - constructor
    constructor(public height: number, public width: number) {
      super();
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(20);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);

  // End of code and scope
}
