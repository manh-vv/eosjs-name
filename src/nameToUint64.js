const { UINT64 } = require('cuint');
const { char_to_symbol } = require('./char_to_symbol');

/**
 * convert string to create ID in EOS smart contract
 * @param {String} str
 * @return string to uint64 is not fit to js number, the return value is string format
 */
exports.nameToUint64 = (str) => {
  let name = UINT64(0);

  for (let i = 0; i < 12; i++) {
    // NOTE: char_to_symbol() returns char type, and without this explicit
    // expansion to uint64 type, the compilation fails at the point of usage
    // of string_to_name(), where the usage requires constant (compile time) expression.
    name.or(
      char_to_symbol(str[i])
        .and(UINT64(0x1f))
        .shiftl(64 - 5 * (i + 1)),
    );
  }

  // The for-loop encoded up to 60 high bits into uint64 'name' variable,
  // if (strlen(str) > 12) then encode str[12] into the low (remaining)
  // 4 bits of 'name'
  if (str[12]) name.or(char_to_symbol(str[12]).and(UINT64(0x0f)));

  return name.toString(10);
};
