const { symbol, nameToUint64 } = require('../dist');

describe('test symbol name', () => {
  it('EOS symbol', () => {
    /**
     * cleos -u https://eos.greymass.com get scope eosio.token -t stat
     */
    const name = '........ehbo5';
    const uint64 = nameToUint64(name);
    expect(symbol.toName(uint64)).toEqual('EOS');
  });

  it('parse symbol name', () => {
    /**
     * cleos -u https://api.canfoundation.io get scope canpasstoken -t stat
     */
    const data = [
      {
        scope: '.11oen2oeh2p4',
      },
      {
        scope: '.1b5glegch2og',
      },
      {
        scope: '.1f4en23cpa54',
      },
    ];

    const rs = ['TESTLEC', 'LECLEVN', 'TLECLEV'];

    data
      .map(({ scope }) => nameToUint64(scope))
      .map((n) => symbol.toName(n))
      .forEach((sym, i) => {
        expect(sym).toEqual(rs[i]);
      });
  });
});
