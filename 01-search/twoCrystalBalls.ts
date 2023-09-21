/**
 * Given two cystal balls that will break if dropped from high enough
 * distance, determine the exact spot in which it will break in the most
 * optimized way.
 *
 * Binary Search: O(N)
 * 
 * @param breaks 
 * @returns number 
 */

export default function twoCrystalBalls(breaks: boolean[]): number {
  const amtOfSpacesToJump = Math.floor(Math.sqrt(breaks.length));
  let i = amtOfSpacesToJump;

  // walk the arrays space until you find the index of a break
  for (; i < breaks.length; i += amtOfSpacesToJump) {
    if (breaks[i]) break;
  }

  // jump back sqrt of N
  i -= amtOfSpacesToJump;
  
  // walk forward sqrt of N
  for (let j = 0; j < amtOfSpacesToJump && i < breaks.length; ++j, ++i) {
    if (breaks[i]) return i; 
  }
  
  return -1;
}

const breaks = [false, false, false, false, false, false, false, false, false, false, true, true, true, true, true];
const result = twoCrystalBalls(breaks);
console.log(result); // 10
