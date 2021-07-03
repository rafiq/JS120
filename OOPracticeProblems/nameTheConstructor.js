function PetMaker(animal, name) {
  this.animal = animal
  this.name = name
}

PetMaker.prototype.wake = function() {
  console.log(`I am awake`)
}
PetMaker.prototype.sleep = function() {
  console.log(`I am asleep`)
}


// let PetPrototype = {
//   sleep: function() {
//     console.log(`I am sleeping`)
//   },
//   wake: function() {
//     console.log(`I am awake`)
//   },
//   init(animal,name) {
//     this.animal = animal
//     this.name = name
//     return this
//   }
// }

let pudding = new PetMaker("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = new PetMaker("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

// let RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   Object.setPrototypeOf(RECTANGLE,this)
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area);
// console.log(rect1.perimeter);

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = function() {
//   console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
// };

// function Shitsu(name,breed,weight) {
//   Dog.call(name, breed, weight);
//   this.color = "black"
// }

// Shitsu.prototype = Object.create(Dog.prototype);

// let mink = new Shitsu("mink","shitsu",12);
// mink.bark();
// // Shitsu.prototype = new Dog();
// console.log(mink.color)
// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// maxi.bark(); // 'Woof!'

// let biggie = new Dog('Biggie', 'Whippet', 9);
// biggie.bark(); // 'Yip!'

// let foo = {
//   a: 0,
//   incrementA: function() {
//     let increment = function() {
//       this.a += 1;
//     }.bind(this)
//     // let qux = increment.bind(this.incrementA)
//     // qux();
//     increment()
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a)
// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }
// let getTurkDescription = turk.getDescription.bind(turk)
// logReturnVal(getTurkDescription);


// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription: function() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);


// arrow function
// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes(() => {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     });
//   },
// };

// john.greetings();
// outside variable
// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     let self = this
//     repeatThreeTimes(function() {
//       console.log('hello, ' + self.firstName + ' ' + self.lastName);
//     });
//   },
// };

// john.greetings();

// bind on function expression
// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes(function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     }.bind(this));
//   },
// };

// john.greetings();

// bind on function declaration
// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     };
//     repeatThreeTimes.bind(this)
//   },
// };

// john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined



// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined


// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = () => {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar();
//   },
// };
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = function() {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this)

//     bar();
//   },
// };
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }
//     let qux = bar.bind(this);
//     qux();
//   },
// };

// obj.foo();        // => undefined undefined

// console.log(obj.foo());        // => undefined undefined


// let foo = {

//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add: function() {
//      return this.a + this.b;
//    },
// };
// console.log(bar.add.call(foo))
// console.log(global.isFinite.toString())
// let nullObject = Object.create(null);
// nullObject.foo = 10
// console.log(Object.getOwnPropertyNames(nullObject))
// function assignProperty(obj,methName,val) {
//   if (obj === null) return;

//   while (!obj.hasOwnProperty(methName)) {
//     obj = Object.getPrototypeOf(obj);
//     if (obj === null) return;
//   }

//   if (obj[methName]) {
//     obj[methName] = val
//   }

//   return obj
// }

// let fooA = { bar: 1,qux:10 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// console.log(fooA.qux); // undefined
// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

// let ninjaA;

// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// // create a `ninjaB` object here; don't change anything else

// let ninjaB = new ninjaA.constructor();
// ninjaA.constructor === ninjaB.constructor // => true
// // IF YOU USE CREATE THEN THE PROPERTIES DON'T COPY OVER EXACTLY AS EXPECTED.
// // let ninjaB = Object.create(ninjaA);
// console.log(ninjaB.swung)
// function Animal() {
//   this.type = "mammal";
// }

// Animal.prototype.breathe = function() {
//   console.log("I'm breathing");
// }

// function Dog() {
//   this.legs = 4;
// }

// function Terrier() {}

// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;

// Terrier.prototype = new Dog()
// Terrier.prototype.constructor = Terrier;

// var rex = new Terrier();

// console.log(rex.constructor);                   // f Terrier() {}
// console.log(rex.type);                          // "mammal"
// rex.breathe();                                  // "I'm breathing"
// console.log(rex.legs);                          // undefined
// console.log(Object.getOwnPropertyNames(rex))    // []


// let carPrototype = {
//   start: function() {
//     this.started = true;
//   },

//   stop: function() {
//     this.started = false;
//   },
// };

// let car1 = Object.create(carPrototype);
// car1.make = 'Toyota';
// car1.model = 'Corolla';
// car1.year = 2016;
// console.log(car1.__proto__.constructor === Object)
// car1.start();
// car1.started; // => true

// car1.stop();
// car1.started; // => false

// outside variable
// let compare = {
//   number: 10,
//   compareNumbers(nums) {
//     let self = this;

//     return nums.filter(function(num) {
//       return num < self.number;
//     });
//   },
// };

// calling on the this keyword
// let compare = {
//   number: 10,
//   compareNumbers(nums) {
//     return nums.filter(function(num) {
//       return num < this.number;
//     },this);
//   },
// };

// aarrow function
// let compare = {
//   number: 10,
//   compareNumbers(nums) {
//     return nums.filter((num) => {
//       return num < this.number;
//     });
//   },
// };

// // compare.compareNumbers([1, 6, 19, 7, 12]);
// console.log(
//   compare.compareNumbers([1, 6, 19, 7, 12])
//   )

// compare.compareNumbers([1, 6, 19, 7, 12]);

// let cat = {
//   name: 'Fluffy',
// };

// function purr() {
//   console.log(`${this.name} is purring...`);
// }

// purr.call(cat);

// function Animal(species) {
//   this.species = species;
//   // return species;
// };

// Animal.prototype.sleep = function() {
//   console.log(`The ${this.species} is sleeping`);
// };

// let lion = new Animal('Panthera leo');
// console.log(lion.sleep()); // TypeError

// Fish.prototype = Object.create(Animal.prototype);
// Fish.prototype.constructor = Fish;

// function Fish(species,name) {
//   Animal.call(this,species)
//   this.name = name;
// }
// let nemo = new Fish("Fish","Nemo");
// console.log(nemo.sleep(),nemo.name)


// function User(first, last) {
//   // safe scope constructor = use the new keyword or not when calling the new instance
//   if (!(this instanceof User)) {
//     return new User(first, last)
//   }
//   this.name = `${first} ${last}`
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

// // create a `ninjaB` object here; don't change anything else
// let ninjaB = new ninjaA.constructor()
// console.log(
//   ninjaA.constructor === ninjaB.constructor // => true
//   )


