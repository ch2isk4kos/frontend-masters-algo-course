"use strict";
// O(N^2)
Object.defineProperty(exports, "__esModule", { value: true });
// @NOTE: not currently working
function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; ++i) {
        for (var j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, arr[j], arr[j + 1]);
                // const tmp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = tmp;
            }
        }
    }
    console.log(arr); // [ 1, 2, 3, 4, 7 ]
}
exports.default = bubbleSort;
var arr = [1, 3, 7, 4, 2];
var result = bubbleSort(arr);
console.log(result); // undefined
