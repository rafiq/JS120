







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


javascript  Object.getPrototypeOf({})

// Without running the code, what value does Object.getPrototypeOf({}) return?
// A reference to the default prototype object. The object is, in fact, not empty, but has a variety of methods like hasOwnProperty and toString().

//
let foo = function bar() {
    console.log(`I am working`)
};
foo();         // ???
bar();        // ???

let foo = function bar() {};
foo();         // This works
bar();         // This does not work
// foo is a local variable that contains a reference to the function, so we can invoke the function using foo(). However, the function name, bar, is not in scope on line 3, so bar() does not work.

function logNum(num) {
    console.log('Number: ' + num);
  }

  [1, 2, 3].forEach(logNum);

//   What is wrong with the following code and why?
  function logNum(num) {
    console.log('Number: ' + num);
  }

  [1, 2, 3].forEach(logNum());

  // keep track of all of the objects created by a constructor.
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    Dog.allDogs.push(this);
  }

  Dog.allDogs = [];
  // In this case, the static property allDogs contains an array with a reference to every dog object created while the program is running. While allDogs maintains a list of all the dogs, it isn't information that is pertinent to a specific dog -- it's information about dogs in general. Therefore, it should be a static property.

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

  // Since arrays are a subtype of objects, it should come as no surprise that all array objects have access to all the methods on Object.prototype.
> ['a', 'b', 'c'].hasOwnProperty(1)
true

// We can shorten that expression noticeably by using an empty array instead of Array.prototype as the calling object:
[].every.call(string, char => char === 'E'); // => true

Array.prototype.every = function(callback) {
  for (let index = 0; index < this.length; index++) {
    if (!callback(this[index])) return false;
  }

  return true;
};

function Animal() {
    this.type = "mammal";

      this.breathe = function() {
       console.log("I'm breathing");
    }
}

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


// Duck typing Example

function Cat (name) {
    this.name = name;
  }

  Cat.prototype.sound = function() {
    console.log('Miau')
  }

  function Dog (name) {
    this.name = name;
  }

  Dog.prototype.sound = function() {
    console.log('Woof')
  }

  function makeSound(soundMaker) {
    soundMaker.sound()
  }

  const purr = new Cat('Purr');
  const pluto = new Dog('Pluto');

  makeSound(purr)
  makeSound(pluto)

//   ?#2
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