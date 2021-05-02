// execution context and object prototypes

// It's crucial to understand how the execution context, i.e., the value of this, is determined and what it refers to in various scenarios. Understanding this is one of the most challenging aspects of JavaScript.

// A cornerstone of object-oriented JavaScript is the concept of object prototypes.

// property keys are always strings

// Objects = setting a property or accessing a property
// Dot notation is also called member access notation, while bracket notation is called computed member access notation
// member access notation requires valid variable names other allows strings utf-8
myObject[“a-key”] = “four”

myObject.a-key              // SyntaxError (a-key is not a valid variable name)
myObject[“a-key”]           // “four”
myObject["a" + "-" + "key"] // "four"

// Accessing non-existing property
Object.keys(myObject)                       //  [ '7', 'false', '1,2,3', 'a-key' ]
myObject[undefinedKey] = undefined

myObject.undefinedKey                       // undefined
myObject.missingKey                         // undefined

// To determine = in operator OR hasOwnProperty
"false" in myObject                    // true
"true" in myObject                     // false

myObject.hasOwnProperty("7")           // true
myObject.hasOwnProperty("8")           // false

//  Object.keys or Object.getOwnPropertyNames. Both return an array of the object’s properties (Object.getOwnPropertyNames returns all properties regardless if they’re enumerable or not)
// Object.keys(myObject)                    // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
// Object.getOwnPropertyNames(myObject)     // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]

// OBJECT PROTOTYPES
// An object factory serves two purposes:
//1. It returns objects that represent data of a specific type.
// 2. It reuses code.

// JavaScript objects use something called prototypal inheritance. The object that you inherit properties and methods from is called the prototype. The function Object.create creates a new object that inherits properties from an existing object. It takes an object that is called the prototype object as an argument, and returns a new object that inherits properties from the prototype object. The newly created object has access to all the properties and methods that the prototype object provides.
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
// Example below on how "b" does not pocess properties of its own.
let a = {
    foo: 1,
    bar: 2,
  };

  let b = Object.create(a);

  console.log(a.hasOwnProperty('foo')); // => true
  console.log(b.hasOwnProperty('foo')); // => false

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
 let a = {}
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

//   When assigning a property on a JavaScript object, it always treats the property as an "own" property. That is, it assumes that the property belongs to the object named to the left of the property name. Even if the prototype chain already has a property with that name, it assigns the "own" property. Here, foo becomes an "own" property of c:
let a = {
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

// watch up to 39 minutes
https://www.youtube.com/watch?v=-N9tBvlO9Bo&feature=youtu.be

// FUNCTION EXPRESSIONS

// This code works since the JavaScript engine runs our code in two passes. During the first pass, it does some preparatory work, while the second executes the code. One action that occurs during the first pass is called hoisting; the engine effectively moves function declarations to the top of the scope in which they're defined. The result is that the above code acts as though you wrote it like this:

// function declarations start with the word "function"
// often function expressions are anonymous
// callbacks are usually function expressions

// The main advantage of naming a function expression occurs when the function throws an error (raises an exception). If the function has a name, the stack trace uses that name to help you determine where the error occurred. Without the name, JavaScript merely reports the location as "anonymous."

let foo = function bar() {};
foo();         // This works
bar();         // This does not work
// foo is a local variable that contains a reference to the function, so we can invoke the function using foo(). However, the function name, bar, is not in scope on line 3, so bar() does not work.

ARROW FUNCTIONS
// There's no declaration syntax for arrow functions; arrow functions are always function expressions. That means that we often pass them around or assign them to variables or properties. Also, arrow functions are always anonymous: there's no way to define a named arrow function. Arrow functions are either immediately invoked, assigned to variables or properties, or passed around as arguments and return values. We'll discuss immediately invoked functions in a later course.

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

TYPE OF FUNCTION VALUE
// Since functions are first-class values in JavaScript, and all values in JavaScript have a type, functions must also have a type.
let myFunc = function() {};
typeof myFunc; // => "function"

HIGHER ORDER FUNCTIONS => //It takes a function as an argument.
//It returns a function.

FUNCTIONS THAT RETURN FUNCTIONS
// You can think of a function that returns another function as a function factory: it creates and returns a new function. Typically, the function factory uses the arguments you pass to it to determine the specific job performed by the function it returns.

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


THE GLOBAL OBJECT

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

IMPLICIT AND EXPLICIT EXECUTION ProcessingInstruction

// execution context? The execution context -- or context -- is a concept that refers to the environment in which a function executes. When we talk about the execution context of a function or method call, we're talking about the value of this when that code executes. The context depends on how the function or method was invoked, not on where the function was defined.how you call the function or method. In other words, two invocations of the same function or method can have very different contexts depending on how you make those calls

// There are two basic ways to set the context when calling a function or method:
// Explicit: The execution context that you set explicitly.
// Implicit: The execution context that JavaScript sets implicitly when your code doesn't provide an explicit context.

// Setting the execution context is also called binding this or setting the binding. A binding is something that ties two things together. In this case, it refers to the fact that a call binds this to a specific object when the function or method is called.

// IMplicit  :
function foo() {
  console.log("this refers to: " + this);
}

foo();
// this refers to: [object global]

// strict mode = this is assigned to undefined
"use strict"; // the quotes are required

function foo() {
  console.log("this refers to: " + this);
}

foo(); // this refers to: undefined

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

// There are, however, several ways to subvert this behavior. You can provide an explicit context to any function or method, and it doesn't have to be the global object or the object that contains the method. Instead, you can use any object -- or even null -- as the execution context for any function or method. There are two main ways to do that in JavaScript: call and apply.

// all JavaScript functions have is the call method

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
//
// General syntax for call isFinite
someObject.someMethod.call(context, arg1, arg2, arg3, ...)

// APPLY works in the same way ExtensionScriptApis, The only difference is that apply uses an array to pass any arguments to the function.
someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])

