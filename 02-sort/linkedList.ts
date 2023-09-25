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

  // ADD TO HEAD OF LIST
  public prepend(value: any): ListNode<any> {
    const node = new ListNode(value); // create node
    
    // attach node if no head exists
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    node.next = this.head; // setup node attachment
    this.head = node; // attach node
    if (node) this.size++; // increase size of list if node exists
    
    console.log("prepended node value:", node.value);
    return node;
  }

  // ADD TO TAIL OF LIST
  public append(value: any): ListNode<any> {
    const node = new ListNode(value);
   
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    }

    node.prev = this.tail;
    this.tail = node;
    if (node) this.size++;
    
    console.log("appended node value:", node.value);
    return node;
  }

  // INSERT AT ITH POSITION
  public insertAt(value: any, idx: number): ListNode<any> {
    const node = new ListNode(value);
   
    if (!this.head) {
      this.head = node;
      this.tail = node;
    };

    let current = this.head;
    let i = 1;
    while (i < idx && current.next) {
      current = current.next;
      i++;
    }

    node.prev = current.prev;
    node.next = current.next;
    current.next = node;
    if (node) this.size++;

    console.log("inserted node value:", node.value, "index:", i);
    return node;
  }
}

const list = new DoublyLinkedList();

const val1 = "Hello,";
const val2 = "World";
const val3 = "!";
const val4 = "Whole"

const node1 = new ListNode(val1);
const node2 = new ListNode(val2);
const node3 = new ListNode(val3);
const node4 = new ListNode(val4);

list.prepend(node1);
list.append(node2);
list.append(node3);
list.insertAt(node4, 2);

console.log("length:", list.getLength());
console.log("list", list);
// prepended node value: ListNode { next: null, prev: null, value: 'Hello,' }
// appended node value: ListNode { next: null, prev: null, value: 'World' }
// appended node value: ListNode { next: null, prev: null, value: '!' }
// inserted node value: ListNode { next: null, prev: null, value: 'Whole' } index: 2
// length: 4
// list DoublyLinkedList {
//   head: <ref *1> ListNode {
//     next: ListNode { next: [Circular *1], prev: null, value: [ListNode] },
//     prev: null,
//     value: ListNode { next: null, prev: null, value: 'Hello,' }
//   },
//   tail: ListNode {
//     next: null,
//     prev: ListNode { next: null, prev: [ListNode], value: [ListNode] },
//     value: ListNode { next: null, prev: null, value: '!' }
//   },
//   size: 4
// }