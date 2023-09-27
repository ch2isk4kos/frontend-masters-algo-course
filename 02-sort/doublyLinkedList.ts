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
    public prev: ListNode<T>,
    public next: ListNode<T>,
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

  public getValueOf(index: number): T | null {
    if (index < 0 || index >= this.length) return null; // return null if input is out of bounds

    let current: ListNode<T> | undefined = this.head; // set the current variable to the head of the list

    // traverse to the node of the input
    for (let i: number = 0; i < index; i++) {
      current = current?.next; // set the current node to the next sequential node
    }

    return current?.value ?? null; // return value of current node or else null
  } 
}