const { char_to_symbol } = require('../src');

const charMap = '.12345abcdefghijklmnopqrstuvwxyz';

describe('test char to symbol', () => {
  it('should convert char to symbol', () => {
    for (const c of charMap) {
      expect(char_to_symbol(c)).toBeTruthy();
    }

    expect(char_to_symbol(charMap.charAt(0)).toString()).toEqual('0');
    expect(char_to_symbol(charMap[5]).toString()).toEqual('5');
    expect(char_to_symbol(charMap[15]).toString()).toEqual('15');
    expect(char_to_symbol(charMap[25]).toString()).toEqual('25');
    expect(char_to_symbol(charMap[31]).toString()).toEqual('31');
  });
});
