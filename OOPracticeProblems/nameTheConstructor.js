class Something {
    constructor() {
      this.data = "Hello";
    }

    dupData() {
      return this.data + this.data;
    }

    static dupData() {
      return "ByeBye";
    }
  }

  let thing = new Something();
  console.log(Something.dupData());
  console.log(thing.dupData());

// class Something {
//     constructor() {
//       this.data = "Hello";
//     }

//     dupData() {
//       return this.data + this.data;
//     }

//     static dupData() {
//       return "ByeBye";
//     }
//   }

//   let thing = new Something();
//   console.log(Something.dupData());
//   console.log(thing.dupData());

// const { version } = require("cheerio");

// class Vehicle {
//     constructor(make, model, wheels) {
//         this.make = make;
//         this.model = model;
//         this.wheels = wheels;
//     }
//     getWheels() {
//         return this.wheels;
//       }

//       info() {
//         return `${this.make} ${this.model}`
//       }
// }

// class Car extends Vehicle {
//     constructor(make, model, wheels) {
//       super(make, model, wheels);
//     }
//   }

//   class Motorcycle extends Vehicle {
//     constructor(make, model, wheels) {
//       super(make, model, wheels);
//     }
//   }

//   class Truck extends Vehicle {
//     constructor(make, model, wheels, payload) {
//       super(make, model, wheels)
//       this.payload = payload;
//     }
//   }

// let car = new Car("Honda", "Civic", 4);
// let truck = new Truck("Ford","Expedition", )
// console.log(truck.info())
// console.log(car.info())

// class Animal {
//     constructor(name, age, legs, species, status) {
//       this.name = name;
//       this.age = age;
//       this.legs = legs;
//       this.species = species;
//       this.status = status;
//     }
//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//     }
// }

// // class Animal {
// //     constructor(name, age, status) {
// //         this.name = name;
// //         this.age = age;
// //         this.status = status;
// //     }
// //     introduce() {
// //         return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`
// //     }
// // }

// class Cat extends Animal {
//     constructor(name, age, status) {
//         super(name, age, 4, "cat" , status)
//     }
//     introduce() {
//         return `${super.introduce()} Meow Meow!`
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, status, master) {
//         super(name, age, 4, "dog", status);
//         this.master = master;
//     }

//     greetMaster() {
//         return `Hello ${this.master}! Woof, woof!`
//     }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true



// class Pet {
//     constructor(name, age, furColor) {
//       this.name = name;
//       this.age = age;
//       this.furColor = furColor;
//     }
// }

// class Cat extends Pet {
//     constructor(name,age,furColor) {
//         super(name,age, furColor);
//     }

//     info() {
//         return `My cat ${this.name} is ${this.age} years old and has ${this.furColor} fur.`
//     }
// }

//   let pudding = new Cat('Pudding', 7, 'black and white');
//   let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

//   console.log(pudding.info());
//   console.log(butterscotch.info());


// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
//     speaks() {
//       return `${this.name} says meowwww.`;
//     }
//   }

//   let fakeCat = Object.create(Cat.prototype)
//   console.log(fakeCat instanceof Cat); // logs true
//   console.log(fakeCat.name);           // logs undefined
//   console.log(fakeCat.speaks());       // logs undefined says meowwww.


// class Rectangle {
//     constructor(width, length) {
//         this.width = width;
//         this.length = length;
//     }

//     getWidth() {
//         return this.width;
//     }

//     getLength() {
//         return this.length;
//     }

//     getArea() {
//         return this.length * this.width;
//     }
// }

// class Square extends Rectangle {
//     constructor(length) {
//         super(length,length);
//         // Object.assign(Rectangle,Square);
//     }
// }
// // let rect = new Rectangle(4, 5);
// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// const towMixin = {
//     tow() {
//       return "'I can tow a trailer!'";
//     }
//   }

// class Vehicle {
//     constructor(year) {
//         this.year = year;
//     }
// }

//   class Truck extends Vehicle {
//     constructor(year) {
//       super(year)
//         Object.assign(this, towMixin);
//     }
//   }

//   class Car extends Vehicle {
//     constructor(year) {
//         super(year);
//     }
//   }

//   let truck = new Truck(2002);
//   console.log(truck.year);
//   console.log(truck.tow());

//   let car = new Car(2015);
//   console.log(car.year);

// class Truck {
//     constructor() {
//         Object.assign(this, towMixin);
//     }
// }
// // ! This can use less memory if added outside the Truck constructor
// class Truck {}
// Object.assign(Truck.prototype, towMixin);
// const towMixin = {
//     tow() {
//         return `I can tow a trailer!`
//     }
// }
// class Car {}

// let truck = new Truck();
// console.log(truck.tow());


// const swimMixin = {
//     swim() {
//       return `${this.name} is swimming.`;
//     }
//   }

//   class Fish {
//     constructor(name) {
//       this.name = name;
//       Object.assign(this, swimMixin);
//     }
//   }

//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }

// //   Object.assign(Fish,swimMixin)
// //   Object.assign(Dog,swimMixin)
//   class Maltese extends Dog {
//       constructor(name) {
//         super(name);
//         Object.assign(this, swimMixin);
//       }
//   }

//   let dog1 = new Maltese("Buddy");
//   let fish1 = new Fish("Nemo");

//   console.log(dog1.swim());
//   console.log(fish1.swim());

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }

