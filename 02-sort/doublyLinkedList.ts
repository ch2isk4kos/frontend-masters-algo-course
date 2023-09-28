/**
 * List Node
 * Represents a node used in a doubly linked list.
 * 
 * @template T is the type of a node's value.
 * @property value is the data stored.
 * @property prev is a pointer to the previous node in the list.
 * @property next is a pointer to the next sequential node in the list.
 */

export class ListNode<T> {
  constructor(
    public value: T,
    public prev?: ListNode<T>,
    public next?: ListNode<T>,
  ) {}
}

/**
 * Doubly Linked List
 * 
 * A doubly linked list is a data structure which contain a head, tail and length property,
 * and consist of nodes, each of which store a value and a pointer to the next/previous node.
 * 
 * @template T is the type of a node's value.
 * @property head is the beginning of the list.
 * @property tail is the end of the list.
 * @property length is the size of the list.
 */

export class DoublyLinkedList<T> {
  private head?: ListNode<T> = undefined;
  private tail?: ListNode<T> = undefined;
  private length: number = 0;

  /**
   * .isEmpty()
   * 
   * Checks if list is empty.
   * @returns true or false
   */
  public isEmpty(): boolean {
    return !this.head;
  }

  /**
   * .getValueOf()
   * 
   * Finds the value of a node at a specified index: O(n)
   * @param index of the node
   * @returns the value of a node at a specified index
   */

  public getValueOf(index: number): T | null {
    if (index < 0 || index >= this.length) return null; // return null if input is out of bounds

    let current: ListNode<T> | undefined = this.head; // set the current variable to the head of the list

    // traverse to the node of the input
    for (let i: number = 0; i < index; i++) {
      current = current?.next; // set the current node to the next sequential node
    }

    return current?.value ?? null; // return value of current node or else null
  }

  /**
   * .prepend()
   * 
   * Inserts a new node at the head of the list: O(1)
   * @param value of the node being inserted
   */

