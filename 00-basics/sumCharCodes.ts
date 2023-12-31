function sumCharCodes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    // ["C", "h", "r", "i", "s", " ", "K", "a", "k", "o", "s" ]
    sum += str.charCodeAt(i);
  }
  return sum;
}

const str = "Chris Kakos";
const num = sumCharCodes(str);
console.log(num); // 1042

// O(N)