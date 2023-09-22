// interface LinkedList<T> {
//   get length(): number;
//   insertAt(item: T, index: number): void;
//   remove(item: T): T | undefined;
//   removeAt(index: number): T | undefined;
//   append(item: T): void;
//   prepend(item: T): void;
//   get(index: number): T | undefined;
// }

export default class DoublyLinkedList<T> {
    public length: number;
    constructor() {}
    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}