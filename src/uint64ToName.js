const charMap = '.12345abcdefghijklmnopqrstuvwxyz';

exports.uint64ToName = (value) => {
  const str = [];

  let tmp = BigInt.asUintN(64, value);
  for (let i = 0; i <= 12; ++i) {
    const idx = tmp & BigInt(i === 0 ? 0x0f : 0x1f);

    str[12 - i] = charMap[Number(idx.toString())];
    tmp = tmp >> BigInt(i === 0 ? 4 : 5);
  }

  return str.join('').replace(/\.+$/g, '');
};
