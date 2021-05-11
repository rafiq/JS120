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

    // append(val) {
    //     let curr = this.head;

    //     if (curr === null) {
    //         curr = new Node(val)
    //         return;
    //     }

    //     // if (curr.next !== null) {
    //     //     this.append(curr.next)
    //     // }
    //     while (curr.next !== null) {
    //         curr = curr.next;
    //     }
    //     return curr.next = new Node(val);
    // }

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

    delete(val) {
        let curr = this.head;

        while (curr.next !== null && curr.val !== val) {
            curr = curr.next
        }

        curr = curr.next.next;
    }
}

function deleteValue(head,target) {
    let curr = head;
    let prev = null;

        while (curr !== null) {
            if (curr.val === target) {
                prev.next = curr.next;
                // curr = curr.next
            }
            prev = curr;
            curr = curr.next;
            // console.log(curr.val)
        }

        // curr = curr.next.next;
}

let list = new LinkedList();

let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")
let e = new Node("e")

a.next = b;
b.next = c;
c.next = d;
d.next = e;
// list.append("a")
// list.append("b")
// list.append("c")
// list.append("d")
// list.append("e")
// list.append(3)
// list.append(9)
// list.append("new")
// console.log(list.head)
// list.print()
console.log(deleteValue(a,"c"))