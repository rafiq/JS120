// Object Creation Patterns

// Objects provide a means to group related data and functions into one unit. In the context of the object, the data and functions are commonly called state and methods respectively.Encapsulation

// This grouping together of related data and functions is what’s called encapsulation and is one of the fundamental principles of object-oriented programming.

let overtime = 10;
let baseSalary = 6000;
let rate = 50;

function computeWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate)
}

// Encapsulation of the above code
let employee = {
    baseSalary: 6000,
    overtime: 10,
    rate: 50,
    computeWage: function() {
      return this.baseSalary + (this.overtime * this.rate)
    }
  }

//   Object Factories allow creation of related objects with a cookie cutter
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

// We can simplify that somewhat by returning an object literal:

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

