"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === val)
            return true;
    }
    return false;
}
exports.default = linearSearch;
var arr = [2, 7, 8, 11, 15, 16, 17, 23, 24, 33, 34, 77];
var result = linearSearch(arr, 24);
console.log(result); // true
