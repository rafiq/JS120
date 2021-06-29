// // // 1.What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.

// // let qux = { foo: 1 };
// // let baz = Object.create(qux);
// // console.log(baz.foo + qux.foo);

// // // 2
// // // Naturally, qux.foo returns 1 since qux has a foo property with that value. However, baz doesn't have its "own" copy of the foo property. Thus, JavaScript searches the prototype chain for a foo property and finds the property in qux. Thus, baz.foo is also 1, and the sum of the two values is 2.

// // // 2.What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.

// // let qux = { foo: 1 };
// // let baz = Object.create(qux);
// // baz.foo = 2;

// // console.log(baz.foo + qux.foo);

// // // Answer: 3 because baz.foo is reassigned to 2 and then added to 1.  This code is very similar to that in problem 1. However, this time, we assign baz.foo to a value of 2. Property assignment doesn't use the prototype chain; instead, it creates a new property in the baz object named foo.

// // // When we add baz.foo and qux.foo together, baz.foo returns the value of its "own" foo property, while qux.foo returns the value of its "own" foo property. Thus, the result is 3.


// // // 3. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.

// // let qux = { foo: 1 };
// // let baz = Object.create(qux);
// // qux.foo = 2;

// // console.log(baz.foo + qux.foo);

// // // Answer: 4 because baz is pointing to the same value that qux is pointing to, thus if the value is changed, then both variables values change because they are pointing to the same value.
// // // This code is also very similar to problem 1. This time, though, we assign the value 2 to qux.foo. Since baz doesn't have its "own" copy of the foo property, JavaScript uses the prototype chain to look up baz.foo, and it finds the foo property in qux. The result is equivalent to 2 + 2, or 4.

// // // An important consideration when dealing with prototypes is that objects hold a reference to their prototype objects. If the object's prototype changes in some way, the changes are observable in the inheriting object as well.

// // // 4. As we saw in problem 2, the following code creates a new property in the baz object instead of assigning the property in the prototype object.

// // let qux = { foo: 1 };
// // let baz = Object.create(qux);
// // baz.foo = 2;

// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false
// // function assignProperty(obj,prop,val) {
// //     return obj[prop] = val;
// // }

// function assignProperty(obj, property, value) {
//     while (obj !== null) {
//       if (obj.hasOwnProperty(property)) {
//         obj[property] = value;
//         break;
//       }

//       obj = Object.getPrototypeOf(obj);
//     }
//   }

//   Consider the following two loops:

// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`);
// }

// Object.keys(foo).forEach(property => {
//   console.log(`${property}: ${foo[property]}`);
// });
// // If foo is an arbitrary object, will these loops always log the same results to the console? Explain why they do or do not. If they don't always log the same information, show an example of when the results differ.

// // Solution
// // They don't always produce the same results since the second loop only iterates over          foo's "own" properties,          but the first loop iterates over all of the object's enumerable properties, including those inside its prototype chain. For instance, assume that the following code precedes the loops:

// let bar = { a: 1, b: 2 };
// let foo = Object.create(bar);
// foo.a = 3;
// foo.c = 4;
// With this code, the first loop outputs:


// a: 3        // from foo
// c: 4        // from foo
// b: 2        // from bar
// The second loop outputs:


// a: 3        // from foo
// c: 4        // from foo
// The two loops produce the same results only when the prototype chain doesn't contain enumerable properties.

// 6.

// let foo = Object.create(null);
// if (Object.getPrototypeOf(foo)) {
//     console.log("Yes it does")
//   } else {
//     console.log("No it doesn't")
//   }
// console.log(foo)\
// globalThis


// Practice Problems: Implicit and Explicit Function Execution Contexts

// What will the following code output? Try to determine the results without running the code.

// function func() {
//   return this;
// }

// let context = func();

// console.log(context);
// Answer: The global object. In Node, that's global; in a browser, that's window.

// Since line 5 calls func as a function, the implicit context for func is the global object, so it returns the global object.


// 2. What will the following code output? Explain the difference, if any, between this output and that of problem 1.

// let obj = {
//   func: function() {
//     return this;
//   },
// };

// let context = obj.func();

// console.log(context);

// Answer: Unlike problem 1, this code outputs the object obj since it invokes func as a method.As a method invocation, it receives an implicit execution context that refers to the object used to invoke it.

// 3. What will the following code output?

// message = 'Hello from the global scope!';

// function deliverMessage() {
//   console.log(this.message);
// }

// deliverMessage();

// let foo = {
//   message: 'Hello from the function scope!',
// };

// foo.deliverMessage = deliverMessage;

