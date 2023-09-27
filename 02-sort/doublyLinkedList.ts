/**
 * List Node Class
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

export class DoublyLinkedList<T> {
  private head?: ListNode<T> = undefined;
  private tail?: ListNode<T> = undefined;
  private length: number = 0;

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
   * .push()
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

    this.head.prev = node;
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
   * .pop()
   * 
   * Removes a node from the head of the list: O(1)
   * @returns the value of the removed node
   * @throws error if index is out of bounds
   */

  public pop(): T {
    if (!this.head) throw new Error("Index out of bounds");

    const remove = this.head;

    if (this.head === this.tail) this.tail === undefined;
    else this.head.next!.prev = undefined;

    this.head = this.head.next;
    this.length--;

    return remove.value;
  }
}

const list = new DoublyLinkedList();
console.log("list", list); // list DoublyLinkedList { head: undefined, tail: undefined, length: 0 }

const val1 = "Hello,";
const val2 = "World";
const val3 = "!";
const val4 = "Whole"

// list.push(val1);
// console.log("list", list);