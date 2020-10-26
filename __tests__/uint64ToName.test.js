const { uint64ToName } = require('../src');

describe('test uint64 to name', () => {
  it('should transfrom `6138663577826885632` to `eosio`', () => {
    const uint64 = '6138663577826885632';
    const name = uint64ToName(uint64);
    expect(name).toBe('eosio');
  });

  it('should transfrom `6138663587900751872` to `eosio.msig`', () => {
    const uint64 = '6138663587900751872';
    const name = uint64ToName(uint64);
    expect(name).toBe('eosio.msig');
  });

  it('should transfrom `6138663591592764928` to `eosio.token`', () => {
    const uint64 = '6138663591592764928';
    const name = uint64ToName(uint64);
    expect(name).toBe('eosio.token');
  });
});
