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

// const a = [] -> fundamentally not an array
// in the most basic fundamental unit it might be but technically isn't
```

</br>

## Array Operations

### Finding a Specific Index

Takes the width of the type.</br>
Multiplies it by the offset.</br>
Allocates it to the memory address.</br>

Constant Time: O(1)</br>

### Insertion

Go to an index of the array.</br>
Add the width of the type (usually specified in bytes).</br>
Multiply it by the offset.</br>

> a + width * offset

Insertion technically overwrites the memory space.</br>
Does NOT grow the array into more memory.</br>

You must reallocate an array in order to grow it.</br>

Constant Time: O(1)</br>

### Deletion

You don't technically delete something from contiguous memory.</br>
Deletion depends on how your program interprets the process.</br>
That's why JavaScript created the _null_ datatype.</br>

_null_ is a named way of saying there is nothing in this spot.</br>

Constant Time: O(1)</br>
