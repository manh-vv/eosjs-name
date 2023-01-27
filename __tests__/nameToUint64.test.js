const { nameToUint64 } = require('../dist');

describe('test name to uint64', () => {
  it('should transfrom `eosio` to `6138663577826885632`', () => {
    const name = 'eosio';
    const uint64 = nameToUint64(name);
    expect(uint64).toBe('6138663577826885632');
  });

  it('should transfrom `eosio.msig` to `6138663587900751872`', () => {
    const name = 'eosio.msig';
    const uint64 = nameToUint64(name);
    expect(uint64).toBe('6138663587900751872');
  });

  it('should transfrom `eosio.token` to `6138663591592764928`', () => {
    const name = 'eosio.token';
    const uint64 = nameToUint64(name);
    expect(uint64).toBe('6138663591592764928');
  });

  it('should transfrom `namewith13cha` to `11071165353165377750`', () => {
    const name = 'namewith13cha';
    const uint64 = nameToUint64(name);
    expect(uint64).toBe('11071165353165377750');
  });
});
