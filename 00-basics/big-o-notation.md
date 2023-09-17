# Big O Notation

A way to categorize the time or memory of an algorithm based on input.
Generalizes the growth of an algorithm.

It's _not_ an exact measurement.
Will _not_ determine how many CPU cycles it takes.

O of _N_ means your algorithm will grow linearily based on input.

Big O helps make decisions about which data structures and algorithms to use.

```ts
function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```
