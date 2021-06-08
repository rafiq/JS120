// Lesson 4: Subclassing and Code Reuse Patterns
// THE BELOW IS THE INTRO AFTER THE SECTION ON OOP ENCAPSULATION WHICH SAYS WE SHOULD BE COMFORTABLE WITH THE CONCEPTS AND "USING" PROTOTYPES HOWEVER, WE HAVE ONLY BEEN GIVEN A HANDFUL OF CONTRIVED PROBLEMS IN WHICH TO PRACTICE AND TEST THIS KNOWLEDGE. ALL WE HAVE DONE IS HAVE CRAZY COMPLEX NIT PICKY TESTS THAT DON'T REALLY ALLOW US TO USE AND TRY THE NEW CONCEPTS WHICH IS WRONG.

// WITH THE PROCEDURAL CODING WE WERE GIVEN NEW SYNTAX AND CONCEPTS AND THEN PLENTY OF PROBLEMS IN WHICH TEST THIS KNOWLEDGE AND BECOME FAMILIAR WITH "USING" IT, WHEREAS WITH THIS NEXT SECTION WE ARE LECTURED AND EXPECTED TO "USE" IT WITHOUT MUCH PRACTICE. HOW IS THAT MASTERY?

// By this point you should be comfortable with the concept of using objects to encapsulate data and behavior in order to add structure to your code, and the importance of function execution context when working with objects in this way. You should have an understanding of using prototypes to delegate property and method access. You should also be familiar with using object creation patterns in order to create multiple objects of the same type.

// Object Creation with Prototypes (OLOO)

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
// This seems like double the work to me because they are still creating the object and then setting the variables. Why not just use an factory function or constructor?

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

//  the OLOO pattern has one significant advantage over factory functions: memory efficiency. Since all objects created with the OLOO pattern inherit methods from a single prototype object, the objects that inherit from that prototype object share the same methods. Factory functions, on the other hand, create copies of all the methods for each new object. That can have a significant performance impact, especially on smaller devices with limited memory.

// However, that doesn't mean that OLOO is decidedly better than the factory pattern. An advantage of the factory pattern is that it lets us create objects with private state.


// Objects created with the OLOO have a prototype object that contains the methods associated with the created objects. Since all pets created from the prototype share a single prototype object, they all share the same methods. With the factory function, each object has a copy of all the methods. Thus, objects created by OLOO are more efficient in terms of memory use.

// Objects created with the factory function can have private state. Any state stored in the body of the factory function instead of in the returned object is private to the returned object. They can't be accessed or modified unless one of the object methods exposes the state. With OLOO, there is no way to define private state. All object state can be accessed and modified by outside code.

// Subtyping with Constructors and Prototypes

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

//   Prototypal Inheritance vs. Pseudo-Classical Inheritance
// As used in JavaScript, the term inheritance is an overloaded word. It describes two related but distinct types of inheritance: prototypal and pseudo-classical.

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


// Pratice
function Mammal(name) {
    this.name = name;
}

Mammal.prototype.breathe = function() {
    this.breathe = true;
};

let cat = new Mammal;
console.log(cat)


// Subtyping with Classes

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

// This illustrates the key difference between setting the constructor function’s prototype equal to objects created with new and setting it equal to objects created with Object.create(obj). With new we’re causing the code within the constructor function to run and creating a link with a prototype chain but with Object.create(obj) we’re simply creating the link without executing the code in the constructor function .
// Another useful benefit of the constructor property is that we can use it to create new objects. We know that it points back to a constructor function so let’s say we have an object, rex, and in this case we don’t know about Terrier. We want to create another object similar to rex. We can access rex.constructor and call new on it. This is the equivalent of calling new Terrier();
//

// JavaScript does not have classes in the traditional sense. Prototypal inheritance is used to link objects together.
// Every object in JavaScript has a __proto__ property. If a property is not found on an object it will check the object referenced by this __proto__ property.
// Object.create(obj) is used to create a new object and link it’s __proto__ property to the object passed in as an argument (obj ).
// Any properties defined anywhere on an object’s prototype chain will be available to said object.


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

// REWRITE OOP RPS