// function Ninja() {
//   this.swung = false;
// }

// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this
// }

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();
// console.log(ninjaA.swung)
// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`



// function Ninja() {

//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
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

// Circle.prototype.area = function() {
//   return (this.radius**2 ) * Math.PI;
// }

// let a = new Circle(3);
// let b = new Circle(4);
// console.log(
//   a.area().toFixed(2), // => 28.27
//   b.area().toFixed(2), // => 50.27
//   a.hasOwnProperty('area'), // => false
//   )


// let RECTANGLE = {
//   area: function(context) {
//     // function.area.call(context)
//     this.area.call(context)
//     return this.width * this.height;
//   },
//   perimeter: function(context) {
//     this.perimeter.call(context)
//     return 2 * (this.width + this.height);
//   },
// };
// //  pass the context to the function
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area(this);
//   this.perimeter = RECTANGLE.perimeter(this);
// }

// bind the function to the object
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.bind(this);
//   this.perimeter = RECTANGLE.perimeter.bind(this);
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area());
// console.log(rect1.perimeter());


// use the call method  to set a specific context
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area);
// console.log(rect1.perimeter);



// let DogPrototype = {
//   species: "Dog",
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, DogPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   // this.bark method removed.
// }
// function Dog(name, breed, weight) {
//   // Object.setPrototypeOf(this, Dog.myPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = function() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
// };

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);
// maxi.bark(); // 'Woof!'
// console.log(

//   maxi.hasOwnProperty('bark'), // false
//   dexter.hasOwnProperty('bark'), // false
//   biggie.hasOwnProperty('bark'), // false
//   Object.getPrototypeOf(maxi).bark === Dog.prototype.bark, // true
//   Object.getPrototypeOf(dexter).bark === Dog.prototype.bark, // true
//   Object.getPrototypeOf(biggie).bark === Dog.prototype.bark, // true
//   )

// let benji = new Dog()  //Object.create(DogPrototype);
// console.log(benji.species)
// console.log(benji.hasOwnProperty("species"))
// console.log(benji.hasOwnProperty("bark"))
// console.log(Object.getPrototypeOf(benji).hasOwnProperty("species"))
// console.log(Object.getPrototypeOf(benji).hasOwnProperty("bark"))
// console.log(benji.constructor.name)
// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = new Lizard();
// lizzy.scamper(); // ?

// let car = {
//   make: 'Toyota',
//   model: 'Corolla',
//   year: 2016,
//   started: false,

//   start() {
//     this.started = true;
//   },

//   stop() {
//     this.started = false;
//   },
// };

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.started = false;

//   this.start = function() {  //we don't do this usually with constructor functions due to the fact that this is going to require excessive memory because of copying these methods to every instance. Instead, we place these and other methods on the constructor function's prototype object which is automatically set as the reference for new instances which will all all new instances (that have used the new keyword) to access those methods without any problem.
//     this.started = true;
//   }

//   this.stop = function() {
//     this.started = false;
//   }
// }

// function Car(args = {}) {
//   this.make = args.make;
//   this.model = args.model;
//   this.year = args.year;
//   this.color = args.color;
//   this.passengers = args.passengers;
//   this.convertible = args.convertible;
//   this.mileage = args.mileage;
//   this.started = false;

//   this.drive = function() {
//     this.started = true;
//   };

//   // rest of methods
// }

// Car.wheels = 4;

// Car.prototype.start = function() {
//   this.started = true;
// }

// Car.prototype.stop = function() {
//   this.started = false;
// }

// let sedan = new Car("Ford","F150",2021)
// let civicArgs = {
//   make: "",
//   model: 'Civic',
//   year: 2016,
//   color: 'black',
//   passengers: 5,
//   convertible: false,
//   mileage: 16000
// };

// let civic = new Car(civicArgs);

// if (civic instanceof Car) {
//   console.log("It's a car!");
// } else {
//   console.log("It's not a car.");
// }

// console.log(civic.make)
// console.log(sedan.start())
// console.log(sedan.started)
// console.log(Object.getPrototypeOf(sedan) === Car.prototype)
// console.log(Car.wheels)
// console.log(Object.keys(sedan))
// for (let keys in sedan) {
//   console.log(keys)
// }

// console.log(sedan.constructor.name)



// var Animal = {
//   init: function(type) {
//     this.type = type;
//   },

//   breathe: function() {
//     console.log("I'm breathing");
//   },
// }

// var Dog = Object.create(Animal);
// var Terrier = Object.create(Dog);

// var mammal = Object.create(Animal);
// mammal.init("mammal");
// var reptile = Object.create(Animal);
// reptile.init("reptile");
// console.log(Object.getPrototypeOf(Dog) === Animal)
// // console.log(Object.getPrototypeOf(Terrier) === Animal)
// console.log(Object.getPrototypeOf(Terrier) === Dog)
// let creature = Object.create(mammal.__proto__)
// console.log(creature.breathe())
// // console.log(mammal.type);   // "mammal"
// // mammal.breathe();           // "I'm breathing"
// // console.log(reptile.type);  // "reptile"
// // reptile.breathe();          // "I'm breathing"
// var rex = Object.create(Terrier);
// rex.init("canine");

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

// function createInvoice(services = {}) {
//   return {
//     phone: services.phone || 3000,
//     internet: services.internet || 5500,
//     total: function() {
//       return this.phone + this.internet;
//     }
//   }
// }

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

// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
//   return {
//     propA = 10,
//     propB = 20,
//   }
// }
// function bar() {
//   console.log('good morning');
// }

// global.inner = {
//   bar() {
//     console.log('good afternoon');
//   },
// };

// let obj = {
//   inner: {
//     bar() {
//       console.log('good night');
//     },

//     foo() {
//       bar();
//     },
//   },

//   bar() {
//     console.log('wake up');
//   },

//   foo() {
//     this.inner.bar();
//     inner.bar();
//     bar();
//   }
// };

// obj.foo();

// use call method at the time of invocationn inside the outside function.
// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(this);
//   }
// };
// console.log(

//   foo.incrementA(),
//   foo.incrementA(),
//   foo.incrementA(),
//   foo.a
//   )

  // use an arrow function
// let foo = {
//   a: 0,
//   incrementA: function() {
//      let increment = () => {
//       this.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a)

// use an outside variable
// let foo = {
//   a: 0,
//   incrementA: function() {
//     let self = this;
//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a)



// use an outside variable

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();


// use thisArg
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     },this);
//   }
// };

// TESgames.listGames();

// use arrow function
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach((title) => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// use function expression and .bind(this)
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }.bind(this));
//   }
// };

