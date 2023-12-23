# compress-number-string

Compress a string contains only number character.

## Usage

```js
const {
  compress,
  uncompress
} = require('@z9i/compress-number-string');

const a = compress('3213434321412431531565757877963160');
const b = uncompress(a);

console.log(a, b, a === b);
```

## Tip

- comporess: no leading zero, length should greater then 15.
- uncompress: should contain `_`.

## License

MIT.