// However, with ES6 call can be used with the spread operator
let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);




// All JavaScript functions and methods execute within an execution context, sometimes called its this binding. How this gets bound depends entirely on how the function is invoked. You can't tell a function's execution context by merely looking at how and where it's defined; you must examine the invocation itself.

// Regular function calls use the global object as their execution context, while method calls use the calling object as their context. You can override this behavior by setting the execution context explicitly with either call or apply.

// Most difficulties arise from forgetting that JavaScript does not use lexical scoping rules to determine the binding. For instance, if you use this inside a method of obj, you expect that this refers to obj. However, that's not always the case. It's important to remember that the rules for this are entirely different from the rules for variable scope. While a variable's scope is determined by where you write the code, this depends on how you invoke it. this depends on how you invoke it.this depends on how you invoke it.this depends on how you invoke it.this depends on how you invoke it.this depends on how you invoke it.this depends on how you invoke it.this depends on how you invoke it.
// this depends on how you invoke it.

HARD BINDING FUNCTIONS WITH CONTEXTS

// JavaScript has a third way to specify the context: the bind method on function objects.
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

// A trap that students often fall into is the thinking that bind permanently alters the original function. It's important to remember that bind returns a new function, and that new function is permanently context-bound to the object provided as the first argument to bind. The original function isn't changed and doesn't have its context changed.

//  bind does not contradict our repeated statement that context is determined entirely based on how you call a function or method, not where you call it or how you define it. Technically, bind defines a new function. However, when we call that function, its implementation -- as shown above -- calls the original function using apply. Thus, it's still the "how" of the call that determines the context, not the definition or location.

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

// Dealing with Context Loss I

// Method Copied from Object
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

// bind has one significant advantage: once you bind a context to a function, that binding is permanent and does not need to be repeated if it gets called more than once. The disadvantage of bind is that it is no longer possible to determine the context by looking at the invocation of the final function.

// Dealing with Context Loss II
//  nested functions suffer from context loss.

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

// Dealing with Context Loss III

// Function as Argument Losing Surrounding Context
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

// In this example, we use the john object to call the greetings method, with john as its context. greetings, in turn, calls the repeatThreeTimes function with a function argument whose body refers to this. repeatThreeTimes calls its argument three times with an implicit context. As we've learned, the context is determined by how a function is invoked, so the context for all three invocations will be the global object. Thus, this inside the function passed to repeatThreeTimes is the global object, not john.

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined
// The problem, though, is that forEach executes the function expression passed to it, so it gets executed with the global object as context. Once again, this has the wrong value, and the function doesn't do what we want.