// TESgames.listGames();

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription.bind(turk));

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func,ctx) {
//   let returnVal = func.call(ctx);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription,turk);


// function repeatThreeTimes(func,context) {
//   func.call(context);
//   func.call(context);
//   func.call(context);
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes(function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },this);
//     // let baz = repeatThreeTimes.bind(this)
//     // baz()
//   },
// };
// // console.log
// john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//    let baz = bar.bind(this);

//     baz()
//   },
// };

// console.log(obj.foo());        // => undefined undefined


// function repeatThreeTimes(func,context) {
//   func.call(context); // can't use func.call(john); john is out of scope
//   func.call(context);
//   func.call(context);
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };
//   // let baz = john

//   repeatThreeTimes(john.greetings.bind(john)); // Strips context
// }
// console.log(

//   foo(),
//   )

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add: function() {
//      return this.a + this.b;
//    },
// };

// console.log(bar.add.call(foo))
// let soleObj = Object.create(null);
// console.log(Object.getPrototypeOf(soleObj))

// function assignProperty(obj,prop,val) {

//   while(obj) {
//     if (obj.hasOwnProperty(prop)) return obj[prop] = val;
//     else obj = Object.getPrototypeOf(obj)
//   }
//   return;
// }

// let fooA = { bar: 1 };
// fooA.sum = (num) =>  num + 2
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);
// console.log(
//   [1,2,3].map(el => fooC.sum(el))
//   )

// for (let property in fooC) {
//   console.log(`${property}: ${fooC[property]}`);
// }

// Object.keys(fooC).forEach(property => {
//   console.log(`${property}: ${fooC[property]}`);
// });
// console.log(fooC.bar,fooA.bar,fooC,fooA)
// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false


// let myObject = { };

// myObject[false] = "one"
// myObject[7] = "two"
// myObject[[1, 2, 3]] = "three"

// Object.keys(myObject);                // ["7", "false", "1,2,3"]

// myObject["false"]                     // "one"
// myObject["7"]                         // "two"
// myObject["1,2,3"]                     // "three"


// Object.keys(myObject)                       //  [ '7', 'false', '1,2,3', 'a-key' ]
// myObject["undefinedKey"] = undefined

// // myObject.undefinedKey                       // undefined
// myObject.missingKey                         // undefined
// console.log("7" in myObject,myObject)
// Attributes
//   Title: Mythos
//   Author: Stephen Fry

// Behavior:
//   Get Description

// -----------------------------
// Attributes
//   Title: Me Talk Pretty One Day
//   Author: David Sedaris

// Behavior:
//   Get Description

// -----------------------------
// Attributes
//  Title: Aunts aren't Gentlemen
//  Author: PG Wodehouse

//  Behavior:
//    Get Description

// function booksMaker(title,author,read = false) {
//   return {
//     title,
//     author,
//     read,
//     getDescription: function() {
//       return `${this.title} was written by ${this.author}. I ${this.read ? "have" : "haven't"} read it.`
//     },
//     readBook: function() {
//       this.read = true;
//     },

//   }
// }

// let book1 = booksMaker("Aunts aren't Gentlemen","PG Wodehouse")
// let book2 = booksMaker("Me Talk Pretty One Day","David Sedaris")
// console.log(book1.read,book1.readBook(),book1.getDescription(),book2.getDescription())


// const Books = {
//   getDescription() {
//     return `${this.title} was written by ${this.author}.`
//   },

//   init(title, author) {
//     this.title = title;
//     this.author = author;
//     return this;
//   }
// }

// let book1 = Object.create(Books).init("Aunts aren't Gentlemen","PG Wodehouse")
// let book2 = Object.create(Books).init("Me Talk Pretty One Day","David Sedaris")
// console.log(book1.getDescription(),book2.getDescription())

// function createCar(make, fuelLevel, engineOn) {

//   return {
//     make,
//     fuelLevel,
//     engineOn,
//     drive: function() {
//       return `I am driving a ${this.make}`
//     },
//     refuel: function(percent) {
//       this.fuelLevel = percent * this.fuelLevel
//       return this.fuelLevel;
//     }
//   }
// }
// let raceCar1 = createCar('BMW', 0.5, false);
// let raceCar2 = createCar('Ferrari', 0.7, true);

// console.log(
//   raceCar1.drive(),
//   raceCar2.drive(),
//   raceCar1.fuelLevel,
//   raceCar1.refuel(.30),
//   raceCar1.refuel(.50),
// )
// let cat = {
//   name: 'Fluffy',

//   makeNoise() {
//     console.log('Meow! Meow!');
//   },

//   eat() {
//     return `I am eating like a cat`
//   },
// };

// let dog = {
//   name: 'Maxi',

//   makeNoise() {
//     console.log('Woof! Woof!');
//   },

//   eat() {
//     return `I am a dog eating`
//   },
// };

// let pete = {
//   name: 'Pete',
//   pets: [],
// };

// pete.pets.push(cat);
// pete.pets.push(dog);
// console.log(
//   pete.pets[0].makeNoise()
// )
// let pete = {
//   heroes: ['Superman', 'Spiderman', 'Batman'],
//   cash: { ones: 12, fives: 2, tens: 3, twenties: 2, hundreds: 1 },

//   cashOnHand() {
//     let bills = Object.keys(this.cash)
//     let total = 0;
//     bills.forEach(bill => {
//       if (this.cash[bill]) {
//         if (bill === "ones") {
//           total += this.cash[bill]
//         } else if (bill === "fives") {
//           total += this.cash[bill] * 5
//         } else if (bill === "tens") {
//           total += this.cash[bill] * 10
//         } else if (bill === "twenties") {
//           total += this.cash[bill] * 20
//         } else if (bill === "hundreds") {
//           total += this.cash[bill] * 100
//         }
//       }
//     })
//     return total;
//   },

//   allHeroes() {
//     return this.heroes.join(', ');
//   },
// };
// console.log(
//   pete.cashOnHand()
// )

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');
// kitty.greet()

// class Cat {
//   constructor() {
//     console.log(`I am a cat.`)
//   }
// }

// let kitty = new Cat();
// kitty
// console.log("Hello".constructor.name);
// console.log([1,2,3].constructor.name);
// console.log({name: 'Srdjan'}.constructor.name);


// function calculateBonus() {
//   return arguments[1] ? arguments[0] / 2 : 0;
// }
// console.log(

//   calculateBonus(2800, true),               // 1400
//   calculateBonus(1000, false),              // 0
//   calculateBonus(50000, true),              // 25000
//   )



