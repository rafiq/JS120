// Is it ok to mix constructor functions and classes?
class Cat {
    constructor(name) {
      this.name = name;
    }
    rename(newName) {
      return this.name = newName;
    }
  }
  Cat.genericGreeting = function() {
    return `Hello! I'm a cat ${this.constructor.name}`
  }
  let kitty = new Cat('Sophie');
  console.log(kitty.name); // Sophie
  kitty.rename('Chloe');
  console.log(Cat.genericGreeting()); // Chloe
