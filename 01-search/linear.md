# Linear Search

```txt
a[ X0 = v?, X1 = v?, ... ]
    0                 N
```

```ts
export default function linearSearch(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) return true;
  }
  return false;
}

const arr = [2, 7, 8, 11, 15, 16, 17, 23, 24, 33, 34, 77];
const result = linearSearch(arr, 24);
console.log(result); // true
```
