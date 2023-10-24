import brotli from './index.mjs'

// alternatively, in-browser (without any third-party libraries)
input = TextEncoder.encode('Hello🤖!')

// it takes a Uint8Array and returns a base-unicode encoded string (copy and pasteable)
const compressed = await brotli.compress(input)
console.log(compressed)

// it takes the base-unicode encoded string and returns a Uint8Array
const decompressed = await brotli.decompress(compressed)


export async function compressBrotli(input){
    let buffer = new TextEncoder().encode(input);
    const compressed = await compress(buffer);
    return compressed;
  }