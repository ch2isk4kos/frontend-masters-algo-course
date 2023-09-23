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
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.head;
            this.head = node;
            this.head.next = node;
        }
        if (node)
            this.size++;
    };
    DoublyLinkedList.prototype.append = function (value) {
        if (this.isEmpty()) {
            var node = new ListNode(value);
            node.value = value;
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }
        else {
            var node = new ListNode(value);
            node.next = null;
            node.prev = this.tail;
            node.value = value;
            this.tail = node;
            this.tail.next = node;
            this.size++;
        }
        console.log("list:", ListNode);
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
var dll = new DoublyLinkedList();
var val1 = "Hello";
var val2 = "World";
var n1 = new ListNode(val1);
var n2 = new ListNode(val2);
console.log("prepend", dll.prepend(n1));
console.log("append", dll.append(n2));
console.log("length:", dll.getLength());
console.log("list", dll);
// DoublyLinkedList {
//   head: <ref *1> ListNode {
//     next: [Circular *1],
//     prev: ListNode { next: null, prev: null, value: [ListNode] },
//     value: ListNode { next: null, prev: null, value: 'World' }
//   },
//   tail: ListNode {
//     next: null,
//     prev: null,
//     value: ListNode { next: null, prev: null, value: 'Hello' }
//   },
//   size: 2
// }
