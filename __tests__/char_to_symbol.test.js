const { char_to_symbol } = require('../src');

const charMap = '.12345abcdefghijklmnopqrstuvwxyz';

describe('test char to symbol', () => {
  it('should convert char to symbol', () => {
    for (const c of charMap) {
      expect(char_to_symbol(c)).toEqual(expect.any(Number));
    }

    expect(char_to_symbol(charMap[0])).toEqual(0);
    expect(char_to_symbol(charMap[5])).toEqual(5);
    expect(char_to_symbol(charMap[15])).toEqual(15);
    expect(char_to_symbol(charMap[25])).toEqual(25);
    expect(char_to_symbol(charMap[31])).toEqual(31);
  });
});