// Solution 1: Preserve the Context with a Variable in Outer Scope
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
// Use Bind
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
// Use an arrow function
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(number => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world

// Solution 4: Use the optional thisArg argument
// Some methods that take function arguments allow an optional argument that specifies the context to use when invoking the function. Array.prototype.forEach, for instance, has an optional thisArg argument for the context. This argument makes it easy to work around this context-loss problem.
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world

// Passing a function as an argument to another function strips it of its execution context, which means the function argument gets invoked with the context set to the global object. This problem is identical to the problem with copying a method from an object and using it as a bare function. For instance, the following two code snippets do the same thing:

array.forEach(obj.logData);

let logData = obj.logData;
array.forEach(logData);


// Summary
// Every object has an internal [[Prototype]] property that points to a special object, the object's prototype. It is used to look up properties that don't exist on the object itself.

// Object.create returns a new object with the passed-in argument as its prototype.
// You can use Object.getPrototypeOf and obj.isPrototypeOf to check for prototype relationships between objects.
// Looking up a property in the prototype chain is the basis for prototypal inheritance, or property sharing through the prototype chain. Objects lower down in the chain inherit properties and behaviors from objects in the chain above. That is, downstream objects can delegate properties or behaviors to upstream objects.

// A downstream object overrides an inherited property if it has a property with the same name. (Overriding is similar to shadowing, but it doesn't completely hide the overridden properties.)
// Object.getOwnPropertyNames and obj.hasOwnProperty can be used to test whether an object owns a given property.
// Function invocations (e.g., parseInt(numberString)) rely upon implicit execution context that resolves to the global object. Method invocations (e.g., array.forEach(processElement)) rely upon implicit context that resolves to the object that holds the method.

// All JavaScript code executes within a context. The top-level context is the window object in browsers and the global object in Node. All global methods and objects, such as parseInt and Math, are properties of window or global.

// The value of this is the current execution context of a function or method.

// The value of this changes based on how you invoke a function, not how you define it.

// JavaScript has first-class functions that have the following characteristics:

// You can add them to objects and execute them in the respective object's context.
// You can remove them from their objects, pass them around, and execute them in entirely different contexts.
// They're initially unbound but dynamically bound to a context object at execution time.
// The call and apply methods invoke a function with an explicit execution context.

// The bind method returns a new function that permanently binds a function to a context.

// Arrow functions are permanently bound to the execution context of the enclosing function invocation. When defined at the top level, the context of an arrow function is the global object.

// Function declarations always require a name for the function, so they can never be anonymous.

// All functions in JavaScript are first-class functions, but not all JavaScript functions are anonymous. Thus, this statement is false.

// All arrow functions in JavaScript are anonymous functions.

// If you run Object.getPrototypeOf({}) from Node, it displays {}; however, that's merely Node's rendering of the returned object. The object is, in fact, not empty, but has a variety of methods like hasOwnProperty and toString().
// A reference to the object returned by Object.prototype.
// A reference to the object returned by Object.getPrototypeOf({ a: 1, b: 2 }).

// A function that accepts one or more arguments that are themselves functions is a higher-order function.

// Higher-order functions are functions that can take other functions as arguments or return function values. A higher-order function must either accept one or more function arguments, return a function value, or do both.


// The global object is available everywhere in a JavaScript program, including both the top level and inside other functions and methods. If you don't provide an explicit execution context, JavaScript uses the global object as the value for this. However, you can access the global object anywhere merely by using its name (global or window).

// The global object is used as the implicit execution context when invoking a function with function call syntax. With method call syntax, JavaScript uses the calling object as the implicit execution context.

console.log(global.hasOwnProperty('global'));   // A: true
console.log(global.hasOwnProperty('foo'));      // B: true
console.log(global.hasOwnProperty('isFinite')); // C: true
console.log(global.hasOwnProperty('bar'));      // D: false
console.log(global.hasOwnProperty('xyz'));      // E: true
console.log(global.hasOwnProperty('console'));  // F: true
console.log(global.hasOwnProperty('log'));      // G: false

// Since we invoke foo with an implicit context of obj, JavaScript runs the code with the execution context set to obj. Since this refers to the current execution context while the method is running, the method returns the obj object.`

// To pass arguments to a function with call, the arguments should be specified as separate arguments.

// It binds the execution context when the function is executed using method-call syntax, e.g., foo.bar(). A function that is invoked using method-call syntax receives the calling object as its execution context.

// It binds the execution context when the function is executed using function-call syntax, e.g., bar(). A function that is invoked using function-call syntax receives the global object as its execution context.

//The execution context is determined by how a function is called, not by where it is defined or when it gets invoked.

// This code works since apply sets the context for report to cat.

// This code doesn't work for precisely the same reason that the original code doesn't work: the execution context for foo is the global object.

// This code doesn't work -- it raises a TypeError -- since sue.myAge.call(sue) invokes sue.myAge, which returns a string. That string then gets passed to logResult when we try to invoke it as a function, but it isn't a function.

// This code doesn't work -- it raises a TypeError -- since we fail to provide an explicit context for names. If we changed names to this.names, the code would work since arrow functions use their surrounding context.

// Constructors
// Object constructors, or constructors for short, are another way to create objects in JavaScript.

//  you define a constructor once then invoke it each time you want to create an object of that type.

function createCar(make,model,year) {
  return {
    make,
    model,
    year,
    started: false,

    start() {
      this.started = true;
    },

    stop() {
      this.started = false;
    },
  }
};

let corrola = createCar('Toyota', 'Corolla', 2016);
let leaf = createCar('Nissan', 'LEAF', 2018);
let nova = createCar('Chevrolet', 'Nova', 1974);

// Constructor style =
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

// RULES OF CONSTRUCTORS:
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

// JavaScript takes the following steps when you invoke a function with new:

// It creates an entirely new object.
// It sets the prototype of the new object to the object that is referenced by the constructor's prototype property. We'll discuss this in a later assignment. We mention it now for completeness.
// It sets the value of this for use inside the function to point to the new object.
// It invokes the function. Since this refers to the new object, we use it within the function to set the object's properties and methods.
// Finally, once the function finishes running, new returns the new object even though we don't explicitly return anything.

// JavaScript won't complain about a missing new keyword.
Car(); // => undefined
// Instead, it acts like an ordinary function. In particular, the value of this depends on how the function is called. Crucially, it won't get set to reference the new object.
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


// Supplying Constructor Arguments with Plain Objects

// The more parameters a function needs, the harder it is to read the code and the more likely that problems will arise.

// One common technique that we can use to manage our parameters better involves passing them to our constructor with an object argument:

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

// With Object.assign, we can simplify this constructor considerably:
function Car(args) {
  Object.assign(this, args);

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}

// one drawback of the Object.assign approach is that the args object may contain properties that the Car object doesn't need. Those additional properties will, nevertheless, get added to the Car object. Those properties may just be excess baggage for the objects to carry around, but they may also cause trouble.

// Determining an Object's Type
// Many object-oriented languages, like Java or C++, have a strong notion of object types. In most such languages, it's easy to determine the object's type, such as a dog or car. JavaScript, however, treats objects and their types in a looser, more dynamic way.

// the new operator creates a new instance of an object.

// Suppose that you call the Car constructor with new. Informally, we can say that the resulting object is a car. More formally, we can say that the object is an instance of a Car.

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

// One effect that we didn't mention when talking about the new operator is that the object it returns contains some information that ties it back to the constructor that created the object. The instanceof operator uses that information to determine what constructor created the object.

// new and Implicit Execution Context
// In an earlier lesson, we discussed how a function could receive an implicit execution context. In particular, function and method calls provide an implicit context. For a function call, the implicit context is the global object; for a method call, it's the object used to call the method.

// Now that we know about constructors, we can add a constructor call with new as a third way to provide an implicit execution context. When you call a function with new, its implicit context is the new object.

// Constructor function names are capitalized.

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?
// This code throws a TypeError since scamper is an undefined property on lizzy. Since Lizard was invoked without the new operator and it doesn't have an explicit return value, the return value is undefined. Thus, lizzy gets assigned to undefined which causes the call to scamper to throw an error: you can't call a method on undefined.

// Constructors With Prototypes

// why we need to have constructor functions along with their somewhat strange use of this and new

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  };
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

