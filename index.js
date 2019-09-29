const { UINT64 } = require('cuint');

/**
 * convert string to create ID in EOS smart contract
 * @param {String} chars
 * @return due to uint64 is not fit to js number, the return value is string format
 */
exports.nameToUint64 = (chars) =>
  Object.values(chars)
    .map(c => UINT64(c.charCodeAt(0)))
    .reduce((a, c) => a.clone().shiftl(5).add(a).add(c), UINT64(5381))
    .toString();

exports.uint64ToName = (s) => 'TODO';