// const myArray = ['a', 'b', 'c'];


// console.log(myArray[0]);
// console.log(myArray[-1]);

// myArray[-1] = 'd';
// myArray['e'] = 5;
// myArray[3] = 'f';

// console.log(myArray[-1]);
// console.log(myArray['e']);
// console.log(myArray);

// const myObj = {};
// myObj[myFunc()] = 'hello, ';

// function myFunc() {
//   return 'funcProp';
// }

// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);

// const myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };

// const prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';

// console.log(myObject[prop2]);
// console.log(myObject.prop2);

// const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
// const array2 = [];

// for (let i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

// for (let i = 0; i < array1.length; i += 1) {
//   if (array1[i].startsWith('C')) {
//     array1[i] = array1[i].toUpperCase();
//     array2[i] = array1[i].toUpperCase();
//   }
// }

// console.log(array2,array1);

// const array1 = ['Moe', {1:"Frank"}, 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
// const array2 = [];

// for (let i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

// for (let i = 0; i < array1.length; i += 1) {
//   if (typeof array1[i] !== "object") {
//     array1[i] = array1[i].toUpperCase();
//   } else {
//     array1[i][1] = "George"
//   }
// }

// console.log(array2,array1);

// const person = {
//   firstName() {
//     return 'Victor';
//   },
//   lastName() {
//     return 'Reyes';
//   },
// };

// console.log(`${person.firstName()} ${person.lastName()}`);

// const myObject = {
//   a: 'name',
//   'b': 'test',
//   123: 'c',
//   1: 'd',
// };

// myObject[1];
// myObject[a];
// myObject.a;

// let tasks = 10;
// let checkmarks = 0;
// let sessions = 0;
// let minutes = 0;

// function pomodoro() {
//   console.log('Work.');

//   while (minutes < 25) {
//     minutes += 1;
//     console.log('...' + minutes);
//   }

//   console.log('PLING!');

//   sessions += 1;
//   checkmarks += 1;

//   if (checkmarks === tasks) {
//     console.log('Done!');
//     return;
//   }

//   let rest;
//   if (sessions === 4) {
//     sessions = 0;
//     rest = 30;
//   } else {
//     rest = 5;
//   }

//   console.log('Rest for ' + rest + ' minutes.');

//   minutes = 0;
//   pomodoro();
// }

// pomodoro();

// const memberDirectory = {
//   'Jane Doe': '323-8293',
//   'Margaret Asbury': '989-1111',
//   'Callum Beech': '533-9090',
//   'Juanita Eastman': '424-1919',
// };

// function isValidName(name) {
//   return (/^[a-z]+ [a-z]+$/i).test(name);
// }
// // console.log(isValidName("Smith 5"))
// function isValidPhone(phone) {
//   return (/^\d{3}-\d{4}$/).test(phone);
// }

// function validMemberInfo(name, phone) {
//   return isValidName(name) && isValidPhone(phone);
// }

// function addMember(name, phone) {
//   if (validMemberInfo(name, phone)) {
//     memberDirectory[name] = phone;
//   } else {
//     console.log('Invalid member information.');
//   }
// }

// addMember('Laura Carlisle', '444-2223');
// addMember('Rachel Garcia', '232-1191');
// addMember('Earl 5mith', '331-9191');

// console.log(memberDirectory);

// function formatName([firstName, middleName, lastName]) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// let fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(fullName));
// logs: Kirk, James T.

// function sum(...args) {
//   // values = Array.prototype.slice.call(arguments);

//   return args.reduce(function(a, b) {
//     return a + b;
//   });
// }

// console.log(sum(1, 4, 5, 6)); // 16

// let foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'

// function delegate(obj,meth,...args) {
//   return () => {
//     return obj[meth].call(obj,args)
//   }
// }
// function newStack() {
//   let stack = [];


//   return {
//     push(val) {
//       stack.push(val);
//     },
//     pop() {
//       return stack.pop();
//     },
//     printStack() {

//       stack.forEach(el => console.log(el))
//     }
//   }
// }

// let foo = newStack();
// console.log(
//   foo.push(1),
//   foo.printStack(),
//   foo.push(2),
//   foo.push(3),
//   foo.printStack(),
//   foo.pop(),
//   foo.printStack()
// )

// function myFilter(array, func, ctx) {
//   const result = [];

//   array.forEach(value => {
//     if (func.call(ctx,value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }

// const filter = {
//   allowedValues: [5, 6, 9],
// };
// console.log(

//   myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
//     return this.allowedValues.includes(val);
//   }, filter), // returns [5, 6]
//   )


// function myBind(func, ctx) {
//   return function(...args) {
//     return func.apply(ctx, args);
//   };
// }
// console.log(myBind())
// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function (number) {
//       return `${this.name} ${number}`;
//     }.bind(this));
//   },
// };
// // const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let self = this;
//     return [1, 2, 3].map(number => {
//       return `${self.name} ${number}`;
//     });
//   },
// };
// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(number => {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies())
// function repeater(str) {

//   return str.split("").reduce((acc,curr) => {
//     acc += curr + curr;
//     return acc;
//   },"");
// }
// console.log(

//   repeater('Hello'),        // "HHeelllloo"
//   repeater('Good job!'),    // "GGoooodd  jjoobb!!"
//   repeater(''),             // ""
//   )


// const languages = ['JavaScript', 'Ruby', 'Python'];

// console.log(languages);
// console.log(languages.length);

// languages.length = 4;
// console.log(languages);
// console.log(languages.length);

// languages.length = 1;
// console.log(languages);
// console.log(languages.length);

// languages.length = 3;
// console.log(languages);
// console.log(languages.length);

// languages.length = 1;
// languages[2] = 'Python';
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length);


// const array = ['Apples', 'Peaches', 'Grapes'];


// array[3.4] = 'Oranges';
// console.log(array)
// console.log(array.length);
// console.log(Object.keys(array).length);

// array[-2] = 'Watermelon';
// console.log(array.length);
// console.log(Object.keys(array).length);


// function makeDoubler(caller) {
//   return number => {
//     console.log(`This function was called by ${caller}.`);
//     return number + number;
//   };
// }

// const doubler = makeDoubler('Victor');
// doubler(5);                             // returns 10
// logs:
// This function was called by Victor.
// const doubler2 = makeDoubler('Victor');
// doubler2(5);                             // returns 10
// // logs:
// // This function was called by Victor.

// function makeDoubler(caller) {
//   return number => {
//     console.log(`This function was called by ${caller}`)
//     return number + number;
//   }
// }
// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.


