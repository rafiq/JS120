// /*
Object-Oriented Programming is a programming paradigm in which we think about a problem in terms of objects. In particular, it uses those objects to organize your program.

Advs: Easier higher level of abstraction, independent parts makes maintenance easeier, makes code flexible and easier to understand

Cons:may be less efficient code, may be longer than procedural code, may need more disk space and processing power

Encapsulation is grouping related properties and behaviors together
when the program parts are hidden and the main parts that are interacted with are left exposed which allows for other parts of the program to easily interact with the most important output input of that program without worrying about how it is implemented.

JS is does not have access restriction as in other languages
///////////////////////////////////////////////////////////////////////////////
creating objects
*/
// let raceCar = {
//     make: 'BMW',
//     fuelLevel: 0.5,
//     engineOn: false,

//     startEngine: function() {
//       raceCar.engineOn = true;
//     },

//     drive: function() {
//       raceCar.fuelLevel -= 0.1;
//     },

//     stopEngine: function() {
//       raceCar.engineOn = false;
//     },

//     refuel: function(percent) {
//       if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
//         raceCar.fuelLevel += (percent / 100);
//       } else {
//         raceCar.fuelLevel = 1;
//       }
//     },
//   };
// // When object properties have function values, we call them methods. The methods here are responsible for changing the state of the raceCar object.

// let raceCar = {
//     make: 'BMW',
//     fuelLevel: 0.5,
//     engineOn: false,

//     startEngine() {
//       raceCar.engineOn = true;
//     },

//     drive() {
//       raceCar.fuelLevel -= 0.1;
//     },

//     stopEngine() {
//       raceCar.engineOn = false;
//     },

//     refuel(percent) {
//       if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
//         raceCar.fuelLevel += (percent / 100);
//       } else {
//         raceCar.fuelLevel = 1;
//       }
//     },
//   };
// //   THIS
// let raceCar = {
//     make: 'BMW',
//     fuelLevel: 0.5,
//     engineOn: false,

//     startEngine() {
//       this.engineOn = true;
//     },

//     drive() {
//       this.fuelLevel -= 0.1;
//     },

//     stopEngine() {
//       this.engineOn = false;
//     },

//     refuel(percent) {
//       if ((this.fuelLevel + (percent / 100)) <= 1) {
//         this.fuelLevel += (percent / 100);
//       } else {
//         this.fuelLevel = 1;
//       }
//     },
//   };
// //
// let pete = {
//     heroes: ['Superman', 'Spiderman', 'Batman'],
//     cash: { ones: 12, fives: 2, tens: 0, twenties: 2, hundreds: 0 },

//     cashOnHand() {
      // This method uses this.cash to calculate the total cash value.
      // We'll skip the implementation.
//     },

//     allHeroes() {
//       return this.heroes.join(', ');
//     },
//   };
// Objects that help provide state within another object are called collaborator objects, or more simply, collaborators. Collaboration is all about objects working together in some manner. A collaborator works in conjunction -- in collaboration -- with the object to which it belongs.

//   We often talk of collaborators in the context of custom objects like pet, but collaborators don't have to be custom objects. They can be built-in objects like arrays and dates, as well. In principle, collaborators don't have to be objects at all; primitives like strings and numbers frequently collaborate with objects and combine to form the state of those objects.

// Type and Object Factories
// function createCar(make, fuelLevel, engineOn) {
//     return {
//         make: make,
//         fuelLevel: fuelLevel,
//         engineOn: engineOn,

//         startEngine() {
//             this.engineOn = true;
//         },

//         drive() {
//             this.fuelLevel -= 0.1;
//         },

//         stopEngine() {
//             this.engineOn = false;
//         },

//         refuel(percent) {
//             if ((this.fuelLevel + (percent / 100)) <= 1) {
//                 this.fuelLevel += (percent / 100);
//             } else {
//                 this.fuelLevel = 1;
//             }
//         },
//     }
// }
//     let Jaguar =createCar("Jaguar", 0.4, false);

//   let raceCar1 = createCar('BMW', 0.5, false);
//   raceCar1.drive();

//   let raceCar2 = createCar('Ferrari', 0.7, true);
//   raceCar2.drive();

// function makeBook(title,author,read = false) {
//     return {
//         author: author, //Simplified to author,
//         title: title,      // title,
//         read: read,
//         getDescription() {
//             if (read) {
//                 return `${this.title} was written by ${this.author}. I have read it.`;
//             } else {
//                 return `${this.title} was written by ${this.author}. I haven't read it.`;
//             }
            // The LS answer is very smooth
            // return `${this.title} was written by ${this.author}. ` +
            //  `I ${this.read ? 'have' : "haven't"} read it.`;
//         },
//         readBook() {
//             this.read = true;
//         }
//     }
// }
// let book1 = makeBook("Mythos","Stephen Fry",true)
// let book2 = makeBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = makeBook("Aunts aren't Gentlemen", 'PG Wodehouse',true);
// // book2.readBook()
// // console.log(book3.getDescription())
// console.log(book3.getDescription(),book2.getDescription(),book1.getDescription())
// // let book1 = {
// //     title: 'Mythos',
// //     author: 'Stephen Fry',
// //     getDescription: function() {
// //       return `${this.title} was written by ${this.author}.`;
// //     },
// //   };

// //   let book2 = {
// //     title: 'Me Talk Pretty One Day',
// //     author: 'David Sedaris',
// //     getDescription: function() {
// //       return `${this.title} was written by ${this.author}.`;
// //     },
// //   };

// //   let book3 = {
// //     title: "Aunts aren't Gentlemen",
// //     author: 'PG Wodehouse',
//     getDescription: function() {
//       return `${this.title} was written by ${this.author}.`;
//     },
//   };

// let cat = {
//     name: null,
//     age: 13,
//   };
let book = {
    title: "Snow Crash",
    author: "Neal Stephenson",
    getDescription() {
    //   return `${this.title} by ${this.author}`;
    // return title + "by" + author;
    return "${title} by ${author}";
    },
  };

  // desired return value: 'Snow Crash by Neal Stephenson'
  console.log(book.getDescription()); // => ReferenceError: title is not defined
//   console.log(book.title
    // )