// As we've learned, we typically initialize the state of an object in its constructor and put the instance methods in the constructor's prototype. The RPSGame object's state consists of two properties: human and computer. We'll use the constructor to create and initialize these properties for each new object:

// Code Reuse with Mixins

// One problem with inheritance in JavaScript is that objects can inherit from only one object, and classes can extend only one other class. Ultimately, those two statements mean the same thing; an object can have only one prototype object. We call this single inheritance.

// This restriction can be limiting and sometimes makes modeling some problem domains challenging.

// Some programming languages allow classes to inherit from multiple classes, a functionality known as multiple inheritance. JavaScript doesn't support multiple inheritance, so a class can only inherit from one class.

// It's not delegation with prototypes; the mix-in pattern merely copies the properties of one object to another with Object.assign or some similar technique. We've already seen a mix-in at work in our first OO implementation of Rock Paper Scissors where we mixed in objects returned by createPlayer with createHuman and createComputer.

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


// downsides of all factory functions:

// Every new object receives a new copy of all of its methods, including new copies of both mix-in methods and the methods that belong more directly to the object. That can be taxing on memory resources, even more so than the memory requirements of mix-ins.

// You can't determine the type of an object created with a factory function: the instanceof operator only recognizes these objects as instances of the Object type. As far as JavaScript is concerned, a penguin and a fish and an automobile are indistinguishable. That's not as troubling as it might sound in terms of being able to solve programming problems, but it has a more significant impact on debugging.

// We suggest a balance of mix-in and classical inheritance pattern instead:

// Inheritance works well when one object type is positively a sub-type of another object. In our example, it's natural for a penguin to also be a swimming bird. These types have an "is a" relationship: a penguin is a swimming bird. Whenever two object types have an "is a" relationship, constructor or class inheritance makes sense.

// On the other hand, the ability to swim doesn't have that kind of relationship with storks. Swimming is a capability that penguins have. Similarly, flying is a capability that storks have. When you want to endow your objects with some capability, a mix-in may be the correct choice.

// We used this.constructor.name to determine the name. It works like this:

// Within goFast, this refers to the object that invoked the method. In this case, we used Car and Truck objects.
// The constructor property of an object references the class that the object belongs to, i.e., Car or Truck.
// Constructors have a name property that merely contains the name of the class as a string, and that's what we output in goFast.

// ! Polymorphism
// Polymorphism refers to the ability of objects with different types to respond in different ways to the same message (or method invocation); that is, data of different types can respond to a common interface. It's a crucial concept in OO programming that can lead to more maintainable code.

// When two or more object types have a method with the same name, we can invoke that method with any of those objects. When we don't care what type of object is calling the method, we're using polymorphism. Often, polymorphism involves inheritance from a common superclass. However, inheritance isn't necessary as we'll see in this assignment.

// For example, assume we have a method that expects an argument that has a move method. We can pass it any type of argument, provided it has a compatible move method. The object might represent a human, a cat, a jellyfish, or, conceivably, even a car or train. That is, it lets objects of different types respond to the same method invocation.

// There are two chief ways to implement polymorphism.

// Polymorphism Through Inheritance

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

// An example of inheritance-based polymorphism in action is the JavaScript toString method. The Object type provides a default implementation of toString() that other types inherit. Other types can also override the method to return a customized string representation of the object. Without customization, toString returns the string '[object Object]' when called on an object. With customization, it can return something more meaningful and useful. For instance, arrays and dates are objects that have customized toString methods:

> [1, 2, 3].toString()
'1,2,3'

> (new Date()).toString()
'Fri Jun 28 2019 20:50:13 GMT-0700 (Pacific Daylight Time)'

//! Polymorphism Through Duck Typing
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

// Note that merely having two different objects that have a method with the same name and compatible arguments doesn't mean that you have polymorphism. In theory, those methods might be used polymorphically, but that doesn't always make sense. Consider the following two classes:

class Circle {
  draw() {}
}

class Blinds {
  draw() {}
}
[new Circle(), new Blinds()].forEach(obj => obj.draw());
// However, it's unlikely that this would ever make sense in real code. Unless you're actually calling the method in a polymorphic manner, you don't have polymorphism. In practice, polymorphic methods are intentionally designed to be polymorphic; if there's no intention, you probably shouldn't use them polymorphically.

