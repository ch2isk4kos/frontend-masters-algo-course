export default function linearSearch(arr: number[], val: number): boolean {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === val) return true;
  }
  return false;
}

const arr = [2, 7, 8, 11, 15, 16, 17, 23, 24, 33, 34, 77];
const result = linearSearch(arr, 24);
console.log(result); // true