// let startingBalance = 1;
// const chicken = 5;
// const chickenQuantity = 7;

// function totalPayable(item, quantity) {
//   return startingBalance + (item * quantity);
// }

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity));

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity));

// const person = { name: 'Victor' };
// const otherPerson = person;

// console.log(person === otherPerson);    // false -- expected: true

// var Account = {
//   init: function(email, password, firstName,lastName) {
//     this.email = email;
//     this.password = password;
//     this.firstName = firstName;
//     this.lastName = lastName ;
//     this.displayName = () => Math.random() ;
//     return this;
//   },

//   reanonymize: function(passwordInput) {
//     if (passwordInput === this.password) {
//       this.displayName = this.displayName() //Randomizer 16 digits
//       return true
//     } else {
//       return "Invalid Password"
//     }
//   },

//   resetPassword: function(passwordInput,newPassword) {
//     if (passwordInput === this.password) {
//       this.password = newPassword;
//       return true;
//     } else {
//       return "Invalid Password";
//     }
//   },
//   firstName: function(passwordInput) {
//     if (passwordInput === this.password) {
//       console.log("Happy")
//       return this.firstName;
//     } else {
//       return "Invalid Password";
//     }
//   },
//   lastName: function(passwordInput) {
//     if (passwordInput === this.password) {
//       return this.lastName;
//     } else {
//       return "Invalid Password";
//     }
//   },
//   email: function(passwordInput) {
//     if (passwordInput === this.password) {
//       return this.email;
//     } else {
//       return "Invalid Password";
//     }
//   },

//   displayName: function() {
//     return this.displayName;
//   }
// }
// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.password);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

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

// const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
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

// const foo = {
//   name: 'test',
//   bar(greeting) {
//     console.log(`${greeting} ${this.name}`);
//   },
// };

// const baz = {
//   qux: delegate(foo, 'bar', 'hello') ,
// };
// console.log(

//   baz.qux(),//   // logs 'hello test';

//   foo.bar = () => { console.log('changed'); },

//   baz.qux(),          // logs 'changed'
//   )

// function delegate(context,meth,...args) {
//   return () => context[meth].call(context,args)
// }

// // name property added to make objects easier to identify
// const foo = {name: 'foo'};
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

// Object.prototype.ancestors = function ancestors() {
//   const ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };
// console.log(

//   qux.ancestors(),  // returns ['baz', 'bar', 'foo', 'Object.prototype']
//   baz.ancestors(),  // returns ['bar', 'foo', 'Object.prototype']
//   bar.ancestors(),  // returns ['foo', 'Object.prototype']
//   foo.ancestors(),  // returns ['Object.prototype']
//   )
// console.log(qux.__proto__.__proto__.__proto__.__proto__)


// function getAncestorsChain(obj) {
//   let result = [];

//   if (Object.getPrototypeOf(obj) === null) return result;

//   while (obj) {
//     let parentObj = Object.getPrototypeOf(obj);
//     // if (!parentObj.name) {
//       // result.push("Object.prototype")
//     // } else {
//       result.push(parentObj);
//     // }
//     obj = parentObj;
//   }
//   return result.map(el => el.name)
// }
// console.log(

//   getAncestorsChain(qux)
//   )

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   },
// };

// let cat = {
//   firstName: 'Fluffy',
//   lastName: 'Felix',
//   makeNoise() {
//     console.log('Meow! Meow!');
//   },

//   eat() {
//     // implementation
//   },
// };
// console.log(john.greetings.call(cat))

// let dog = {
//   name: 'Maxi',

//   makeNoise() {
//     console.log('Woof! Woof!');
//   },

//   eat() {
//     // implementation
//   },
// };

// let pete = {
//   name: 'Pete',
//   pets: [],
// };

// pete.pets.push(cat);
// pete.pets.push(dog);
// console.log(pete.pets[0].makeNoise(),pete.pets[1].makeNoise()) // Meow! Meow! , Woof Woof


// function Cat (name) {
//   this.name = name;
// }

// Cat.prototype.sound = function() {
//   console.log('Miau')
// }

// function Dog (name) {
//   this.name = name;
// }

// Dog.prototype.sound = function() {
//   console.log('Woof')
// }

// function makeSound(soundMaker) {
//   soundMaker.sound()
// }

// const purr = new Cat('Purr');
// const pluto = new Dog('Pluto');

// makeSound(purr)
// makeSound(pluto)

// function Animal() {
//   this.type = "mammal";

//     this.breathe = function() {
//      console.log("I'm breathing");
//   }
// }

// function Dog() {
//   this.legs = 4;
// }

// function Terrier() {}

// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;

// Terrier.prototype = Object.create(Dog.prototype);
// Terrier.prototype.constructor = Terrier;

// var rex = new Terrier();
// let lassie = new Dog();

// console.log(rex.constructor.name);              // f Terrier() {}
// console.log(rex.type);                          // "mammal"
// rex.breathe();                                  // "I'm breathing"
// console.log(rex.legs,lassie.legs);              // undefined 4

// let vehiclePrototype = {
//   init(name, type) {
//     this.make = name;
//     this.model = type;
//     return this
//   }
// };
// let carPrototype = Object.create(vehiclePrototype);
// // console.log(carPrototype.__proto__.init)
// carPrototype.init = function(make, model) {
//   vehiclePrototype.init.call(this,make,model)
// };

// let toyota = Object.create(carPrototype).init('Toyota', 'Corolla');
// console.log(toyota);

// // Why does the following code produce a RangeError? Why doesn't it log the object?
// // let vehiclePrototype = {
//   init(name, type) {
//     this.make = name;
//     this.model = type;
//   }
// };
// let carPrototype = Object.create(vehiclePrototype);
// carPrototype.init = function(make, model) {
//   this.init(make, model);
// };
// let toyota = Object.create(carPrototype).init('Toyota', 'Corolla');
// console.log(toyota);
// // Why does the following code produce a RangeError? Why doesn't it log the object?
// This code was causing an inifinite loop to occur between the carPrototype object and itself since the carPrototype object added a method named `init` to its empty object and then had the `this` keyword in the method which causes the execution to search back to the calling object which is the carPrototype object.

