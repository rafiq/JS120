// execution context and object prototypes

// It's crucial to understand how the execution context, i.e., the value of this, is determined and what it refers to in various scenarios. Understanding this is one of the most challenging aspects of JavaScript.

// A cornerstone of object-oriented JavaScript is the concept of object prototypes.

// property keys are always strings

// Objects = setting a property or accessing a property
// Dot notation is also called member access notation, while bracket notation is called computed member access notation
// member access notation requires valid variable names other allows strings utf-8
// myObject[“a-key”] = “four”

// myObject.a-key              // SyntaxError (a-key is not a valid variable name)
// myObject[“a-key”]           // “four”
// myObject["a" + "-" + "key"] // "four"

// Accessing non-existing property
// Object.keys(myObject)                       //  [ '7', 'false', '1,2,3', 'a-key' ]
// myObject[undefinedKey] = undefined

// myObject.undefinedKey                       // undefined
// myObject.missingKey                         // undefined

// To determine = in operator OR hasOwnProperty
// "false" in myObject                    // true
// "true" in myObject                     // false

// myObject.hasOwnProperty("7")           // true
// myObject.hasOwnProperty("8")           // false

//  Object.keys or Object.getOwnPropertyNames. Both return an array of the object’s properties (Object.getOwnPropertyNames returns all properties regardless if they’re enumerable or not)
// Object.keys(myObject)                    // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
// Object.getOwnPropertyNames(myObject)     // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]

// OBJECT PROTOTYPES
// An object factory serves two purposes:
//1. It returns objects that represent data of a specific type.
// 2. It reuses code.

// JavaScript objects use something called prototypal inheritance. The object that you inherit properties and methods from is called the prototype. The function Object.create creates a new object that inherits properties from an existing object. It takes an object that is called the prototype object as an argument, and returns a new object that inherits properties from the prototype object. The newly created object has access to all the properties and methods that the prototype object provides.
// let a = {
//     foo: 1,
//     bar: 2,
//   };

//   let b = Object.create(a);
//   b.foo; // => 1

// An unusual aspect of this relationship is that the inheriting object (b above) doesn't receive any properties or methods of its own. Instead, it delegates property and method access to its prototype. You can see this in the node console:
// > let a = { foo: 1, bar: 2 }
// undefined

// > let b = Object.create(a)
// undefined

// > b.foo
// 1

// > b
// {}
// Example below on how "b" does not pocess properties of its own.
// let a = {
//     foo: 1,
//     bar: 2,
//   };

//   let b = Object.create(a);

//   console.log(a.hasOwnProperty('foo')); // => true
//   console.log(b.hasOwnProperty('foo')); // => false

// hasOwnProperty method is available on all JavaScript objects.

// JavaScript objects use an internal [[Prototype]] property to keep track of their prototype. When you create an object with Object.create, the new object's [[Prototype]] property gets assigned to the prototype object.

// Note that [[Prototype]] is an internal property: you cannot access it directly in your code. However, you can access and replace its value with Object functions. For instance, Object.getPrototypeOf takes an object as an argument and returns its prototype object:
> Object.getPrototypeOf(b)
{ foo: 1, bar: 2 }
// ???????????????
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

// Object.prototype provides the default prototype.
> let a = {}
undefined

> Object.getPrototypeOf(a)
{}

// Usually, any properties or methods you define on for an object are enumerable. You can check whether a property is enumerable (can be iterated over) with the Object.prototype.propertyIsEnumerable method.
let arr = [1, 2, 3];
console.log(arr.propertyIsEnumerable('length'));                     // false
console.log(arr.propertyIsEnumerable('2'));                          // true
console.log(arr.propertyIsEnumerable('forEach'));                    // false
console.log(Array.prototype.propertyIsEnumerable('forEach'));        // false

function Foo() {
  this.bar = "qux"
}

Foo.prototype.baz = function() {};
let foo = new Foo();
console.log(foo.propertyIsEnumerable('bar'));                        // true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable('baz')); // true


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

//   When assigning a property on a JavaScript object, it always treats the property as an "own" property. That is, it assumes that the property belongs to the object named to the left of the property name. Even if the prototype chain already has a property with that name, it assigns the "own" property. Here, foo becomes an "own" property of c:let a = {
  foo: 1,
};

let b = {
  foo: 2,
};

Object.setPrototypeOf(b, a);

let c = Object.create(b);
console.log(c.foo); // => 2
c.foo = 42;
console.log(c.foo); // => 42
console.log(b.foo); // => 2
console.log(c.hasOwnProperty('foo')); // => true