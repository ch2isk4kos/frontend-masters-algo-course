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

</br>

_Insertion_ and _deletion_ operations in a linked list run fast.</br>
If you set a piece of memory on an object runs in constant time.</br>



</br>
