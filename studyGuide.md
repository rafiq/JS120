# ! be comfortable with the topics mentioned below
```javascript THE GIST
// JavaScript does not have classes in the traditional sense. Prototypal inheritance is used to link objects together.
// Every object in JavaScript has a __proto__ property. If a property is not found on an object it will check the object referenced by this __proto__ property.
// Object.create(obj) is used to create a new object and link it’s __proto__ property to the object passed in as an argument (obj ).
// Any properties defined anywhere on an object’s prototype chain will be available to said object.

// OLOO:
// Shared properties are defined on a parent object. Other objects can then be created from this parent object using Object.create(obj) .
// An init() method defined on the parent object is used to initialize newly created objects with properties. This method is optional but commonly used.

// Pseudo-Classical:
// New objects are created from constructor functions using the keyword new .
// Calling new on a function creates a new object. The code within the function executes with the execution context (this) set to the new object. The newly created object’s __proto__ property is set to point at the object referenced by the functions prototype property. The newly created object is then implicitly returned.
// obj.constructor can be used to find out the name of the constructor function that created an object.
// Inheritance can be emulated by changing where a functions .prototype property points to (Just remember to reset where the .constructor property points to).
```
# Objects, object factories, constructors and prototypes, OLOO, and ES6 classes

## this keyword definition
```javascript this DEFINITION
// The `this` keyword is used to reference the execution context on a given function/method call.
// The setting of `this` can be done either implicitly (by the JS engine) or explicitly.
// Any regular function call sets the binding for `this` to the global object (or window in the browser).
// When a method is called on an object, `this` is implicitly set to reference the calling object.
// We can use the `call`, `apply` or `bind` methods to explicitly set the context of `this`.
// This only works inside functions!!! then its context is determined how it is invoked.
```
```javascript Constructors Defs
// Object constructors, or constructors for short, are another way to create objects in JavaScript.

//  you define a constructor once then invoke it each time you want to create an object of that type.

// Constructor style (PSEUDO CLASSICAL) =
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };
}

let corrola = new Car('Toyota', 'Corolla', 2016);
let leaf = new Car('Nissan', 'LEAF', 2018);
let nova = new Car('Chevrolet', 'Nova', 1974);
```
```javascript RULES OF CONSTRUCTORS
// name that begins with a capital letter: Car. Capitalizing the name isn't a language requirement, but it is a convention employed by most JavaScript developers.
// we call it with the new keyword,
// we use this to set the object's properties and methods, and
// we don't supply an explicit return value (we can, but usually don't).

// The function parameters, in general, match the properties associated with each Car object

// Calling constructors is where you see the most significant difference between them and other functions.

let corrola = new Car('Toyota', 'Corolla', 2016);

corolla.make;    // => 'Toyota'
corolla.model;   // => 'Corrolla'
corolla.year;    // => 2016
corolla.started; // => false

corolla.start();
corolla.started; // => true

// Number, String, Boolean, are all primitive types. If you return one of these types of values from a constructor, it would be ignored and the constructor would go back to its normal behavior of returning the this object.
```
```javascript MAKING THE CONSTRUCTOR PROCESS
// JavaScript takes the following steps when you invoke a function with new:

// It creates an entirely new object.
// It sets the prototype of the new object to the object that is referenced by the constructor's prototype property. We'll discuss this in a later assignment. We mention it now for completeness.
// It sets the value of this for use inside the function to point to the new object.
// It invokes the function. Since this refers to the new object, we use it within the function to set the object's properties and methods.
// Finally, once the function finishes running, new returns the new object even though we don't explicitly return anything.

// JavaScript won't complain about a missing new keyword.
Car(); // => undefined
// ! Instead, it acts like an ordinary function. In particular, the value of this depends on how the function is called. Crucially, it won't get set to reference the new object.
// Furthermore, since functions that don't return an explicit value return undefined, calling a constructor without new also returns undefined. When you use new, however, the function doesn't have to return anything explicitly: it returns the newly created object automatically.

// You can use new to call almost any JavaScript function that you create. However, you cannot call arrow functions with new since they use their surrounding context as the value of this:
let Car = (make, model, year) => {
  this.make = make;
  this.model = model;
  this.year = year;
}

new Car(); // TypeError: Car is not a constructor

// You can also use new on methods that you define in objects. Consider:
let foo = {
  Car: function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

let car1 = new foo.Car('Toyota', 'Camry', 2019);
car1.make; //=> 'Toyota'

// However, calling a method defined with concise syntax (also called a concise method) won't work:
let foo = {
  // CONCISE SYNTAX BELOW!!!
  Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

new foo.Car(); //=> Uncaught TypeError: foo.Car is not a constructor

// In addition, many -- but not all -- built-in objects and methods are incompatible with new:
new console.log(); //=> Uncaught TypeError: console.log is not a constructor
new Math();        //=> Uncaught TypeError: Math is not a constructor
new parseInt("3"); //=> Uncaught TypeError: parseInt is not a constructor

new Date();        //=> 2019-06-26T02:50:20.191Z

// new is also incompatible with special functions known as generators (a topic that we don't currently cover at Launch School).

// The rule here is that a constructor that explicitly tries to return an object returns that object instead of a new object of the desired type. In all other situations, it returns the newly created object, provided no errors occur. In particular, the constructor ignores primitive return values and returns the new object instead.
function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return 'a cat';
}

let fluffy = new Cat('fluffy', 'Persian', 15);
fluffy.weight; // 15

function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return { foo: 1 };
}

let fluffy = new Cat('fluffy', 'Persian', 15);
fluffy.weight; // undefined
fluffy.foo; // 1
```
```javascript Constructor ARGUMENTS
// With Object.assign, we can simplify this constructor considerably:
function Car(args) {
  Object.assign(this, args);

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}
//
let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
}

let civic = new Car(civicArgs);

// Refactor to accept objects as args
function Car(args) {
  this.make = args.make;
  this.model = args.model;
  this.year = args.year;
  this.color = args.color;
  this.passengers = args.passengers;
  this.convertible = args.convertible;
  this.mileage = args.mileage;
  this.started = false;

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}
```
```javascript CONSTRUCTOR IMPLICIT CONTEXT
// When you call a function with new, its implicit context is the new object.
```
```javascript WHY IS THE NEW SO IMPORTANT
// Constructor function names are capitalized.

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?
// This code throws a TypeError since scamper is an undefined property on lizzy. Since Lizard was invoked without the new operator and it doesn't have an explicit return value, the return value is undefined. Thus, lizzy gets assigned to undefined which causes the call to scamper to throw an error: you can't call a method on undefined.
```
```javascript  setPrototypeOf AND OUTSOURCING THE METHODS
// Method Delegation to Prototypes

// Prototypes are especially useful for sharing methods as all objects of a particular type share the same prototype object. Furthermore, delegation means that we can share methods by putting them in the prototype object; if an object doesn't contain a requested method, JavaScript searches the prototype chain to find the method.Thus, we can define a method once in the prototype object, and let the inheriting objects delegate the

let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // this.bark method removed.
}
// In this code, we've changed our Dog constructor and created a DogPrototype object. The first thing we do inside the constructor is set DogPrototype as the prototype of the newly created dog object. We then assign the arguments to the properties.
// Use construtor without change
let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'
// however, the bark method isn't defined on the individual objects, but is, instead, defined on the [[Prototype]] property:

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false
Object.getPrototypeOf(maxi).bark === DogPrototype.bark; // true
Object.getPrototypeOf(dexter).bark === DogPrototype.bark; // true
Object.getPrototypeOf(biggie).bark === DogPrototype.bark; // true

// we now have a constructor and a related prototype object. Together, they construct objects of some type.
```
```javascript ASSIGNING THE PROTOTYPE OBJECT TO A SPECIFIC PROPERTY
// Delete DogPrototype

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  // rest of the code
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};
// Here, we assign the prototype object to a myPrototype property on the Dog function object. Thus, we clearly show our intent that all dogs inherit from the Dog.myPrototype object. Once we've done that, we can change our constructor function to use Dog.myPrototype as the prototype object.

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);
maxi.bark(); // 'Woof!'

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false
Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark; // true
Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark; // true
Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark; // true
```
```javascript TWO "PROTOTYPES"
// "prototype" to refer to 2 distinct but related concepts:

// If bar is an object, then the object from which bar inherits is the object prototype. By default, constructor functions set the object prototype for the objects they create to the constructor's prototype object.

// The constructor's prototype object, also called the function prototype, is a function object that the constructor uses as the object prototype for the objects it creates. In other words, each object that the constructor creates inherits from the constructor's prototype object. The constructor stores its prototype object in its prototype property; that is, if the constructor's name is Foo, then Foo.prototype references the constructor's prototype object.
```
```javascript OBJECT.PROTOTYPE PROPERTY EXAMPLE

// every JavaScript function has a prototype property. However, JavaScript only uses it when you call that function as a constructor, that is, by using the new keyword.

// Note that constructors don't inherit from the constructor's prototype object. Instead, the objects that the constructor creates inherit from it.

function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'

// Note that our constructor doesn't have to explicitly set the prototype of this to Dog.prototype. JavaScript does that for us when we call the function with new. We left this detail out earlier, so let's restate those steps with updated information. We'll assume that the constructor function is named Foo:

// It creates an entirely new object.
// It sets Foo.prototype as the prototype for the new object. That is, the new object inherits from the object referenced by Foo.prototype.
// It sets the execution context (this) for the function to point to the new object.
// It invokes the function.
// // It returns the new object unless the function returns another object.

// Since the bark method refers to this and bark belongs to the prototype object, you may think that this in this.weight refers to the prototype object rather than the object itself (e.g., maxi or biggie). However, that's not how this binding works. You already know those rules, so take a moment to think about what it means inside the bark method.

// When you call a method on an object, JavaScript binds this to the object whose method you used to call it. If it doesn't find the method in that object, but it does find it in the prototype, that doesn't change the value of this. this always refers to the original object -- that is, the object used to call the method --even if the method is in the prototype. If we find the bark method in the prototype, this references the original dog object, not the prototype.

Dog.prototype.constructor; // [Function: Dog]

// As with the instanceof operator, the constructor property lets us determine the type of an object:

let maxi = new Dog('Maxi', 'German Shepherd', 32);

if (maxi.constructor === Dog) {
  console.log("It's a dog");
} else {
  console.log("It's not a dog");
}

// Be careful, however. It's possible to reassign the constructor property to something else. We'll learn about reassigning the constructor property in the next assignment. In that case, the test shown above would fail, even though the object is still a dog.

Dog.prototype.constructor = function() {};

maxi.constructor === Dog; // false
maxi instanceof Dog;      // true
// Note that instanceof still works.
```
## OLOO
```javascript OLOO DEFINITION
// The Objects Linking to Other Objects (OLOO) pattern of object creation uses a prototype object, an initializer method, and the Object.create method to create objects with shared behavior. The initializer customizes the state for each object, and is usually named init.

```
```javascript Object Creation with Prototypes (OLOO) PROTOTYPE OBJECT
// to create objects in bulk. Another pattern that we can use is the OLOO pattern: Objects Linking to Other Objects. It uses prototypes and involves extracting properties common to all objects of the same type (e.g., car objects) to a prototype object. All objects of the same type then inherit from that prototype.

// We can extract the start and stop methods to a prototype object.
let carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },
};

let car1 = Object.create(carPrototype);
car1.make = 'Toyota';
car1.model = 'Corolla';
car1.year = 2016;

car1.start();
car1.started; // => true

car1.stop();
car1.started; // => false
// Calling start and stop on the car1 object changes the state of car1 even though those methods don't belong to car1. That shouldn't come as a surprise since we're using car1 as the execution context for the calls. When we call these methods, this is set to car1, so the methods change the started property in car1.
```
```javascript init in the Prototype Object
// The common method to automate the properties of an object is the init
// most common technique uses an init method on the prototype object:
let carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  },
};

let car1 = Object.create(carPrototype);
car1.init('Toyota', 'Corolla', 2016);
let carPrototype = {
    // code omitted for brevity

    init(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      return this;
    },
  };

// Chain creat it
// Since init now returns a reference to the car object it was called on, we can chain create and init and assign the result to the car1 variable:
let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);
```
```javascript PROS and Cons of init and factory functions
// The new keyword is used with constructors, not factory functions.

//  the OLOO pattern has one significant advantage over factory functions: memory efficiency. Since all objects created with the OLOO pattern inherit methods from a single prototype object, the objects that inherit from that prototype object share the same methods. Factory functions, on the other hand, create copies of all the methods for each new object. That can have a significant performance impact, especially on smaller devices with limited memory.

// However, that doesn't mean that OLOO is decidedly better than the factory pattern. An advantage of the factory pattern is that it lets us create objects with private state.
// Objects created with the OLOO have a prototype object that contains the methods associated with the created objects. Since all pets created from the prototype share a single prototype object, they all share the same methods. With the factory function, each object has a copy of all the methods. Thus, objects created by OLOO are more efficient in terms of memory use.

// Objects created with the factory function can have private state. Any state stored in the body of the factory function instead of in the returned object is private to the returned object. They can't be accessed or modified unless one of the object methods exposes the state. With OLOO, there is no way to define private state. All object state can be accessed and modified by outside code.
```
```javascript OLOO EXAMPLE AND INIT
// OLOO:
// Shared properties are defined on a parent object. Other objects can then be created from this parent object using Object.create(obj) .
// An init() method defined on the parent object is used to initialize newly created objects with properties. This method is optional but commonly used.
var Animal = {
  init: function(type) {
    this.type = type;
  },

  breathe: function() {
    console.log("I'm breathing");
  },
}

var Dog = Object.create(Animal);
var Terrier = Object.create(Dog);

var mammal = Object.create(Animal);
mammal.init("mammal");
var reptile = Object.create(Animal);
reptile.init("reptile");

console.log(mammal.type);   // "mammal"
mammal.breathe();           // "I'm breathing"
console.log(reptile.type);  // "reptile"
reptile.breathe();          // "I'm breathing"
var rex = Object.create(Terrier);
rex.init("canine");

console.log(rex.type);   // "canine"
rex.breathe();           // "I'm breathing"
```
```javascript ANOTHE OLOO EXAMPLE
let Book = {
  init(author, title, ISBN) {
    this.author = author;
    this.title = title;
    this.ISBN = ISBN;
    return this;
  },

  describe() {
    console.log(this.title + ' was written by ' + this.author + '.');
  },
}

let book = Object.create(Book).init("Neal Stephenson", "Snow Crash", "0-553-08853-X");
```
## Constructors
```javascript THE instanceof DEFINITION
// The instanceof operator requires the object to the right to have a prototype property, such as a function object. In most cases, that means that the object on the right is a constructor function or class.
```
```javascript
function Dog() {
}

function Pet(type) {
  if (type === 'dog') {
    return new Dog();
  } else if (type === 'lion') {
    return 'not a pet!';
  }
}

let dog = new Pet('dog');
let lion = new Pet('lion');
let cat = new Pet('cat');
// Without running the code, determine the type of data that the dog, lion, and cat variables would reference if you were to run it.
// A constructor that doesn't return an explicit value will return a new object of the type associated with the constructor, e.g., Pet. Thus, cat refers to a Pet object since the constructor doesn't return an explicit value.
// A constructor that attempts to return an object will return an object of that type. Thus, dog refers to a Dog object since that's what the constructor tried to return.
// A constructor that attempts to return a non-object value, such as a string, will instead return a new object of the type associated with the constructor, e.g., Pet in this case. Thus, lion refers to a Pet object since the constructor attempts to return a string.

// ES6 classes provide a cleaner, more compact alternative to constructors and prototypes. As with functions, they are first-class citizens and come in the form of declarations and expressions. Functionally, classes behave almost identically to the constructors and prototypes they aim to replace. Classes allow for static methods by using the static modifier.

// Constructor functions are meant to be invoked with the new operator. They instantiate a new object behind the scenes and let the developer manipulate it through the this keyword. A typical constructor uses the following pattern:

// The constructor is invoked with new.
// The JS runtime creates a new object that inherits from the constructor's prototype object.
// The new object is assigned to this within the function body.
// The code in the function body is executed.
// The function returns the object referenced by this unless the function returns an explicit object.
// Every function has a prototype property that points to an object that contains a constructor property. The constructor property points back to the function itself. Thus, if Kumquat is a construction function, then Kumquat.prototype.constructor === Kumquat.
```

