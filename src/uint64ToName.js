const { UINT64 } = require('cuint');

const charMap = '.12345abcdefghijklmnopqrstuvwxyz';

exports.uint64ToName = (value) => {
  const str = [];

  let tmp = UINT64(value);
  for (let i = 0; i <= 12; ++i) {
    const idx = tmp
      .clone()
      .and(UINT64(i === 0 ? 0x0f : 0x1f))
      .toNumber();

    str[12 - i] = charMap[idx];
    tmp = tmp.shiftr(i === 0 ? 4 : 5);
  }

  return str.join('').replace(/\.+$/g, '');
};
