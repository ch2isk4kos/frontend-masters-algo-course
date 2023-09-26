"use strict";
// 
// export default class DoublyLinkedList<T> {
//     public length: number;
//     constructor() {}
//     prepend(item: T): void {}
//     insertAt(item: T, idx: number): void {}
//     append(item: T): void {}
//     remove(item: T): T | undefined {}
//     get(idx: number): T | undefined {}
//     removeAt(idx: number): T | undefined {}
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    DoublyLinkedList.prototype.getLength = function () {
        return this.size;
    };
    // ADD TO HEAD OF LIST
    DoublyLinkedList.prototype.prepend = function (value) {
        var node = new ListNode(value); // create node
        // attach node if no head exists
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        node.next = this.head; // setup node attachment
        this.head = node; // attach node
        if (node)
            this.size++; // increase size of list if node exists
        console.log("prepended node value:", node.value);
        return node;
    };
    // ADD TO TAIL OF LIST
    DoublyLinkedList.prototype.append = function (value) {
        var node = new ListNode(value);
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        if (node)
            this.size++;
        console.log("appended node value:", node.value);
        return node;
    };
    // INSERT AT ITH POSITION
    DoublyLinkedList.prototype.insertAt = function (value, idx) {
        var node = new ListNode(value);
        var current = this.head;
        var previous;
        var i = 0;
        if (idx <= 0 && idx >= this.size)
            return false; // return false if arguments are out of bounds
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        if (idx === 0 && current) {
            node.next = current;
            current.prev = node;
            this.head = node;
        }
        if (idx === this.size && current) {
            node.prev = current;
            current.next = node;
            current = this.tail;
            this.tail = node;
        }
        while (i++ < idx && current) {
            previous = current;
            current = current.next;
        }
        previous.next = node;
        node.next = current;
        // new
        // current.prev = node;
        node.prev = previous;
        if (node)
            this.size++;
        return node;
    };
    // FIND NODE
    // public at(idx: number): any {
    //   let current = this.head;
    //   while (idx > 0 && current) {
    //     // if (current === null) throw new Error(`Cannot get node at ${idx} position: index out of bounds`);
    //     console.log(current.value);
    //     current = current.next;
    //     idx--;
    //   }
    // }
    // public getAt(idx: number): any {
    //   return this.at(idx).value;
    // }
    DoublyLinkedList.prototype.print = function () {
        var current = this.head;
        while (current) {
            console.log("current:", current.value);
            current = current.next;
        }
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
var list = new DoublyLinkedList();
var val1 = "Hello,";
var val2 = "World";
var val3 = "!";
var val4 = "Whole";
var node1 = new ListNode(val1);
var node2 = new ListNode(val2);
var node3 = new ListNode(val3);
var node4 = new ListNode(val4);
list.prepend(node1);
list.append(node2);
list.append(node3);
list.insertAt(node4, 1);
// console.log("at 1:", list.at(1));
// console.log("at 2:", list.at(2));
// console.log("at 3:", list.at(3));
// console.log("at 4:", list.at(4));
// console.log("get 1:", list.getAt(1));
// console.log("get 2:", list.getAt(2));
// console.log("get 3:", list.getAt(3));
// console.log("get 4:", list.getAt(4));
console.log(list.print());
list.print();
console.log("length:", list.getLength());
console.log("list", list);
// prepended node value: ListNode { next: null, prev: null, value: 'Hello,' }
// appended node value: ListNode { next: null, prev: null, value: 'World' }
// appended node value: ListNode { next: null, prev: null, value: '!' }
// inserted node value: ListNode { next: null, prev: null, value: 'Whole' } index: 2
// get: <ref *1> ListNode {
//   next: ListNode {
//     next: [Circular *1],
//     prev: [Circular *1],
//     value: ListNode { next: null, prev: null, value: 'Whole' }
//   },
//   prev: null,
//   value: ListNode { next: null, prev: null, value: 'Hello,' }
// }
// length: 4
// list DoublyLinkedList {
//   head: <ref *1> ListNode {
//     next: ListNode {
//       next: [Circular *1],
//       prev: [Circular *1],
//       value: [ListNode]
//     },
//     prev: null,
//     value: ListNode { next: null, prev: null, value: 'Hello,' }
//   },
//   tail: ListNode {
//     next: null,
//     prev: ListNode { next: null, prev: [ListNode], value: [ListNode] },
//     value: ListNode { next: null, prev: null, value: '!' }
//   },
//   size: 4
// }