// foo.deliverMessage();
// Answer: Hello from the global scope!
// Hello from the function scope!
// The first log operation is generated by the function call, deliverMessage() on line 7. Since this is a function invocation, the implicit function execution context is the global object; the global property message, which is often called a global variable, is referenced. The second log operation is generated by the method call foo.deliverMessage() on line 15. Since the implicit function execution context for a method invocation is the calling object, this resolves to foo.message.


// 4. What built-in methods have we learned about that we can use to specify a function's execution context explicitly?

// Hide Solution
// The Function methods call and apply let us explicitly set the function execution context.

// 5. Take a look at the following code snippet. Use call to invoke the add method but with foo as execution context. What will this return?

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
// Answer: bar.add.call(foo); // => 3
// Since we invoke call on bar.add with foo as the explicit context, the add method uses foo.a and foo.b to determine the results, not bar.a and bar.b. Thus, the return value is 3.

// HARD BINDING FUNCTION WITH CONTEXT

// 1. What method can we use to bind a function permanently to a particular execution context?
// ANSWER: bind

// 2. What will the following code log to the console?

// let obj = {
//   message: 'JavaScript',
// };

// function foo() {
//   console.log(this.message);
// }

// foo.bind(obj);
// Answer: Nothing. Unlike call and apply, bind doesn't invoke the function used to call it. Instead, it returns a new function that is permanently bound to the context argument.

// 3. What will the following code output?

// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(foo());
// console.log(bar());
// ANswer: NaN , 5

// 4.What will the code below log to the console?

// let positivity = {
//   message: 'JavaScript makes sense!',
// };

// let negativity = {
//   message: 'JavaScript makes no sense!',
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positivity);

// negativity.logMessage = bar;
// negativity.logMessage();
// Answer: "JS makes sense"

// 5. What will the code below output?

// let obj = {
//   a: 'Amazebulous!',
// };
// let otherObj = {
//   a: "That's not a real word!",
// };

// function foo() {
//   console.log(this.a);
// }

// let bar = foo.bind(obj);

// bar.call(otherObj);
// Answer: "amazebulous!"

