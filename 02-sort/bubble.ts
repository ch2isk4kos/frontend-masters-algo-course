// O(N^2)

function swap(arr, j) {
  const tmp = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = tmp;
}

export default function bubbleSort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j+1]) {
       swap(arr, arr[j])
      }
    }
  }
}

const arr = [ 1, 3, 7, 4, 2 ];
const result = bubbleSort(arr); // 