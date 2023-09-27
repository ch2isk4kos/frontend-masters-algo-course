"use strict";
/**
 * List Node Class
 * Represents a node used in a doubly linked list.
 *
 * @template T is the type of a node's value.
 * @property value is the data stored.
 * @property prev is a pointer to the previous node in the list.
 * @property next is a pointer to the next sequential node in the list.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
/**
 * Doubly Linked List Implementation
 *
 * A doubly linked list is a data structure which contain a head, tail and length property,
 * and consist of nodes, each of which store a value and a pointer to the next/previous node.
 *
 * @template T is the type of a node's value.
 * @property head is the beginning of the list.
 * @property tail is the end of the list.
 * @property length is the size of the list.
 */
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }
    DoublyLinkedList.prototype.isEmpty = function () {
        return !this.head;
    };
    DoublyLinkedList.prototype.getValueOf = function (index) {
        var _a;
        if (index < 0 || index >= this.length)
            return null; // return null if input is out of bounds
        var current = this.head; // set the current variable to the head of the list
        // traverse to the node of the input
        for (var i = 0; i < index; i++) {
            current = current === null || current === void 0 ? void 0 : current.next; // set the current node to the next sequential node
        }
        return (_a = current === null || current === void 0 ? void 0 : current.value) !== null && _a !== void 0 ? _a : null; // return value of current node or else null
    };
    DoublyLinkedList.prototype.push = function (value) {
        var node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.length++;
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
var list = new DoublyLinkedList();
console.log("list", list); // list DoublyLinkedList { head: undefined, tail: undefined, length: 0 }
var val1 = "Hello,";
var val2 = "World";
var val3 = "!";
var val4 = "Whole";
list.push(val1);
console.log("list", list);
