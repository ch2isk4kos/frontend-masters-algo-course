# Linked List(s)

Each node on the chain contains a reference to the next node.</br>

A _singly_ linked list is uni-directional.</br>
A _doubly_ linked list is bi-directional.</br>

```txt
SINGLY LINKED LIST:

  Node A:
    id: 0
      payload: { ... }
      next: { Node B }
  Node B:
    id: 0
      payload: { ... }
      next: { Node C }
  Node C:
    id: 0
    payload: { ... }
    next: { Node D }
  Node D:
    id: 0
    payload: { ... }
    next: { Node E }
```

</br>

```txt
DOUBLY LINKED LIST:

  Node A:
    id: 0
      payload: { ... }
      prev: { }
      next: { Node B }
  Node B:
    id: 1
      payload: { ... }
      prev: { Node A }
      next: { Node C }
  Node C:
    id: 2
    payload: { ... }
    prev: { Node B }
    next: { Node D }
  Node D:
    id: 3
    payload: { ... }
    prev: { Node C }
    next: { Node E }
```

</br>

_Insertion_ and _deletion_ operations in a linked list run fast.</br>