// ! Summary
// The Objects Linking to Other Objects (OLOO) pattern of object creation uses a prototype object, an initializer method, and the Object.create method to create objects with shared behavior. The initializer customizes the state for each object, and is usually named init.

// The combination of constructors and prototypes provides a way of mimicking classical inheritance with JavaScript. This lets us create sub-type objects, which can 'inherit' methods from a super-type object. This is one way of facilitating code re-use.

// There's a limitation with the inheritance pattern, which is that objects can only directly 'inherit' from one super-type object. In other words, an object can have only one prototype object. Mixins provide a way of addressing this limitation. The mix-in pattern involves creating a mix-in object containing certain methods, and using Object.assign() to mix that object into another object.

// Polymorphism refers to the ability of objects with different types to respond to the same method invocation. It can be implemented through inheritance by method overriding. It can also be implemented through duck typing; by ensuring that objects of different types use the same method name to perform different but related functions, those objects can be interacted with in a uniform way.

// Which of the following statements about the JavaScript mix-in pattern are true? Select all that apply.

// Inheritance works best when there is an "is a" relationship between two classes. The inheriting class is a type of the superclass. The mix-in pattern works best when an object has a capability that another object needs.

// Incorrect:

// A: The code in this constructor returns a Person object instead of a Child object, so child instanceof Child returns false instead of true. For similar reasons, most of the rest of the checks on the child object fail, and the last one raises a TypeError. The tests on the person object never run, but they would all pass.

// B: This code explicitly returns a new Person object. That object has a school property, but the property is undefined, so the test will fail.

// C: This code initializes the school property before it calls the Person constructor, which, for some strange reason, sets the school property to undefined. That overrides the intended value of the school property in the object returned by Child.

// Incorrect:

// A: Object.assign with a single argument merely returns a reference to that argument. Thus, this code sets the Child prototype to the same object used as the Person prototype. That causes person instanceof Child to return true since both the Child prototype is the same object as the Person prototype.

// C: Prototypal inheritance requires the Child prototype to be a reference to the Person prototype, not the Person constructor.

// D: This code almost works, but it fails to reset the constructor for the Child prototype. That causes Object.getPrototypeOf(child).constructor to return Person instead of Child

// ! TTT Game notes
// Note that we've changed the name of proposed Game class to TTTGame. We don't have to do that, but this class will be our orchestration engine: a class that controls the flow of the application or some part of the application. It's common practice to make the orchestration engine the last class in a file, and to give it a name that is likely to be unique.

// When looking at the initial example, the first thing you should notice is the invocation of genericGreeting. It's being invoked on the Cat class, not an instance of Cat. This indicates that genericGreeting is a static method.

// We define static methods on classes by using the static keyword.

// To invoke static methods, they must be called on the class itself, not an instance of the class. If we invoke a static method on an instance of the class, we'll get a TypeError:
// !
// Thus, once we have defined property startEngine in Truck class, we have overridden the property from Vehicle class.

// What if we want to override a property, but still have access to functionality from a parent class? JavaScript provides a reserved word for this: super.

// When you invoke super within constructor, like we did in this solution, it appears alone and must be used before the this keyword is used. However, super keyword can also be used to call functions on the object's parent and we will see that in the next problem.

// Knowing that all vehicles don't have beds, it makes sense for only Truck to accept a bedType argument. However, we still want to keep the year property in Vehicle. To accomplish this, we need to use super. Unlike the previous exercise, though, we only want to pass one argument - year - instead of all of them.

// To pass specific arguments with super, we need to list the arguments within parentheses, like this:

// Copy Code
aMethod(one, two, three) {
  super(one, two);
}
// In the solution, we added constructor method to Truck instead of modifying constructor in Vehicle because we didn't want Car to accept the bedType parameter.

// Mixins are more appropriate in a has-a relationship. While it is sometimes tricky to choose one or the other, a great guideline is to decide if you want some additional functionality, or if you want to extend the abilities of the class. In this case, it is pretty clear that we need the functionality of walking; we don't need to extend the abilities of class Person(extending the abilities of a class coincides with an is-a relationship, not has-a).

// ! testing object equality
// In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates to true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

