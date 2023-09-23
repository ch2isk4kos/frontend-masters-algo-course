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

class ListNode<T> {
  public value: any;
  public next: ListNode<T>;
  public prev: ListNode<T>;
}

export class DoublyLinkedList {
  constructor( value: any = null) {
    // 
  }
}