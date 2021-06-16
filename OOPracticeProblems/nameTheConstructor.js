function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function() {
  return `Hello, my name is ${this.name}.`;
};

function Child(name,school) {
  Person.call(this,name);
  this.school = school;
}

Child.prototype.learn = function() {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(child instanceof Child);                               // true
console.log(child instanceof Person === false);                    // true
console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
console.log(Object.getPrototypeOf(child).constructor === Child);   // true
console.log(child.school === "PS 33");                             // true
console.log(child.learn() === "I'm going to school!");             // true
console.log();

let person = new Person("Pete");
console.log(person instanceof Child === false);                    // true
console.log(person instanceof Person);                             // true
console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
console.log(Object.getPrototypeOf(person).constructor === Person); // true
console.log(person.school === undefined);                          // true
console.log(person.speak() === "Hello, my name is Pete.");         // true


// class University {
//   constructor(students, courses, professors, buildings) {
//     this.students = students;
//     this.courses = courses;
//     this.professors = professors;
//     this.buildings = buildings;
//   }
// }
// class Janitor {
//   work(uni = {}) {
//     return `I clean some of the ${uni.buildings} buildings on campus.`
//   }
// }
// class Prof {
//   work(uni) {
//     return ` I teach some of the ${uni.students} students on campus.`
//   }
// }
// let uni = new University(300,28,50,5)
// let jim = new Janitor();
// let frank = new Prof();

// console.log(
//   jim.work(uni),
//   frank.work(uni),
// )
// class Vehicle {
//   constructor(kmTravelledPerLiter, fuelCapInLiter) {
//     this.fuelEfficiency = kmTravelledPerLiter;
//     this.fuelCap = fuelCapInLiter;
//   }

//   range() {
//     return this.fuelCap *  this.fuelEfficiency;
//   }
// }
// const tireMixin = {
//   tirePressure(tireIdx) {
//     return this.tires[tireIdx];
//   },

//   inflateTire(tireIdx, pressure) {
//     this.tires[tireIdx] = pressure;
//   }
// }

// class Auto extends Vehicle {
//   constructor( kmTravelledPerLiter, fuelCapInLiter  ,tirePressure) {
//     // the array represents tire pressure for four tires
//     super(kmTravelledPerLiter, fuelCapInLiter);
//     this.tires = tirePressure
//   }
// }

// class Motorcycle extends Auto {}

// Object.assign(Auto.prototype,tireMixin);
// Object.assign(Motorcycle.prototype,tireMixin);

// class Catamaran extends Vehicle {
//   constructor(kmTravelledPerLiter, fuelCapInLiter, propellerCount, hullCount, ) {
//    super(kmTravelledPerLiter, fuelCapInLiter)
//     this.propellerCount = propellerCount;
//     this.hullCount = hullCount;
//   }
// }
// let boat = new Catamaran(80, 8.0,0,1);
// let car = new Auto(50, 25.0, [30,30,32,32]);
// let Harley = new Motorcycle(80, 8.0,[20,20]);

// console.log(
//   boat.range(),
//   car.range(),
//   Harley,
// )
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

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }

// Object.assign(Car.prototype,Speed) ;
// Object.assign(Truck.prototype,Speed);

// let test = new Car()
// let test2 = new Truck();

// console.log(
//   test.goSlow(),
//   test.goFast(),
//   test2.goVerySlow(),
//   test2.goFast(),
//   test instanceof Car,
//   test2 instanceof Truck,
//   test.constructor,
//   test2.constructor,
// )
// const PetPrototype = {
//   sleep: function() {
//     console.log (`I am sleeping`)
//   },
//   wake: function() {
//     console.log (`I am awake`)
//   },

//   init(animal, name ) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//   }
// }

// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake



// function createPet(animal, name) {
//   return {
//     animal,
//     name,
    // sleep: function() {
    //   console.log (`I am sleeping`)
    // },
    // wake: function() {
    //   console.log (`I am awake`)
    // }

//   }
// }



// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = createPet("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake


// function createUser(name,age,gender) {
//   return {
//     name,
//     age,
//     gender
//   }
// }

// let user1 = createUser("Jane",34,"male");

// console.log(user1.age)


// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last)
//   } else {
//     this.name = first + " " + last;
//   }
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// let ninjaA;
// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// let ninjaB = new ninjaA.constructor()
// create a `ninjaB` object here; don't change anything else

// console.log( ninjaB , ninjaA.constructor === ninjaB.constructor )// => true

// function Ninja() {
//   this.swung = false;
// }

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`

// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return self.swung;
//   },
// };

// console.log(ninja.swingSword());



// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());



// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function(radius) {
//   return Math.PI * this.radius**2;
// }


// // class Circle {
// //   constructor(radius) {
// //     this.radius = radius;
// //   }
// //   area() {
// //   }
// // }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(
// a.area().toFixed(2), // => 28.27
// b.area().toFixed(2), // => 50.27
// a.hasOwnProperty('area'), // => false
// )
// let RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };
// // Rectangle.call(this,RECTANGLE)
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area);//6
// console.log(rect1.perimeter);//10


// // console.log("hello ")

// // Function.prototype.bind = function(toBind,newContext) {
// //     return newContext
// // }
// function myBind(toBind,newContext) {
//   // let result ;
//   return  toBind.call(this,newContext);

//   // return
// }
// const polo = {
//   name:"Ben",
// }
// let foo = Object.create(polo);

// function ChangeName(obj) {
//    obj.name = "Frank";
//    return obj;
// }

// console.log(polo.name)
// // ChangeName(polo)
// console.log(myBind(ChangeName,polo))
// console.log(polo.name)
// console.log("hello")
// //Create a new instance of an object, without having direct access to the constructor function:
// let ninjaA;
// {
//   const Ninja = function() {
//     this.swung = false;
//   };
//   ninjaA = new Ninja();
// }

// let ninjaB = Object.create(ninjaA)

// console.log(ninjaA.constructor === ninjaB.constructor )// => true
// console.log(ninjaA, ninjaB);


// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// const makeObj = {
//   propA: 10,
//   propB: 20,
// }

// function objectsEqual(obj1,obj2) {
//   let obj1Keys = Object.keys(obj1);
//   let obj1Values = Object.values(obj1);
//   let obj2Keys = Object.keys(obj2);
//   let obj2Values = Object.values(obj2);
//   if (obj1Keys.length !== obj2Keys.length || obj1Values.length !== obj2Values.length) return false;
//   for (let i = 0; i < obj1Keys.length; i++) {
//     if (obj1Keys[i] !== obj2Keys[i] || obj1Values[i] !== obj2Values[i]) return false
//   }
//   return true;
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// const item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount(percent) {
//     const discount = this.price * percent / 100;
//     return this.price - discount;

//     // return this.price;
//   },
// };
// console.log(
//  item.discount(20),   // should return 40
// // = 40
//  item.discount(50) ,  // should return 25
// // = 20
//  item.discount(25) ,  // should return 37.5
// // = 15
// )
// function createGreeter(name) {
//   return {
//     name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet(timeOfDay) {
//       let self = this;
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${self.morning} ${name}`;
//           break;
//         case 'afternoon':
//           msg += `${self.afternoon} ${name}`;
//           break;
//         case 'evening':
//           msg += `${self.evening} ${name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// const helloVictor = createGreeter('Victor');
//  helloVictor.greet('morning');
// = Good Morning Victor

// class CircularQueue {
//   constructor(size) {
//     this.size = size;
//     this.stack = [];
//   }

//   enqueue(modelNumber) {
//     if (this.stack.length >= this.size) {
//       this.stack.shift()
//       this.stack.push(new ObjectFactory(modelNumber))
//     } else {
//       this.stack.push(new ObjectFactory(modelNumber))
//     }
//   }
//   dequeue() {
//     if (this.stack.length === 0) {
//       return null;
//     } else {
//       return this.stack.shift().num;
//     }
//   }

// }

// class ObjectFactory {
//   constructor(num) {
//     this.num = num;
//   }
// }

// let queue = new CircularQueue(3);
// console.log(queue.dequeue() === null);

// queue.enqueue(1);
// queue.enqueue(2);
// // console.log(queue)
// console.log(queue.dequeue() === 1);
// // console.log(queue)

// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue() === 2);

// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue() === 5 );
// console.log(queue.dequeue() === 6);
// console.log(queue.dequeue() === 7);
// console.log(queue.dequeue() === null);

// let anotherQueue = new CircularQueue(4);
// console.log(anotherQueue.dequeue() === null);

// anotherQueue.enqueue(1)
// anotherQueue.enqueue(2)
// console.log(anotherQueue.dequeue() === 1);

// anotherQueue.enqueue(3)
// anotherQueue.enqueue(4)
// console.log(anotherQueue.dequeue() === 2);

// anotherQueue.enqueue(5)
// anotherQueue.enqueue(6)
// anotherQueue.enqueue(7)
// console.log(anotherQueue.dequeue() === 4);
// console.log(anotherQueue.dequeue() === 5);
// console.log(anotherQueue.dequeue() === 6);
// console.log(anotherQueue.dequeue() === 7);
// console.log(anotherQueue.dequeue() === null);

// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }
//   fullName() {
//     return `${this.firstName} ${this.lastName}.`
//   }

//   communicate() {
//     console.log(`I am communicating that I am ${this.age} years old.`)
//   }

//   eat() {
//     console.log(`I am eating.`)
//   }

//   sleep() {
//     console.log(`I am sleeping. SSSSSHHHHH!!!`)
//   }
// }

// class Doctor extends Person {
//   constructor(firstName,lastName,age,gender,specialization) {
//     super(firstName,lastName,age,gender)
//     this.specialization = specialization;
//   }

//   diagnose() {
//     console.log(`I am checking what is wrong with you.`)
//   }
// }

// class Professor extends Person {
//   constructor(firstName,lastName,age,gender,subject) {
//     super(firstName,lastName,age,gender)
//     this.subject = subject;
//   }
//   teach() {
//     console.log(`I am teaching you GOOD! Class is now in session.`)
//   }
// }

// class Student extends Person {
//   constructor(firstName,lastName,age,gender,degree) {
//     super(firstName,lastName,age,gender)
//     this.degree = degree;
//   }

//   study() {
//     console.log(`I am studying`)
//   }
// }

// class GraduateStudent extends Student {
//   constructor(firstName,lastName,age,gender,graduateDegree) {
//     super(firstName,lastName,age,gender)
//     this.graduateDegree = graduateDegree;
//   }
//   research() {
//     console.log(`I am doing some research.`)
//   }
// }
// let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'
// let theProfessor = new Professor("James","Baldwin",50, "male","Comparative Literature");
// theProfessor.teach();


// // name property added to make objects easier to identify
// let foo = {name: 'foo'};
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// Object.prototype.name = "Object.prototype";
// foo.ancestors = function() {
//   let result = [];
//   let self = this;
//   while (Object.getPrototypeOf(self) !== null) {
//     Object.getPrototypeOf(self).name ? result.push(Object.getPrototypeOf(self).name) : result.push(self.constructor.name)
//     self = Object.getPrototypeOf(self)
//   }
//   return result
// }
// console.log(
// qux.ancestors(),  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors(),  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors(),  // returns ['foo', 'Object.prototype']
// foo.ancestors(),  // returns ['Object.prototype']
// )
// function myFilter(array, func, thisArg) {
//   let result = [];

//   array.forEach(function(value) {
//     if (func.call(thisArg, value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// function myFilter(array, func) {
//   let result = [];

//   array.forEach(function(value) {
//     if (func(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// let filter = {
//   allowedValues: [5, 6, 9],
// }

// console.log(
// myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//   return this.allowedValues.indexOf(val) >= 0;
// }, filter) // returns [5, 6, 9]
// )

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     },this);
//   },
// };
// console.log(franchise.allMovies())
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]


// let person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// console.log(person.fullName);

// const animal = () => ({
//   talk: function() {
//     console.log(this.sound);
//   }
// });

// const dog = () => Object.create(animal(), {
//   sound: {
//     value: "woof"
//   }
// });

// // or...

// const dog2 = () => {
//   var someDog = Object.create(animal());
//   someDog.sound = "woof";

//   return someDog;
// };

// var someDog = dog();
// someDog.talk();

// var someDog2 = dog2();
// someDog2.talk();//woof


// let arr = [1,2,3]


// let newDog = new Dog()
// let horse = new Animal();
// console.log(arr.toString)

// function createStudent(name,year) {
//   return {
//     name,
//     year,
//     courses: [],

//     info: function() {
//       return `${name} is a ${year} student`
//     },

//     listCourses: function() {
//       return this.courses
//     },

//     addCourse: function(obj = {}) {
//       return this.courses.push(obj)
//     },

//     addNote: function(codeName,note) {
//       if (this.courses.filter(el => el.code === codeName)[0]) {
//         if (this.courses.filter(el => el.code === codeName)[0].notes) {
//            return this.courses.filter(el => el.code === codeName)[0].notes += " " + note + ";"
//         } else {
//            return this.courses.filter(el => el.code === codeName)[0].notes = note + ";"
//         }
//       } else {
//         return `Sorry that course does not exist.`
//       }
//     },

//     viewNotes: function() {
//       this.courses.forEach(el => {
//         if (el.notes) {
//           console.log( el.name + ": " + el.notes)
//         }
//       })
//     },

//     updateNote: function(codeName,note) {
//       if (this.courses.filter(el => el.code === codeName)[0]) {
//         return this.courses.filter(el => el.code === codeName)[0].notes = note;
//       }
//     }
//   }
// }


// let foo = createStudent('Foo', '1st');
// console.log(
//  foo.info(),//
// // //  "Foo is a 1st year student"
//  foo.listCourses(),//
// // //  [];
//  foo.addCourse({ name: 'Math', code: 101 }),//
//  foo.addCourse({ name: 'Advanced Math', code: 102 }),//
//  foo.listCourses(),//
// //  [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
//  foo.addNote(101, 'Fun course'),//
//  foo.addNote(101, 'Remember to study for algebra'),//
//  foo.viewNotes(),//
// //  "Math: Fun course; Remember to study for algebra"
//  foo.addNote(102, 'Difficult subject'),//
//  foo.viewNotes(),//
// //  foo.courses[1].notes,
// //  "Math: Fun course; Remember to study for algebra"
// //  "Advance Math: Difficult subject"
//  foo.updateNote(101, 'Fun course'),//
//  foo.viewNotes(),//
//  "Math: Fun course"
//  "Advanced Math: Difficult subject"
// )
// let str = new String("hello"),//
// console.log(str)

// function objectsEqual(obj1, obj2) {
//   let obj1Keys = Object.keys(obj1)
//   let obj2Keys = Object.keys(obj2)
//   let obj1Values = Object.values(obj1)
//   let obj2Values = Object.values(obj2)

//   if (obj1Keys.length !== obj2Keys.length) return false;

//   for (let i = 0; i < obj1Keys.length; i++) {
//     if (obj1Keys[i] !== obj2Keys[i]) return false;
//     if (obj1Values[i] !== obj2Values[i]) return false;
//   }

//   return true;
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     // console.log(this.price)
//     let discount = this.price * percent / 100;
//     let newPrice = this.price - discount;
//     // console.log(percent / 100,discount,this.price)
//     return newPrice;
//   },
// };
// console.log(
//  item.discount(20),   // should return 40
// // = 40
//  item.discount(50),   // should return 25
// // = 20
//  item.discount(25),   // should return 37.5
// // = 15
// )
// function Animal() {
//   this.move = function() {
//     return `I am moving`
//   }
// }
// function Dog() {
//   this.move = function() {
//     return (`I am walking like a dog`)
//   }
// }
// Dog.prototype = Object.create(Animal.prototype);//THIS WILL CHANGE

// let newDog = new Dog()
// let horse = new Animal();
// console.log(newDog.move(),horse.move())
// function Animal() {
//   this.move = function() {
//     return `I am moving`
//   }
// }
// function Dog() {
//   this.move = function() {
//     return (`I am walking like a dog`)
//   }
// }
// Dog.prototype = Animal.prototype;//THIS WAS CHANGED

// let newDog = new Dog()
// let horse = new Animal();
// console.log(newDog.move(),horse.move())
// func
// function createGreeter(name) {
//   return {
//     name: name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet: function(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${this.name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${this.name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${this.name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');// Good Morning Victor

// class Pet {
//   constructor(animalType,name) {
//     this.animalType = animalType;
//     this.name = name;
//   }
//   info() {
//     return `a ${this.animalType} named ${this.name}`
//   }
// }
// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }
//   addPet(pet) {
//     this.pets.push(pet);
//   }

//   numberOfPets() {
//     return this.pets.length;
//   }

//   printPets() {
//     this.pets.forEach(pet => console.log(pet.info()));
//   }
// }

// class Shelter {
//   constructor(owner,petName) {
//     this.owner = owner;
//     this.petName = petName;
//     this.adoptionList = {};
//     this.unAdopted = [];
//   }
//   adopt(owner, pet) {
//     owner.addPet(pet);
//     if (!this.adoptionList[owner.name]) {
//       this.adoptionList[owner.name] = owner;
//     }
//     this.unAdopted.splice(this.unAdopted.indexOf(this.unAdopted.filter(el => el.owner)),1)
//   }

//   printAdoptions() {
//     console.log(`${this.owner} has adopted the following pets:`)
//     this.adoptionList.filter(el => el[this.owner])[this.owner].forEach(pet => {
//       console.log(`a ${pet.animalType} named ${pet.name}`)
//     })
//   }
//   printUnAdoptedNumber() {
//     return `The Animal shelter has ${this.unAdopted.length} unadopted pets`
//   }
//   addUnadoptedPet(stray) {
//     this.unAdopted.push(stray)
//   }
//   printUnadoptedList() {
//     console.log(`The Animal Shelter has the following unadopted pets:`)
//     this.unAdopted.forEach(stray => {
//       console.log(stray.info())
//     })
//   }
// }
// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.addUnadoptedPet(kennedy)
// shelter.addUnadoptedPet(chester)
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// // console.log(shelter.adoptionList[0])
// console.log(
//   shelter.printUnAdoptedNumber(),
//   shelter.printUnadoptedList(),
//   shelter.printNumberOfPetsPerOwner(phanson)
// )
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);



