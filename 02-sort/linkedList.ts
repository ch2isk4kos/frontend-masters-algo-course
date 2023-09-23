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
  public value: any;
  public next: ListNode<T> | null = null;
  public prev: ListNode<T> | null = null;
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
}