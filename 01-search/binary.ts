export default function binarySearchList(haystack: number[], needle: number): boolean {
  let low = 0;
  let hi = haystack.length;
  do {
    const mid = Math.floor(low + (hi - low) / 2);
    const val = haystack[mid];
    if (val === needle) return true;
    else if (val > needle) hi = mid;
    else if (val < needle) low = mid + 1;
  } while (low < hi);
  return false
}

const arr = [2, 7, 8, 11, 15, 16, 17, 23, 24, 33, 34, 77];
const result = binarySearchList(arr, 24);
console.log(result); // true