// carPrototype --> this --> carPrototype --> (loop again)
// const delegationMixin = {
//   delegate() {
//     return `I am delegating this work to YOU`
//   }
// }
// class Employees {
//   constructor(name, serialNumber) {
//     this.name = name;
//     this.serialNumber = serialNumber
//   }
// }
// class fullTimeEmployees extends Employees {
//   constructor(name, serialNumber) {
//     super(name,serialNumber)
//     this.jobType = "full time"
//   }
//   takeVacation() {
//     return `I am taking a VACATION`
//   }
// }
// class PartTimeEmployees extends Employees {
//   constructor(name, serialNumber) {
//     super(name, serialNumber)
//     this.jobType = "part time"
//     this.vacationTime = 0
//     this.deskType = "open office"
//   }
// }
// class Manager extends fullTimeEmployees {
//   constructor(name, serialNumber,jobType) {
//     super(name, serialNumber, jobType)
//     this.vacationTime = 14
//     this.deskType = "private office"
//   }
// }
// class Executive extends Manager {
//   constructor(name, serialNumber,jobType) {
//     super(name, serialNumber,jobType)
//     this.vacationTime = 20
//     this.deskType = "corner office"
//   }
//   hireAndFire() {
//     return `You're hired and YOU'RE fired!!`
//   }
// }
// class RegularEmployee extends fullTimeEmployees {
//   constructor(name, serialNumber) {
//     super(name, serialNumber)
//     this.vacationTime = 10
//     this.deskType = "cubicle"
//   }
// }
// Object.assign(Manager.prototype, delegationMixin)

// let foo = new Manager("Kurk",12345)
// console.log(foo)

// let bar = new Executive("Pricard",54321)
// console.log(bar,bar.hireAndFire(),bar.delegate())
// let baz = new RegularEmployee("Scottie",345)
// console.log(baz,baz.takeVacation(),foo.takeVacation())
// let bill = new PartTimeEmployees("Bill Nye the Science Guy",999999);
// console.log(bill)



// let contacts = {
//   list: [],
//   add(name, gender) {
//     let contact = new Contact(name, gender);
//     this.list.push(contact);
//   },
//   males() {
//     return this.list.filter(function(contact) {
//       return contact.gender === 'male';
//      });
//   },
//   females() {
//     return this.list.filter(function(contact) {
//       return contact.gender === 'female';
//     });
//   },
//   filterByName(name) {
//     return this.list.filter(function(contact) {
//       return contact.hasName(name);
//     });
//   },
// };

// class Contact {
//   constructor(name, gender) {
//     this.name = name
//     this.gender = gender
//     Object.setPrototypeOf(this,contacts)
//   }
// }

// Object.prototype.hasName = function(name) {
//   return this.name === name;
// }

// let foo = new Contact("Frank","male");
// console.log(foo.add("Hank","male"),foo.add("Doby","male"),foo.add("Harry","male"));
// console.log(foo.add("James","male"),foo.add("Janet","female"))
// console.log(foo.males());
// console.log(foo.females());
// console.log(foo.filterByName("Doby"));


// let contacts = {
//   list: [],
//   add(name, gender) {
//     let contact = new Contact(name, gender);
//     this.list.push(contact);
//   },
//   males() {
//     return this.list.filter(function(contact) {
//       return contact.gender === 'male';
//      });
//   },
//   females() {
//     return this.list.filter(function(contact) {
//       return contact.gender === 'female';
//     });
//   },
//   filterByName(name) {
//     return this.list.filter(function(contact) {
//       return contact.hasName(name);
//     });
//   },
// };

// class Contact {
//   constructor(name, gender) {
//     this.name = name
//     this.gender = gender
//     Object.setPrototypeOf(this,contacts)
//   }
// }

// Object.prototype.hasName = function(name) {
//   return this.name === name;
// }

// let foo = new Contact("Frank","male");
// console.log(foo.add("Hank","male"),foo.add("Doby","male"),foo.add("Harry","male"));
// console.log(foo.add("James","male"),foo.add("Janet","female"))
// console.log(foo.males());
// console.log(foo.females());
// console.log(foo.filterByName("Doby"));

// let plane = {

//   passengers: 220
// };

// let flyingMachine = {
//   fly() {
//     console.log(`Off we go with ${this.passengers} passengers!`);
//   }
// };

// Object.assign(plane,flyingMachine)
// plane.fly(); //Off we go with 220 passengers!


// console.log(typeof [])
// let compare = {
//   number: 10,
//   compareNumbers(nums) {
//     let self = this;
//     return nums.filter(function(num) {
//       return num < self.number;
//     });
//   },
// };
// console.log(
//   compare.compareNumbers([1, 6, 19, 7, 12]),//[ 1, 6, 7 ]
//   )


// let cat = {
//   name: 'Fluffy',
// }

// let dog = {
//   name: 'Fido',
// }

// function purr() {
//   console.log(`${this.name} is purring...`);
// }

// cat.purr = purr.bind(dog);
// cat.purr();


// let cat = {
//   name: 'Fluffy',
// };

// function purr() {
//   console.log(`${this.name} is purring...`);
// }

// purr.call(cat);


// function Square(length) {
//   this.length = length;
// }

// Square.prototype.area = function () {
//   return this.length * this.length;
// };

// Square.describe = function () {
//   console.log('Squares consist of four equal sides at 90 degree angles to each other.');
// };

// let foo = new Square(5);
//  console.log(foo.area())//25
// //  console.log(foo.describe())//Type Error
//  console.log(Square.describe())//'Squares consist of four equal sides at 90 degree angles to each other.'
// // Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// // The following are only showing the properties that aren't methods for the three objects
// function createStudent(name, year) {
//   return {
//     name: name,
//     year: year,
//     courses: [],
//     info: function() {
//       console.log(`${this.name} is a ${this.year} year student`);
//     },

//     listCourses: function() {
//       return this.courses;
//     },

//     addCourse: function(course) {
//       this.courses.push(course);
//     },

//     addNote: function(courseCode, note) {
//       let course = this.courses.filter(course => {
//         return course.code === courseCode;
//       })[0];

//       if (course) {
//         if (course.note) {
//           course.note += `; ${note}`;
//         } else {
//           course.note = note;
//         }
//       }

//     },

//     viewNotes: function() {
//       this.courses.forEach(course => {
//         if (course.note) {
//           console.log(`${course.name}: ${course.note}`);
//         }
//       });
//     },

//     updateNote: function(courseCode, note) {
//       let course = this.courses.filter(course => {
//         return course.code === courseCode;
//       })[0];

//       if (course) {
//         course.note = note;
//       }
//     },
//   };
// }

// class School {
//   constructor() {

//     this.courseList = [];
//     this.studentCollection = [];
//   }
//   addStudent(name, year) {
//     const VALID_INPUT = ['1st', '2nd', '3rd', '4th', '5th']
//     if (!VALID_INPUT.includes(year)) throw Error `Please input one of the following: '1st', '2nd', '3rd', '4th', '5th'`
//     return this.studentCollection.push(createStudent(name,year))
//   }
//   enrollStudent(studentName,courseObject) {
//     let studentObject = this.studentCollection.filter(el => el.name === studentName)[0]