// 1. The code below should output "Christopher Turk is a Surgeon". Without running the code, what will it output? If there is a difference between the actual and desired output, explain the difference.

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func, this) {
//   let returnVal = turk.func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);
// When we pass turk.getDescription to logReturnVal as an argument, we remove the method from its context. As a result, when we execute it as func, this points to the global object rather than turk. Since global doesn't have properties defined for firstName, lastName, or occupation, the output isn't what we expect.

// 2.Modify the program from the previous problem so that logReturnVal accepts an additional context argument. If you then run the program with turk as the context argument, it should produce the desired output.

// function logReturnVal(func, context) {
//     let returnVal = func.call(context);
//     console.log(returnVal);
//   }

//   logReturnVal(turk.getDescription, turk);
// By using call to invoke func and passing it the context argument, we can provide the desired context for the function. On line 16, we invoke logReturnVal with turk as the context argument, then pass that value to call; the result is our desired output.

// 3. Suppose that we want to extract getDescription from turk, but we always want it to execute with turk as its execution context. How would you modify your code to do that?

// let turk = {
//       firstName: 'Christopher',
//       lastName: 'Turk',
//       occupation: 'Surgeon',
//       getDescription() {
//           return this.firstName + ' ' + this.lastName + ' is a '
//                                       + this.occupation + '.';
//       }
//     };

// let baz = turk.getDescription.bind(turk);

// function logReturnVal(func) {
//         let returnVal = func();
//         console.log(returnVal);
//       }

//       logReturnVal(baz);

// 4. What will the following code output?
// const TESgames = {
//     titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//     seriesTitle: 'The Elder Scrolls',
//     listGames: function() {
//         let self = this;
//       self.titles.forEach(function(title) {
//         console.log(self.seriesTitle + ': ' + title);
//       });
//     }
//   };
// TESgames.listGames()
//   TESgames.listGames();
//   The Elder Scrolls: Arena
//   The Elder Scrolls: Daggerfall
//   The Elder Scrolls: Morrowind
//   The Elder Scrolls: Oblivion
//   The Elder Scrolls: Skyrim

// 6. The forEach method provides an alternative way to supply the execution context for the callback function. Modify the program from the previous problem to use that technique to produce the proper output:
// const TESgames = {
//     titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//     seriesTitle: 'The Elder Scrolls',
//     listGames: function() {
//       let self = this;
//       this.titles.forEach(function(title) {
//         console.log(self.seriesTitle + ': ' + title);
//       },this);
//     }
//   };
// TESgames.listGames();

// 7. Use an arrow function
// const TESgames = {
//     titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//     seriesTitle: 'The Elder Scrolls',
//     listGames: function() {
//       this.titles.forEach(title => {
//         console.log(this.seriesTitle + ': ' + title);
//       });
//     }
//   };
// TESgames.listGames();

// 8.
// let foo = {
//     a: 0,
//     incrementA: function() {
//       function increment() {
//         this.a += 1;
//       }
//       let baz = increment.bind(this);

//       baz();
//     }
//   };

//   foo.incrementA();
//   foo.incrementA();
//   foo.incrementA();
//   console.log(foo.a);

// let foo = {
//   bar: 42,
//   qux() {
//     console.log("Pudding");
//   },
// };

// let baz = Object.create(foo);
// baz.qux()

// let foo = { bar: 1, xyz: 3 };
// let baz = Object.create(foo);
// baz.qux = "Why not?";

// console.log(Object.keys(baz));
// for (let prop in baz) {
//   console.log(prop);
// }
// for (let prop in baz) {
//   if (baz.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

// Object.keys(baz).forEach(prop => console.log(prop));

// function sum(number1, number2) {
//   return number1 + number2;
// }
// console.log(sum(2,3))

// (function sum(number1, number2) {
//   return number1 + number2;
// });

// console.log(sum(3, 4));
// console.log(sum(3, 4));

// const sum = (number1, number2) => number1 + number2;
// console.log(sum(3, 4));

// function sum(number1, number2) {
//   return number1 + number2;
// }

// console.log(sum(3, 4));

// const sum = function(number1, number2) {
//   let total = number1 + number2;
//   return total;
// };

// const OPERATIONS = {
//   '+': (num1, num2) => num1 + num2,
//   '-': (num1, num2) => num1 - num2,
//   '*': (num1, num2) => num1 * num2,
//   '/': (num1, num2) => num1 / num2,
// };

// let getOperation = operation => OPERATIONS[operation];

// let compute = function(operation, num1, num2) {
//   return operation(num1, num2);
// };
// // console.log(compute(getOperation('+'), 5, 9) === 14);
// compute('*', 2, 8) === 16;

// function foo() {
//   return this;
// }
// let obj = {
//   foo() {
//     return this;
//   },
// };

// let foo = obj.foo;
// // foo();

// console.log(foo());

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

// console.log(obj.foo());

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

// let foo = function() {
//   console.log('go to sleep');
// }

// function go(foo) {
//   foo();
// }

// console.log(go(obj.foo));

// function makeObj() {
//   let obj = {
//     obj.propA = 10,
//     obj.propB = 20,
//   }
//   return { `${this.propA} ${this.propB}`;
//   }

  // let obj = {};
  // obj.propA = 10;
  // obj.propB = 20;
  // return obj;
// }
// console.log(makeObj())

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

// function createInvoice(services) {
//   return {
//     phone: 3000,
//     internet:5500,
//     total() {
//       return this.phone + this.internet;
//     }
//   }
// }

// function createInvoice(services = {}, payments = {}) {
//   let phoneCharge = services.phone || 3000;
//   let internetCharge = services.internet || 5500;

//   phoneCharge = (services.phone === 0) ? 0 : phoneCharge;
//   internetCharge = (services.internet === 0) ? 0 : internetCharge;

//   return {
//     phone: phoneCharge,
//     internet: internetCharge,
//     payments = [],

//     total: function() {
//       return this.phone + this.internet;
//     },
//     addPayment: function(payment) {
//       return this.payments.push(payment)
//     }
//   };
// }
// Above was my failed attempt at trying to answer this problem, but I definitely see that there was not enough scafolding in order to complete this problem successfully. There has to be a few steps in between to get students to understand what is going on in the below code. Furthermore, it seems much more convuluted than procedural code.
// function createInvoice(services = {}) {
//   let phoneCharge = services.phone || 3000;
//   let internetCharge = services.internet || 5500;
//   phoneCharge = (services.phone === 0) ? 0 : phoneCharge;
//   internetCharge = (services.internet === 0) ? 0 : internetCharge;
//   return {
//     phone: phoneCharge,
//     internet: internetCharge,
//     payments: [],

//     total: function() {
//       return this.phone + this.internet;
//     },

//     addPayment: function(payment) {
//       this.payments.push(payment);
//     },

//     addPayments: function(payments) {
//       payments.forEach(this.addPayment, this);
//     },

//     paymentTotal: function() {
//       return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
//     },

//     amountDue: function() {
//       return this.total() - this.paymentTotal();
//     },
//   };
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

// // console.log(invoiceTotal(invoices)); // 31000

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

// invoice.addPayment(payment1);
// invoice.addPayments([payment2, payment3]);
// invoice.amountDue();       // this should return 0

// function createPayment(services = {}) {
//   let payment = {
//     phone: services.phone || 0,
//     internet: services.internet || 0,
//     amount: services.amount,
//   };

//   payment.total = function() {
//     return this.amount || (this.phone + this.internet);
//   };

//   return payment;
// }

// // function createPayment(services) {

// //   let result = 0;
// //   for (let i in services) {
// //     result += services[i];
// //   }
// //   return result;
// // }

// // I couldn't understand why they had a payment.total() method attached to this reduce method, but after looking at the answer, I think they didn't explain well enough that people would sometimes pay for one of the services or just an amount. Since they do that, I could not just iterate over all the values and add them up, or could I? I think I could because there is nothing here specifiying that they would need to know which type of payment came through or not. They just want to know how much was paid and the user doesn't even have to specify which bill they are paying. So I think my funcion works just fine, but may need to be like the solution in order to really get the right effect.
// function paymentTotal(payments) {
//   return payments.reduce((sum, payment)  => sum + payment, 0);
// }

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

// // console.log(paymentTotal(payments));      // => 24000

// // console.log(payments)

// What happens if you run the following code? Why?

// Copy Code
// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//     return "5 is alive"
//   };
// }

// let lizzy = new Lizard();
// console.log(lizzy.scamper()); // ?

// This code throws a TypeError since scamper is an undefined property on lizzy. Since Lizard was invoked without the new operator and it doesn't have an explicit return value, the return value is undefined. Thus, lizzy gets assigned to undefined which causes the call to scamper to throw an error: you can't call a method on undefined.

// Practice Problems - Constructors and Prototypes

// 1. What does the following code log to the console? Try to answer without running the code. Can you explain why the code produces the output it does?

// Copy Code
// let RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);

// // console.log(rect1.prototype);
// // console.log(RECTANGLE.area.prototype)
// console.log(rect1.area);
// console.log(rect1.perimeter);

// 2. write a constructor function which takes radius as an argument and return circles area.

// function Circle(radius) {
//   radius,
//   // area = 0,

//   this.area = function() {
//     this.area = Math.pow((3.14 * radius),2)
//   }

// }

// const Circle = function(radius) {
//   this.radius = radius;
// };

// Circle.prototype.area = function() {
//   return Math.PI * this.radius * this.radius;
// };

// let a = new Circle(3);
// let b = new Circle(4);

// a.area().toFixed(2); // => 28.27
// b.area().toFixed(2); // => 50.27
// a.hasOwnProperty('area'); // => false
// console.log(b)

// What will the following code log to the console and why?

// Copy Code
// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());

// What will the following code output and why? Try to answer without running the code.

// Copy Code
// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//     return this.swung;
//   }

// console.log(ninja.swingSword());

// function Ninja() {
//   this.swung = false;
// }

// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object
// Ninja.prototype.swing = function () {
//   this.swung = true;
//   return this;
// }

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`

// let ninjaA;

// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }

// // create a `ninjaB` object here; don't change anything else
// let ninjaB = Object.create(ninjaA)
// ninjaB.constructor = ninjaA.constructor;
// console.log(ninjaB)
// // console.log(ninjaA.constructor === ninjaB.constructor) // => true

// function User(first, last) {
//   this.first = first;
//   this.last = last;
//   name = function() {
//     this.first + " " + this.last;
//   }
// }

// function User(first, last){
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = first + ' ' + last;
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// // let name = 'Jane Doe';
// // let user1 = new User('John', 'Doe');
// // let user2 = User('John', 'Doe');

// // console.log(name);         // => Jane Doe
// // console.log(user1.name);   // => John Doe
// // console.log(user2.name);   // => John Doe

// public static string SayHello(this string name) => $"Hello, {name}!";
// public static string SayGoodbye(this string name) => $"Goodbye, {name}. See you again soon!";

// return new Human[]{new Man(), new Woman()};
// }
// }

// public class Human { }

// public class Man : Human { }

// public class Woman : Human { }

// private readonly string[] Colors = {"white", "yellow", "purple", "red"};
// public string GetColor() { return Colors[new Random().Next(0, 4)]; }




// 1. THey can be passed as arguments or returned from functions AND USED ANYWHERE WHERE A VALUE IS EXPECTED

// class Television {
//   static manufacturer() {
//     // omitted code
//   }

//   model() {
    // method logic
//   }
// }
// The static modifier sets the manufacturer method to a specific instance of the Television class constructor.The static modifier, when used with a method declaration, marks the method as static. That is, the method is defined directly on the class, not on the objects the class creates. We use it like this:

// Copy Code
// Television.manufacturer();
// console.log(Television.manufacturer())
// The model method, on the other hand, is an instance method and must be called by an instance object:

// Copy Code
// let tv = new Television();
// tv.model();

// const Animal = function(species) {
//   this.species = species;
//   return species;
// };

// Animal.prototype.sleep = function() {
//   console.log(`The ${this.species} is sleeping`);
// };

// let lion = new Animal('Panthera leo');
// console.log(lion.sleep()) // TypeError

function convertCase(char) {
  return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase() ;
}
let str = "Naveed";

console.log([1,2.3].map.call(str,convertCase))