const { nameToUint64, uint64ToName } = require('./index');

describe('test eosio name to string and vice versa', () => {
  it('should transfrom `eosio` to `210711445572`', () => {
    const name = 'eosio';
    const uint64 = nameToUint64(name);
    expect(uint64).toBe('210711445572');
  });

  it.todo('should transfrom `210711445572` to `eosio`');
});