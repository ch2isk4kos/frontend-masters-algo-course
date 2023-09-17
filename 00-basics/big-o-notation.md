# Big O Notation

A way to categorize the time or memory of an algorithm based on input.</br>
Generalizes the growth of an algorithm.

It's _not_ an exact measurement.</br>
Will _not_ determine how many CPU cycles it takes.

O of _N_ means your algorithm will grow linearily based on input.

Big O helps make decisions about which data structures and algorithms to use.</br>
As your input grows, how fast does computation/memory grow?

## Growth in respect to the input

Growth depends on:

- the size of data in use
- how much memory you're attempting to allocate
- the GC pressure

These are not _free_ trade-offs.</br>
You can't trade time for memory because it takes time to create memory.

**NOTE**</br>
Languages like _Go_ or _JavaScript_ cost more because memory can be kept around,</br>
it grows faster and causes complete haults in your program for cleanup.

## How does a program grow?

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