// // Object.prototype.walk = function() {
// //   return `${this.name} ${this.gait()} forward`
// // }
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
// }
// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`
//   }
// }
// Object.assign(Person.prototype,walkMixin)
// Object.assign(Cat.prototype,walkMixin)
// Object.assign(Cheetah.prototype,walkMixin)
// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// "Flash runs forward"



// function Person() {
// }
// Person.prototype.greeting = function(text) {
//   console.log(text);
// }

// function Shouter() {
//   Person.call(this);
// }
// Shouter.prototype = Object.create(Person.prototype)
// Shouter.prototype.greeting = function(text) {
//   Person.prototype.greeting.call(this, text.toUpperCase());
// }

// class Person {
//   greeting(text) {
//     console.log(text)
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase())
//   }
// }
// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// class Vehicle {
//   constructor(name, model, wheels = 0) {
//     this.name = name;
//     this.model = model;
//     this.wheels = wheels;
//   }
//   getWheels() {
//     return this.wheels;
//   }
//   info() {
//     return `${this.make} ${this.model}`
//   }
// }
// class Car extends Vehicle {
//   constructor(make, model, wheels) {
//     super(make,model, wheels)
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(make, model,wheels) {
//     super(make, model, wheels)
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, wheels, payload) {
//     super(make, model, wheels)
//     this.payload = payload;
//   }
// }

// let car = new Car("Honda","Civic",4);
// console.log(car)
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//     constructor(name,age,status) {
//         super(name, age)
//         this.status = status;
//         this.legs = 4;
//         this.species = "cat";

//       }
//       introduce() {
//           return super.introduce() + " Meow meow!"
//         }
//       }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age)
//     this.status = status;
//     this.master = master;
//     this.legs = 4;
//     this.species = "dog";
//   }
//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`
//   }
// }
// let dog = new Dog("Pluto",5,"excited")
// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() );
// console.log(dog.introduce(),dog.legs,dog.status,dog.age)

// function Animal(name,age,legs,species,status) {
//   this.name = name;
//   this.age = age;
//   this.legs = legs;
//   this.species = species;
//   this.status = status;
// }

// Animal.prototype.introduce = function() {
//   return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`
// }
// function Cat(name, age, status) {
//   Animal.call(this,name, age, status)
//   this.legs = 4;
//   this.species = "cat";
// }
// Object.setPrototypeOf(Cat.prototype,Animal.prototype)
// Cat.prototype.introduce = function() {
//   Animal.call(this,name,age)//this is not working properly. Why?
//   return Animal.prototype.introduce() + " Meow meow!"
// }

// let dog = new Dog("Pluto",5,"excited")
// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() );
// console.log(dog.introduce(),dog.legs,dog.status,dog.age)

// let obj = {
//   first: 'Good',
//   second: 'Morning',
//   greet: function() {
//     let self = this;
//     function morningGreet() {
//       console.log(self.first + ' ' + self.second);
//     }
//     morningGreet();
//   },
// };
// console.log(obj.greet()) // => good morning

// let obj = {
//   first: 'Good',
//   second: 'Morning',
//   greet: function() {
//     let morningGreet = function() {
//       console.log(this.first + ' ' + this.second);
//     }.bind(this)

//     morningGreet()
//   },
// };
// console.log(obj.greet())  // => good morning

// let obj = {
//   first: 'Good',
//   second: 'Morning',
//   greet: function() {
//     function morningGreet() {
//       console.log(this.first + ' ' + this.second);
//     }
//     morningGreet.call(this)
//   },
// };
// console.log(obj.greet())  // => good morning



// logs true

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name,age,color) {
//     super(name, age)
//     this.color = color;
//   }
//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.color}`
//   }
// }

// // OLOO

// const petHub = {
//   init: function(name, age) {
//     this.name = name;
//     this.age = age;
//     return this;
//   }
// };

// const catHub = Object.create(petHub);

// catHub.init = function(name, age, colors) {
//   petHub.init.call(this, name, age);
//   this.colors = colors;
//   return this;
// }

// catHub.info = function() {
//   return `My cat ${this.name} is ${this.age} and has ${this.colors} fur.`;
// }

// const linkedPudding = Object.create(catHub).init('Pudding', 7, 'black and white');
// const linkedButterscotch = Object.create(catHub).init('Butterscotch', 10, 'tan and white');

// // w/ constructor calls

// const PetConstructor = function(name, age) {
//   this.name = name;
//   this.age = age;
// };

// const CatConstructor = function(name, age, colors) {
//   PetConstructor.call(this, name, age);
//   this.colors = colors;
// };

// Object.setPrototypeOf(CatConstructor.prototype, PetConstructor.prototype);

// CatConstructor.prototype.info = function() {
//   return `My cat ${this.name} is ${this.age} and has ${this.colors} fur.`;
// };

// const constructedPudding = new CatConstructor('Pudding', 7, 'black and white');
// const constructedButterscotch = new CatConstructor('Butterscotch', 10, 'tan and white');


// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);

// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name, fakeCat.constructor);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// function Rectangle(width,length) {
//   this.width = width;
//   this.length = length;
// }

// Rectangle.prototype.getWidth = function() {
//   return this.width
// }

// Rectangle.prototype.getLength = function() {
//   return this.length;
// }
// Rectangle.prototype.getArea = function () {
//   return this.length * this.width
// }

// function Square(side) {
//   this.side = side;
// }
// Object.assign(Rectangle.prototype,Square)
// // Square.prototype.getArea
// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year)
//   }

// }

// class Car extends Vehicle {
// }
// const towMixin = {
//   tow() {
//     return `I can tow a trailer!`
//   }
// }
// Object.assign(Truck.prototype,towMixin);

// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());

// let car = new Car(2015);
// console.log(car.year);

// let truck = new Truck();
// truck.tow();

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this,swimMixin)
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Maltese extends Dog {
//   constructor(name) {
//     super(name);
//     Object.assign(this,swimMixin)
//   }
// }
// // Object.assign(Maltese.prototype,swimMixin);
// // Object.assign(Fish.prototype,swimMixin);

// let dog1 = new Maltese("Buddy");
// let fish1 = new Fish("Nemo");

// console.log(dog1.swim());
// console.log(fish1.swim());

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

// const walkMixin = {
//   walk() {
//     return `Let's go for a walk!`
//   }
// }
// Object.assign(Cat.prototype,walkMixin);

// let kitty = new Cat("Sophie");
// console.log(kitty.greet());
// console.log(kitty.walk());


// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
//   startEngine() {
//     return `Ready to go`
//   }
// }

// class Truck extends Vehicle {
//   startEngine(speed) {
//     return  super.startEngine() + ` Drive ${speed}, please`
//   }
//   constructor(year, bedType) {
//     super(year)
//     // this.startEngine()
//     this.bedType = bedType;
//   }
// }
// class Car extends Vehicle {
//   constructor(year) {
//     super(year)
//   }
// }
// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));
// let truck = new Truck(2003);
// console.log(truck.year); // 2003
// let truck1 = new Truck(2003, 'Short');
// console.log(truck1.year);
// console.log(truck1.bedType);
// let car = new Car(2015);
// console.log(car.year); // 2015



// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   static genericGreeting() {
//     console.log(`I am a cat`)
//   }
//   personalGreeting() {
//     console.log(`Hello! My name is ${this.name}`)
//   }
// }

// let kitty = new Cat("Sophie");
// Cat.genericGreeting();
// kitty.personalGreeting();


// class Person {
//   constructor(name = "John Doe") {
//     this.name = name;
//   }
//   static greet() {
//     return `I am a cat! My name is ${this.name}`
//   }
//   rename(newName) {
//     this.name = newName;
//   }
// }
// let kitty = new Person("Sophie")
// let person1 = new Person();
// let person2 = new Person("Pepe");
// console.log(kitty.name); // Sophie
// kitty.rename('Chloe');
// console.log(Person.greet()); // Chloe
// console.log(person1.greet()); // John Doe
// console.log(person2.greet()); // Pepe
// console.log(kitty.greet())
// console.log("Hello".constructor.name);
// console.log( [1,2,3].constructor.name);
// console.log( {name: 'Srdjan'}.constructor.name);

// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal.prototype;

// console.log( rabbit.eats );
// console.log( rabbit.jumps );

// function Pet(animal,petName) {
//   this.animal = animal;
//   this.petName = petName;
//   this.alive = true;
// }

// function Owner(name) {
//   this.name = name;
//   this.pets = [];
//   this.loves = true;
// }

// function Bird(animal) {
//   // this.animal = animal;
//   Pet.call(this,animal);

// }
// Pet.prototype.fly = function() {
//   console.log(`Like a bird`)
//   return null
// }
// // Bird.prototype = Object.create(Pet.prototype);
// Bird.prototype = Pet.prototype;

// Owner.prototype = Pet.prototype;
// let obj = new Owner("Ben");
// let foo = new Pet("lab","Benji");
// let baz = new Bird("parrot");
// console.log(obj.loves,foo.fly(),baz.fly())


// Owner.prototype.numberOfPets = function() {
//   return this.pets.length;
// }
// function Shelter(owner,petName) {
//   this.owner = owner;
//   this.petName = petName;
//   this.owners = [];
// }
// Shelter.prototype.adopt = function(owner,petName) {
//   owner.pets.push(petName)
//   this.owners.push(owner.name)
// };
// Shelter.prototype.printAdoptions = function() {

//   console.log(`${this.owners.name} has adopted the following pets:`)
//   // this.pets.forEach(pet => {
//   //   console.log(`a ${pet} named ${this.petName}`)
//   // })
// }

// class Pet {
//   constructor(animal,name) {
//     this.animal = animal,
//     this.name = name,
//   }

// }
// class Owner {
//   constructor(name) {
//     this.name = name
//     this.pets = [];
//   }

// }
// class Shelter {
//   constructor() {
//     this.owners = {},
//   }
//   adopt(owner,pet) {
//     owner.pets.push(pet)
//     this.owners.owner.name = owner;
//   }
//   printAdoptions() {
//   }
// }
// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// console.log(
//   phanson,bholmes
// )
// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
//   // return this;
//   if (!(this instanceof Lizard)) {
//     return new Lizard
//   }
// }

// let lizzy = Lizard();

// console.log(lizzy.scamper()); // ?

// const robotProto = {
//   intelligenceLevel: 10,
//   modelNumber: 218907,

//   solveProblems: function () {
//     return `I solved this problem.`
//   }
// }

// const humanObjectsPrototype = {
//   robotProto.call(this)

// }
// // let target =
// // const human = () => Object.create(robotProto);
// let human = Object.assign(robot,walking,talking);

// let Robocop = robot();
// let Adam = human();

// console.log(Robocop);
// console.log(Adam.modelNumber)


// function makeObj() {
//   return {
//     propA: 10,
//     propB:  20,
//   }
// }
// const robotProto = {
//   intelligenceLevel: 10,
//   modelNumber: 218907,

//   solveProblems: function () {
//     return `I solved this problem.`
//   }
// }
// const walking = {
//   walk() {
//     console.log(`I am walking`)
//   }
// }

// const talking = {
//   talk() {
//     console.log(`I am talking`);
//   }
// }

// const robot = () => Object.create(robotProto);
// // let target =
// // const human = () => Object.create(robotProto);
// let human = Object.assign(robot,walking,talking);

// let Robocop = robot();
// let Adam = human();

// console.log(Robocop);
// console.log(Adam.modelNumber)

// function robotsMaker(intelligenceLevel, modelNumber) {
//   return {
//     intelligenceLevel: intelligenceLevel,
//     modelNumber: modelNumber,

//     solveProblems: function () {
//       return `I solved this problem.`
//     }
//   }
// }
// function humanoidMaker(intelligenceLevel,modelNumber) {
//   return {
//       walk() {
//         return `I am walking.`
//       },
//       talk() {
//         return `I am talking.`
//       }
//   }
// }
// let baz = robotsAndHumonoidsMaker(10,256)
// let foo= robotsAndHumonoidsMaker(4,"Detroit")

// foo.walking = walking.walk;
// foo.talking = talking.talk;
// console.log(foo.walking(),foo.talking())
// console.log(baz.solveProblems())


// function doSomething(){}
// console.log( hasOwnProperty(doSomething.prototype) );
//  It does not matter how you declare the function, a
//  function in JavaScript will always have a default
//  prototype property.
//  (Ps: There is one exception that arrow function doesn't have a default prototype property)
// var doSomething = function(){};
// console.log( doSomething.prototype );

// class Character {
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     this.strength = rollDice();
//     this.intelligenc = rollDice();
//   }
//   rollDice() {
//     return Math.floor(Math.random() * (12 - 2) + 2);
//   }
//   heal(amount) {
//     return this.health += amount;
//   }
//   hurt(amount) {
//     return this.health -= amount;
//   }
// }
// let Heman = new Character("Thor")

// console.log(Heman.health)
// Heman.heal(3)
// console.log(Heman.health)
// Heman.hurt(5);
// console.log(Heman.health)

// class Warrior extends Character {
//   constructor(name) {
//     super(name);
//     this.strength = rollDice() + 2
//   }
// }
// class Magicians extends Character {
//   constructor(name) {
//     super(name);
//     this.intelligenc = rollDice() + 2;
//   }
// }
// class Paladin extends Character {
//   constructor(name) {
//     super(name);
//   }
// }
// class Bard extends Magicians {
//   constructor(name) {
//     super(name);
//   }
//   createPotion() {
//       return `I created a potion.`
//   }
// }

// const Armorable ={
//   attachArmor() {}
//   removeArmor() {}
// }
// Object.assign(Warrior.prototype,Armorable)
// Object.assign(Paladin.prototype,Armorable)

// const Spells = {
//   castSpell(theSpell) {}
// }

// Object.assign(Paladin.prototype,Spells)
// Object.assign(Magicians.prototype,Spells)
// Object.assign(Bard.prototype,Spells)

// let Hulk = new Warrior("Bruce");
// console.log(Hulk)
// let warlock = new Magicians("Loki");
// console.log(warlock)


// let str1 = new String("Hello, world");
// let str2 = new String("Hello, world");
// console.log(str1 === str2);
// let greeter = {
//   a: 'hello',
//   b: 'world',
//   greet() {
//     function sayHello() {
//       console.log(`${this.a} ${this.b}`);
//     }

//     sayHello.call(this);
//   }
// };

// greeter.greet(); // logs 'undefined undefined'

// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function() {
//     return "hi" // some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Animal.prototype;
// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function() {
//     return "hi"// some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);

// let baz = new Dog()
// let foo = new Animal()
// console.log(Dog.constructor === Animal)

// function robots() {
//   const stats = [Math.floor(Math.random() * 20),Math.floor(Math.random() * 20)];

//   return {
//     intelligenceLevel: stats[0],
//     modelNumber: stats[1],
//     solveProblems() {
//         return `I solved this problem.`
//     }
//   }
// }
// let r2d2 = robots();

// function humanoid() {
//   const {features} = robots();
//   const walk = () =>  `I am walking`
//   const talk = () => `I am talking` ;
//   return {features,walk,talk}
// }
// let alex = humanoid();

// function humans(name,age) {
//   name,age;
//   const humanFeatures = humanoid();
//   return {humanFeatures,name,age,}
// }
// let adam = humans("Adam",7002);


// console.log(adam.humanFeatures.talk(),adam.age,adam.name)


// function robotsAndHumonoidsMaker(intelligenceLevel, modelNumber) {
//   return {
//     intelligenceLevel: intelligenceLevel,
//     modelNumber: modelNumber,

//     solveProblems: function () {
//       return `I solved this problem.`
//     }
//   }
// }
// const walking = {
//   walk() {
//     return `I am walking.`
//   }
// }
// const talking = {
//   talk() {
//     return `I am talking.`
//   }
// }

// function humans(name, age) {
//   return {
//     name,
//     age,
//   }
// }
// let foo = humans("Jane",2)
// Object.assign(foo,talking)
// Object.assign(foo,walking);
// let baz = robotsAndHumonoidsMaker(10,256)

// console.log(foo)
// console.log(foo.walk(),foo.talk())
// console.log(baz.solveProblems())
// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function() {
//     // some statements
//     return `Woof`
//   },
// };

// function Dog() {}
// Dog.prototype = Animal.prototype;
// // function Animal(name) {
// //   // some statements
// // }

// // Animal.prototype = {
// //   speak: function() {
// //     // some statements
// //     return `woof!`
// //   },
// // };

// // function Dog() {}
// // Dog.prototype = Object.create(Animal.prototype);

// console.log(Object.getPrototypeOf(Dog))

// The `Object.assign` method makes a copy of the properties and methods of one object to another whereas the `create` method merely makes an empty new object that references to the parent object. (See below)
// ```javascript
// let obj1 = { foo: 1, bar: 2 };
// let obj2 = Object.assign(obj1, { baz: 3 });

// console.log(obj2),//=> { foo: 1, bar: 2, baz: 3 } HAS ALL THE PROPERTIES IN THE NEW OBJECT
// ```

// The `create` method creates an empty new object which references the parent object through its prototype property only. In example number two, `obj2` does has its own property `baz` because it was assigned that property.

//  ```javascript
// let obj1 = { foo: 1, bar: 2 };
// let obj2 = Object.create(obj1);
// obj2.baz = 3;
// console.log(obj2),//{baz:3} HAS ONLY THE PROPERTY THAT WAS ASSIGNED TO IT
// ```

// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.bark = function() {
//     console.log(`woof`)
// }
// let max = {
//   name: "Max",
//   bark: function () {
//     console.log(`arf!`)
//   }
// }
// let bar = new Dog("Fido");
// bar.bark()//context of the object
// max.bark()
// bar.bark.bind(max);
// bar.name()
// function addNums(num2) {
//   return this.num + num2
// }
// let bar = {
//   num : 1
// }
// let newFunction = addNums.bind(bar);
// console.log(newFunction(2))
// `Function.prototype.bind` explicitly and permanently sets the execution context for a function  to a specified object that is passed into it as an argument. It returns a new function, but does not execute it. To call it one has to  use the method syntax call style.


// class Book {
//   constructor(title,author) {
//     this.title = title;
//     this.author = author;
//     Book.titles.push(this.title)
//   }

//   read() {
//     console.log(`Reading ${this.title}`);
//   }

//   static allTitles() {
//     return Book.titles;
//   }
// }
// Book.titles = [];

// let baz = new Book("The Book", "An Author")
// let bar = new Book("The Book 2", "An Author Again")

// console.log(baz,bar,Book.allTitles())

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   Book.titles.push(this.title)
// }

// Book.prototype.read = function() {
//   console.log(`Reading ${this.title}`);
// };

// Book.titles = [];

// Book.prototype.allTitles = function () {
//     return Book.titles;
// }
// let baz = new Book("The Book", "An Author")
// let bar = new Book("The Book 2", "An Author Again")

// console.log(baz,bar,Book.prototype.allTitles())

//
// let sarah = {
//   name: 'Sarah',
//   introduce() {
//     console.log(`Hi, my name's ${this.name}`);
//   },
// };

// let paul = {
//   name: 'Paul',
// };

// sarah.introduce();

// // #2
// let sarah = {
//   name: 'Sarah',
//   introduce() {
//     console.log(`Hi, my name's ${this.name}`);
//   },
// };

// let paul = {
//   name: 'Paul',
// };

// sarah.introduce.call(paul);


// let andy = {
//   name: 'Andy Davis',
//   toys: [],
//   playWithToys() {
//     return this.toys.forEach(toy => {
//       toy.play()
//     },this)
//   }
// };

// let woody = {
//   name: 'Sheriff Woody',
//   play() {
//     console.log('Reach for the sky!');
//   },
// };

// let buzz = {
//   name: 'Buzz Lightyear',
//   play() {
//     console.log('To Infinity, And Beyond!');
//   },
// };

// andy.toys.push(woody);
// andy.toys.push(buzz);

// These are three independent objects where the `woody` and `buzz` objects both have a method by the same name called `play`. The `andy` object has a property named `toys` which is an empty array, and at the bottom of the program the `woody` object and the `buzz` object are pushed into the `andy` array named `toys`.


// console.log(andy.playWithToys())

// // class Book {
// //   constructor(title,author) {
// //     this.title = title;
// //     this.author = author;
// //   }
// //   getDescription() {
// //     return `${this.title} was written by ${this.author}.`
// //   }
// // }

// // function Book(title,author) {
// //   this.title = title;
// //   this.author = author;
// //   this.getDescription = function() {
// //     return `${this.title} was written by ${this.author}.`
// //   }
// // }

// fu
// let baz = new Book("Me Talk Pretty One Day"
//   , "David Sedaris")
// console.log(
//   baz.getDescription()//"Me Talk Pretty one day was written by David Sedaris."
//   )

// function createCar(make, fuelLevel, engineOn) {
//   // let car = {},
//   return {
//     make : make,
//     fuelLevel : fuelLevel,
//     engineOn : engineOn,


//     drive() {
//       return `I am driving`
//     }
//   }
//   // return car;
// }

// let raceCar1 = createCar('BMW', 0.5, false);
// raceCar1.drive();

// let raceCar2 = createCar('Ferrari', 0.7, true);
// raceCar2.drive();

// console.log(
//   raceCar1.drive()
// )
// let obj = {
//   message: 'JavaScript',
// };

// function foo() {
//   console.log(this.message);
// }
// function bar() {
//   console.log(this.message);
// }
// // foo(obj.message)
// // foo.bind(obj);
// bar.call(obj);
// bar.bind(obj);
// bar(obj)
// foo(obj.message);


// let PetPrototype = {
//     init(animal,name) {
//         this.animal = animal;
//         this.name = name;
//         return this;
//     },

//     sleep: function() {
//         console.log(`I am sleeping`)
//         return `I am sleeping`;
//     },

//     wake: function() {
//         console.log(`I am awake`)
//         return `I am awake`
//     }
// }

// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake


// PetPrototype.prototype.sleep = function () {
// }

// PetPrototype.prototype.wake = function () {
//     return `I am awake`
// }

// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.type}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = createPet("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake


// function createPet(type, name) {
//     return {
//         type :type,
//         name :name,

//     sleep: function() {
//         console.log(`I am sleeping`);
//         },

//     wake: function() {
//         console.log(`I am awake`)
//         }
//     }
// }

// createPet.prototype.sleep = {
//     return `I am sleeping`
// }

// const Animal = function(species) {
//     this.species = species;
//     return this;
//   };

//   Animal.prototype.sleep = function() {
//     console.log(`The ${this.species} is sleeping`);
//   };

//   let lion = new Animal('Panthera leo');
//   lion.sleep(); // TypeError


// class Television {
//     static manufacturer() {
//       // omitted code
//       return `Manufacturer`
//     }

//     model() {
//       // method logic
//       return `model`
//     }
//   }
// let zenith = new Television();

//   console.log(
//       Television.manufacturer(),
//     zenith.model()
//   )

// function User(first, last) {
//      if (!(this instanceof User)) {
//         return new User(first, last)
//      }
//          this.name = first + " " + last // `${this.first} ${this.last}`

//   }

//   let name = 'Jane Doe';
//   let user1 = new User('John', 'Doe');
//   let user2 = User('John', 'Doe');

//   console.log(name);         // => Jane Doe
//   console.log(user1.name);   // => John Doe
//   console.log(user2.name);   // => John Doe

// let ninjaA;

// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// // create a `ninjaB` object here; don't change anything else
// let ninjaB = new ninjaA.constructor()

// console.log(
//     ninjaA.constructor === ninjaB.constructor,
//     ninjaA.constructor) // => true

// function Ninja() {
//     this.swung = false;
//   }

//   // Add a swing method to the Ninja prototype which
//   // modifies `swung` and returns the calling object
// Ninja.prototype.swing = function() {
//    this.swung = true;
//     return this
// }


//   let ninjaA = new Ninja();
//   let ninjaB = new Ninja();

//   console.log(ninjaA.swing().swung);      // logs `true`
//   console.log(ninjaB.swing().swung);      // logs `true`

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.area = function() {
//     return  Math.PI * this.radius**2
// }
// let a = new Circle(3);
// let b = new Circle(4);
// console.log(
// a.area().toFixed(2), // => 28.27
// b.area().toFixed(2), // => 50.27
// a.hasOwnProperty('area'), // => false
// )
// let RECTANGLE = {
//     area: function(width,height) {
//       return this.width * this.height;
//     },
//     perimeter: function() {
//       return 2 * (this.width + this.height);
//     },
//   };

//   function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
//     this.area = RECTANGLE.area.call(this);
//     this.perimeter = RECTANGLE.perimeter.call(this);
//   }

//   let rect1 = new Rectangle(2, 3);

//   console.log(rect1.area);
//   console.log(rect1.perimeter);

// let invoice = {
//     phone: 3000,
//     internet: 6500
//   };

//   let payment = {
//     phone: 1300,
//     internet: 5500
//   };

// //   let invoiceTotal = invoice.phone + invoice.internet;
//   let paymentTotal = payment.phone + payment.internet;
// //   let remainingDue = invoiceTotal() - paymentTotal;

// //   console.log(paymentTotal);         // => 6800
// //   console.log(remainingDue);         // => 2700

// let invoice = createInvoice({
//   phone: 1200,
//   internet: 4000,
// });

// let payment1 = createPayment({ amount: 2000 });
// let payment2 = createPayment({
//   phone: 1000,
//   internet: 1200
// });

// let payment3 = createPayment({ phone: 1000 });

// console.log(
// invoice.addPayment(payment1),
// invoice.addPayments([payment2, payment3]),
// invoice.amountDue(),       // this should return 0
// )

// function createInvoice(services = {}) {
//   let phoneCharge = services.phone;
//   if (phoneCharge === undefined) {
//     phoneCharge = 3000;
//   }

//   let internetCharge = services.internet;
//   if (internetCharge === undefined) {
//     internetCharge = 5500;
//   }
//   let paymentTotal = 0;

//   return {
//     phone: phoneCharge,
//     internet: internetCharge,

//     total() {
//       return this.phone + this.internet
//     },
// ! So my methods worked below but are probably a little more verbose than the LS answer. I also did not use a private array in the function body to store the incoming payments, but rather opted to make the variable a number, and just add the new payments as they came in. The negative to my approach would be that there would be no record of the payments since they would just end up getting garbaged collected after they were added. Though their method would do something similar I would imagine.
//     addPayment(services = {}) {
//       // console.log(services.phone, services.internet,services.amount,paymentTotal)
//       paymentTotal += services.phone === undefined? 0: services.phone;
//       paymentTotal += services.internet === undefined? 0: services.internet;
//       paymentTotal += services.amount === undefined? 0: services.amount;

//         return paymentTotal;
//       },

//       addPayments(services = []) {
//         services.forEach(payment => {
//           paymentTotal += payment.phone === undefined? 0: payment.phone;
//           paymentTotal += payment.internet === undefined? 0: payment.internet;
//           paymentTotal += payment.amount === undefined? 0: payment.amount;
//         })

//         return paymentTotal;
//       },

//       amountDue() {
//         return this.total() - paymentTotal;
//       }
//    }
//  }

//  function createPayment(service = {}) {
//   let internetPayment = service.internet;
//   let phonePayment = service.phone;
//   let amountPaid = service.amount;

//   internetPayment = internetPayment === undefined ? 0 : internetPayment;
//   phonePayment = phonePayment === undefined ? 0 : phonePayment;
//   amountPaid = amountPaid === undefined ? 0 : amountPaid;

//   return {
//     phone:  phonePayment,
//     internet: internetPayment,
//     amount: amountPaid,
//     total() {
//       return this.amount ? this.amount : this.internet + this.phone;
//     }
//   }
//  }

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment)  => sum + payment.total(), 0);
// }
// console.log(createPayment({}))
// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(payments,paymentTotal(payments));      // => 24000

