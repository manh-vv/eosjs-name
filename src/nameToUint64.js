const { char_to_symbol } = require('./char_to_symbol');

/**
 * convert string to create ID in EOS smart contract
 * @param {String} s
 * @return string to uint64 is not fit to js number, the return value is string format
 */
exports.nameToUint64 = (s) => {
  let n = 0n;

  let i = 0;
  for (; i < 12 && s[i]; i++) {
    n |= BigInt(char_to_symbol(s.charCodeAt(i)) & 0x1f) << BigInt(64 - 5 * (i + 1));
  }

  if (i == 12) {
    n |= BigInt(char_to_symbol(s.charCodeAt(i)) & 0x0f);
  }

  return n.toString();
};