```javascript CONSTRUCTOR EXAMPLES

function Foo(parm) {
  this.parm = parm;
}

Foo.bar = function() {
  // omitted code
};

Foo.prototype.qux = function() {
  // omitted code
};

let foo = new Foo(10);
// Which of the following code snippets is equivalent to that code?
class Foo {
  constructor(parm) {
    this.parm = parm;
  }

  static bar() {
    // omitted code
  }

  qux() {
    // omitted code
  }
}

let foo = new Foo(10);

// If A is a class, what does typeof A return? Answer without running the code.

```
```javascript REASSIGNING CONSTRUCTORS AND PROTOTYPES
// constructors and prototypes gives us something that resembles a class, a construct used in classical OOP languages like Java, Python, and Ruby. A class is a blueprint for creating objects. Traditional OOP languages use classes to create distinct objects of a particular type and give those objects the behaviors and state that they need.

// Constructors and prototypes let us mimic classes in JavaScript. Until recently, the language had nothing that you could reasonably call a class.

// In most OOP languages, inheritance means something a bit different from the way we use it in conjunction with JavaScript.

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
  }

  Rectangle.prototype.getArea = function() {
    return this.length * this.width;
  };

  Rectangle.prototype.toString = function() {
    return `[Rectangle ${this.length} x ${this.width}]`;
  };

  let rect = new Rectangle(10, 5);
  rect.getArea();     // => 50
  rect.toString();    // => "[Rectangle 10 x 5]"

  function Square(size) {
    this.length = size;
    this.width = size;
  }

  Square.prototype.getArea = function() {
    return this.length * this.width;
  };

  Square.prototype.toString = function() {
    return `[Square ${this.length} x ${this.width}]`;
  };

  let sqr = new Square(5);
  sqr.getArea();     // => 25
  sqr.toString();    // => "[Square 5 x 5]"

//   We say that Square is a sub-type of Rectangle, or that Rectangle is a super-type of Square. Consider the following code:

function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

let sqr = new Square(5);
sqr.getArea();     // => 25
sqr.toString();    // => "[Square 5 x 5]"

// Since a function's prototype property is writable -- we can change what object it references -- we can reassign Square.prototype to an object that inherits from Rectangle.prototype. The result is a prototype chain that looks like this:

Copy Code
sqr ---> Square.prototype ---> Rectangle.prototype ---> Object.prototype

// One side-effect of this approach is that the constructor property on square objects points to Rectangle when it should point to Square instead:
sqr.constructor === Rectangle; // => true
//  It happens since we reassign Square.prototype to a new object that inherits from Rectangle.prototype, and the constructor property for Rectangle.prototype points back to Rectangle. Thus, Square.prototype.constructor points to Rectangle. To fix this situation, we merely need to reassign Square.prototype.constructor to Square:
function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
}

let sqr = new Square(5);
sqr.getArea();              // => 25
sqr.toString();             // => "[Square 5 x 5]"
sqr.constructor === Square; // => true

// there are situations where the value of the constructor property is important.
// Constructor Reuse
function Square(size) {
    Rectangle.call(this, size, size);
  }

  function Rectangle(length, width) {
    this.length = length;
    this.width = width;
  }

  Rectangle.prototype.getArea = function() {
    return this.length * this.width;
  };

  Rectangle.prototype.toString = function() {
    return `[Rectangle ${this.length} x ${this.width}]`;
  };

  // rect test code omitted

  function Square(size) {
    Rectangle.call(this, size, size);
  }

  Square.prototype = Object.create(Rectangle.prototype);
  Square.prototype.constructor = Square;

  Square.prototype.toString = function() {
    return `[Square ${this.length} x ${this.width}]`;
  };

  // sqr test code omitted
```
```javascript CREATING NEW OBJECTS USING CONSTRUCTOR()
let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else

ninjaA.constructor === ninjaB.constructor // => true
let ninjaB = new ninjaA.constructor();
// IF YOU USE CREATE THEN THE PROPERTIES DON'T COPY OVER EXACTLY AS EXPECTED.
let ninjaB = Object.create(ninjaA);
ninjaA:
  swung: false
  constructor: Ninja
  prototype: {}

ninjaB:
  constructor: Ninja
  prototype: {
    swung: false
  }

```
```javascript CONSTRUCTOR FUNCTIONS MUST DO'S
function Person(name) {
  this.name = name;
  this.school = undefined;
}

Person.prototype.speak = function() {
  return `Hello, my name is ${this.name}.`;
};

// your code from the previous question.
function Child(name, school) {
  Person.call(this, name);
  this.school = school;
}

// more missing code
Child.prototype = Object.create(Person.prototype);
Child.prototype["constructor"] = Child;

Child.prototype.learn = function() {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(child instanceof Child);                               // true
console.log(child instanceof Person);                              // true
console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
console.log(Object.getPrototypeOf(child).constructor === Child);   // true
console.log(child.school === "PS 33");                             // true
console.log(child.learn() === "I'm going to school!");             // true
console.log(child.speak() === "Hello, my name is Suzy.");          // true
console.log();

let person = new Person("Pete");
console.log(person instanceof Child === false);                    // true
console.log(person instanceof Person);                             // true
console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
console.log(Object.getPrototypeOf(person).constructor === Person); // true
console.log(person.school === undefined);                          // true
console.log(person.speak() === "Hello, my name is Pete.");         // true
console.log(person.learn === undefined);                           // true


// Incorrect:

// A: The code in this constructor returns a Person object instead of a Child object, so child instanceof Child returns false instead of true. For similar reasons, most of the rest of the checks on the child object fail, and the last one raises a TypeError. The tests on the person object never run, but they would all pass.

// B: This code explicitly returns a new Person object. That object has a school property, but the property is undefined, so the test will fail.

// C: This code initializes the school property before it calls the Person constructor, which, for some strange reason, sets the school property to undefined. That overrides the intended value of the school property in the object returned by Child.

// Incorrect:
// A: Object.assign with a single argument merely returns a reference to that argument. Thus, this code sets the Child prototype to the same object used as the Person prototype. That causes person instanceof Child to return true since both the Child prototype is the same object as the Person prototype.

// C: Prototypal inheritance requires the Child prototype to be a reference to the Person prototype, not the Person constructor.

// D: This code almost works, but it fails to reset the constructor for the Child prototype. That causes Object.getPrototypeOf(child).constructor to return Person instead of Child

function Child(name, school) {
  Person.call(this, name);
  this.school = school;
}
// So when we invoke Child as a constructor, JavaScript will (among other things) create a new object and set this within the context of that function invocation to point to the newly created object. So when we invoke Person with call on line 2, and pass in this as the explicit context, that invocation of the Person function sets the name and school properties on the object created by the Child constructor (i.e. the new Child object) to whatever the second argument passed in the call is, and undefined respectively, the Child constructor function then reassigns the value of school to whatever value was the second argument to the Child constructor.
```