// We can verify that each object has its own bark method with hasOwnProperty:
maxi.hasOwnProperty('bark');   // true
dexter.hasOwnProperty('bark'); // true
biggie.hasOwnProperty('bark'); // true
maxi.bark === dexter.bark;     // false
maxi.bark === biggie.bark;     // false
dexter.bark === biggie.bark;   // false
// We're not repeating any code, but the runtime must create a new copy of the method every time we create an object.

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

// The Constructor prototype Property

// Constructors all have a prototype property that we call the function prototype to distinguish them from the prototypes used when creating ordinary objects.

Dog.prototype; // => Dog {}

// When you call a function Foo with the new keyword, JavaScript sets the new object's prototype to the current value of Foo's prototype property. That is, the constructor creates an object that inherits from the constructor function's prototype. Since inheritance in JavaScript uses prototypes, we can also say that the constructor creates an object with a prototype that is the same as the constructor function's prototype.

// "prototype" to refer to 2 distinct but related concepts:

// If bar is an object, then the object from which bar inherits is the object prototype. By default, constructor functions set the object prototype for the objects they create to the constructor's prototype object.

// The constructor's prototype object, also called the function prototype, is a function object that the constructor uses as the object prototype for the objects it creates. In other words, each object that the constructor creates inherits from the constructor's prototype object. The constructor stores its prototype object in its prototype property; that is, if the constructor's name is Foo, then Foo.prototype references the constructor's prototype object.

