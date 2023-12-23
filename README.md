# compress-number-string

Compress a string contains only number character.

## Usage

```js
const {
  compress,
  uncompress
} = require('@z9i/compress-number-string');

const text = '3213434321412431531565757877963160';
const compressed = compress(text);
const uncompressed = uncompress(compressed);

console.log(text, compressed, uncompressed, text === uncompressed);
```

## Tip

- comporess: no leading zero, length should greater then 15.
- uncompress: should contain `_`.

## History

### v0.0.2

- Ignore leading or trailing `_` for uncompress.
- Ensure compress value is a string.

### v0.0.1

Base support for compress and uncompress number string.

## License

MIT.
