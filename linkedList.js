class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        if (this.head === null) {
            this.head = new Node(val)
            return;
        }

        let curr = this.head;
        if (curr.next !== null) {
            this.append(curr.next)
        }
        // while (curr.next !== null) {
        //     curr = curr.next;
        // }
        curr.next= new Node(val);
    }

    print() {
        let str = "";
        let curr = this.head;
        while (curr !== null) {
            str += curr.val + " => "
            curr = curr.next;
        }
        console.log(str);
    }

    contains(target) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.val === target) return true;
            curr = curr.next;
        }
        return false;
    }
}

let list = new LinkedList();

list.append("a")
list.append("b")
list.append("c")
list.append("d")
list.append("e")
list.append(3)
list.append(9)
list.append("new Node")
// console.log(list.head)
list.print()
console.log(list.contains(3))