  public prepend(value: T): void {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    // this.head.prev = node;
    this.head.prev = undefined;
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  /**
   * .append()
   * 
   * Inserts a node at the tail of the list: O(1)
   * @param value of node being inserted
   */

  public append(value: T): void {
    const node = new ListNode(value);

    if (!this.head) this.head = node;
    else {
      this.tail!.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
    this.length++;
  }

  /**
   * .insertAt()
   * 
   * Inserts a node at the specified index
   * @param index position where the node will be inserted
   * @param value of the node inserted
   * @throws out of bounds error if input index is out of bounds
   */

  public insertAt(index: number, value: T): void {
    // edge cases
    if (index < 0 || index > this.length) throw new Error("Index out of bounds"); // return null if input is out of bounds
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);
    
    const node = new ListNode(value);
    let previous: ListNode<T> | undefined = this.head;

    for (let i: number = 0; i < index - 1; i++) {
      previous = previous?.next;
    }

    const next = previous?.next;

    previous!.next = node;
    node.prev = previous;
    node.next = next;
    next!.prev = node;
    this.length++;
  }

  /**
   * .removeAt()
   * 
   * Removes a node from a specified index
   * @param index of the node to remove
   * @returns value of the removed node
   */

  public removeAt(index: number): T | void {
    if (index < 0 || index > this.length) throw new Error("Index out of bounds"); // return null if input is out of bounds
    if (index === 0) return this.removeHead();
    if (index === this.length) return this.removeTail();
    
    let node: ListNode<T> | undefined = this.head;

    for (let i: number = 0; i < index; i++) {
      node = node?.next;
    }

    node!.prev!.next = node!.next;
    node!.next!.prev = node!.prev;
    this.length--;

    return node!.value;
  }

  /**
   * .removeHead()
   * 
   * Removes a node from the head of the list: O(1)
   * @returns the value of the removed node
   * @throws error if index is out of bounds
   */

  public removeHead(): T {
    if (!this.head) throw new Error("Index out of bounds");

    const remove = this.head;

    if (this.head === this.tail) this.tail === undefined;
    else this.head.next!.prev = undefined;

    this.head = this.head.next;
    this.length--;

    return remove.value;
  }

  /**
   * .removeTail()
   * 
   * Removes the node at the end of the list.
   * @returns the value of the removed node
   */

  public removeTail(): T {
    if (!this.head) throw new Error("Index out of bounds");

    const node = this.tail;

    if (this.head === this.tail) this.head = undefined;
    else this.tail!.prev!.next = undefined;

    this.tail = this.tail!.prev;
    this.length--;

    return node!.value;
  }

  /**
   * .reverse()
   * 
   * Reverse the order of a list.
   * @returns a list in reversed order
   */

  public reverse(): this | null {
    if (!this.head) return null;

    let current: ListNode<T> | undefined = this.head;
    let next: ListNode<T> | undefined = undefined;
    let previous: ListNode<T> | undefined = undefined;

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
  }

  /**
   * .clear()
   * 
   * Clears all nodes from a list.
   * @returns nothing
   */

  public clear(): void {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  /**
   * .toArray() 
   * 
   * Converts a linked list to an array: O(n)
   * @returns an array of a list
   */

  public toArray(): T[] {
    const arr:T[] = [];
    let current: ListNode<T> | undefined = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}

/**
 * DOUBLY LINKED LIST "TESTS"
 */

const list = new DoublyLinkedList();
console.log("list:", list); // DoublyLinkedList { head: undefined, tail: undefined, length: 0 }

const val1 = "Hello,";
const val2 = "World";
const val3 = "!";
const val4 = "Whole"

list.prepend(val1);
list.append(val2);
list.append(val3);

console.log("list:", list);
// DoublyLinkedList {
//   head: <ref *1> ListNode {
//     value: 'Hello,',
//     prev: undefined,
//     next: ListNode { value: 'World', prev: [Circular *1], next: [ListNode] }
//   },
//   tail: <ref *2> ListNode {
//     value: '!',
//     prev: ListNode { value: 'World', prev: [ListNode], next: [Circular *2] },
//     next: undefined
//   },
//   length: 3
// }

list.insertAt(1, val4);
console.log("list:", list);
// DoublyLinkedList {
//   head: <ref *1> ListNode {
//     value: 'Hello,',
//     prev: undefined,
//     next: ListNode { value: 'Whole', prev: [Circular *1], next: [ListNode] }
//   },
//   tail: <ref *2> ListNode {
//     value: '!',
//     prev: ListNode { value: 'World', prev: [ListNode], next: [Circular *2] },
//     next: undefined
//   },
//   length: 4
// }

list.removeAt(1);
console.log("list:", list);
// DoublyLinkedList {
//   head: <ref *1> ListNode {
//     value: 'Hello,',
//     prev: undefined,
//     next: ListNode { value: 'World', prev: [Circular *1], next: [ListNode] }
//   },
//   tail: <ref *2> ListNode {
//     value: '!',
//     prev: ListNode { value: 'World', prev: [ListNode], next: [Circular *2] },
//     next: undefined
//   },
//   length: 3
// }


console.log("reversed list:", list.reverse());
// DoublyLinkedList {
//   head: <ref *1> ListNode {
//     value: '!',
//     prev: undefined,
//     next: ListNode { value: 'World', prev: [Circular *1], next: [ListNode] }
//   },
//   tail: <ref *2> ListNode {
//     value: 'Hello,',
//     prev: ListNode { value: 'World', prev: [ListNode], next: [Circular *2] },
//     next: undefined
//   },
//   length: 3
// }

list.clear();
console.log("cleared list:", list); // DoublyLinkedList { head: undefined, tail: undefined, length: 0 }

list.prepend(val1);
list.append(val2);
list.append(val3);
console.log("list to array:", list.toArray()); // [ 'Hello,', 'World', '!' ]
