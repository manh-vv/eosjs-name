# Eosio name to uint64

[![NPM](https://img.shields.io/npm/v/eosjs-account-name.svg)](https://www.npmjs.org/package/eosjs-account-name)
[![Build Status](https://travis-ci.org/manh-vv/eosjs-name.svg?branch=master)](https://travis-ci.org/manh-vv/eosjs-name)
[![codecov](https://codecov.io/gh/manh-vv/eosjs-name/branch/master/graph/badge.svg?token=WLVN5CZT6Q)](https://codecov.io/gh/manh-vv/eosjs-name)

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/manh-vv/eosjs-name)

```sh
npm i eosjs-account-name
```

```sh
yarn add eosjs-account-name
```

## From name to uint64

Here is [how eosio account name is computed to uint64](https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/name.hpp#L21).

```text
"eosio",
"eosio.msig",
"eosio.token",

---- 6138663577826885632
---- 6138663587900751872
---- 6138663591592764928
```

## From uint64 to name

Source https://github.com/EOSIO/eos/blob/master/libraries/chain/name.cpp#L19

## Example

Try on run-kit https://npm.runkit.com/eosjs-account-name

```javascript
const eosjsAccountName = require('eosjs-account-name');
const n = eosjsAccountName.nameToUint64('eosio');

console.log('eosio to uint64: ' + n);

console.log('uint64 to name: ' + eosjsAccountName.uint64ToName(n));
```

### Parse symbol name

[symbol.test.js](./__tests__/symbol.test.js)

```javascript
const { symbol, nameToUint64 } = require('eosjs-account-name');

/**
 * cleos -u https://eos.greymass.com get scope eosio.token -t stat
 */
const name = '........ehbo5';
const uint64 = nameToUint64(name);
const symbolName = symbol.toName(uint64);

// expect(symbolName).toEqual('EOS');
```

## Note on random eosio name

In case you want to generate a random name, I suggest you use [`nanoid`](https://zelark.github.io/nano-id-cc/).

```javascript
const generate = require('nanoid/generate');
const alphabet = '.12345abcdefghijklmnopqrstuvwxyz';
generate(alphabet, 12); //=> "nc4zs1yyg.jx"
```
