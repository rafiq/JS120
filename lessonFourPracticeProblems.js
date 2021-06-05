//1.  Use a factory function to create pet objects. The factory should let us create and use pets like this:

// function createPet(animal, name) {
//     return {
//         animal,
//         name,
//         sleep: function() {
//             return `I am sleeping`
//         },
//         wake: function() {
//             return `I am awake`;
//         }
//     }
// }

// // const rollCall = {
// //     giveNameAndType() {
// //         return `I am a ${this.animal}. My name is ${this.name}.`
// //     }
// // }

// // createPet.prototype.sleep = () => {
// // }

// // createPet.prototype.wake = () => {
// // }

// let pudding = createPet("Cat", "Pudding");
// let neptune = createPet("Fish", "Neptune")
// // console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// console.log(
// // pudding.giveNameAndType = rollCall.giveNameAndType,
// pudding.sleep(), // I am sleeping
// pudding.wake(),  // I am awake

// // console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`),
// neptune.sleep(), // I am sleeping
// neptune.wake(),  // I am awake
// )

// 2.Use the OLOO pattern to create an object prototype that we can use to create pet objects. The prototype should let us create and use pets like this:

// let PetPrototype = {
//     sleep: function() {
//         console.log(`I am sleeping`);
//     },
//     wake: function() {
//         console.log(`I am awake`);
//     },

//     init(animal,name) {
//         this.animal = animal;
//         this.name = name;
//         return this;
//     }
// }

// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// console.log(
// pudding.sleep(), // I am sleeping
// pudding.wake(), // I am awake
// )
// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// console.log(
// neptune.sleep(), // I am sleeping
// neptune.wake(),  // I am awake
// )

// // 3.

// function Mammal(name) {
//   this.name = name;
// }

// Mammal.prototype.breathe = function () {
//   return (this.breathe = true);
// };

// let cat = new Mammal();
// console.log(cat);
// cat.name = "Garfield";
// console.log(cat);
// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype = new Mammal();
// Cat.prototype.constructor = Cat;
// let felix = new Cat();

// console.log(felix);
// felix.name = "Felix";
// console.log(felix);

// console.log(felix.breathe());
// console.log(felix);

// console.log(felix instanceof Mammal);

// class Greeting {
//   greet(string) {
//     console.log(string);
//   }
// }
// // Greeting.greet("hello world ;-D");

// class Hello extends Greeting {
//   hi() {
//     this.greet("Hello");
//   }
// }

// class Goodbye extends Greeting {
//   bye() {
//     this.greet("Goodbye");
//   }
// }

// Greeting.Hello.hi;
// // let student = new Hello();
// // student.hi();

// // let Greeting = {
// //   greet: function (string) {
// //     this.string = string;
// //     console.log(this.string);
// //   },
// // };

// // Greeting.greet("hello world");

// // let Hello = Object.create(Greeting);

// // Hello.greet("hi");
// // let Goodbye = Object.create(Greeting);

// // Goodbye.greet("bye");

// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`);
//   }
// };

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
// }
// Object.assign(Car.prototype,Speed)

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }
// Object.assign(Truck.prototype,Speed)

// let blueTruck = new Truck();
// let smallCar = new Car();

// console.log(
//   smallCar.goFast(),
//   blueTruck.goFast()
// )

// #3
// class WheeledVehicle extends FueledVehicles {
//   constructor(tirePressure) {
//     this.tires = tirePressure;
//   }

//   tirePressure(tireIdx) {
//     return this.tires[tireIdx];
//   }

//   inflateTire(tireIdx, pressure) {
//     this.tires[tireIdx] = pressure;
//   }
// }

// class Auto extends WheeledVehicle {
//   constructor() {
//     // the array represents tire pressure for four tires
//     super([30,30,32,32], 50, 25.0);
//   }
// }

// class Motorcycle extends WheeledVehicle {
//   constructor() {
//     // array represents tire pressure for two tires
//     super([20,20], 80, 8.0);
//   }
// }


// class FueledVehicles {
//   constructor(kmTravelledPerLiter, fuelCapInLiter) {
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.fuelCap = fuelCapInLiter;
//   }

//   range() {
//     return this.fuelCap *  this.fuelEfficiency;
//   }
// }

let Animal = {};
let Cat = Object.create(Animal);
let fluffy = Object.create(Cat);
console.log(fluffy instanceof Animal);
