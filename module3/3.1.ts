{
  // OOP --> Class
  // I cannot use (=>) arrow fun insider a class because [this.] is not workable inside arrow func
  // This is why I have to use normal function to make a method inside a class

  // Below is an example of defining class without [MODIFIER --> **Public**]

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  };
//   Inostence
  const dog = new Animal("Doberman", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian", "Cat", "Mew Mew");

//   console.log(dog);
//   console.log(cat);
  dog.makeSound();
  cat.makeSound();



  // Below is an example of defining class with [MODIFIER --> **Public**]
  // Must use below code writing to get rid of multiple code writings.

  class Song {
    constructor(
        public name: string, 
        public movie: string, 
        public singer: string) {}

    artistAndMovie() {
      console.log(`Song of ${this.singer} in the movie ${this.movie}`);
    }
  };

  const hindiSong = new Song("Ay mazhi ay", "Poran", "Mofazzel");
  const banglaSong = new Song("Teri Meri", "Bodyguard", "Nusrat Fateh Ali");

//   console.log(hindiSong);
//   console.log(banglaSong);
  hindiSong.artistAndMovie();
  banglaSong.artistAndMovie();

  // End of coding line
}
