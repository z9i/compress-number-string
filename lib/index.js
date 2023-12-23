;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.compressNumberString = factory());
}(this, function () {

  /**
   * Compress a number string
   *
   * @param {string} text
   * @returns {string}
   */
  function compress(text) {
    const max = Number.MAX_SAFE_INTEGER.toString().length - 1;
    if (typeof text === 'string' && text.length > max && /^[1-9]\d*$/.test(text)) {
      const segs = text.split('');
      const list = [];

      while (segs.length > 0) {
        const last = segs.splice(-max);
        if (Number(last.join('')) === 0) {
          list.unshift('~');
        } else {
          while (last[0] === '0') {
            last.shift();
            segs.push('0');
          }
          list.unshift(last.join(''));
        }
      }

      const result = list.map(item => {
        if (item === '~') {
          return '~';
        }
        return Number(item).toString(36);
      });

      return result.join('_');
    }

    return text;
  }

  /**
   * Uncompress a number string
   *
   * @param {string} text
   * @returns {string}
   */
  function uncompress(text) {
    if (typeof text === 'string' && text.indexOf('_') > -1) {
      const max = Number.MAX_SAFE_INTEGER.toString().length - 1;
      const zero = Array(max).fill('0').join('');

      return text.split('_').map(item => {
        if (item === '~') {
          return zero;
        }
        if (item === '') {
          return '';
        }
        return String(parseInt(item, 36));
      }).join('');
    }

    return text;
  }

  return {
    compress: compress,
    uncompress: uncompress
  }

}));