//     greet() {
//       return `Hello! My name is ${this.name}!`;
//     }
//   }

//   Cat.prototype.walk = function() {
//       return `Let's go for a walk!`
//   }
//   let kitty = new Cat("Sophie");
//   console.log(kitty.greet());
//   console.log(kitty.walk());

//   const walkMixin = {
//     walk() {
//       return "Let's go for a walk!";
//     }
//   }

//   class Cat {
//     constructor(name) {
//       this.name = name;
//     }

//     greet() {
//       return `Hello! My name is ${this.name}!`;
//     }
//   }

//   Object.assign(Cat.prototype, walkMixin);

//   let kitty = new Cat("Sophie");
//   console.log(kitty.greet());
//   console.log(kitty.walk());

// class Vehicle {
//     startEngine() {
//       return 'Ready to go!';
//     }
//   }

//   class Truck extends Vehicle {
//     startEngine(speed) {
//         return super.startEngine() + `Drive ${speed}, please!`
//     }

//   }

//   let truck1 = new Truck();
//   console.log(truck1.startEngine('fast'));

//   let truck2 = new Truck();
//   console.log(truck2.startEngine('slow'));

// class Vehicle {
//     constructor(year) {
//       this.year = year;
//     }
//   }

//   class Truck extends Vehicle {
//       constructor(year, bedType) {
//         super(year)
//         this.bedType = bedType
//       }
//   }

//   class Car extends Vehicle {

//   }

//   let truck1 = new Truck(2003, 'Short');
//   console.log(truck1.year);
//   console.log(truck1.bedType);

// class Vehicle {
//     constructor(year) {
//       this.year = year;
//     }
//   }

//   class Truck extends Vehicle {
//     constructor(year) {
//         super(year)
//         this.startEngine();
//     }
//     startEngine() {
//       console.log('Ready to go!')
//     }
//   }

//   let truck = new Truck(2003);
//   console.log(truck.year); // 2003


// class Vehicle {
//     constructor(year) {
//       this.year = year;
//     }
//   }

// class Truck extends Vehicle {

// }

// class Car extends Vehicle {

// }

//   let truck = new Truck(2003);
//   console.log(truck.year); // 2003

//   let car = new Car(2015);
//   console.log(car.year); // 2015

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }

//     static genericGreeting() {
//         console.log("Hello! I am a cat!")
//     }

//     personalGreeting() {
//         console.log(`Hey, my name is ${this.name}`)
//     }
// }

//   let kitty = new Cat("Sophie");
//   Cat.genericGreeting();
//   kitty.personalGreeting();

// class Cat {
//     static genericGreeting() {
//         console.log("hello! I am a cat!")
//     }
// }

// Cat.genericGreeting();

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }

//     rename(newName) {
//         this.name = newName;
//     }
//   }

//   let kitty = new Cat('Sophie');
//   console.log(kitty.name); // Sophie
//   kitty.rename('Chloe');
//   console.log(kitty.name); // Chloe


// class Person {


//     constructor(name = "John Doe") {
//         this.name = name;
//     }
// }

// let person1 = new Person();
// let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe

// class Cat {
//     constructor(name) {
//         this.name = name;
//         console.log(`Meow! My name is ${this.name}`)
//     }

//     greet() {
//         console.log("Hello from a cat")
//     }
// }
// let kitty = new Cat("Sophie")
// console.log(kitty.greet())
// console.log("Hello".constructor.name);
// console.log([1,2,3].constructor.name);
// console.log({name: 'Srdjan'}.constructor.name);