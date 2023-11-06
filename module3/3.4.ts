{
  // Instanceof Guards

  // Parent Class
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am Making Sound");
    }
  }

  // Child Class with own method
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am Barking");
    }
  }

  // Child Class with own method
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMewing() {
      console.log("I am Mewing");
    }
  }

  // Instance
  const dog = new Dog("Dog Bhai", "Dog");
  const cat = new Cat("Cat Bhai", "Cat");
  const newAnimal = new Animal("New Animal", "NA");

  // To handle instanceof SMARTLY I can use/create a function
  // To make sure function inside if checking get proper object I need to declare **animal [is] Dog**
  const isDog = (animal: Animal): animal is Dog => {
    // Instanceof usage
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    // Instanceof usage
    return animal instanceof Cat;
  };

  //   instanceof checking function
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMewing();
    } else {
      animal.makeSound();
    }
  };

  getAnimal(cat);

  // End of Code and Scope
}
