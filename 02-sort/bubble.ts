// O(N^2)

// @NOTE: not currently working
// function swap(arr: number[], i: number, j: number) {
//   const tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;
// }

export default function bubbleSort(arr: number[]): void {  
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j+1]) {
      //  swap(arr, arr[j], arr[j+1])
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  console.log(arr); // [ 1, 2, 3, 4, 7 ]
}

const arr = [ 1, 3, 7, 4, 2 ];
const result = bubbleSort(arr);
console.log(result); // undefined

