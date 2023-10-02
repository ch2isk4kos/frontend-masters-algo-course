"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterativeBinarySearch = void 0;
var iterativeBinarySearch = function (array, target) {
    if (array.length === 0)
        return -1;
    // initialize pointers for ,start, middle and end indices
    var start = 0, end = array.length - 1, mid = (start + end) >> 1;
    if (target < array[start] || target > array[end])
        return -1; // edge cases: out of bounds
    while (array[mid] !== target && start <= end) {
        if (target < array[mid])
            end = mid - 1;
        else
            start = mid + 1;
        mid = (start + end) >> 1;
    }
    return array[mid] === target ? mid : -1; // returns index of target if it equates to target
};
exports.iterativeBinarySearch = iterativeBinarySearch;
var arr = [2, 7, 8, 11, 15, 16, 17, 23, 24, 33, 34, 77];
var result = (0, exports.iterativeBinarySearch)(arr, 24);
console.log(result); // 8