// let invoice113 = createInvoice({phone:5000,internet:2000})
// console.log( invoice113.total(),invoice113.phone,invoice113.internet)


// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

// function createInvoice(services) {
//     let phoneCharge = services.phone || 3000;
//   let internetCharge = services.internet || 5500;

//   phoneCharge = (services.phone === 0) ? 0 : phoneCharge;
//   internetCharge = (services.internet === 0) ? 0 : internetCharge;

//         return {
//             phone: phoneCharge,
//             internet: internetCharge,

//             total: function() {
//                 return this.phone + this.internet;
//             }
//         }

// }

// function invoiceTotal(invoices) {
//     let total = 0;

//     for (let index = 0; index < invoices.length; index += 1) {
//       total += invoices[index].total();
//     }

//     return total;
// }

//   let invoices = [];
//   invoices.push(createInvoice());
//   invoices.push(createInvoice({ internet: 6500 }));
//   invoices.push(createInvoice({ phone: 2000 }));
//   invoices.push(createInvoice({
//     phone: 1000,
//     internet: 4500,
//   }));

//   console.log(invoiceTotal(invoices)); // 31000

//   function createPayment(services = {}) {
//     let payment = {
//       phone: services.phone || 0,
//       internet: services.internet || 0,
//       amount: services.amount,
//     };

