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
    // INSERT AT HEAD OF LIST
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
    // INSERT AT TAIL OF LIST
    DoublyLinkedList.prototype.append = function (value) {
        var node = new ListNode(value); // create node
        // attach node if no head exists
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }
        node.prev = this.tail; // setup node attachment
        this.tail = node; // attach node
        if (node)
            this.size++; // increase size of list if node exists
        console.log("appended node value:", node.value);
        return node;
    };
    // INSERT AT ITH POSITION
    DoublyLinkedList.prototype.insertAt = function (value, idx) {
        var node = new ListNode(value); // create node
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        ;
        var current = this.head;
        var count = 1;
        while (count < idx && current.next) {
            current = current.next;
            count++;
        }
        node.prev = current.prev;
        node.next = current.next;
        current.next = node;
        if (node)
            this.size++;
        console.log("inserted node value:", node.value, "index:", count);
        return node;
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
list.insertAt(node4, 2);
console.log("length:", list.getLength());
console.log("list", list);
// prepended node value: ListNode { next: null, prev: null, value: 'Hello, ' }
// appended node value: ListNode { next: null, prev: null, value: 'World' }
// appended node value: ListNode { next: null, prev: null, value: '!!!!!' }
// length: 3
// list DoublyLinkedList {
//   head: <ref *1> ListNode {
//     next: [Circular *1],
//     prev: null,
//     value: ListNode { next: null, prev: null, value: 'Hello' }
//   },
//   tail: ListNode {
//     next: null,
//     prev: ListNode { next: null, prev: [ListNode], value: [ListNode] },
//     value: ListNode { next: null, prev: null, value: '!!!!!' }
//   },
//   size: 3
// }