## Classes
```javascript CONSTRUCTOR DETAILS
// class is a function typeof class === function //true ES6 classes are merely syntactic sugar: the class statement gets translated behind the scenes to a constructor function and a prototype object, and the class name refers to the constructor function.
function Dog() {
}

function Pet(type) {
  if (type === 'dog') {
    return new Dog();
  } else if (type === 'lion') {
    return 'not a pet!';
  }
}

let dog = new Pet('dog');
let lion = new Pet('lion');
let cat = new Pet('cat');
// dog: a Dog object
// lion: a Pet object
// cat: a Pet object

// A constructor that doesn't return an explicit value will return a new object of the type associated with the constructor, e.g., Pet. Thus, cat refers to a Pet object since the constructor doesn't return an explicit value.

// A constructor that attempts to return a non-object value, such as a string, will instead return a new object of the type associated with the constructor, e.g., Pet in this case. Thus, lion refers to a Pet object since the constructor attempts to return a string.

// A constructor that attempts to return an object will return an object of that type. Thus, dog refers to a Dog object since that's what the constructor tried to return.
```
```javascript CLASS DECLARATION AND EXPRESSIONS EXAMPLE
// A class declaration always begins with the keyword class at the beginning of a statement. All the other code snippets show class expressions, not class declarations.
let Cat = class {
  // omitted code
};
B

class Cat {
  // omitted code
}
C

console.log(
  class Cat {
    // omitted code
  }
);
D

function createClass() {
  return (
    class Cat {
      // omitted code
    }
  );
};
```

```javascript CLASS EXPRESSIONS
let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }
};

let Student = class extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  enrollInCourse(courseNumber) {
    console.log(`${this.name} has enrolled in course ${courseNumber}.`);
  }
};

let student = new Student('Kim', 22, 'Fall');
student.sayName(); // logs 'My name is Kim.'
student.enrollInCourse('JS120'); // logs 'Kim has enrolled in course JS120.'
```
```javascript FROM constructor functions TO CLASS DECLARATION EXAMPLES
// Inheritance with Class Declarations
// from this
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
};

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

// to this
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `[Rectangle ${this.width * this.length}]`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  toString() {
    return `[Square] ${this.width * this.length}`;
  }
}
// Note that we don't define getArea on the Square class since Square inherits it from Rectangle and doesn't need to customize or override the method.

// Note also that the Square constructor calls a function that is represented by the keyword super. When called inside the constructor method, the super keyword refers to the constructor method for the parent class (the class that we inherit from). Thus, super(size, size) performs the same role performed by this code from our constructor/prototype example:
```
```javascript USING THE SUPER KEYWORD
function Square() {
  Rectangle.call(this, size, size);
}
// You don't need to use super in every subclass, but in most cases you do. In particular, if the superclass's constructor creates any object properties, you must call super to ensure that those properties are set properly. For instance, in the Rectangle class above, we create two properties in the Rectangle constructor, so we must call super in Square's constructor.

// If you do call super in a subclass's constructor, you must call it before you use this in that constructor.

// Below is making a constructor but in the expression style with an anonymous class
let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }
};

let Student = class extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  enrollInCourse(courseNumber) {
    console.log(`${this.name} has enrolled in course ${courseNumber}.`);
  }
};

let student = new Student('Kim', 22, 'Fall');
student.sayName(); // logs 'My name is Kim.'
student.enrollInCourse('JS120'); // logs 'Kim has enrolled in course JS120.'
// the Student class inherits from the Person class. That gives student objects access to methods of the Person class and extends person objects further by adding a semester property and an enrollInCourse method. Notice that we've reused Person's constructor inside the Student constructor, and calling super with name and age since the Student constructor expects those arguments. We also assign the semester argument to the semester property after super returns.
```
## Objects
```javascript DETERMINING OBJECT TYPE
instance of
let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

let civic = new Car(civicArgs);

if (civic instanceof Car) {
  console.log("It's a car!");
} else {
  console.log("It's not a car.");
}

// the new operator creates a new instance of an object.

// Suppose that you call the Car constructor with new. Informally, we can say that the resulting object is a car. More formally, we can say that the object is an instance of a Car.

// One effect that we didn't mention when talking about the new operator is that the object it returns contains some information that ties it back to the constructor that created the object. The instanceof operator uses that information to determine what constructor created the object.
```

> Objects = setting a property or accessing a property
* Dot notation is also called member access notation
```javascript
myObject[“a-key”] = “four”

myObject.a-key              // SyntaxError (a-key is not a valid variable name)
myObject[“a-key”]           // “four”
myObject["a" + "-" + "key"] // "four"
```

Determine if an object has a property by:
```javascript THE ENTIRE PROTOTYPE CHAIN
//Check THE ENTIRE PROTOTYPE CHAIN FOR A PROPERTY
"false" in myObject                    // true
"true" in myObject                     // false

// JUST ON THAT OBJECT
myObject.hasOwnProperty("7")           // true
myObject.hasOwnProperty("8")           // false
```
## prototypes
```javascript Prototype Property
// // every JavaScript function has a prototype property. However, JavaScript only uses it when you call that function as a constructor, that is, by using the new keyword.

// Every object has an internal [[Prototype]] property that points to a special object, the object's prototype. It is used to look up properties that don't exist on the object itself.

// You can use Object.getPrototypeOf and obj.isPrototypeOf to check for prototype relationships between objects.

```
```
An object factory serves two purposes:
//1. It returns objects that represent data of a specific type.
// 2. It reuses code.
```
```javascript
let a = {
    foo: 1,
    bar: 2,
  };

  let b = Object.create(a);
  b.foo; // => 1

// An unusual aspect of this relationship is that the inheriting object (b above) doesn't receive any properties or methods of its own. Instead, it delegates property and method access to its prototype. You can see this in the node console:
 let a = { foo: 1, bar: 2 }
undefined

 let b = Object.create(a)
undefined

 b.foo
1

 b
{}
// Example below on how "b" does not process properties of its own.
let a = {
    foo: 1,
    bar: 2,
  };

  let b = Object.create(a);

  console.log(a.hasOwnProperty('foo')); // => true
  console.log(b.hasOwnProperty('foo')); // => false

  // JavaScript objects use an internal [[Prototype]] property to keep track of their prototype. When you create an object with Object.create, the new object's [[Prototype]] property gets assigned to the prototype object.

// Note that [[Prototype]] is an internal property: you cannot access it directly in your code. However, you can access and replace its value with Object functions. For instance, Object.getPrototypeOf takes an object as an argument and returns its prototype object:
> Object.getPrototypeOf(b)
{ foo: 1, bar: 2 }

let a = {
    foo: 1,
    bar: 2,
  };

  let b = {};
  Object.setPrototypeOf(b, a);

  console.log(b.foo);                    // => 1
  console.log(b);                        // => {}
  console.log(Object.getPrototypeOf(b)); // => { foo: 1, bar: 2 }
//   However, in this example, we declare and initialize b to an empty object rather than using Object.create; we then use Object.setPrototypeOf to set the prototype object.

// If Prototype changes then references change as well
// objects hold a reference to their prototype objects through their internal [[Prototype]] property
let a = {
    foo: 1,
    bar: 2,
  };

  let b = {};
  Object.setPrototypeOf(b, a);
  console.log(b.foo); // => 1

  a.foo = 42;
  console.log(b.foo); // => 42

  a.baz = 12;
  console.log(b.baz); // => 12
//   ?CONNECTION: this is similar to how objects in JS are pointing to the same reference point which means that if you change the reference point in any of the variables then it is changing the same reference point.
==// Interesting! Object b wasn't mutated! When assigning a property on a JavaScript object, it always treats the property as an "own" property. That is, it assumes that the property belongs to the object named to the left of the property name. Even if the prototype chain already has a property with that name, it assigns the "own" property. Here, foo becomes an "own" property of c:
```
```javascript
// In this code, object c inherits from object b which, in turn, inherits from a. Stated differently, b is the prototype of c and a is the prototype of b. All properties that you can access on a or b are now available on c. We say that objects b and a are part of the prototype chain of object c. The complete prototype chain also includes the default prototype, which is the prototype of object a in this case.
let a = {
    foo: 1,
  };

  let b = {
    bar: 2,
  };

  let c = {
    baz: 3,
  };

  Object.setPrototypeOf(c, b);
  Object.setPrototypeOf(b, a);

  console.log(c.bar); // => 2
  console.log(c.foo); // => 1

//   Since the prototype of Object.prototype is null, the complete prototype chain looks like this:
  c --> b --> a --> Object.prototype --> null

//   __proto__, which is pronounced dunder proto, instead of Object.setPrototypeOf and Object.getPrototypeOf. "dunder" is a shortened version of "double underscore", which alludes to the double underscores at the beginning and end of the name. The __proto__ property is a deprecated, non-hidden version

// Accessing a property JS 'own' => objects's property => prototype's property ...Object.prototype => undefined if underfined.
// The implication here is that when two objects in the same prototype chain have a property with the same name, the object that's closer to the calling object takes precedence.
let a = {
    foo: 1,
  };

  let b = {
    foo: 2,
  };

  Object.setPrototypeOf(b, a);

  let c = Object.create(b);
  console.log(c.foo); // => 2;
```
#### Checking Prototype Chain for a object and value
```javascript

// Iterative
function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}

// Recursive
function assignProperty(obj, property, value) {
  if (obj === null) { // property not found
    return;
  } else if (obj.hasOwnProperty(property)) {
    obj[property] = value;
  } else {
    assignProperty(Object.getPrototypeOf(obj), property, value);
  }
}
```

#### Enumeralbe Properties Versus Properties Up the Chian
```javascript
// Checks entire Chain
for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}
a: 3        // from foo
c: 4        // from foo
b: 2        // from bar

2 in b //true

// Checks only current object properties
Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});
a: 3        // from foo
c: 4        // from foo
```

### Some Object.prototype methods explained
```javascript Object.prototype.isPrototypeOf() LOOK UP WHOLE PROTO CHAIN
// Object.prototype.isPrototypeOf() is used to check if one object exists anywhere on the prototype chain of another object
var animal = {
  type: 'mammal',
  breathe: function() {
    console.log("I'm breathing");
  },
}

var dog = Object.create(animal);
var terrier = Object.create(dog);

console.log(animal.isPrototypeOf(terrier)); // true
console.log(animal.isPrototypeOf(dog));     // true
console.log(dog.isPrototypeOf(terrier));    // true
```
```javascript Object.getPrototypeOf(obj) LOOK TO JUST THE NEXT OBJECT UP THE CHAIN
var animal = {
  type: 'mammal',
  breathe: function() {
    console.log("I'm breathing");
  },
}

var dog = Object.create(animal);
var terrier = Object.create(dog);

console.log(Object.getPrototypeOf(terrier) === dog)    // true
console.log(Object.getPrototypeOf(terrier) === animal) // false
```
```javascript Some Object.prototype built in methods
// Object.prototype object is at the top of all JavaScript prototype chains
// Object.prototype.toString() returns a string representation of the object.
// Object.prototype.isPrototypeOf(obj) determines whether the object is part of another object's prototype chain.
// Object.prototype.hasOwnProperty(prop) determines whether the object contains the property.

// JavaScript objects all have a prototype object and that the prototype chain ends with Object.prototype

let a = Object.create(null)
undefined

Object.getProtoypeOf(a)
null
// objects created in this way do not have access to Object methods like Object.prototype.hasOwnProperty or Object.prototype.toString. They also don't have a prototype chain that ends with Object.prototype -- it ends with null

// `be careful of bare objects and check for them using
if (Object.getPrototypeOf(obj) && obj.isPrototypeOf(car)) {
    // obj has a non-null prototype AND
    // obj is in the prototype chain of car
  }