//     payment.total = function() {
//       return this.amount || (this.phone + this.internet);
//     };

//     return payment;
//   }

// function Mammal(name) {
//     this.name = name;
// }

// Mammal.prototype.breathe = function() {
//     this.breathe = true;
// };

// let cat = new Mammal;
// console.log(cat)

// let invoice = {
//     phone: 3000,
//     internet: 6500
//   };

//   let payment = {
//     phone: 1300,
//     internet: 5500
//   };

// //   let invoiceTotal = invoice.phone + invoice.internet;
//   let paymentTotal = payment.phone + payment.internet;
//   let remainingDue = invoiceTotal - paymentTotal;

// //   console.log(paymentTotal);         // => 6800
// //   console.log(remainingDue);         // => 2700

//   function createInvoice(services) {
//     if (services) {
//         return services;
//     } else return {
//         phone: 3000,
//         internet: 5500,
//     }
// }

// Function.prototype.total = function() {
//     return this.phone + this.internet;
// }
//   function invoiceTotal(invoices) {
//     let total = 0;

//     for (let index = 0; index < invoices.length; index += 1) {
//       total += invoices[index].total();
//     }

//     return total;
//   }

//   let invoices = [];
//   invoices.push(createInvoice());
//   invoices.push(createInvoice({ internet: 6500 }));
//   invoices.push(createInvoice({ phone: 2000 }));
//   invoices.push(createInvoice({
//     phone: 1000,
//     internet: 4500,
//   }));

