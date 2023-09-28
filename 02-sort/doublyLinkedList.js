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
    /**
     * .isEmpty()
     *
     * Checks if list is empty.
     * @returns true or false
     */
    DoublyLinkedList.prototype.isEmpty = function () {
        return !this.head;
    };
    /**
     * .getValueOf()
     *
     * Finds the value of a node at a specified index: O(n)
     * @param index of the node
     * @returns the value of a node at a specified index
     */
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
    /**
     * .prepend()
     *
     * Inserts a new node at the head of the list: O(1)
     * @param value of the node being inserted
     */
    DoublyLinkedList.prototype.prepend = function (value) {
        var node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        // this.head.prev = node;
        this.head.prev = undefined;
        node.next = this.head;
        this.head = node;
        this.length++;
    };
    /**
     * .append()
     *
     * Inserts a node at the tail of the list: O(1)
     * @param value of node being inserted
     */
    DoublyLinkedList.prototype.append = function (value) {
        var node = new ListNode(value);
        if (!this.head)
            this.head = node;
        else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        this.length++;
    };
    /**
     * .insertAt()
     *
     * Inserts a node at the specified index
     * @param index position where the node will be inserted
     * @param value of the node inserted
     * @throws out of bounds error if input index is out of bounds
     */
    DoublyLinkedList.prototype.insertAt = function (index, value) {
        // edge cases
        if (index < 0 || index > this.length)
            throw new Error("Index out of bounds"); // return null if input is out of bounds
        if (index === 0)
            return this.prepend(value);
        if (index === this.length)
            return this.append(value);
        var node = new ListNode(value);
        var previous = this.head;
        for (var i = 0; i < index - 1; i++) {
            previous = previous === null || previous === void 0 ? void 0 : previous.next;
        }
        var next = previous === null || previous === void 0 ? void 0 : previous.next;
        previous.next = node;
        node.prev = previous;
        node.next = next;
        next.prev = node;
        this.length++;
    };
    /**
     * .removeAt()
     *
     * Removes a node from a specified index
     * @param index of the node to remove
     * @returns value of the removed node
     */
    DoublyLinkedList.prototype.removeAt = function (index) {
        if (index < 0 || index > this.length)
            throw new Error("Index out of bounds"); // return null if input is out of bounds
        if (index === 0)
            return this.removeHead();
        if (index === this.length)
            return this.removeTail();
        var node = this.head;
        for (var i = 0; i < index; i++) {
            node = node === null || node === void 0 ? void 0 : node.next;
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.length--;
        return node.value;
    };
    /**
   * .removeHead()
   *
   * Removes a node from the head of the list: O(1)
   * @returns the value of the removed node
   * @throws error if index is out of bounds
   */
    DoublyLinkedList.prototype.removeHead = function () {
        if (!this.head)
            throw new Error("Index out of bounds");
        var remove = this.head;
        if (this.head === this.tail)
            this.tail === undefined;
        else
            this.head.next.prev = undefined;
        this.head = this.head.next;
        this.length--;
        return remove.value;
    };
    /**
     * .removeTail()
     *
     * Removes the node at the end of the list.
     * @returns the value of the removed node
     */
    DoublyLinkedList.prototype.removeTail = function () {
        if (!this.head)
            throw new Error("Index out of bounds");
        var node = this.tail;
        if (this.head === this.tail)
            this.head = undefined;
        else
            this.tail.prev.next = undefined;
        this.tail = this.tail.prev;
        this.length--;
        return node.value;
    };
    /**
     * .reverse()
     *
     * Reverse the order of a list.
     * @returns a list in reversed order
     */
    DoublyLinkedList.prototype.reverse = function () {
        if (!this.head)
            return null;
        var current = this.head;
        var next = undefined;
        var previous = undefined;
        while (current) {
            next = current.next;
            previous = current.prev;
            current.next = previous;
            current.prev = next;
            previous = current;
            current = next;
        }
        this.tail = this.head;
        this.head = previous;
        return this;
    };
    DoublyLinkedList.prototype.clear = function () {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
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
list.prepend(val1);
list.append(val2);
list.append(val3);
list.insertAt(1, val4);
console.log("list:", list);
list.removeAt(1);
console.log("list:", list);
console.log("reversed list:", list.reverse());
list.clear();
console.log("cleared list:", list);
