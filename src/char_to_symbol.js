const { UINT64 } = require('cuint');

exports.char_to_symbol = function char_to_symbol(c) {
  if (c >= 'a' && c <= 'z') return UINT64(c.charCodeAt(0) - 'a'.charCodeAt(0) + 6);
  if (c >= '1' && c <= '5') return UINT64(c.charCodeAt(0) - '1'.charCodeAt(0) + 1);
  return UINT64(0);
};