//   console.log(invoiceTotal(invoices)); // 31000

// function Dog() {
// }

// function Pet(type) {
//   if (type === 'dog') {
//     return new Dog();
//   } else if (type === 'lion') {
//     return 'not a pet!';
//   }
// }

// let dog = new Pet('dog');
// let lion = new Pet('lion');
// let cat = new Pet('cat');
// console.log(
//     dog,lion,cat
// )
// c
// function makeObj() {
//     return {
//         propA: 10,
//         propB: 20,
//     }

//     // let obj = {};
//     // obj.propA = 10;
//     // obj.propB = 20;
//     // return obj;
//   }

//   console.log(makeObj())

// let cats = {
//     names: [ 'Butterscotch', 'Pudding', 'Fluffy' ],
//     foo() {
//         let self = this;
//       [1, 2, 3].forEach(function(number) {
//         console.log(`${number}: ${self.names[number - 1]}`);
//       });
//     },
//   };

//   cats.foo();
  // Expected output:
  // 1: Butterscotch
  // 2: Pudding
  // 3: Fluffy


// let logResult = function(func, context) {
//     let result = func.call(context);
//     console.log(result);
//     return result;
//   };

//   let foo = function() {
//       let sue = {
//       name: 'Sue Perkins',
//       age: 37,
//       myAge() {
//         return `${this.name} is ${this.age} years old.`;
//       },
//     };
//     logResult(sue.myAge,sue);
//   };
// // foo.bind(logResult);
//   foo();
  // Expected output: Sue Perkins is 37 years old.

// let cat = {
//     name: 'Pudding',
//     colors: 'black and white',
//     identify() {
//       let report = function() {
//         console.log(`${this.name} is a ${this.colors} cat.`);
//       }.bind(cat);
//       report();
//     },
//   };

//   cat.identify();
//   let cat = {
//     name: 'Pudding',
//     colors: 'black and white',
//     identify() {
//       let report = () => {
//         console.log(`${this.name} is a ${this.colors} cat.`);
//       };
//       report();
//     },
//   };

//   cat.identify();
//   let cat = {
//     name: 'Pudding',
//     colors: 'black and white',
//     identify() {
//         let self = this;
//       let report = function() {
//         console.log(`${self.name} is a ${self.colors} cat.`);
//       };
//       report();
//     },
//   };

//   cat.identify();
//   let cat = {
//     name: 'Pudding',
//     colors: 'black and white',
//     identify() {
//       let report = function() {
//         console.log(`${this.name} is a ${this.colors} cat.`);
//       };
//       report.call(cat);
//     },
//   };

//   cat.identify();
  // Expected output: Pudding is black and white.

// (function sum(number1, number2) {
//     return number1 + number2;
//   });

//   console.log(sum(3, 4));

// let sum = (number1, number2) =>  number1 + number2 ;

// console.log(sum(3,5))
// let foo = {
//     a: 0,
//     incrementA: function() {
//         // let self = this;
//       function increment() {
//         this.a += 1;
//       }
// // foo.incrementA.call(foo)
//       increment.apply(this);
//     }
//   };

// //   foo.incrementA.bind(foo)
//   console.log(
//   foo.incrementA(),
//   foo.incrementA(),
//   foo.incrementA(),
//   foo.a
//   )
// const TESgames = {
//     titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//     seriesTitle: 'The Elder Scrolls',
//     listGames: function() {
//       this.titles.forEach(function(title) {
//         console.log(this.seriesTitle + ': ' + title);
//       },this);
//     }
//   };

//   TESgames.listGames();
// const TESgames = {
//     titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//     seriesTitle: 'The Elder Scrolls',
//     listGames: function() {
//       this.titles.forEach(title => {
//         console.log(this.seriesTitle + ': ' + title);
//       });
//     }
//   };
// const TESgames = {
//     titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//     seriesTitle: 'The Elder Scrolls',
//     listGames: function() {
//         let self = this;
//       this.titles.forEach(function(title) {
//         console.log(self.seriesTitle + ': ' + title);
//       });
//     }
//   };

//   TESgames.listGames();


// let turk = {
//     firstName: 'Christopher',
//     lastName: 'Turk',
//     occupation: 'Surgeon',
//     getDescription() {
//         return this.firstName + ' ' + this.lastName + ' is a '
//                                     + this.occupation + '.';
//     }
//   };

//   let newContext = turk.getDescription.bind(turk);
//   console.log(newContext())
//   function logReturnVal(func, context) {
//     let returnVal = func.call(context);
//     console.log(returnVal);
//   }

//   logReturnVal(turk.getDescription, turk);


// let foo = {
//     a: 1,
//     b: 2,
//   };

//   let bar = {
//      a: 'abc',
//      b: 'def',
//      add: function() {
//        return this.a + this.b;
//      },
//   };

//   console.log(bar.add.call(foo))

// let obj =  {foo:1,bar:2};
// let baz = Object.create(obj)
// console.log(baz)
// console.log(baz)
// baz.fif = 4;
// console.log(baz)
// console.log(Object.getPrototypeOf(baz))
// for (let prop in baz) {
//     console.log(`${prop}: ${baz[prop]}`)
// }
// class Person {
//     constructor(firstName, lastName, age, gender) {
//         this.firstName = firstName;
//         this.lastName = lastName ;
//         this.age = age;
//         this.gender = gender;
//     }

//     fullName() {
//         // console.log(`${this.firstName} ${this.lastName}`)
//         return `${this.firstName} ${this.lastName}`
//     }

//     eat() {
//         console.log(`Eating`)
//     }

//     communicate() {
//         console.log(`Communicating`)
//     }