//     return studentObject.addCourse(courseObject);
//   }
//   addGrade(studentName,courseName, grade) {
//     let studentObject = this.studentCollection.filter(el => el.name === studentName)[0]

//     let targetCourse = studentObject.courses.filter(el => el.name === courseName)[0];

//     return targetCourse.grade = grade;
//   }
//   getReportCard(studentName) {
//     let studentObject = this.studentCollection.filter(el => el.name === studentName)[0]

//     // let result = [];

//     studentObject.courses.forEach(el => {
//       console.log(`${el.name}: ${el.grade || "In progress"}`)
//     })

//     return true;
//   }
// }
// let jim = createStudent("Mathew","2nd");
// // createStudent.
// jim.addCourse({ name: 'Math', code: 101, grade: 95, })
// jim.addCourse({ name: 'Advanced Math', code: 102, grade: 90, })

// let harvard = new School();
// harvard.addStudent("Rick", "3rd")
// harvard.studentCollection.push(jim)
// harvard.enrollStudent("Mathew",{ name: 'Physics', code: 202, });
// harvard.addGrade("Mathew","Math",99);
// harvard.addGrade("Mathew","Physics",69);

// console.log(harvard.getReportCard("Mathew"))
// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

//  school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

//  school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

//  school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

//  school.courseReport('Physics');
// = undefined


// function objectsEqual(obj1, obj2) {
//   let obj1Keys = Object.keys(obj1)
//   let obj2Keys = Object.keys(obj2)
//   let obj1Values = Object.values(obj1)
//   let obj2Values = Object.values(obj2)
//   return keysAreSame(obj1Keys,obj2Keys) && valuesAreSame(obj1Values,obj2Values)
// }
// function keysAreSame(arr1,arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }

// function valuesAreSame(arr1,arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
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
//     let discount = this.price * percent / 100;
//     return this.price - discount;

//     // return this.price;
//   },
// };
// console.log(

//   item.discount(20)   ,// should return 40
//   // = 40
//   item.discount(50)   ,// should return 25
//   // = 20
//   item.discount(25)   ,// should return 37.5,
//   )
// = 15
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
//           msg += `${this.morning} ${name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// let helloVictor = createGreeter('Victor');
//  helloVictor.greet('morning');
//  Good Morning Victor


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
// function Rectangle(width,length) {
//   this.width = width;
//   this.length = length;
// }

// Rectangle.prototype.getWidth = function() {
//   return  this.width;
// }

// Rectangle.prototype.getLength = function() {
//   return this.length;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width
// }

// function Square(width) {
//   this.width = width;
//   this.length = width;
//   // Rectangle.call(this.width,width)
//   // Rectangle.call(this.length, width);
// }
// Square.prototype.getArea = function(width) {
//   Rectangle.prototype.getArea.call(this,width,width)
// }
// Square.prototype = Object.create(Rectangle.prototype)
// Square.prototype.constructor = Square;

// let rect = new Rectangle(4, 5);
// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25
// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// class Person {
//   greeting(text) {
//     console.log(text)
//   }
// }
// // function Person() {
// // }
// // Person.prototype.greeting = function(text) {
//   // console.log(text);
// // }
// class Shouter extends Person {
//     greeting(text) {
//       console.log(text.toUpperCase())
//     }
// }
// // function Shouter() {
//   // Person.call(this);
// // }
// // Shouter.prototype = Object.create(Person.prototype)
// // Shouter.prototype.greeting = function(text) {
// //   Person.prototype.greeting.call(this, text.toUpperCase());
// // }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.


// class Something {
//   constructor() {
//     this.data = "Hello";
//   }

//   dupData() {
//     return this.data + this.data;
//   }

//   static dupData() {
//     return "ByeBye";
//   }
// }

// let thing = new Something();
// console.log(Something.dupData());
// console.log(thing.dupData());


// class Vehicle {
//   constructor(make,model) {
//     this.make = make;
//     this.model = model;
//   }
//   info() {
//     return `${this.make} ${this.model}`
//   }
//   getWheels() {
//     return `${this.wheels}`
//   }
// }
// class Car extends Vehicle {
//   constructor(make, model) {
//     super(make, model)
//     this.wheels = 4;
//   }
// }

// class Motorcycle  extends Vehicle {
//   constructor(make, model) {
//     super(make, model)
//     this.wheels = 2;
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model)
//     this.wheels = 6;
//     this.payload = payload;
//   }
// }
// let foo = new Truck("Ford","F150",8000)
// console.log(foo.getWheels(),foo.info(),foo)

// class Animal {

//   constructor(name, age, status, legs, species) {
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
//   constructor(name,age,status,legs = 4,species = "cat") {
//     super(name, age, status)
//     this.legs = legs;
//     this.species = species;
//   }
//   introduce() {
//     return super.introduce() + " Meow meow!"
//   }
// }

// class Dog extends Animal {
//   constructor(name,age,status, legs = 4,species = "dog",master = "") {
//     super(name, age, status)
//     this.legs = legs;
//     this.species = species
//     this.master = master;
//   }
//     greetMaster() {
//       return `Hello ${this.master}! Woof, woof!`
//     }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// // logs true
// console.log(cat.introduce(),cat.status)

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age,color) {
//     super(name, age)
//     this.color = color;
//   }
//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.color}`
//   }
// }

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

// let fakeCat = Object.create(Cat.prototype)
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.


// function Rectangle(width,length) {
//   this.width = width;
//   this.length = length;
// }

// Rectangle.prototype.getWidth = function() {
//   return  this.width;
// }

// Rectangle.prototype.getLength = function() {
//   return this.length;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width
// }

// function Square(width) {
//   this.width = width;
//   this.length = width;
//   // Rectangle.call(this.width,width)
//   // Rectangle.call(this.length, width);
// }
// Square.prototype = Object.create(Rectangle.prototype)
// Square.prototype.constructor = Square;

// // Rectangle.prototype.getArea.call(Square.prototype)
// // Square.prototype.getArea = function() {
//   // return this.size * this.size;
// // }

// let rect = new Rectangle(4, 5);
// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25
// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20


// class Vehicle {
//   constructor(year) {
//     this.year = year;

//   }
// }
// const towMixin = {
//   tow() {
//     return "'I can tow a trailer!'";
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year)
//     Object.assign(this, towMixin);
//   }
// }

// class Car extends Vehicle {}

