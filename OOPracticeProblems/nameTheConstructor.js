let foo = {
    a: 0,
    incrementA: function() {
        // let self = this;
      function increment() {
        this.a += 1;
      }
// foo.incrementA.call(foo)
      increment.apply(this);
    }
  };

//   foo.incrementA.bind(foo)
  console.log(
  foo.incrementA(),
  foo.incrementA(),
  foo.incrementA(),
  foo.a
  )
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