// Some Additional Examples:
// ! Write a prototype chain

// class Animal {}
// class Mammal extends Animal {}
// class Dog extends Mammal {}

// let butch = new Dog();
function printPrototypeChain(obj) {
    let result = [];
    while (obj) {
        obj = Object.getPrototypeOf(obj)
        if (obj) result.push(obj.constructor.name);
        else result.push("the end")
    }
    return result.join(", ")
}
// console.log(printPrototypeChain(butch))
// ! See if an object contains a property as one of its own -> create your own hasOwnProperty
// const cat1 = {
//     eat() {},
//     sleep() {},
//     talk() {}
// };

// class Cat {
//     eat() {}
//     sleep() {}
//     talk() {}
// }

// const cat2 = new Cat()

// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       return 'hello, ' + this.firstName + ' ' + this.lastName
//     },
//   };

  function isAPropOf(obj,needle) {

    return obj[needle] ? true: false;
  }
//   console.log(isAPropOf(john,"firstName"),isAPropOf(john,"speak"))
// console.log(isAPropOf(cat2,"eat"))
// ! Return all the property names of an object -> create your own Object.getOwnPropertyNames
// class Animal {
//     constructor() {
//         this.species = "Animous";
//     }
// }
// class Mammal extends Animal {
//     constructor() {
//         super()
//         this.birth = "live birth"
//     }
// }

// class Dog extends Mammal {
//     constructor() {
//         super()
//         this.teeth = true;
//     }
// }

// const cat1 = {
//     eat() {},
//     sleep() {},
//     talk() {}
// };

// class Cat {
//     eat() {}
//     sleep() {}
//     talk() {}
// }

// const cat2 = new Cat()
// console.log(printAllPropNames(cat2), printPrototypeChain(cat2))

// let butch = new Dog();

// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       return 'hello, ' + this.firstName + ' ' + this.lastName
//     },
//   };
// let frank = {}

function printAllPropNames(source) {
    let result = [];
    let properties = Object.keys(source)
    if (properties.length === 0) {
        properties = Object.getOwnPropertyNames(source);
    }
    // return properties.join(", ")
    for (var prop of properties) {
        // var propName = properties[prop];

        result.push(prop)
        // result.push()
    }
    return result.join(", ")
}
// console.log(printAllPropNames(butch))
// console.log(printAllPropNames(john))

// ! Copy all properties from one object to another -> create your own Object.assign
// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       return 'hello, ' + this.firstName + ' ' + this.lastName
//     },
//   };
// let frank = {}

function copyAllProptertiesFrom(source,target) {
    let properties = Object.getOwnPropertyNames(source)

    for (let prop of properties) {
        target[prop] = source[prop];
    }
    return target
}

// console.log(copyAllProptertiesFrom(john,frank),frank.greetings())
// ! Write your own instanceof function
function isInstanceOf(obj, constructorFunction) {
    while (obj) {
      obj = Object.getPrototypeOf(obj);
      if (obj === constructorFunction.prototype) return true;
    }

    return false;
  }
// ! Write an object.create function



// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     }.bind(this),
//   };
// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     function greetings() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };
//   console.log(john.greetings())

//   ? To understand context loss, try to answer the question “What are the ways that context can be lost, and how can context loss be prevented in these situations?”

// passing functions into other functions, copying functions from within objects, and nested functions in objects


// Function Prototype Methods and Context
// The JS120 “Functions and Execution Context” lesson covers the Function prototype methods of call, bind, and apply. These methods can be used to set the context of a function. Just like with Object methods, I found it helpful to reproduce their behavior with my own functions in order to fully understand how they work.

// A good way to practice is to start from scratch and try to produce a functionally identical hierarchy of objects using each different object creation pattern. This practice is most effective if the hierarchy includes features such as inheritance, mix-ins, and polymorphism in order to illustrate how to implement these aspects in the different patterns.
// Lacking any and all creativity, I usually practiced with something like creating a hierarchy of vehicles using Factory Functions, Objects Linking Other Objects, Constructor Functions, and ES6 Classes.
// ! classes
const walkMixin = {
    walk() {
        return `I am walking`
    }
}
// class Animal {
//     speak() {
//         return `I am speaking animal`
//     }
// }
// class Mammal extends Animal {}
// class Dog extends Mammal {
//     speak() {
//         return `I am speaking dog`
//     }
// }
// class Insect {}
// Object.assign(Dog.prototype,walkMixin);
// let butch = new Dog();
// let parrot = new Mammal();
// let cricket = new Insect();
// console.log(butch.walk(),butch.speak(),parrot.speak())

// constructor function

function Animal() {}

Animal.prototype.speak = function() {
    return `I am speaking like an animal`
}

function Mammal() {
}

Mammal.prototype = Object.create(Animal.prototype)
Mammal.prototype.constructor = Mammal;

function Dog() {
}

Dog.prototype = Object.create(Mammal.prototype)
Dog.prototype.constructor = Dog;

let monkey  = new Animal();
let bear = new Mammal();
let benji = new Dog();
console.log(monkey.speak(),bear.speak(),benji.speak())
// console.log(Mammal)

// function Animal() {
//     this.speak = function() {
//         return `I am speaking like an animal`
//     }
// }

// function Mammal() {
//     Object.setPrototypeOf(this,Animal.prototype)
// }

// function Dog() {}

// let monkey  = new Animal();
// let bear = new Mammal();
// console.log(monkey.speak(),bear.speak())


// ! Use an object method to create and store a collaborator object— and then be able to reference that created object (see this exercise)
// ! Unusual things about the new keyword
// ! Unusual things about arrow functions
// ? Pass a class as an argument and return a new object from a function

