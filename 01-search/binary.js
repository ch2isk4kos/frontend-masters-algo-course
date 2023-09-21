"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binarySearchList(haystack, needle) {
    var low = 0;
    var hi = haystack.length;
    do {
        var mid = Math.floor(low + (hi - low) / 2);
        var val = haystack[mid];
        if (val === needle)
            return true;
        else if (val > needle)
            hi = mid;
        else if (val < needle)
            low = mid + 1;
    } while (low < hi);
    return false;
}
exports.default = binarySearchList;
var arr = [2, 7, 8, 11, 15, 16, 17, 23, 24, 33, 34, 77];
var result = binarySearchList(arr, 24);
console.log(result); // true
