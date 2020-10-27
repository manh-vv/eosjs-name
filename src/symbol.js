/**
 * https://github.com/EOSIO/eos/blob/0d87dff8bee56179aa01472dd00a089b2aa7b9fa/libraries/chain/include/eosio/chain/symbol.hpp#L104
 * @param value is string reprenting the value of a uint64
 */
exports.toName = (value) => {
  let v = BigInt.asUintN(64, value);

  let result = '';

  while (v > 0) {
    const c = v & BigInt(0xff);
    result += String.fromCharCode(Number(c.toString()));
    v >>= 8n;
  }

  return result;
};
