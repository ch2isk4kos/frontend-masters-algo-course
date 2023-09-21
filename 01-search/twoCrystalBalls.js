"use strict";
/**
 *
 * Given two cystal balls that will break if dropped from high enough
 * distance, determine the exact spot in which it will break in the most
 * optimized way.
 *
 * @param breaks
 * @returns number
 */
Object.defineProperty(exports, "__esModule", { value: true });
function twoCrystalBalls(breaks) {
    var amtOfSpacesToJump = Math.floor(Math.sqrt(breaks.length));
    var i = amtOfSpacesToJump;
    // walk the arrays space until you find the index of a break
    for (; i < breaks.length; i += amtOfSpacesToJump) {
        if (breaks[i])
            break;
    }
    // jump back sqrt of N
    i -= amtOfSpacesToJump;
    console.log("i:", i);
    // walk forward sqrt of N
    for (var j = 0; j < amtOfSpacesToJump && i < breaks.length; ++j, ++i) {
        if (breaks[i])
            return i;
    }
    return -1;
}
exports.default = twoCrystalBalls;
var breaks = [false, false, false, false, false, false, false, false, false, false, true, true, true, true, true];
var result = twoCrystalBalls(breaks);
console.log(result); // 10