// when we talk about a prototype without being more explicit, we mean an object prototype. We'll talk about the constructor's prototype, the function prototype, or the prototype property when talking about a constructor's prototype object.

// Note that constructors don't inherit from the constructor's prototype object. Instead, the objects that the constructor creates inherit from it.

// every JavaScript function has a prototype property. However, JavaScript only uses it when you call that function as a constructor, that is, by using the new keyword.

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

Copy Code
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

// Overriding the Prototype

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


// Static and Instance Properties and Methods

// In OOP, we often refer to individual objects of a specific data type as instances of that type. For example, in the Dog example from the Constructors with Prototypes assignment, maxi and dexter are instances of the Dog type. An instance is just another term for the objects created using any means of defining multiple objects of the same kind (e.g., dogs). The term object is more general, while instance is more specific.


// So far, we've been using constructors to create instances of the Dog type. We can also think of objects created by factory functions as instances.

// We may not be able to tell whether an arbitrary object is a dog object, but all of the objects created by createDog should be dogs. They have a type -- dog -- even if there is no way to test that in your code. Thus, they are instances of a dog type.

// It's convenient to describe the properties of an instance as instance properties. These properties belong to a specific instance of some type. Thus, in our Dog example from the earlier assignment, we say that the name, breed, and weight properties are all instance properties of the various instances of the Dog type. If we want to access the weight for Maxi from the above example, we must use the maxi object:

// If we try to use the constructor, then it wont' work
Dog.weight//=> undefined

// It's convenient to describe the properties of an instance as instance properties. These properties belong to a specific instance of some type. Thus, in our Dog example from the earlier assignment, we say that the name, breed, and weight properties are all instance properties of the various instances of the Dog type. If we want to access the weight for Maxi from the above example, we must use the maxi object:

//Static Properties
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

// can also define static methods:

