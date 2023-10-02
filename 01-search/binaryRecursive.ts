export const recursiveBinarySearch = (
  array: number[],
  target: number,
  start: number = 0,
  end: number = array.length - 1): number => {
    if (array.length === 0) return -1;
    if (target < array[start] || target > array[end]) return -1; // edge cases: out of bounds

    const mid = (start + end) >> 1;

    if (array[mid] === target) return mid;
    if (start > end) return -1;

    return target < array[mid]
      ? recursiveBinarySearch(array, target, start, mid - 1)
      : recursiveBinarySearch(array, target, mid + 1, end);
}

const arr = [2, 7, 8, 11, 15, 16, 17, 23, 24, 33, 34, 77];
const result = recursiveBinarySearch(arr, 24);
console.log(result); // 8