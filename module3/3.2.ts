{
  // Inheritance

  class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  const student1 = new Student("Mr Student", 20, "Dhaka");
  student1.getSleep(6);

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass} classes`);
    }
  }

  const teacher1 = new Teacher("Mr Teacher", 50, "Dhaka", "Math Teacher");
  teacher1.takeClass(10);

  // Parent Inheritance learning from above codes,

  // Parent Class
  class Parent {
    constructor(public name: string, public age: number, public address: string) {}

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  // Child Class with same properties which calls [super(values)] for inheritance access to parent

  class Student1 extends Parent{
    constructor(name : string, age : number, address : string){
        super(name, age, address);
    }
  };

  const newStudent = new Student1("New Student", 20, "CTG");
  newStudent.getSleep(9);

// Child Class with same properties but extends new properties and method which calls [super(values)] for inheritance access to parent
  
class Teacher1 extends Parent{
    constructor(name : string, age : number, address : string, public designation : string){
        super(name, age, address)
    }
    totalClassPerDay(totalClassPerDay : number){
        console.log(`${this.name} gets total ${totalClassPerDay} classes on ${this.designation}`)
    }
  }

  const newTeacher = new Teacher1("New Teacher", 70, "CTG", "English");
  newTeacher.totalClassPerDay(7);

  // End of Coding and Scope
}
