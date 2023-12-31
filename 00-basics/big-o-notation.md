# Big O Notation

A way to categorize the time or memory of an algorithm based on input.</br>
Generalizes the growth of an algorithm.

It's _not_ an exact measurement.</br>
Will _not_ determine how many CPU cycles it takes.

O of _N_ means your algorithm will grow linearily based on input.

Big O helps make decisions about which data structures and algorithms to use.</br>
As your input grows, how fast does computation/memory grow?

## Calculating Big O Notation

The growth of an algorithm is in respect to the input.

Growth depends on:

- the size of data in use
- how much memory you're attempting to allocate
- the GC pressure

These are not _free_ trade-offs.</br>
You can't trade time for memory because it takes time to create memory.

**NOTE**</br>
Languages like _Go_ or _JavaScript_ cost more because memory can be kept around,</br>
it grows faster and causes complete haults in your program for cleanup.

### How do you calculate growth?

Look for loops.</br>
Where do you loop over the input?</br>
That is an effective way to calculate Big O.

Below is an algorithm that represents an _N_ relationship.</br>
It has a time complexity of **O(_N_)**.

```ts
function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
}

const str = "Chris Kakos";
const num = sumCharCodes(str);

// strings are effectively arrays
// the for loop has to executive the length of the string
// it grows linearily
// if the string grows by 50% -> the function will slow down by 50%
// every character in the string costs a loop 
```

### Contants are dropped

Big O is meant to describe the upper bound (growth) of the algorithm.</br>
The _constant_ eventually becomes irrelevant.

Practically, constants are important.</br>
Theoretically, they are not.</br>

O(100N) is faster than O(N^2).

```ts
function sumCharCodes(n: string): number {
  let sum = 0;
  // # 1
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  // 2
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
}

const str = "Chris Kakos";
const num = sumCharCodes(str);

// O(2N) == O(N)

// Take the following:
// N = 1; O(10N) = 10; O(N^2) = 1
// N = 5; O(10N) = 50; O(N^2) = 25
// N = 100; O(10N) = 1,000; O(N^2) = 10,000 -> 10x bigger
// N = 1000; O(10N) = 10,000; O(N^2) = 1,000,000 -> 100x bigger
// N = 10,000; O(10N) = 100,000; O(N^2) = 100,000,000 -> 1000x bigger
```

O(N^2) grows disproportionately larger in comparison to whatever constant is in front of O(N).</br>

### Worst case is _usually_ how to measure

```ts
// O(N)

function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    const charCode = n.charCodeAt(i);
    if (charCode === 69) return sum;
    sum += charCode; 
  }
  return sum; 
}

const str = "Chris Kakos";
const num = sumCharCodes(str);

// Although you're returning if the instance variable === "E"
// you have to prepare to loop through the entire length of the string
```

```ts
// O(N^2)

function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j) {
      sum += charCode;
    }
  }
  return sum;
}

const str = "Chris Kakos";
const num = sumCharCodes(str);

// For every character in the string -> loop over ever character in the string
// i.e.: computing the area of a square
```

## Big O Complexity

![Big-O Complexity](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fproxy%2F1*KfZYFUT2OKfjekJlCeYvuQ.jpeg&f=1&nofb=1&ipt=5a0c16d3116050283ca7d795373c17d8b7cd03ba4c01f41e3fc40caa3e02094e&ipo=images)

</br>

### O(1)

Constant time.
No matter how large the input is, it performs the same set of operations.

### O(logn)

Grows linearily.

### O(n)

### O(nlogn)

### O(n^2)

### O(2^n)

### O(!n)

## Important Concepts

1. Growth with respect to the input
2. Constants are dropped
3. Worst case is _usually_ the way to measure
