/**
 * Compress a number string
 *
 * @param {string} text
 * @returns {string}
 */
export function compress(text: string): string {
  const max: number = Number.MAX_SAFE_INTEGER.toString().length - 1;
  if (/^[1-9]\d*$/.test(text) && text.length > max) {
    const segs: string[] = text.split('');
    const list: string[] = [];

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
export function uncompress(text: string): string {
  if (text.indexOf('_') > -1) {
    const max: number = Number.MAX_SAFE_INTEGER.toString().length - 1;
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
