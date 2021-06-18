// Is it ok to mix constructor functions and classes?
class Cat {
    constructor(name) {
      this.name = name;
    }
    rename(newName) {
      return this.name = newName;
    }
  }
  Cat.genericGreeting = function() {
    return `Hello! I'm a cat ${this.constructor.name}`
  }
  let kitty = new Cat('Sophie');
  console.log(kitty.name); // Sophie
  kitty.rename('Chloe');
  console.log(Cat.genericGreeting()); // Chloe


//   ! Can I use a construtor function to inherit the properties of another constructor function? inheirting with constructor functions or how do you super?
function Rectangle(width,length) {
    this.width = width;
    this.length = length;
  }

  Rectangle.prototype.getWidth = function() {
    return  this.width;
  }

  Rectangle.prototype.getLength = function() {
    return this.length;
  }

  Rectangle.prototype.getArea = function() {
    return this.length * this.width
  }

  function Square(width) {
    this.width = width;
    // this.length = width;
    // Rectangle.call(this.width,width)
    // Rectangle.call(this.length, width);
  }
Square.prototype.getArea = function(width) {
    Rectangle.prototype.getArea.call(this,width,width)
}
  Square.prototype = Object.create(Rectangle.prototype)
  Square.prototype.constructor = Square;

  let rect = new Rectangle(4, 5);
  let square = new Square(5);
  console.log(`area of square = ${square.getArea()}`); // area of square = 25
  console.log(rect.getWidth()); // 4
  console.log(rect.getLength()); // 5
  console.log(rect.getArea()); // 20
