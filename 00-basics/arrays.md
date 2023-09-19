# Arrays

An array is a _contiguous_ (connecting w/o a break) memory space.

```txt
[                     ]
  0        ...      N
```

Below is a visualization of the underlying fundamentals of an array.

```ts
// if const a = [] isn't an array, what is it?
const a = new ArrayBuffer(6);
console.log(a) // ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

const a8 = new Uint8Array(a);
a8[0] = 45;
console.log(a) // ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6 }

const a8 = new Uint8Array(a);
a8[2] = 45;
console.log(a) // ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }

const a16 = new Uint16Array(a);
a16[2] = 0x4545;
console.log(a) // ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6 }

a16[2] = 0x45;
console.log(a) // ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 00>, byteLength: 6 }
```
