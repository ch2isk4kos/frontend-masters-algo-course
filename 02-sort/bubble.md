# Bubble Sort

A sorted array is any x<sub>i</sub> (any ith position in the array) will be <= x<sub>i</sub> + 1</br>
To implement bubble sort, check x<sub>i</sub> against x<sub>i</sub> + 1 and only swap positions if ></br>

```txt
1ST ITERATION:

[ 1, 3, 7, 4, 2]
  _  _

[ 1, 3, 7, 4, 2]
     _  _

[ 1, 3, 7, 4, 2] => [ 1, 3, 4, 7, 2]
        _>_

[ 1, 3, 4, 7, 2] = [ 1, 3, 4, 2, 7]
           _>_
-------------------------------------
2ND ITERATION:

[ 1, 3, 4, 2, 7]
  _  _

[ 1, 3, 4, 2 | 7]
     _  _

[ 1, 3, 4, 2 | 7] = [ 1, 3, 2, 4, 7]
        _>_
-------------------------------------
3RD ITERATION:

[ 1, 3, 2, 4, 7]
  _  _

[ 1, 3, 2 | 4, 7]
     _>_

[ 1, 2, 3, 4, 7]
-------------------------------------
```

Bubble Sort has a runtime of **O(N<sup>2</sup>)**.</br>