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
    DoublyLinkedList.prototype.isEmpty = function () {
        return this.size <= 0;
    };
    DoublyLinkedList.prototype.prepend = function (value) {
        var node = new ListNode(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head = node;
            node.prev = node;
            node.next = this.head.next;
            // this.head.prev = null;
            this.head.next = node.next;
            // this.head = node;
            // this.head.next = this.tail;
        }
        if (node)
            this.size++;
    };
    // add to end of list
    DoublyLinkedList.prototype.append = function (value) {
        var node = new ListNode(value);
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = null;
            node.prev = this.tail;
            this.tail = node;
            this.tail.next = null;
        }
        if (node)
            this.size++;
        // if (this.isEmpty()) {
        //   let node = new ListNode(value);
        //   node.value = value;
        //   this.head = node;
        //   this.tail = node;
        //   this.size++;
        //   return;
        // } else {
        //   let node = new ListNode(value);
        //   node.next = null;
        //   node.prev = this.tail;
        //   node.value = value;
        //   this.tail = node;
        //   this.tail.next = node;
        //   this.size++;
        // }
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
var list = new DoublyLinkedList();
var val1 = "Hello";
var val2 = "World";
var node1 = new ListNode(val1);
var node2 = new ListNode(val2);
list.prepend(node1);
list.append(node2);
console.log("length:", list.getLength());
console.log("list", list);
// DoublyLinkedList {
//   head: ListNode {
//     next: null,
//     prev: null,
//     value: ListNode { next: null, prev: null, value: 'Hello' }
//   },
//   tail: <ref *1> ListNode {
//     next: [Circular *1],
//     prev: ListNode { next: null, prev: null, value: [ListNode] },
//     value: ListNode { next: null, prev: null, value: 'World' }
//   },
//   size: 2
// }
