class CircularQueue {
    constructor(size) {
        this.head = null;
        this.next = null;
        this.size = size;
        this.stack = [];
    }
    enqueue(val) {
        if (this.stack.length === this.size) {
            this.stack.shift();
            return this.stack.push(val);
        } else {
            return this.stack.push(val);
        }
    }
    dequeue() {
        if (this.stack.length === 0) return null;
        else return this.stack.shift();
    }
}
// ! While my answer above worked appearently it was the more difficult answer according to LS ,b ut I thought their answer below was heads and shoulders more difficult than my answer above, though I do understand that it is the tow pointer method that keeps track of the oldest item index and the nextOpen position as the
// class CircularQueue {
//     constructor(size) {
//       this.buffer = new Array(size).fill(null);
//       this.nextPosition = 0;
//       this.oldestPosition = 0;
//     }

//     enqueue(object) {
//       if (this.buffer[this.nextPosition] !== null) {
//         this.oldestPosition = this.increment(this.nextPosition);
//       }
//       this.buffer[this.nextPosition] = object;
//       this.nextPosition = this.increment(this.nextPosition);
//     }

//     dequeue() {
//       let value = this.buffer[this.oldestPosition];
//       this.buffer[this.oldestPosition] = null;
//       if (value !== null) {
//         this.oldestPosition = this.increment(this.oldestPosition);
//       }
//       return value;
//     }

//     increment(position) {
//       return (position + 1) % this.buffer.length;
//     }
//   }
let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);