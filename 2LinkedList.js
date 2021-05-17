class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        // let curr = this.head;

        if (this.head === null) {
            this.head = new Node(val);
            return;
        }

        this._append(val, this.head)
    }

    _append(val, curr) {
        if (curr.next === null) {
            curr.next = new Node(val);
            return;
        }

        this._append(val, curr.next)
    }

    print() {
        if (curr === null) {
            return
        }

    }
}
let list = new LinkedList();

list.append("a")
list.append("b")
list.append("c")
list.append("d")
console.log(list.head)