//     sleep() {
//         console.log(`Sleeping`)
//     }
// }

// class Doctor extends Person {
//     constructor(firstName, lastName, age, gender, specialization) {
//         super(firstName, lastName, age, gender)
//         this.specialization = specialization;
//     }

//     diagnose() {
//         console.log(`Diagnosing`)
//     }
// }

// class Student extends Person {
//     constructor(firstName, lastName, age, gender, degree) {
//         super(firstName, lastName,age,gender)
//         this.degree = degree;
//     }
//     study() {
//         console.log(`Studying`)
//     }
// }
// class GraduateStudent extends Student {
//     constructor(firstName, lastName, age, gender, degree) {
//         super(firstName, lastName,age,  gender, degree)
//     }
//     research() {
//         console.log(`Researching`);
//     }
// }
// let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// // function getProtoChain(obj) {
// //     let result = [];

// //     if (obj === "Object.prototype") {
// //         result.push(obj.name)
// //         return result;
// //     }
// //     else {
// //         result.push(obj.name);
// //         return getProtoChain(obj.__proto__)
// //     };
// // }
// // name property added to make objects easier to identify
// let foo = {
//     name: 'foo',
//     // result: [],
//     // ancestors: function() {
//     //     return this.result.push(this.__proto__)
//     // }
// };
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// console.log(foo instanceof baz)
// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

// ! The below solution was done by Juan and it uses the bind method to bind the context to the inside function before calling it.
// function myFilter(array, func, context) {
//     let result = [];
//     func = func.bind(context)

//     array.forEach(function(value) {
//       if (func(value)) {
//         result.push(value);
//       }
//     });

//     return result;
//   }

//   let filter = {
//     allowedValues: [5, 6, 9],
//   }

//   console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//     return this.allowedValues.indexOf(val) >= 0;
//   }, filter)); // returns [5, 6, 9]

// ! The solution below utilizes the thisArg parameter available in most methods and passes the context into the inside function by using the call bind in the function.
  // function myFilter(array, func, thisArg) {
//     let result = [];

//     array.forEach(function(value) {
//       if (func.call(thisArg,value)) {
//         result.push(value);
//       }
//     });

//     return result;
//   }

//   let filter = {
//     allowedValues: [5, 6, 9],
//   }

//   console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
//     return this.allowedValues.indexOf(val) >= 0;
//   }, filter)); // returns [5, 6, 9]

// ! Finally, this below solution is done by merely using an arrow function on the anonymous function which automatically binds the second function.
// let franchise = {
//     name: 'How to Train Your Dragon',
//     allMovies: function() {
//       return [1, 2, 3].map(number => {
//         return `${this.name} ${number}`;
//       });
//     },
//   };

// ! in the below solution to binding fixing in JS the new variable "self" was added to take the context into the second level anonymous function
// let franchise = {
//     name: 'How to Train Your Dragon',
//     allMovies: function(person) {
//         let self = this;
        // let self = this; ! This one is called "lexical closure"
//       return [1, 2, 3].map(function(number) {
//         return self.name + ' ' + number + " is not better than " + person;
//       });
//     },
//   };
// ! The below solution to the binding leaking that was occuring in this problem is now resolved with using "bind" at the end of the anonymous function
// let franchise = {
//     name: 'How to Train Your Dragon',
//     allMovies: function(person) {
        // let self = this; ! This one is called "lexical closure"
//       return [1, 2, 3].map(function(number) {
//         return this.name + ' ' + number + " is not better than " + person;
//       }.bind(this));
//     },
//   };
// franchise.call(name,allMovies)
// franchise.allMovies = franchise.allMovies.bind(franchise,)
//   console.log(
//       franchise.allMovies("Toy Story")
//   )

// function createStudent(name, year) {
//     return {
//       name: name,
//       year: year,
//       courses: [],
//       info: function() {
//         console.log(`${this.name} is a ${this.year} student`);
//       },

//       listCourses: function() {
//         return this.courses;
//       },

//       addCourse: function(course) {
//         this.courses.push(course);
//       },

//       addNote: function(courseCode, note) {
//         let course = this.courses.filter(course => {
//           return course.code === courseCode;
//         })[0];

//         if (course) {
//           if (course.note) {
//             course.note += `; ${note}`;
//           } else {
//             course.note = note;
//           }
//         }

//       },

//       viewNotes: function() {
//         this.courses.forEach(course => {
//           if (course.note) {
//             console.log(`${course.name} : ${course.note}`);
//           }
//         });
//       },

//       updateNote: function(courseCode, note) {
//         let course = this.courses.filter(course => {
//           return course.code === courseCode;
//         })[0];

//         if (course) {
//           course.note = note;
//         }
//       },
//     };
//   }
//   let school = {
//     students: [],
//     addStudent: function(name, year) {
//       if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) >= 0) {
//         let student = createStudent(name, year);
//         this.students.push(student);
//         return student;
//       } else {
//         console.log('Invalid Year');
//       }
//     },

//     enrollStudent: function(student, courseName, courseCode) {
//       student.addCourse({name: courseName, code: courseCode})
//     },

//     addGrade: function(student, courseName, grade) {
//       let course = student.listCourses().filter(course => {
//         return course.name === courseName;
//       })[0];

//       if (course) {
//         course.grade = grade;
//       }
//     },

//     getReportCard: function(student) {
//       student.listCourses().forEach(course => {
//         if (course.grade) {
//           console.log(`${course.name} : ${String(course.grade)}`);
//         } else {
//           console.log(`${course.name} : In progress`);
//         }
//       });
//     },

//     courseReport: function(courseName) {
//       function getCourse(student, courseName) {
//         return student.listCourses().filter(course => {
//           return course.name === courseName;
//         })[0];
//       }

//       let courseStudents = this.students.map(student => {
//         let course = getCourse(student, courseName) || { grade: undefined };
//         return { name: student.name, grade: course.grade };
//       }).filter(student => student.grade);

//       if (courseStudents.length > 0) {
//         console.log(`= ${courseName} Grades=`);

//         let average = courseStudents.reduce((total, student) => {
//           console.log(`${student.name} : ${String(student.grade)}`);
//           return total + student.grade;
//         }, 0) / courseStudents.length;

//         console.log('---');
//         console.log(`Course Average: ${String(average)}`);
//       }
//     },
//   };


// ! My failed attempt below. I think I understand just a little bit better the difference between function factories and class objects.
// class School {
//     constructor(name, year) {
//         this.name = name ;
//         this. year = year;
//         this.studentBody = [];
//         this.courses = [];
//     }

//     addStudent(name,year) {
//         const VALID_YEARS = ["1st","2nd","3rd","4th","5th"];

//         if (VALID_YEARS.includes(year)) {
//             return this.studentBody.push(new Student(name,year));
//         } else {
//             return "Invalid Year";
//         }
//     }

//     enrollStudent(studentName, studentYear = "1st",targetCourse) {
//         let course = this.courses.filter(course => {
//             course.name === targetCourse;
//         })[0];

//         if (course) {
//             if (!course.enrolledStudents) {
//                 this.courses.targetCourse.enrolledStudents = [];
//                 this.courses.targetCourse.enrolledStudents.push(new Student(studentName,studentYear));
//             } else if (!course.enrolledStudents.filter(student => {
//                 return student.name === studentName;
//             })[0]) {
//                 this.courses.targetCourse.enrolledStudents.push(new Student(studentName,studentYear));
//             } else {
//                 return `${this.studentName} is already enrolled in ${this.targetCourse}.`
//             }
//         }
//     }
//     addCourse(course) {
//         return this.courses.push(course)
//     }

//     addGrade(studentName, grade, course) {

//         Student.forEach(student => {
//             if (student.name === studentName ) {
//                 this.courses.forEach(subject => {
//                     if (subject.name === course) {
//                         course.grade = grade;
//                     }
//                 })
//             }
//         })
//     }

//     getReportCard(studentName) {
//         Student.forEach(student => {
//             if (student) {
//                 student.courses.forEach(subject => {
//                     if (subject.courses.name) {
//                         console.log(`${this.name}: ${this.grade || "In Progress"}`)
//                     }
//                 })
//             }
//         })
//     }

//     courseReport(subject) {
//         School.forEach(course => {
//             if (course.name === subject) {
//                 console.log(`=Math Grades=`)
//                 let sum = 0;
//                 let count = 0;
//                 course.forEach(student => {
//                     count++;
//                     sum += student.grade;
//                     console.log(`${student.name}:${student.grade}`)
//                 })
//                 console.log(`---`)
//                 console.log(`Course Average: ${sum / count}`)
//             } else {
//                 console.log(`undefined`)
//             }
//         })
//     }

// }

// class Student extends School {
//     constructor(name,year) {
//         super(name,year)
//         // this.name = name;
//         // this.year = year;
//     }

//     info() {
//         console.log(`${this.name} is a ${this.year} student`)
//     }

//     addCourse(course) {
//         return this.courses.push(course)
//     }

//     listCourses() {
//         console.log( this.courses)
//     }

//     addNote(courseNumber, note) {
//         let course = this.courses.filter(el => {
//             return el.code === courseNumber;
//         })[0];