//   JavaScript objects can inherit properties from other objects. The object that another object inherits properties from is its prototype. In most cases, we use Object.create to create objects whose prototype we need to set explicitly. We can also use Object.setPrototypeOf to set the prototype of an object that already exists.

// By default, all object literals inherit from Object.prototype.

// When you access a property on an object, JavaScript looks for the property first in the object, then its prototype chain, all the way up to Object.prototype.

```
```javascript  Object.getPrototypeOf({})

// Without running the code, what value does Object.getPrototypeOf({}) return?
// A reference to the default prototype object. The object is, in fact, not empty, but has a variety of methods like hasOwnProperty and toString().

```
### The JS engine and two passes
```javascript Hoisting and Execution
// This code works since the JavaScript engine runs our code in two passes. During the first pass, it does some preparatory work, while the second executes the code. One action that occurs during the first pass is called hoisting; the engine effectively moves function declarations to the top of the scope in which they're defined. The result is that the above code acts as though you wrote it like this:

//Hoisting does not occur with all function definitions; it only occurs with function declarations. Since function expressions aren't declarations, hoisting doesn't make those function expressions available for invocation before it evaluates them.

// The main advantage of naming a function expression occurs when the function throws an error (raises an exception). If the function has a name, the stack trace uses that name to help you determine where the error occurred. Without the name, JavaScript merely reports the location as "anonymous."

let foo = function bar() {};
foo();         // This works
bar();         // This does not work
// foo is a local variable that contains a reference to the function, so we can invoke the function using foo(). However, the function name, bar, is not in scope on line 3, so bar() does not work.
```
### Arrow Functions
There's no declaration syntax for arrow functions; arrow functions are always function expressions. That means that we often pass them around or assign them to variables or properties. Also, arrow functions are always anonymous: there's no way to define a named arrow function. Arrow functions are either immediately invoked, assigned to variables or properties, or passed around as arguments and return values. We'll discuss immediately invoked functions in a later course.
```javascript
function say(words) {
  console.log(words);
}

let speak = say;

speak('Howdy!');   // logs 'Howdy'
// In this example, we declare a function say and then assign it to the variable speak. We then invoke the function using speak as a handle. Note that we can still call the function using say as well -- both say and speak refer to the same function.

function logNum(num) {
  console.log('Number: ' + num);
}

[1, 2, 3].forEach(logNum);
// Number: 1
// Number: 2
// Number: 3
// In this case, we're passing the function logNum as an argument to the forEach method, which calls it three times. With each invocation of logNum, forEach passes it one of the array elements as an argument.

// Notice that we don't use invocation syntax, (), when passing logNum as an argument to forEach. If we did, it would throw a TypeError exception since forEach expects a function; instead of passing a function, though, we would be passing undefined, the return value of logNum().
// Use invocation only when you need to run the code in the function.
```
### Higher Order Functions
```javascript
//It takes a function as an argument.
//It returns a function.
```
## Function Factory
```javascript Function Factory WITHOUT "new"

function createPerson(firstName, lastName = '') {
    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;

    person.fullName = function() {
      return `${this.firstName} ${this.lastName}`.trim();
    };

    return person;
  }

  let john = createPerson('John', 'Doe');
  let jane = createPerson('Jane');

  john.fullName();        // => "John Doe"
  jane.fullName();        // => "Jane"
  ```
> // We can simplify that somewhat by returning an object literal
```javascript Object Literal example
function createPerson(firstName, lastName = '') {
  return {
    firstName: firstName,
    lastName: lastName,

    fullName: function() {
      return `${this.firstName} ${this.lastName}`.trim();
    }
  };
}
// Every object created with a factory function has a full copy of all the methods. That's redundant, and it can place a heavy load on system memory.

// There is no way to inspect an object and learn whether we created it with a factory function. That effectively makes it impossible to identify the specific "type" of the object; at best, you can only determine that an object has some specific characteristics.
```
```javascript FACTORY FUNCTIONS WITH "new" (use this and no "return") AKA CONSTRUCTOR FUNCTIONS!!!!!
// There is a keyword new in JavaScript that when used before a function call will create a new object and execute all the code in that function. Any reference to this within the body of the function will point to the new object. Finally, this new object will be returned if no other object is explicitly returned. Let’s see this with some code.
function Animal() {
    this.type = "mammal";

    this.breathe = function() {
      console.log("I'm breathing");
    };
}

var animal = new Animal();

console.log(animal.type);  // "mammal"
animal.breathe();          // "I'm breathing"
// When we execute new Animal() on line 9, a new object is created within our constructor function. Lines 2 & 4 set properties on this new object and finally the object is implicitly returned. This returned object is assigned to animal on line 9. Let’s have a look at one of the benefits of using this approach. Addressing the first drawback of using factory functions we now have access to a property called .constructor that will kindly tell us the name of the function that created our object.
// function Animal() {
//     this.type = "mammal";

//     this.breathe = function() {
//       console.log("I'm breathing");
//     };
// }

// var animal = new Animal();

console.log(animal.constructor === Animal);  // true

console.log(animal.constructor) // f Animal() {
                                //   this.type = "mammal";
                                //
                                //   this.breathe = function() {
                                //     console.log("I'm breathing");
                                //   }
                                // }

let ninjaB = new ninjaA.constructor();
// Does your answer use Object.create instead?

// Copy Code
let ninjaB = Object.create(ninjaA);
// This code works as well, but there is a flaw: it puts the swung property in the prototype object instead of in the ninjaB object where it belongs. Thus, ninjaA and ninjaB are somewhat different objects:

Copy Code
ninjaA:
  swung: false
  constructor: Ninja
  prototype: {}

ninjaB:
  constructor: Ninja
  prototype: {
    swung: false
  }
```
```javascript
// You can think of a function that returns another function as a function factory: it creates and returns a new function. Typically, the function factory uses the arguments you pass to it to determine the specific job performed by the function it returns.
let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake


function createPet(type, name) {
    return {
        type :type,
        name :name,

    sleep: function() {
        console.log(`I am sleeping`);
        },

    wake: function() {
        console.log(`I am awake`)
        }
    }
}

function createGreeter(language) {
  switch (language) {
    case 'en':
      return () => console.log('Hello!');
    case 'es':
      return () => console.log('Hola!');
    case 'fr':
      return () => console.log('Bonjour!');
  }
}

let greeterEs = createGreeter('es');
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'

let greeterEn = createGreeter('en');
greeterEn(); // logs 'Hello!'
// This code doesn't provide a significant improvement or convenience for the developer, but it does illustrate how we might use a function that returns another function in our code.
```
```javascript ADVANCED FUNCTION FACTORIES
// Factory functions instantiate and return a new object in the function body. They let us create new objects based on a predefined template. However, they have two significant downsides:

// There is no way to tell whether a factory function created a given object.
// All objects created by a factory function have separate copies of the methods, which can be redundant and wasteful.
const animal = () => ({
  talk: function() {
    console.log(this.sound);
  }
});

const dog = () => Object.create(animal(), {
  sound: {
    value: "woof"
  }
});

// or...

const dog2 = () => {
  var someDog = Object.create(animal());
  someDog.sound = "woof";

  return someDog;
};

var someDog = dog();
someDog.talk();

var someDog2 = dog2();
someDog2.talk();//woof

// ! OR
const animal = (sound) => {
  return {
    talk: () => console.log(sound)
  }
}
const dog = () => animal('woof')
const sniffles = dog()
sniffles.talk() // Outputs: "woof"
// OR

// Let's build an Animal factory function:

const Animal = ({color = "green", numberOfLegs = 4} = {}) => {
  const SetColor = (newColor) => {
    color = newColor;
  };
  const GetColor= () => color;
  const GetNumberOfLegs = () => numberOfLegs;
  const MakeSound = () => console.log("Screetch");
  return {
    GetColor,
    GetNumberOfLegs,
    MakeSound
  }
}
const newCreature = Animal({color: black, numberOfLegs: 3})
newCreature.MakeSound() // -> "Screetch"
// And let's build a Dog factory function:

const Dog = ({name = "rex", color = "black", numberOfLegs = 4} = {}) => {
  const MakeSound = () => console.log("Woof Woof");
  const Roll = () => console.log(`${name} made a roll!`)
  return {
    MakeSound,
    Roll
  }
}
const sniffles = Dog({name: "sniffles", color: black, numberOfLegs: 4})
sniffles.MakeSound() // -> "Woof Woof"
sniffles.Roll() // -> "sniffles made a roll!"
// What should I do if I want to inherit all the good things I get from Animal that I have already?
// Using ES6 Spread Syntax helps us to achieve a very neat way of doing so:

const Dog = ({name = "rex", color = "black", numberOfLegs = 4} = {}) => {
  const anAnimal = Animal({color, numberOfLegs}); // used the Animal factory!
  const MakeSound = () => console.log("Woof Woof");
  const Roll = () => console.log(`${name} made a roll!`)
  return {
    ...anAnimal, // And That's where magic happens!
    MakeSound,
    Roll
  }
}
const sniffles = Dog({name: "sniffles", color: black, numberOfLegs: 4})
sniffles.GetNumberOfLegs() // -> 4
sniffles.MakeSound() // -> "Woof Woof"
sniffles.Roll() // -> "sniffles made a roll!"
```
## Methods and properties; instance and static methods and properties
```javascript INSTANCES PROPERTIES
// Instance methods are stored either as part of an object or somewhere in the object's prototype chain.

// Static methods are methods that apply to the constructor or class itself, not a specific object created by that constructor or class.

// Any method defined in any prototype in the prototype chain of an object is considered to be an instance method of the object.
class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);  //COnstructor Method
  }
}

