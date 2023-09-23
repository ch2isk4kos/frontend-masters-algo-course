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

export class ListNode<T> {
  public next: ListNode<T> | null = null;
  public prev: ListNode<T> | null = null;
  public value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoublyLinkedList {
  private head: ListNode<any> | null = null;
  private tail: ListNode<any> | null = null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public getLength(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }

  public prepend(value: any): void {
    const node = new ListNode(value)
    if (this.tail === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.head;
        this.head = node;
        this.head.next = node;
      }
    if (node) this.size++;
  }

  public append(value: any): void {
    if (this.isEmpty()) {
      let node = new ListNode(value);
      node.value = value;
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    } else {
      let node = new ListNode(value);
      node.next = null;
      node.prev = this.tail;
      node.value = value;
      this.tail = node;
      this.tail.next = node;
      this.size++;
    }
    console.log("list:", ListNode);
  }
}

const dll = new DoublyLinkedList();
const val1 = "Hello";
const val2 = "World";
const n1 = new ListNode(val1);
const n2 = new ListNode(val2);
console.log("prepend", dll.prepend(n1));
console.log("append", dll.append(n2));
console.log("length:", dll.getLength());

console.log("list", dll);
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