// let truck = new Truck(2002);
// console.log(truck.year);
// console.log(truck.tow());

// let car = new Car(2015);
// console.log(car.year);


// class Truck {
//   constructor() {
//     Object.assign(this,towMixin)
//   }
// }

// class Car {}

// const towMixin = {
//   tow() {
//     return `I can tow a trailer!`;
//   }
// }
// let truck = new Truck();
// console.log(

//   truck.tow(),
//   )



// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this,swimMixin);
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this,swimMixin)
//   }
// }

// class Maltese extends Dog {}

// // Object.assign(Dog.prototype,swimMixin);
// // Object.assign(Fish.prototype,swimMixin)
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
//     return `Let's go for a walk!`;
//   }
// }
// let kitty = new Cat("Sophie");
// Object.assign(Cat.prototype,walkMixin);

// console.log(kitty.greet());
// console.log(kitty.walk());


// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck extends Vehicle {
//   startEngine(speed) {
//     return super.startEngine() + ` Drive ${speed}, please!`
//   }
// }

// let truck1 = new Truck();
// console.log(truck1.startEngine('fast'));

// let truck2 = new Truck();
// console.log(truck2.startEngine('slow'));


// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year,bedType){
//     super(year)
//     this.bedType = bedType;
//   }
// }

// class Car extends Vehicle {}

// let truck1 = new Truck(2003, 'Short');
// console.log(truck1.year);
// console.log(truck1.bedType);


// class Vehicle {
//   constructor(year) {
//     this.year = year;
//     // startEngine()
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year)
//     this.startEngine()
//   }
//   startEngine() {
//     console.log('Ready to go!')
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003


// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }
// class Truck extends Vehicle {
// }
// class Car extends Vehicle {
// }
// let truck = new Truck(2003);
// console.log(truck.year); // 2003

// let car = new Car(2015);
// console.log(car.year); // 2015



// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   static genericGreeting() {
//     console.log(`hello everybody`)
//   }
//   personalGreeting() {
//     console.log(`Hello. My name is ${this.name}`)
//   }
// }

// let kitty = new Cat("Sophie");
// Cat.genericGreeting();
// kitty.personalGreeting();


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   rename(newName) {
//     return this.name = newName;
//   }
// }
// Cat.genericGreeting = function() {
//   return `Hello! I'm a cat ${this.constructor.name}`
// }
// let kitty = new Cat('Sophie');
// console.log(kitty.name); // Sophie
// kitty.rename('Chloe');
// console.log(Cat.genericGreeting()); // Chloe

// function Person(name = "John Doe") {
//   this.name = name;
// }
// let person1 = new Person();
// let person2 = new Person("Pepe");

// console.log(person1.name); // John Doe
// console.log(person2.name); // Pepe
// class Cat {
//   constructor(name) {
//     this.name = name;
//     // console.log(`I am a cat!`)
//   }
//   greet() {
//     console.log(`I am a cat and my name is ${this.name}`)
//   }
// }
// function Cat(name) {
//   this.name = name;
//   console.log(`I am a cat! My name is ${this.name}`)
// }
// let kitty = new Cat("Sophie");
// console.log(kitty.greet())
// console.log("Hello".constructor.name);
// console.log([1,2,3].constructor.name);
// console.log({name: 'Srdjan'}.constructor.name);

// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`);
//   }
// };

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
//   sound() {
//     console.log(`beep`)
//   }
// }

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
//   sound() {
//     console.log(`honk`)
//   }
// }
// Object.assign(Car.prototype,Speed)
// Object.assign(Truck.prototype,Speed)

// let foo = new Car();
// let bar = new Truck();

// console.log(foo.sound(),bar.sound())
// class Greet {


//   greet(message) {
//     console.log(message)
//   }
// }
// class Hello extends Greet {
//   hi() {
//     this.greet("Hello")
//   }
// }
// class Goodbye extends Greet {
//   bye() {
//     this.greet("Goodbye")
//   }
// }

// let foo = new Hello();
// let bar = new Goodbye()

// bar.bye()
// foo.hi()
// function createPet(animal,name) {
//   return {
//     animal,
//     name,
//     sleep: function() {
//       console.log( `Iam sleeping`)
//     },
//     wake: function() {
//       console.log( `I am awake`)
//     }
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

// const PetPrototype = {

//     init(animal,name) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//     },
//     sleep: function() {
//       return `I am sleeping`
//     },
//     wake: function() {
//       return `I am awake`
//     }

// }

// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// console.log(

//   pudding.sleep(), // I am sleeping
//   pudding.wake(),  // I am awake
//   )

// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// console.log(

//   neptune.sleep(), // I am sleeping
//   neptune.wake(),  // I am awake
//   )


// // Attributes
// //   Title: Mythos
// //   Author: Stephen Fry

// // Behavior:
// //   Get Description

// // -----------------------------
// // Attributes
// //   Title: Me Talk Pretty One Day
// //   Author: David Sedaris

// // Behavior:
// //   Get Description

// // -----------------------------
// // Attributes
// //  Title: Aunts aren't Gentlemen
// //  Author: PG Wodehouse

// //  Behavior:
// //    Get Description


// function Books(title,author,read = false) {
//      this.title = title;
//      this.author = author;
//      this.read = read;
// }
// Books.prototype.attributes = function(title,author) {
//   return ` Title: ${this.title}
//           Author: ${this.author}`
// }
// Books.prototype.getDescription = function() {
//   let ending = this.read ? "have read it." : "haven't read it."
//   return `${this.title} was written by ${this.author}. I ` + ending;
// }
// Books.prototype.readBook = function() {
//   return this.read = true;
// }
// let book1 = new Books("Mythos","Stephen Fry")
// console.log(book1.getDescription())
// book1.readBook()
// console.log(book1.getDescription())
// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }

// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// };

// function Child(name,school) {
//   Person.call(this,name);
//   this.school = school;
// }

// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

// let child = new Child("Suzy", "PS 33");
// console.log(child instanceof Child);                               // true
// console.log(child instanceof Person === false);                    // true
// console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
// console.log(Object.getPrototypeOf(child).constructor === Child);   // true
// console.log(child.school === "PS 33");                             // true
// console.log(child.learn() === "I'm going to school!");             // true
// console.log();

// let person = new Person("Pete");
// console.log(person instanceof Child === false);                    // true
// console.log(person instanceof Person);                             // true
// console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
// console.log(Object.getPrototypeOf(person).constructor === Person); // true
// console.log(person.school === undefined);                          // true
// console.log(person.speak() === "Hello, my name is Pete.");         // true


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