let kitty = new Cat('Sophie');
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`); //Instance Method
  }
}

let kitty = new Cat('Sophie');
kitty.greet();
// / In OOP, we often refer to individual objects of a specific data type as instances of that type. For example, in the Dog example from the Constructors with Prototypes assignment, maxi and dexter are instances of the Dog type. An instance is just another term for the objects created using any means of defining multiple objects of the same kind (e.g., dogs). The term object is more general, while instance is more specific.

// So far, we've been using constructors to create instances of the Dog type. We can also think of objects created by factory functions as instances.

// We may not be able to tell whether an arbitrary object is a dog object, but all of the objects created by createDog should be dogs. They have a type -- dog -- even if there is no way to test that in your code. Thus, they are instances of a dog type.

// It's convenient to describe the properties of an instance as instance properties. These properties belong to a specific instance of some type. Thus, in our Dog example from the earlier assignment, we say that the name, breed, and weight properties are all instance properties of the various instances of the Dog type. If we want to access the weight for Maxi from the above example, we must use the maxi object:

// If we try to use the constructor, then it wont' work
Dog.weight//=> undefined
// It's convenient to describe the properties of an instance as instance properties. These properties belong to a specific instance of some type. Thus, in our Dog example from the earlier assignment, we say that the name, breed, and weight properties are all instance properties of the various instances of the Dog type. If we want to access the weight for Maxi from the above example, we must use the maxi object:
```
```javascript STATIC PROPERTIES
// Static properties are defined and accessed directly on the constructor, not on an instance or a prototype. Typically, static properties belong to the type (e.g., Dog) rather than to the individual instances or the prototype object.
Dog.species = "Canis lupus";

// keep track of all of the objects created by a constructor.
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];
// In this case, the static property allDogs contains an array with a reference to every dog object created while the program is running. While allDogs maintains a list of all the dogs, it isn't information that is pertinent to a specific dog -- it's information about dogs in general. Therefore, it should be a static property.

// can also define static methods:
Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`);
};

Dog.showSpecies();
```
```javascript BUILT IN CONSTRUCTORS
// new Array() creates and returns a new array. That array is empty unless you also pass some arguments to the constructor. Each argument you provide gets added to the new array as an element:
> let numbers = new Array(1, 2, 3, 4)
> numbers
[ 1, 2, 3, 4 ]

> let colors = new Array('green', 'blue', 'yellow')
> colors
[ 'green', 'blue', 'yellow' ]
// The behavior is considerably different when you provide a single number argument. In this case, the constructor creates an array with a length equal to the number specified by the argument, but with no actual elements:
> new Array(3)
[ <3 empty items> ]
// Oh this is why I was having problems when I tried to use this constructor in some problems

// constructor does not accept non-integers or negative numbers:
> new Array(3.1415)
=> RangeError: Invalid array length

> new Array(-5)
=> RangeError: Invalid array length

> (new Array(3)).fill('*')
[ '*', '*', '*' ]

// Array lets you omit the new keyword:
> Array(1, 2, 3)
[1, 2, 3]

// All arrays inherit from the object referenced by this property:
> let numbers = [1, 2, 3]
> Object.getPrototypeOf(numbers) === Array.prototype //=> true
// arrays can use methods like forEach, map, includes, as well as all the other methods defined on Array.prototype:
> numbers.map(number => number * number);
[ 1, 4, 9 ]

> numbers.includes(3)
true

// array type also has several static methods. We'll discuss two in this section. Remember: static methods belong directly to the constructor function; they aren't part of the prototype used to create new objects. As a result, their names don't include .prototype

// he Array.isArray method takes one argument and returns true if the argument is an array object, and false if it is not:
> Array.isArray([])
true

> Array.isArray({})
false

> Array.isArray(5)
false

// The typeof operator returns an unexpected and somewhat useless value when used with an array:
> typeof []
'object'// The Array.from method takes an array-like object as an argument and returns a new array with the equivalent element values. An array-like object is any object that has a length property.. Such objects usually have properties whose keys are non-negative integers, but that isn't a requirement. In many cases, the length property won't self-update if you add or remove properties to or from the object. In the degenerate case, all arrays are themselves array-like objects.
> Array.from({0: 'a', 1: 'b', 2: 'c', length: 3})
['a', 'b', 'c']

let arrayFrom = obj => {
  let len = obj.length;
  let returnArr = [];

  for (let idx = 0; idx < len; idx += 1) {
    returnArr.push(obj[idx]);
  }

  return returnArr;
};

arrayFrom({0: 'a', 1: 'b', 2: 'c', length: 3});
// => [ 'a', 'b', 'c' ]
// / the node list is an array-like object, so Array.from can create an array based on its content.

// the Object constructor creates new objects:
> new Object()
{}

// You can invoke Object without the new keyword, just as you can omit new with the Array constructor:
> Object()
{}

// All objects created by the Object constructor or with object literal syntax (e.g., { a: 1, b: 2 }, inherit from Object.prototype. Thus, all such objects have access to the instance methods defined in Object.prototype. We've already seen some of these methods in action, such as Object.prototype.hasOwnProperty and Object.prototype.isPrototypeOf.

// Since arrays are a subtype of objects, it should come as no surprise that all array objects have access to all the methods on Object.prototype.
> ['a', 'b', 'c'].hasOwnProperty(1)
true
// Almost all JavaScript objects, whether built-in or custom-created, inherit from Object.prototype, either directly or further down the prototype chain. That includes prototype objects of constructors. Note that we said "almost all"; as discussed in an earlier lesson, it is possible to create objects that don't inherit from Object.prototype.

// Since toString is a method on Object.prototype, all JavaScript objects -- including arrays, functions, and dates -- inherit this method. However, the default behavior of Object.prototype.toString is not very useful; it merely returns [object Object] for objects that don't override this method to provide smarter behavior:
> let obj = { a: 1, b: 2 }
> obj.toString()
'[object Object]'   // not very helpful!

> [1, 2, 3].toString()
'1,2,3'

> let func = function hello() {}
> func.toString()
'function hello() {}'
```
```javascript STATIC OBJECT METHODS
// The list below shows some commonly used static Object methods. You've already seen and used several. Feel free to follow the links and read more about these methods, but you don't have to memorize them. Instead, learn what's available. You can look them up later when you need to use them:

Object.assign
Object.create
Object.entries
Object.freeze
Object.isFrozen
Object.keys
Object.values

// The Date constructor creates objects, commonly called a date object, that represent a specific date and time. Calling Date without arguments returns a date object that represents the creation date and time of the object:
> let now = new Date()
> now
2019-06-07T05:03:26.813Z

// to create a date object that represents "May 1, 1983", you can write:
> let birthday = new Date("May 1, 1983")
> birthday
1983-05-01T07:00:00.000Z

// The toString method returns a string that represents the date (it's pretty verbose):
> let now = new Date()
> now.toString()
'Sat Jun 01 2019 01:15:06 GMT+0500 (Pakistan Standard Time)'
Date.prototype.getFullYear
// The getFullYear method returns the year from the date as a number:
> now.getFullYear()
2019
Date.prototype.getDay
// The getDay method returns a number that represents the day of the week that corresponds to the date object. The return value is 0 for Sunday, 1 for Monday, and so on until it returns 6 for Saturday.
> now.getDay()
4 // (represents Thursday)

// Equality for objects works by identity, however. Two objects are strictly equal only when they are the same object. Consider:
> let arr1 = [1, 2, 3];
> let arr2 = arr1    // arr1 and arr2 both reference the same object
> arr1 === [1, 2, 3] // false
> arr1 === arr2      // true
// JavaScript has two kinds of strings: string primitives and String objects. Thus far, all the strings we've created and used have been string primitives. We create string primitives by using quotes (single or double) or back-tick characters to define a string's value. To create a String object, on the other hand, we must use the String constructor:
> let strPrimitive = 'abc'
> typeof strPrimitive
'string'

> let strObject = new String('xyz')
> typeof strObject
'object'

> 'abc' === 'abc'
true

> new String('abc') === new String('abc')
false
// Once JavaScript has wrapped your string primitive in a String object, it then uses the object to access the property or call the method. When the wrapping object has served its purpose, JavaScript discards it.

// If a property or method returns a string, it returns a string primitive, so you also don't have to worry about converting String objects to primitives.

// As a general rule, you should not create String objects explicitly. That's where you're likely to run into problems with the distinction between string primitives and String objects. However, if you're writing code where you may have to operate on String objects, you can use String.prototype.valueOf() to retrieve the value of the String object as a primitive.

// without the new keyword does not create an object. In the case of String, it simply returns a new string, not an object, when you omit the new keyword:
> let str = String('abc')
> typeof str
'string'

> String(undefined)
'undefined'

> String(3.14)
'3.14'

> String([1, 2, 3])
'1,2,3'

> String(a => a * a)
'a => a * a'
// The Number and Boolean constructors work in much the same way as the String constructor. When called with new, they create Number and Boolean objects. When called without new, the Number function converts its argument to a number, and the Boolean function converts its argument to a boolean.
> Number('123');
123

> Boolean(0);
false

> Boolean('abc');
true
// As with strings, numbers and booleans both have primitive and object forms, and JavaScript invisibly wraps primitives in objects to access methods and properties. You should also avoid creating Number and Boolean objects explicitly.

// Since all JavaScript objects derive their behavior from the prototype objects associated with their constructors, we can add new capabilities to our built-in objects by changing those prototypes. For example, we can add a first method to all arrays by adding it to Array.prototype:
Array.prototype.first = function() {
  return this[0];
}

[1, 2, 3].first(); //=> 1

// Extending built-in objects is interesting to study, but it's best to avoid doing so. Adding a method like first to an array object can confuse other developers working on your project. It can lead to errors when other developers forget or don't realize that your array has an unexpected bonus.
// Array methods, however, are surprisingly useful with String objects. We can borrow many array methods to manipulate String objects. Consider the following code:
let string = 'EEE';
Array.prototype.every.call(string, char => char === 'E'); // => true

// We can shorten that expression noticeably by using an empty array instead of Array.prototype as the calling object:
[].every.call(string, char => char === 'E'); // => true

Array.prototype.every = function(callback) {
  for (let index = 0; index < this.length; index++) {
    if (!callback(this[index])) return false;
  }

  return true;
};

[].filter.call('olives', val => val < 'm'); // [ 'l', 'i', 'e' ]
// /The call and apply functions don't change a function's logic or return values; they merely change what object the method uses for its context.
// Array methods that mutate the array won't work with strings. Again, that makes sense: strings are immutable.
let ingredients = 'olives';
[].push.call(ingredients, ' and pepper');
// TypeError: Cannot assign to read only property 'length' of object '[object String]'
```
## Prototypal and pseudo-classical inheritance
```javascript Prototypal inheritance Definition
// Looking up a property in the prototype chain is the basis for prototypal inheritance, or property sharing through the prototype chain. Objects lower down in the chain inherit properties and behaviors from objects in the chain above. That is, downstream objects can delegate properties or behaviors to upstream objects.

// A downstream object overrides an inherited property if it has a property with the same name. (Overriding is similar to shadowing, but it doesn't completely hide the overridden properties.)

// Object.getOwnPropertyNames and obj.hasOwnProperty can be used to test whether an object owns a given property.
```
#### prototypal inheritance
```javascript
// prototypal inheritance or prototypal delegation. We sometimes call this form of inheritance object inheritance since it works with one object at a time. An object's internal [[Prototype]] property points to another object, and the object can delegate method calls to that other object. We've seen plenty of examples of prototypal inheritance in earlier assignments. For instance:
let personPrototype = {
  name: '',
  age: 0,
  toString() {
    return `My name is ${this.name} and I'm ${this.age} years old.`;
  },
};

let will = Object.create(personPrototype);
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.

// Prototypal inheritance means that baz doesn't need a separate copy of the method. Instead, it can use the prototype chain to find the method and delegate the call.
let foo = {
  bar: 42,
  qux() {
    console.log("Pudding");
  },
};

let baz = Object.create(foo);
baz.qux()
```
#### Pseudo-Classical inheritance
```javascript DEFINITION
// If the function is used as a constructor, the returned object's [[Prototype]] will reference the constructor's prototype property. That lets us set properties on the constructor's prototype object so that all objects created by the constructor will share them. We call this the Pseudo-classical pattern of object creation.

