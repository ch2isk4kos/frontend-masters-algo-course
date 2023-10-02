"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveBinarySearch = void 0;
var recursiveBinarySearch = function (array, target, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = array.length - 1; }
    if (array.length === 0)
        return -1;
    if (target < array[start] || target > array[end])
        return -1; // edge cases: out of bounds
    var mid = (start + end) >> 1;
    if (array[mid] === target)
        return mid;
    if (start > end)
        return -1;
    return target < array[mid]
        ? (0, exports.recursiveBinarySearch)(array, target, start, mid - 1)
        : (0, exports.recursiveBinarySearch)(array, target, mid + 1, end);
};
exports.recursiveBinarySearch = recursiveBinarySearch;
var arr = [2, 7, 8, 11, 15, 16, 17, 23, 24, 33, 34, 77];
var result = (0, exports.recursiveBinarySearch)(arr, 24);
console.log(result); // 8