//         if (course) {
//             if (course.note) {
//                 course.note += `; ${note}`;
//             } else {
//                 course.note = note;
//             }
//         }
//         // return this.courses[index] .courseNumber.note += note;
//     }

//     viewNotes() {
//         this.courses.forEach(course => {
//             if (course.note) {
//                 console.log(`${course.name}: ${course.note}`);
//             }
//         })
//         // console.log(`${this.courses.course}: ${this.note}`)
//     }

//     updateNote(courseNumber,note) {
//         let course = this.courses.filter(course => {
//             return course.code === courseNumber;
//         })[0]

//         if (course) {
//             return course.note = ` ${note}`
//         }
//     }
// }

// //  let foo = new createStudent('Foo', '1st');
//  let ribet = new School();
//  ribet.addCourse({ name: 'Math', code: 101 });
//  ribet.addCourse({ name: 'Advanced Math', code: 102 });
//  console.log(ribet.addStudent("Foo","1st"));
//  console.log(ribet.addStudent("Bar","5th"));
//  console.log(ribet.addStudent("Baz","2nd"));
//  ribet.enrollStudent("Faz","4th","Advanced Math")
//  console.log(ribet)
// School.addStudent("foo")
//  ! Last exercise tests
//  let foo = new createStudent('Foo', '1st');
//  foo.info();
// //  "Foo is a 1st year student"
//  foo.listCourses();
// //  [];
//  foo.listCourses();
//  [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
//  foo.addNote(101, 'Fun course');
//  foo.addNote(101, 'Remember to study for algebra');
//  foo.viewNotes();
// //  "Math: Fun course; Remember to study for algebra"
//  foo.addNote(102, 'Difficult subject');
//  foo.viewNotes();
// //  "Math: Fun course; Remember to study for algebra"
// //  "Advance Math: Difficult subject"
//  foo.updateNote(101, 'Fun course');
//  foo.viewNotes();
//  "Math: Fun course"
//  "Advanced Math: Difficult subject"

// function objectsEqual(obj1, obj2) {
//     if (obj1 === obj2) return true;
//     let obj1Array = Object.entries(obj1);
//     let obj2Array = Object.entries(obj2);
//     if (obj1Array.length !== obj2Array.length) return false;

//     return obj1Array.every((arr,idx) => {
//         return arr[0] === obj2Array[idx][0]
//     }) && obj1Array.every((arr,idx) => {
//         return arr[1] === obj2Array[idx][1]
//     });
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// let item = {
//     name: 'Foo',
//     description: 'Fusce consequat dui est, semper.',
//     price: 50,
//     quantity: 100,
//     discount: function(percent) {
//         // console.log(this.price)
//         let discount = this.price * percent / 100;
//         let discountedPrice = this.price - discount;
//     //   this.price -= discount;

//       return discountedPrice
//     },
//   };

// console.log(
//    item.discount(20),   // should return 40 = 40
//    item.discount(50),   // should return 25 = 20
//    item.discount(25),   // should return 37.5 = 15
// )
// function createGreeter(name) {
//     return {
//       name: name,
//       morning: 'Good Morning',
//       afternoon: 'Good Afternoon',
//       evening: 'Good Evening',
//       greet: function(timeOfDay) {
//         let msg = '';
//         switch (timeOfDay) {
//           case 'morning':
//             msg += `${this.morning} ${this.name}`;
//             break;
//           case 'afternoon':
//             msg += `${this.afternoon} ${this.name}`;
//             break;
//           case 'evening':
//             msg += `${this.evening} ${this.name}`;
//             break;
//         }

//         console.log(msg);
//       },
//     };
//   }

//  let helloVictor = createGreeter('Victor');
//  helloVictor.greet('morning');// = Good Morning Victor

// class Banner {
//     constructor(message, maxWidth) {
//         this.message = message;
//         this.maxWidth = maxWidth;
//         this.length = message.length
//     }

//     displayBanner() {
//       console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
//     }

//     horizontalRule() {
//         if (this.length > this.maxWidth) {
//             return "+-" + "-".repeat(this.maxWidth) + "-+"
//         } else {
//             return "+-" + "-".repeat(this.length) + "-+"
//         }
//     }

//     emptyLine() {
//         if (this.length > this.maxWidth) {
//             return "| " + " ".repeat(this.maxWidth) + " |"
//         } else {
//             return "| " + " ".repeat(this.length) + " |"
//         }
//     }

//     messageLine() {
//         let messageSegments = [];

//         if (this.length > this.maxWidth) {
//             // ! THis code almost worked until I added the substr and return value below. Not sure how to fix it. Besides, it would not have been centered anyways.
//             for (let i = 0; i < this.message; i += this.maxWidth) {
//                 messageSegments.push(this.message.substr(i,this.maxWidth))
//             }
//             return messageSegments.join("\n")// "| " + messageSegments.join("\n") + " |"
//         } else {
//             return `| ${this.message} |`
//         }

//     }
//   }

//   let banner1 = new Banner('To boldly go where no one has gone before.',20);
// banner1.displayBanner();
// // +--------------------------------------------+
// // |                                            |
// // | To boldly go where no one has gone before. |
// // |                                            |
// // +--------------------------------------------+
// let banner2 = new Banner('');
// banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+


// class Owner {
//     constructor(ownerName) {
//         this.ownerName = ownerName;
//         this.pets = [];
//     }

//     addPets(pet) {
//         this.pets.push(pet)
//     }

//     numberOfPets() {
//         return this.pets.length;
//     }

//     printPets() {
//         this.pets.forEach(pet => console.log(pet.info()))
//     }
// }

// class Pet {
//     constructor(petType,petName) {
//         this.petType = petType;
//         this.petName = petName;
//     }
//     info() {
//         return `a ${this.petType} named ${this.petName}`;
//     }
// }

// class Shelter {
//     constructor() {
//         this.owners = {};
//         this.availablePets = [];
//     }

//     adopt(owner, pet) {
//         owner.addPets(pet);
//         if (!this.owners[owner.ownerName]) {
//             this.owners[owner.ownerName] = owner;
//         }
//     }

//     addPets(pet) {
//         this.availablePets.push(pet)
//     }

//     printAvailablePets() {
//         this.availablePets.forEach(pet => console.log(`The following pets are looking for a nice home:` )pet)
//     }

//     printAdoptions() {
//         for (let name in this.owners) {
//             console.log(`${name} has adopted the following pets:`)
//             this.owners[name].printPets();
//             console.log("")

//         }
//     }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// // shelter.adopt(phanson, butterscotch);
// // shelter.adopt(phanson, pudding);
// // shelter.adopt(phanson, darwin);
// // shelter.adopt(bholmes, kennedy);
// // shelter.adopt(bholmes, sweetie);
// // shelter.adopt(bholmes, molly);
// // shelter.adopt(bholmes, chester);
// // shelter.printAdoptions();
// // console.log(`${phanson.ownerName} has ${phanson.numberOfPets()} adopted pets.`);
// // console.log(`${bholmes.ownerName} has ${bholmes.numberOfPets()} adopted pets.`);
// shelter.addPets( butterscotch);
// shelter.addPets( pudding);
// shelter.addPets( darwin);
// shelter.addPets(kennedy);
// shelter.addPets(sweetie);
// shelter.addPets(molly);
// shelter.addPets(chester);
// shelter.printAvailablePets()

// class Person {
//     constructor(name) {
//       this.name = name;
//       Object.assign(this,walkMixin)
//     }

//     gait() {
//       return "strolls";
//     }
//   }

//   class Cat {
//     constructor(name) {
//       this.name = name;
//       Object.assign(this,walkMixin)
//     }

//     gait() {
//       return "saunters";
//     }
//   }

//   class Cheetah {
//     constructor(name) {
//       this.name = name;
//       Object.assign(this,walkMixin)
//     }

//     gait() {
//       return "runs";
//     }
//   }

// const walkMixin = {
//     walk() {
//         return `${this.name} ${this.gait()} forward`
//     }
// }


//   let mike = new Person("Mike");
//   console.log(mike.walk());
//   // "Mike strolls forward"

//   let kitty = new Cat("Kitty");
//   console.log(kitty.walk());
//   // "Kitty saunters forward"

//   let flash = new Cheetah("Flash");
//   console.log(flash.walk());
  // "Flash runs forward"


// class Person {
//     constructor(text) {
//         this.text = text;
//     }

//     greeting(text) {
//         console.log(text);
//     }
// }
// class Shouter extends Person {
//     constructor(text) {
//         super(text);
//     }
//     greeting(text) {
//         super.greeting(text.toUpperCase());
//     }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

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


// var Person = function(name) {
//   this.name = name;
//   this.canTalk = true;
// };

// Person.prototype.greet = function() {
//   if (this.canTalk) {
//     console.log('Hi, I am ' + this.name);
//   }
// };

// var Employee = function(name, title) {
//   Person.call(this, name);
//   this.title = title;
// };

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee,
//                                            //it will take prototype.constructor of Person (parent).
//                                            //To avoid that, we set the prototype.constructor to Employee (child).

// Employee.prototype.greet = function() {
//   if (this.canTalk) {
//     console.log('Hi, I am ' + this.name + ', the ' + this.title);
//   }
// };