// The Pseudo-Classical pattern of object creation generates objects using a constructor function that defines state, then defines shared behaviors on the constructor's prototype.

// The combination of constructors and prototypes provides a way of mimicking classical inheritance with JavaScript. This lets us create sub-type objects, which can 'inherit' methods from a super-type object. This is one way of facilitating code re-use.
```
```javascript SIMPLE EXAMPLE
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.toString = function() {
  return `My name is ${this.name} and I'm ${this.age} years old.`;
};
// ? OR

function Human() {}
Human.prototype.myName = function() { return this.name; };
Human.prototype.myAge = function() { return this.age; };

function Person() {}
Person.prototype = Object.create(Human.prototype);
Person.prototype.constructor = Person;
Person.prototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = new Person();
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.
```

```javascript EXAMPLES
// pseudo-classical inheritance, also called constructor inheritance. When people talk about inheritance in the context of JavaScript, they generally mean this type of inheritance. In pseudo-classical inheritance, a constructor's prototype inherits from another constructor's prototype; that is, a sub-type inherits from a super-type. The term "pseudo-classical" refers to the fact that constructor inheritance mimics classes from other OOP languages, but doesn't actually use classes.

function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

let hello = new Hello();
hello.hi();//=> "Hello!"

let hello = new Hello();
hello.bye();//=> "TypeError" because it nor its super set have the method

let hello = new Hello();
hello.greet();//=> "Hello!" Undefined since greet does have access by hello, but it requires an argument to be passed.

let hello = new Hello();
hello.greet('Goodbye');//=> "Goodbye"

Hello.hi();//=> This code also raises a TypeError. The hi method is defined on Hello.prototype, not on the Hello constructor itself. Thus, only instances of Hello have access to hi.
```
```javascript

// Pseudo-Classical:
// New objects are created from constructor functions using the keyword new .
// Calling new on a function creates a new object. The code within the function executes with the execution context (this) set to the new object. The newly created object’s __proto__ property is set to point at the object referenced by the functions prototype property. The newly created object is then implicitly returned.
// obj.constructor can be used to find out the name of the constructor function that created an object.
// Inheritance can be emulated by changing where a functions .prototype property points to (Just remember to reset where the .constructor property points to).
function Animal() {
  this.type = "mammal";

  this.breathe = function() {
    console.log("I'm breathing");
  };
}
Animal.prototype.breathe = function() {
  console.log("I'm breathing");
}

var animal = new Animal();

console.log(animal.type);  // "mammal"
animal.breathe();          // "I'm breathing"
console.log(animal.constructor === Animal);  // true

console.log(animal.constructor)

function Animal() {
  this.type = "mammal";

    this.breathe = function() {
     console.log("I'm breathing");
  }
 }
console.log(Object.getOwnPropertyNames(animal));  // ["type", "breathe"]

function Dog() {
  this.legs = 4;
}

function Terrier() {}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

Terrier.prototype = Object.create(Dog.prototype);
Terrier.prototype.constructor = Terrier;

var rex = new Terrier();

console.log(rex.constructor);                   // f Terrier() {}
console.log(rex.type);                          // "mammal"
rex.breathe();                                  // "I'm breathing"
console.log(rex.legs);                          // undefined
console.log(Object.getOwnPropertyNames(rex))    // []

var spot = new rex.constructor;

console.log(spot.constructor);                   // f Terrier() {}
console.log(spot.type);                          // "mammal"
spot.breathe();                                  // "I'm breathing"
console.log(spot.legs);                          // undefined
console.log(Object.getOwnPropertyNames(spot));   // []
```

## Encapsulation grouping together of related data and functions
```javascript
// In JavaScript, encapsulation is the idea of bundling data and operations associated with that data in a single entity; that is, it's the grouping of related properties and methods in a single object.
// Encapsulation {think VCR and how it is self contained and we give it a disk and it gives us a movie}
//  is grouping related properties and behaviors together
// when the program parts are hidden and the main parts that are interacted with are left exposed which allows for other parts of the program to easily interact with the most important output input of that program without worrying about how it is implemented.
// ---
// Objects provide a means to group related data and functions into one unit. In the context of the object, the data and functions are commonly called state and methods respectively.Encapsulation

// This grouping together of related data and functions is what’s called encapsulation and is one of the fundamental principles of object-oriented programming.
let overtime = 10;
let baseSalary = 6000;
let rate = 50;

function computeWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate)
}

// Encapsulation** of the above code
let employee = {
    baseSalary: 6000,
    overtime: 10,
    rate: 50,
    computeWage: function() {
      return this.baseSalary + (this.overtime * this.rate)
    }
  }
```
```javascript DIFF BETWEEN JS ENCAPSULATION AND OTHER OO LANGUAGES
// In other languages, encapsulation concerns hiding details of an object from code that uses the object. An object should only expose the methods and properties that other objects need to use the encapsulated object. However, JavaScript does not directly provide the means to limit exposure of methods and properties. There are ways to achieve a degree of access restriction, but they're not perfect.
```

## Polymorphism
```javascript DEFINITION
// Polymorphism refers to the ability of objects with different types to respond in different ways to the same message (or method invocation); that is, data of different types can respond to a common interface. It's a crucial concept in OO programming that can lead to more maintainable code.

// When two or more object types have a method with the same name, we can invoke that method with any of those objects. When we don't care what type of object is calling the method, we're using polymorphism. Often, polymorphism involves inheritance from a common superclass. However, inheritance isn't necessary as we'll see in this assignment.

// For example, assume we have a method that expects an argument that has a move method. We can pass it any type of argument, provided it has a compatible move method. The object might represent a human, a cat, a jellyfish, or, conceivably, even a car or train. That is, it lets objects of different types respond to the same method invocation.

// Polymorphism refers to the ability of objects with different types to respond to the same method invocation. It can be implemented through inheritance by method overriding. It can also be implemented through duck typing; by ensuring that objects of different types use the same method name to perform different but related functions, those objects can be interacted with in a uniform way.
```
```javascript POLYMORPHISM THROUGH INHERITANCE (METHOD OVERIDING)
class Animal {
  move() {}
}

class Fish extends Animal {
  move() {
    console.log("swimming");
  }
}

class Cat extends Animal {
  move() {
    console.log("walking");
  }
}

// Sponges and Corals don't have a separate move method - they don't move
class Sponge extends Animal {}
class Coral extends Animal {}

let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
animals.forEach(animal => animal.move());
// The Sponge and Coral classes don't have a move method -- at least not one of their own. Instead, they both inherit it from the Animal class via the prototype chain. Thus, when we call move on a Sponge or Coral object, the move method in the Animal class gets called. That method does nothing here, so the Sponge or Coral doesn't move. This is polymorphism through inheritance -- instead of providing our own behavior for the move method, we're using inheritance to acquire the behavior of a supertype. In this case, that behavior does nothing, but it could do something else.

// For Fish objects, we call the move method from the Fish class, which enables a fish to swim. Likewise, a Cat object walks when we tell it to move. This is a simple example of polymorphism in which two different object types can respond to the same method call simply by overriding a method inherited from a superclass. In a sense, overriding methods like this is similar to duck-typing, a concept that we'll meet shortly. However, overriding is generally treated as an aspect of inheritance, so this is polymorphism through inheritance.
```
```javascript toString() AS AN EXAMPLE OF POLYMORPHISM THROUGH INHERITANCE
// An example of inheritance-based polymorphism in action is the JavaScript toString method. The Object type provides a default implementation of toString() that other types inherit. Other types can also override the method to return a customized string representation of the object. Without customization, toString returns the string '[object Object]' when called on an object. With customization, it can return something more meaningful and useful. For instance, arrays and dates are objects that have customized toString methods:

> [1, 2, 3].toString()
'1,2,3'

> (new Date()).toString()
'Fri Jun 28 2019 20:50:13 GMT-0700 (Pacific Daylight Time)'
```
```javascript POLYMORPHISM THROUGH DUCK TYPING (HANDLEONCLICK DIFFERENT ACTIONS)
// Duck typing occurs when objects of different unrelated types both respond to the same method name. With duck typing, we aren't concerned with the class or type of an object, but we do care whether an object has a particular behavior. If an object quacks like a duck, then we can treat it as a duck. Specifically, duck typing is a form of polymorphism. As long as the objects involved use the same method name and take the same number of arguments, we can treat the object as belonging to a specific category of objects.

// For example, an application may have a variety of elements that can respond to a mouse click by calling a method named something like handleClick. Those elements may be completely different -- for instance, a checkbox vs. a text input field -- but they're all clickable objects. Duck typing is an informal way to classify or ascribe a type to objects. Classes and constructors provide a more formal way to do that.

// The right way to implement this program is to use duck typing to implement polymorphism:

class Chef {
  prepare(wedding) {
    this.prepareFood(wedding.guests);
  }

  prepareFood(guests) {
    // implementation
  }
}

class Decorator {
  prepare(wedding) {
    this.decoratePlace(wedding.flowers);
  }

  decoratePlace(flowers) {
    // implementation
  }
}

class Musician {
  prepare(wedding) {
    this.preparePerformance(wedding.songs);
  }

  preparePerformance(songs) {
    // implementation
  }
}

class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }

  prepare(preparers) {
    preparers.forEach(preparer => {
      preparer.prepare(this);
    });
  }
}

// Though there is no inheritance in this example, each of the preparer-type classes provides a prepare method. We still have polymorphism since all of the objects respond to the prepare method call. If we later need to add another preparer type, we can create another class and implement the prepare method to perform the appropriate actions.
```

```javascript DUCK TYPING EXMAMPLE WITH CONSTRUCTOR FUNCTIONS
function Person(name){
    this.name = name
}
Person.prototype.sayHi = function(){
    return 'Hi, I am ' + this.name
}

var jack = new Person('Jack')
var jill = new Person('Jill')

jack.sayHi()// 'Hi, I am Jack'
jill.sayHi()// 'Hi, I am Jill'

function sing() {
    return this.name + ' sings!'
}

sing.apply(jack)// 'Jack sings!'

function Flower(name) {
    this.name = name
}

var tulip = new Flower('Tulip')

jack.sayHi.apply(tulip)// 'Hi, I am Tulip'

function singTo(other) {
    return this.name + ' sings for ' + other.name
}

singTo.apply(jack, [jill])// 'Jack sings for Jill'
sing.call(jack, jill)// 'Jack sings for Jill'
```
```javascript SAME METHOD NAME AND ARGUMENTS DOES NOT MAKE POLYMORPHISM
// Note that merely having two different objects that have a method with the same name and compatible arguments doesn't mean that you have polymorphism. In theory, those methods might be used polymorphically, but that doesn't always make sense. Consider the following two classes:

class Circle {
  draw() {}
}

class Blinds {
  draw() {}
}
[new Circle(), new Blinds()].forEach(obj => obj.draw());
// However, it's unlikely that this would ever make sense in real code. Unless you're actually calling the method in a polymorphic manner, you don't have polymorphism. In practice, polymorphic methods are intentionally designed to be polymorphic; if there's no intention, you probably shouldn't use them polymorphically.
```
## Collaborator objects
<!-- Objects that help provide state within another object are called collaborator objects, or more simply, collaborators. Collaboration is all about objects working together in some manner. A collaborator works in conjunction -- in collaboration -- with the object to which it belongs. -->

// We often talk of collaborators in the context of custom objects like pet, but collaborators don't have to be custom objects. They can be built-in objects like arrays and dates, as well. In principle, collaborators don't have to be objects at all; primitives like strings and numbers frequently collaborate with objects and combine to form the state of those objects.
```javascript

