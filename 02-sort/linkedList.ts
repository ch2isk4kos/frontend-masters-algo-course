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

  // add to head of list
  public prepend(value: any): void {
    // 
  }

  // add to tail of list
  public append(value: any): void {
    //  
  }
}

const list = new DoublyLinkedList();

const val1 = "Hello";
const val2 = "World";

const node1 = new ListNode(val1);
const node2 = new ListNode(val2);

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