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
    public prev: ListNode<T> | null = null,
    public next: ListNode<T> | null = null,
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
  private head?: ListNode<T> | null = null;
  private tail?: ListNode<T> | null = null;
  private length: number = 0;

  public isEmpty(): boolean {
    return !this.head;
  }
}