Copy Code
Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`);
};

Dog.showSpecies();

// Built-in Constructors

// Array constructor
> let numbers = [1, 2, 3, 4]
> numbers
[ 1, 2, 3, 4 ]

// OR
> let emptyArray = new Array()
> emptyArray
[]

// new Array() creates and returns a new array. That array is empty unless you also pass some arguments to the constructor. Each argument you provide gets added to the new array as an element:

Copy Code
> let numbers = new Array(1, 2, 3, 4)
> numbers
[ 1, 2, 3, 4 ]

> let colors = new Array('green', 'blue', 'yellow')
> colors
[ 'green', 'blue', 'yellow' ]

// The behavior is considerably different when you provide a single number argument. In this case, the constructor creates an array with a length equal to the number specified by the argument, but with no actual elements:

Copy Code
> new Array(3)
[ <3 empty items> ]
// Oh this is why I was having problems when I tried to use this constructor in some problems

// constructor does not accept non-integers or negative numbers:

Copy Code
> new Array(3.1415)
=> RangeError: Invalid array length

> new Array(-5)
=> RangeError: Invalid array length

> (new Array(3)).fill('*')
[ '*', '*', '*' ]

// Array lets you omit the new keyword:

Copy Code
> Array(1, 2, 3)
[1, 2, 3]

// All arrays inherit from the object referenced by this property:

Copy Code
> let numbers = [1, 2, 3]
> Object.getPrototypeOf(numbers) === Array.prototype //=> true

// arrays can use methods like forEach, map, includes, as well as all the other methods defined on Array.prototype:

Copy Code
> numbers.map(number => number * number);
[ 1, 4, 9 ]

> numbers.includes(3)
true

// array type also has several static methods. We'll discuss two in this section. Remember: static methods belong directly to the constructor function; they aren't part of the prototype used to create new objects. As a result, their names don't include .prototype

// he Array.isArray method takes one argument and returns true if the argument is an array object, and false if it is not:

Copy Code
> Array.isArray([])
true

> Array.isArray({})
false

> Array.isArray(5)
false

// The typeof operator returns an unexpected and somewhat useless value when used with an array:

Copy Code
> typeof []
'object'

// The Array.from method takes an array-like object as an argument and returns a new array with the equivalent element values. An array-like object is any object that has a length property.. Such objects usually have properties whose keys are non-negative integers, but that isn't a requirement. In many cases, the length property won't self-update if you add or remove properties to or from the object. In the degenerate case, all arrays are themselves array-like objects.

Copy Code
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

// the node list is an array-like object, so Array.from can create an array based on its content.

// the Object constructor creates new objects:

Copy Code
> new Object()
{}
// You can invoke Object without the new keyword, just as you can omit new with the Array constructor:

Copy Code
> Object()
{}

// All objects created by the Object constructor or with object literal syntax (e.g., { a: 1, b: 2 }, inherit from Object.prototype. Thus, all such objects have access to the instance methods defined in Object.prototype. We've already seen some of these methods in action, such as Object.prototype.hasOwnProperty and Object.prototype.isPrototypeOf.

// Since arrays are a subtype of objects, it should come as no surprise that all array objects have access to all the methods on Object.prototype.

Copy Code
> ['a', 'b', 'c'].hasOwnProperty(1)
true

// Almost all JavaScript objects, whether built-in or custom-created, inherit from Object.prototype, either directly or further down the prototype chain. That includes prototype objects of constructors. Note that we said "almost all"; as discussed in an earlier lesson, it is possible to create objects that don't inherit from Object.prototype.

// Since toString is a method on Object.prototype, all JavaScript objects -- including arrays, functions, and dates -- inherit this method. However, the default behavior of Object.prototype.toString is not very useful; it merely returns [object Object] for objects that don't override this method to provide smarter behavior:

Copy Code
> let obj = { a: 1, b: 2 }
> obj.toString()
'[object Object]'   // not very helpful!

> [1, 2, 3].toString()
'1,2,3'

> let func = function hello() {}
> func.toString()
'function hello() {}'

// Static Object Methods
// The list below shows some commonly used static Object methods. You've already seen and used several. Feel free to follow the links and read more about these methods, but you don't have to memorize them. Instead, learn what's available. You can look them up later when you need to use them:

Object.assign
Object.create
Object.entries
Object.freeze
Object.isFrozen
Object.keys
Object.values

// The Date constructor creates objects, commonly called a date object, that represent a specific date and time. Calling Date without arguments returns a date object that represents the creation date and time of the object:

Copy Code
> let now = new Date()
> now
2019-06-07T05:03:26.813Z

// to create a date object that represents "May 1, 1983", you can write:

Copy Code
> let birthday = new Date("May 1, 1983")
> birthday
1983-05-01T07:00:00.000Z

// The toString method returns a string that represents the date (it's pretty verbose):

Copy Code
> let now = new Date()
> now.toString()
'Sat Jun 01 2019 01:15:06 GMT+0500 (Pakistan Standard Time)'
Date.prototype.getFullYear

// The getFullYear method returns the year from the date as a number:

Copy Code
> now.getFullYear()
2019
Date.prototype.getDay

// The getDay method returns a number that represents the day of the week that corresponds to the date object. The return value is 0 for Sunday, 1 for Monday, and so on until it returns 6 for Saturday.

Copy Code
> now.getDay()
4 // (represents Thursday)

// Equality for objects works by identity, however. Two objects are strictly equal only when they are the same object. Consider:

Copy Code
> let arr1 = [1, 2, 3];
> let arr2 = arr1    // arr1 and arr2 both reference the same object
> arr1 === [1, 2, 3] // false
> arr1 === arr2      // true

// JavaScript has two kinds of strings: string primitives and String objects. Thus far, all the strings we've created and used have been string primitives. We create string primitives by using quotes (single or double) or back-tick characters to define a string's value. To create a String object, on the other hand, we must use the String constructor:

Copy Code
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

// ithout the new keyword does not create an object. In the case of String, it simply returns a new string, not an object, when you omit the new keyword:
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

Copy Code
> Number('123');
123

> Boolean(0);
false

> Boolean('abc');
true
// As with strings, numbers and booleans both have primitive and object forms, and JavaScript invisibly wraps primitives in objects to access methods and properties. You should also avoid creating Number and Boolean objects explicitly.

// Since all JavaScript objects derive their behavior from the prototype objects associated with their constructors, we can add new capabilities to our built-in objects by changing those prototypes. For example, we can add a first method to all arrays by adding it to Array.prototype:

// THIS SHOULD HAVE BEEN TAUGHT FIRST FOR SURE. This is much easier to understand when thinking about prototype and constructors than starting from the abstract direction. These are more tangible because one we have used them and two they are more practical than theory.
Array.prototype.first = function() {
  return this[0];
}

[1, 2, 3].first(); //=> 1

// Extending built-in objects is interesting to study, but it's best to avoid doing so. Adding a method like first to an array object can confuse other developers working on your project. It can lead to errors when other developers forget or don't realize that your array has an unexpected bonus.

// Array methods, however, are surprisingly useful with String objects. We can borrow many array methods to manipulate String objects. Consider the following code:

Copy Code
let string = 'EEE';
Array.prototype.every.call(string, char => char === 'E'); // => true

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

// ES6 classes provide a cleaner, more compact alternative to constructors and prototypes. As with functions, they are first-class citizens and come in the form of declarations and expressions. Functionally, classes behave almost identically to the constructors and prototypes they aim to replace. Classes allow for static methods by using the static modifier.

// Factory functions instantiate and return a new object in the function body. They let us create new objects based on a predefined template. However, they have two significant downsides:

// There is no way to tell whether a factory function created a given object.
// All objects created by a factory function have separate copies of the methods, which can be redundant and wasteful.
// Constructor functions are meant to be invoked with the new operator. They instantiate a new object behind the scenes and let the developer manipulate it through the this keyword. A typical constructor uses the following pattern:

// The constructor is invoked with new.
// The JS runtime creates a new object that inherits from the constructor's prototype object.
// The new object is assigned to this within the function body.
// The code in the function body is executed.
// The function returns the object referenced by this unless the function returns an explicit object.
// Every function has a prototype property that points to an object that contains a constructor property. The constructor property points back to the function itself. Thus, if Kumquat is a construction function, then Kumquat.prototype.constructor === Kumquat.

// If the function is used as a constructor, the returned object's [[Prototype]] will reference the constructor's prototype property. That lets us set properties on the constructor's prototype object so that all objects created by the constructor will share them. We call this the Pseudo-classical pattern of object creation.

// The Pseudo-Classical pattern of object creation generates objects using a constructor function that defines state, then defines shared behaviors on the constructor's prototype.

// // The class syntax, a relatively new addition to JavaScript, is syntactic sugar (cleaner syntax) for creating objects that use constructors and prototypes. JavaScript classes make it look more like a classical OO language to make the transition smoother for developers who have experience working with other OO languages.

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


// Which of the following statements about instance and static methods are true? Choose all that apply.
// Instance methods are stored either as part of an object or somewhere in the object's prototype chain.
// Static methods are methods that apply to the constructor or class itself, not a specific object created by that constructor or class.

//  An object that has properties with keys that are non-negative integers isn't sufficient to be an array-like object. The length property is required.

// A class declaration always begins with the keyword class at the beginning of a statement. All the other code snippets show class expressions, not class declarations.
let Cat = class {
  // omitted code
};
B
Copy Code
class Cat {
  // omitted code
}
C
Copy Code
console.log(
  class Cat {
    // omitted code
  }
);
D
Copy Code
function createClass() {
  return (
    class Cat {
      // omitted code
    }
  );
};

// class Foo {
  // omitted code
}

let foo = new Foo();
// Which of the following methods of the Foo class will be called when line 5 gets invoked? Constructor

// function Foo(parm) {
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

// If A is a class, what does typeof A return? Answer without running the code. FUNCTION


