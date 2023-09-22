# Linked List(s)

Each node on the chain contains a reference to the next node.</br>

A _singly_ linked list is uni-directional.</br>
A _doubly_ linked list is bi-directional.</br>

```txt
SINGLY LINKED LIST:

  Node A:
      payload: { ... }
      next: { Node B }
  Node B:
      payload: { ... }
      next: { Node C }
  Node C:
    payload: { ... }
    next: { Node D }
  Node D:
    payload: { ... }
    next: { Node E }
```

</br>

```txt
DOUBLY LINKED LIST:

  Node A:
      payload: { ... }
      prev: { }
      next: { Node B }
  Node B:
      payload: { ... }
      prev: { Node A }
      next: { Node C }
  Node C:
    payload: { ... }
    prev: { Node B }
    next: { Node D }
  Node D:
    payload: { ... }
    prev: { Node C }
    next: { Node E }
```

## Insertion and Deletion of Nodes

_Insertion_ and _deletion_ operations in a linked list run fast.</br>

Setting a piece of memory on an object will run in constant time.</br>

Both _insertion_ and _deletion_ have a runtime of **O(1)**.</br>