function makeBook() {
    title,
    author,
    read,

// ! there are two ways to write the below method
      getDescription: function() {
            return `${this.title} was written by ${this.author}.`;
    },

    // OR
    getDescription() {
        return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? 'have' : "haven't"} read it.`;
    }
  };
```

```javascript
// We can now access Pete's pet by referencing the .pet property with the pete object, e.g., pete.pet. Since pet is the cat object, we can use pete.pet to call the cat's methods: pete.pet.makeNoise().

// Objects that help provide state within another object are called collaborator objects, or more simply, collaborators. Collaboration is all about objects working together in some manner. A collaborator works in conjunction -- in collaboration -- with another object.

// The pete object has a collaborator object stored in its pet property. The pete object and the object referenced by its pet property work together. When we need to access the pet object or have it perform a behavior, we can use pete.pet to access and use the object's properties. For instance, on line 19, the pete object collaborates with the cat object (via this.pet) to access the cat's name.

// Collaborator objects play an important role in object-oriented design; they represent the connections between the different classes in your program. When working on an object-oriented program, be sure to consider what collaborators your objects need and whether those associations make sense, both from a technical standpoint and in terms of modeling the problem your program aims to solve.

//
// We often talk of collaborators in the context of custom objects like pet, but collaborators don't have to be custom objects. They can be built-in objects like arrays and dates, as well.

// Summary
// Collaborator objects let you chop up and modularize the problem domain into cohesive pieces. They play an important role in modeling complicated problem domains in OO programming.
let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let dog = {
  name: 'Maxi',

  makeNoise() {
    console.log('Woof! Woof!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pets: [],
};

pete.pets.push(cat);
pete.pets.push(dog);

```
## Single vs
```javascript
// One problem with inheritance in JavaScript is that objects can inherit from only one object, and classes can extend only one other class. Ultimately, those two statements mean the same thing; an object can have only one prototype object. We call this single inheritance.
```
## multiple inheritance
## Mix-ins; mix-ins vs. inheritance THIS VERY MUCH SEEMS LIKE THE DIFFERENCE OF USING PROPERTIES ON A PROTOTYPE OR CREATING ACTIONS AND THEN ADDING THOSE ACTIONS TO THE INSTANCES
```javascript MIXINS DEFINITIONS
// Mixins are more appropriate in a has-a relationship
// There's a limitation with the inheritance pattern, which is that objects can only directly 'inherit' from one super-type object. In other words, an object can have only one prototype object. Mixins provide a way of addressing this limitation. The mix-in pattern involves creating a mix-in object containing certain methods, and using Object.assign() to mix that object into another object.
```
```javascript EXAMPLE USING INHERITANCE FOR MULTIPLE ADD INS VS MIX INS OBJECT.ASSIGN
//  It's not delegation with prototypes; the mix-in pattern merely copies the properties of one object to another with Object.assign or some similar technique.
class Bird {}

class Stork extends Bird {
  fly() {}
}

class Parrot extends Bird {
  fly() {}
}

class Penguin extends Bird {
  swim() {}
}

class Ostrich extends Bird {
  swim() {}
}

class Duck extends Bird {
  swim() {}
  fly() {}
}

class Goose extends Bird {
  swim() {}
  fly() {}
}

// Instead of using inheritance, we can use a mix-in instead. A mix-in is an object that defines one or more methods that can be "mixed in" to a class. This grants that class access to all of the methods in the object. It's the only real workaround for the lack of multiple inheritance short of duplication. Let's see what mix-ins look like:
const Swimmable = {
  swim() {};
}

class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class Stork extends FlyingBird {}

class Parrot extends FlyingBird {}

class Penguin extends Bird {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich extends Bird {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck extends FlyingBird {}
Object.assign(Duck.prototype, Swimmable);

class Goose extends FlyingBird {}
Object.assign(Goose.prototype, Swimmable);
//
//
//

const Swimmable = {
  swim() {}
}

const Flyable = {
  fly() {}
}

class Stork {}
Object.assign(Stork.prototype, Flyable);

class Parrot {}
Object.assign(Parrot.prototype, Flyable);

class Penguin {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck {}
Object.assign(Duck.prototype, Swimmable, Flyable);

class Goose {}
Object.assign(Goose.prototype, Swimmable, Flyable);

// We suggest a balance of mix-in and classical inheritance pattern instead:

// Inheritance works well when one object type is positively a sub-type of another object. In our example, it's natural for a penguin to also be a swimming bird. These types have an "is a" relationship: a penguin is a swimming bird. Whenever two object types have an "is a" relationship, constructor or class inheritance makes sense.

// On the other hand, the ability to swim doesn't have that kind of relationship with storks. Swimming is a capability that penguins have. Similarly, flying is a capability that storks have. When you want to endow your objects with some capability, a mix-in may be the correct choice.

```

## Methods and functions; method invocation vs. function invocation
```javascript
// Function invocations (e.g., parseInt(numberString)) rely upon implicit execution context that resolves to the global object. Method invocations (e.g., array.forEach(processElement)) rely upon implicit context that resolves to the object that holds the method.

// All JavaScript code executes within a context. The top-level context is the window object in browsers and the global object in Node. All global methods and objects, such as parseInt and Math, are properties of window or global.
```
## First Class Functions
```javascript
// JavaScript has first-class functions that have the following characteristics:

// You can add them to objects and execute them in the respective object's context.
// You can remove them from their objects, pass them around, and execute them in entirely different contexts.
// They're initially unbound but dynamically bound to a context object at execution time.
```
## Higher-order functions

```javascript
// A Higher-order function is one that takes a function as an argument or returns a function value.

// All JavaScript functions are first-class values. Therefore, all higher-order functions are also first-class values.

// A function that returns a function is a higher-order function.

// A higher-order function must either accept one or more function arguments, return a function value, or do both.
```
## The global object
```javascript
let obj = {
  foo() {
    return this;
  },
};

obj.foo(); //obj

// Since we invoke foo with an implicit context of obj, JavaScript runs the code with the execution context set to obj. Since this refers to the current execution context while the method is running, the method returns the obj object.`

```


```javascript
// The global object is available everywhere in a JavaScript program, including both the top level and inside other functions and methods. If you don't provide an explicit execution context, JavaScript uses the global object as the value for this. However, you can access the global object anywhere merely by using its name (global or window).

// The global object is used as the implicit execution context when invoking a function with function call syntax.

// JavaScript creates a global object when it starts running.
global.foo = 5;
if (isFinite(foo)) {
  let bar = 3;
  xyz = 5;
  console.log(bar);
}
// I got most of this right except for the "global', and "log";
console.log(global.hasOwnProperty('global'));   // A: true
console.log(global.hasOwnProperty('foo'));      // B: true
console.log(global.hasOwnProperty('isFinite')); // C: true
console.log(global.hasOwnProperty('bar'));      // D: false
console.log(global.hasOwnProperty('xyz'));      // E: true
console.log(global.hasOwnProperty('console'));  // F: true
console.log(global.hasOwnProperty('log'));      // G: false
```
```javascript
// JavaScript creates a global object when it starts running. It serves as the implicit execution context for function invocations

// Infinity and NaN, and global functions, such as isNaN and parseInt. All these entities are properties of the global object!
Number.isNaN('I am not a number');   // false - this is a correct value
isNaN('I am not a number');          // true - string gets coerced to NaN

// add properties to the global object at any time:// in Node
 global.foo = 1
 global.foo       // 1
// in a browser
 window.foo = 1
 window.foo       // 1

// Assigning a value to a variable without declaring it means you added that property to the global object
foo = 'bar';
global.foo; // => 'bar' (in Node)
window.foo; // => 'bar' (in a browser)
```
## Method and property lookup sequence
```javascript METHOD CHAIN LOOK UP
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);
'goFast' in smallCar;  // => true
'goFast' in blueTruck; // => true
```
```javascript OVERIDING PROTOTYPES (METHODS AND PROPERTIES)
// Inheriting methods from a prototype doesn't mean that the inheriting object is stuck with those methods. JavaScript objects are incredibly dynamic and flexible. Two objects created with the same constructor may end up looking completely different from each other because of changes and additions made after constructing the object. For instance, suppose we have a dexter dog that has an unusually loud and deep bark. We want to change the bark method to log WOOF! instead of Woof!. We can do that easily by defining a custom bark method on dexter.

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);

dexter.bark = function() {
  console.log('WOOF!')
}

maxi.bark();   // Woof!
dexter.bark(); // WOOF!
// The dexter object now has its own bark method that overrides the bark method from Dog.prototype. Each time we call bark on dexter, JavaScript looks for it first in the dexter object itself. Since it finds it there, it doesn't need to check the prototype.

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());//=> true;
// Even though we define the swingSword method on the prototype after we create the ninja, all objects created by the Ninja constructor share the same prototype object. Thus, when we define swingSword, it immediately becomes available to the ninja object.
```
## Function execution context and this
execution context, i.e., the value of this
```javascript
// The value of this is the current execution context of a function or method.

// The value of this changes based on how you invoke a function, not how you define it.
```
## Implicit and explicit execution context
**Definition** the environment in which a function executes. When we talk about the execution context of a function or method call, we're talking about the value of this when that code executes
```javascript
// The context depends on how the function or method was invoked, not on where the function was defined.how you call the function or method.

// There are two basic ways to set the context when calling a function or method:
// Explicit: The execution context that you set explicitly.
// Implicit: The execution context that JavaScript sets implicitly when your code doesn't provide an explicit context.

// Setting the execution context is also called binding this or setting the binding. A binding is something that ties two things together. In this case, it refers to the fact that a call binds this to a specific object when the function or method is called.
```
### Implicit versus Explicit Contexts
```javascript
// IMplicit  :
function foo() {
  console.log("this refers to: " + this);
}

// when you call a method that belongs to an object, the execution context inside that method call is the object used to call the method. We call that method execution context.  this is implicit
let foo = {
  bar: function() {
    console.log(this);
  }
};

foo.bar(); // `foo` is the implicit execution context for `bar`
// { bar: [Function: bar] }

// Here, foo.bar() is considered a method call since we call it as a method; that is, we use the method call syntax object.method(). Since JavaScript functions are first-class objects, bar can be called in other ways that change the context:
let baz = foo.bar;
baz(); // Object [global] {...}

// the execution context is determined entirely by how a function or method is called. Since we're calling baz as a standalone function, its execution context is the global object, not the foo object.

// Using parenthesis after a function or method name is not the only way to invoke it. As we've seen, when you invoke a function with parentheses, JavaScript uses the global object as the implicit context; when you invoke a method, it uses the object that you used to call the method as the implicit context.
```

## Dealing with context loss

#### Method Copied from Object
```javascript
// when you take a method out of an object and execute it as a function or as a method on another object. In either case, the function's context is no longer the original object.
let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

john.greetings();         // context is john  //=> hello, John Doe
let foo = john.greetings; // Strips context
foo(); //=>  hello, undefined undefined
// could use foo.call(john) to restore the original context,

