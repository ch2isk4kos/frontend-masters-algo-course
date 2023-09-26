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

export class DoublyLinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
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
    this.tail.next = node;
    this.tail = node;

    if (node) this.size++;
    
    console.log("appended node value:", node.value);
    return node;
  }

  // INSERT AT ITH POSITION
  public insertAt(value: any, idx: number): boolean | ListNode<any> {
    const node = new ListNode(value);

    let current = this.head;
    let previous;
    let i = 0;

    if (idx <= 0 && idx >= this.size) return false // return false if arguments are out of bounds

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    if (idx === 0 && current) {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
    
    if (idx === this.size && current) {
      node.prev = current;
      current.next = node;
      current = this.tail;
      this.tail = node;
    } 

    while (i++ < idx && current) {
      previous = current;
      current = current.next;
    }
    
    previous.next = node;
    node.next = current;

    // new
    // current.prev = node;
    node.prev = previous;
    if (node) this.size++;
    return node;
  }

  // SEARCH INDEX OF NODE
  public getIndexOf(node: ListNode<any>): number {
    let current = this.head;
    let i = -1;

    // O(n)
    while (current) {
      if (node === current.value) return ++i;
      i++;
      current = current.next;
    }

    return -1;
  }

  // public at(idx: number): any {
  //   let current = this.head;

  //   while (idx > 0 && current) {
  //     if (current === null) throw new Error(`Cannot get node at ${idx} position: index out of bounds`);
  //     console.log(current.value);
  //     current = current.next;
  //     idx--;
  //   }
  // }

  public isPresent(node: ListNode<any>): boolean {
    return this.getIndexOf(node) !== -1;
  }

  public print(): any {
    let current = this.head;
    while (current) {
      console.log("print current:", current.value);
      current = current.next;
    }
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

list.insertAt(node4, 1);

// console.log("at 1:", list.at(1));
// console.log("at 2:", list.at(2));
// console.log("at 3:", list.at(3));
// console.log("at 4:", list.at(4));
// console.log("get 1:", list.getAt(1));
// console.log("get 2:", list.getAt(2));
// console.log("get 3:", list.getAt(3));
// console.log("get 4:", list.getAt(4));

console.log("getIndexOf 1:", list.getIndexOf(node1));
console.log("getIndexOf 2:", list.getIndexOf(node2));
console.log("getIndexOf 3:", list.getIndexOf(node3));
console.log("getIndexOf 4:", list.getIndexOf(node4));

console.log("isPresent 4:", list.isPresent(node4));

list.print();

console.log("length:", list.getLength());

console.log("list", list);
// prepended node value: ListNode { next: null, prev: null, value: 'Hello,' }
// appended node value: ListNode { next: null, prev: null, value: 'World' }
// appended node value: ListNode { next: null, prev: null, value: '!' }
// getIndexOf 1: 0
// getIndexOf 2: 2
// getIndexOf 3: 3
// getIndexOf 4: 1
// isPresent 4: true
// print current: ListNode { next: null, prev: null, value: 'Hello,' }
// print current: ListNode { next: null, prev: null, value: 'Whole' }
// print current: ListNode { next: null, prev: null, value: 'World' }
// print current: ListNode { next: null, prev: null, value: '!' }
// length: 4
// list DoublyLinkedList {
//   head: <ref *1> ListNode {
//     next: ListNode {
//       next: [ListNode],
//       prev: [Circular *1],
//       value: [ListNode]
//     },
//     prev: null,
//     value: ListNode { next: null, prev: null, value: 'Hello,' }
//   },
//   tail: <ref *2> ListNode {
//     next: null,
//     prev: ListNode {
//       next: [Circular *2],
//       prev: [ListNode],
//       value: [ListNode]
//     },
//     value: ListNode { next: null, prev: null, value: '!' }
//   },
//   size: 4
// }