function repeatThreeTimes(func) {
  func(); // can't use func.call(john); john is out of scope
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings); // Strips context
}

foo();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

// One way to solve is...
function repeatThreeTimes(func, context) {
  func.call(context);
  func.call(context);
  func.call(context);
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings, john);
}

foo();

// hello, John Doe
// hello, John Doe
// hello, John Doe

// generally not a good idea to pass a lot of arguments to your functions; the more arguments a function can accept, the harder the function is to use.

// Another approach is to hard bind
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings.bind(john));
}

foo();

// => hello, John Doe
// => hello, John Doe
// => hello, John Doe

//

// has one significant advantage: once you bind a context to a function, that binding is permanent and does not need to be repeated if it gets called more than once. The disadvantage of bind is that it is no longer possible to determine the context by looking at the invocation of the final function.
```
#### Context Loss 2 nested functions suffer from context loss.
```javascript
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar();
  },
};

obj.foo();        // => undefined undefined
// bar is invoked as a standalone function on line 9. Thus, its execution context is the global object, not the obj object that you may have expected.

// Solution 1: Preserve Context with a Variable in Outer Scope
// One common way to preserve the context in this scenario is to use something like let self = this or let that = this in the outer function. If you define the self or that variable -- these names are idiomatic, and not a required name --- in the outer scope, you can use that variable and whatever value it contains inside your nested inner function(s).

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;

    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar();
  },
};

obj.foo(); // => hello world

// In this example, line 5 assigns this to the local variable self. Since JavaScript uses lexical scoping rules for variables, bar can access self within its body; that lets us use it instead of this to access the correct context object.

// Solution 2: Call Inner Function with Explicit Context
// You can also use call or apply to explicitly provide a context when calling the inner function. For instance:
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar.call(this);
  },
};

obj.foo(); // => hello world

// Solution 3: Use bind
// A third approach is to call bind on the inner function and get a new function with its execution context permanently set to the object.
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this);

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world
// Note that we're calling bind on the function expression here, then assigning the returned function to the bar variable. You can also use a function declaration instead of a function expression, but you'll need an extra variable:
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    let qux = bar.bind(this);

    // some code
    qux();

    // some more code
    qux();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world

// Solution 4: Using an Arrow Function
// Arrow functions have a property that comes in very handy when dealing with context loss; they inherit their execution context from the surrounding scope. That means that an arrow function defined inside another function always has the same context as the outer function:

// Copy Code

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world

// Using arrow functions like this is similar to using bind in that you don't have to worry about arrow functions losing their surrounding context. An arrow function, once created, always has the same context as the function that surrounded it when it was created.

// Of all the techniques we saw in this assignment, using arrow functions is the most common these days.

// Don't use arrow functions as methods in an object.
let obj = {
  a: 5,

  foo: () => {
    console.log(this.a);
  },
};

obj.foo(); // => undefined
// The surrounding context is, in fact, the global object. The reason for that is simple: the let statement in this example is in the program's top-level code, so its context is the global object. That means that this inside the object literal is also the global object, so this on line 5 refers to the global object, not obj.
// You may have noticed that this in obj.foo is not determined by how the method is called. We call the method on line 9, and we seem to be telling JavaScript to use obj as the context. Instead, the context ends up being the global object. That seems to contradict our repeated statements that the context is determined entirely by how a function or method is invoked. That's clearly not the case here; it certainly violates the rule. However, you won't usually see code like this in practice.

// "Arrow function expressions are ill suited as methods, and they cannot be used as constructors."
```

## call, apply, and bind
```javascript Call and Apply Definitions
// The call and apply methods invoke a function with an explicit execution context.

// The bind method returns a new function that permanently binds a function to a context.

// Regular function calls use the global object as their execution context, while method calls use the calling object as their context. You can override this behavior by setting the execution context explicitly with either call or apply.
```
```javascript USE ANY ARRAY AS A STARTING POINT TO CALL ON AND CONVERT THE OBJECT/PRIMITIVE TO SOMETHING ELSE
str = [1, 2, 3].map.call(str, convertCase).join("");
str = [].map.call(str, convertCase).join(""); //WORKS THE SAME AS THE ABOVE
// This code uses call to invoke map with str as its context, a process that allows map to process the individual characters of str. Note that we use the array [1, 2, 3] to invoke call; any array will do.

```
```javascript HOW to say these calls
foo.apply(bar, [1, 2, 3]);
// To use apply to invoke a function named foo and an execution context of bar, you should use foo to invoke apply, and pass bar as an argument to apply. This code does the opposite.

// A function that is invoked using function-call syntax receives the global object as its execution context.

// A function that is invoked using method-call syntax receives the calling object as its execution context.

// Both call and apply set the execution context for a function invocation.
```
```javascript USING CALL TO SUPER PROPERTIES AND METHODS FROM A SUPER CLASS IN CONSTRUCTOR FUNCTION
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
};

// rect test code omitted

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

// sqr test code omitted

function Super(x) { ... }
    Super.prototype.foo = ...

function Sub(x, y) {
    Sub.superclass.constructor.call(this, x); // SUPER THE `X` PROPERTY FROM THE SUPER TYPE
}

Sub.superclass = Super.prototype;
Sub.prototype = Object.create(Sub.superclass);
Sub.prototype.constructor = Sub;

    // COPYING METHODS WITH CALL AND CONSTRUCTOR FUNCTIONS
Sub.prototype.foo = function (...) {
    Sub.superclass.foo.apply(this, arguments);
};
```

```javascript
// / There are, however, several ways to subvert this behavior. You can provide an explicit context to any function or method, and it doesn't have to be the global object or the object that contains the method. Instead, you can use any object -- or even null -- as the execution context for any function or method. There are two main ways to do that in JavaScript: call and apply.

// all JavaScript functions have the call method

function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // logs 42
// The first argument to call provides the explicit context for the function invocation. a function's definition has no bearing on its execution context.

function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

obj.logNum = logNum;
obj.logNum(); // logs 42
// we don't mutate the object when we use call.

// can also use call to explicitly set execution context on methods, not just functions:
let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj1.logNum.call(obj2); // logs 42

// Similar to...
let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj2.logNum = obj1.logNum;
obj2.logNum(); // logs 42
// in this case, we mutate obj2 when we give it a logNum property that it didn't have before.

function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

obj.num = sumNum.call(obj, 5);
console.log(obj.num); // => 47

// More directyl written...
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

obj.sumNum = sumNum;
obj.num = obj.sumNum(5);
console.log(obj.num); // => 47

// Another example
let iPad = {
  name: 'iPad',
  price: 40000,
};

let kindle = {
  name: 'Kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(`${lineNumber}: ${this.name}, ${this.price / 100} dollars${punctuation}`);
}

printLine.call(iPad, 1, ';');        // => 1: iPad, 400 dollars;
printLine.call(kindle, 2, '.');      // => 2: Kindle, 300 dollars.

// General syntax for call isFinite
someObject.someMethod.call(context, arg1, arg2, arg3, ...)

// APPLY works in the same way _____, The only difference is that apply uses an array to pass any arguments to the function.
someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])

// However, with ES6 call can be used with the spread operator
let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);

```
JavaScript has a third way to specify the context: the bind method on function objects.
#### Bind
```javascript
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

let sumNum2 = sumNum.bind(obj);
sumNum2(5); // => 47
// We don't call immediately but returns a new function
// The new function is permanently bound to the object passed as bind's first argument. You can then pass that method around and call it without worrying about losing its context since it's permanently bound to the provided object.

let object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
bar();                                // "undefined undefined"

let baz = object.foo.bind(object);
baz();                                // "hello world"
// An interesting and important property of permanently bound functions is that you cannot change their execution context, even if you use call or apply or call bind a second time.
let object2 = {
  a: 'hi',
  b: 'there',
};

baz.call(object2);  // "hello world" - `this` still refers to `object`

Function.prototype.bind = function (...args) {
  let fn = this;
  let context = args.shift();

  return function () {
    return fn.apply(context, args);
  };
};
```
#### Bind
```javascript
// bind returns a new function, and that new function is permanently context-bound to the object provided as the first argument to bind. The original function isn't changed and doesn't have its context changed.

let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting: function(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  }
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buena noches, '
};

let spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose');//=> 'Buenas tardes, Jose'
spanishGreeter('Juan');//=> 'Buenas tardes, Juan'
```
Unlike call and apply, bind doesn't invoke the function used to call it. Instead, it returns a new function that is permanently bound to the context argument.
```javascript
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);
```

## Object.assign and Object.create
```javascript OBJECT.CREATE EXAMPLE AND DIFF BETWEEN NEW KEYWORD
// JavaScript does not have classes in the traditional sense. Prototypal inheritance is used to link objects together.
// Every object in JavaScript has a __proto__ property. If a property is not found on an object it will check the object referenced by this __proto__ property.
// Object.create(obj) is used to create a new object and link it’s __proto__ property to the object passed in as an argument (obj ).
// Any properties defined anywhere on an object’s prototype chain will be available to said object.
// Object.create doesn't create a copy of the object it gets passed as an argument. Instead, it creates a new object whose [[Prototype]] property references the argument.

let foo = {
  bar: 42,
  qux() {
    console.log("Pudding");
  },
};

let baz = Object.create(foo);
baz.qux() ,// "Pudding"
// The baz object delegates the invocation of qux to the foo object.
// If we add a new play method to the Bingo class, objects created by Bingo will use that method instead of looking up the prototype chain and finding it in the Game class. As soon as JavaScript finds a method, it calls it. When a class redefines a method that a superclass defines. We call this "method overriding."

class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }

  play() {
    return 'Eyes down';
  }
}

let bingo = new Bingo();
bingo.play(); // 'Eyes down'.

// This illustrates the key difference between setting the constructor function’s prototype equal to objects created with new and setting it equal to objects created with Object.create(obj). With new we’re causing the code within the constructor function to run and creating a link with a prototype chain but with Object.create(obj) we’re simply creating the link without executing the code in the constructor function.

// Another useful benefit of the constructor property is that we can use it to create new objects. We know that it points back to a constructor function so let’s say we have an object, rex, and in this case we don’t know about Terrier. We want to create another object similar to rex. We can access rex.constructor and call new on it. This is the equivalent of calling new Terrier();
```

## Built-in constructors like Array, Object, String and Number
```javascript SAFE SCOPE CONSTRUCTORS EXAMPLE
function User(first, last){
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

new Object();          // Object {}
Object();              // Object {}

new Array(1, 2, 3);    // [1, 2, 3]
Array(1, 2, 3);        // [1, 2, 3]

new String("abc");     // [String: 'abc']
String("abc");         // 'abc'
```
## Reading OO code

```javascript WHAT IS OBJECT ORIENTED PROGRAMMING
// Object-Oriented Programming is a programming paradigm in which we think about a problem in terms of objects. In particular, it uses those objects to organize your program.
```
```javascript ADVS AND DISADVS TO OOP
// Advantages
// It lets programmers think about a problem at a higher-level of abstraction, which helps them break down and solve the problem.
// OOP helps programmers write programs that reduce the dependencies in a program, which makes maintenance easier.
// Done right, OOP makes code flexible, easy to understand, and easy to change.

// Disadvantages
// OOP programs are often much larger than the equivalent procedural program.
// OOP may lead to less efficient code; OO programs may require more memory, disk space, and computing power.
```
```javascript

```
```javascript

```
```javascript

```
```javascript

```