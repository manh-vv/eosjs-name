# Eosio name to uint64

[![NPM](https://img.shields.io/npm/v/eosjs-account-name.svg)](https://www.npmjs.org/package/eosjs-account-name)
[![Build Status](https://travis-ci.org/manh-vv/eosjs-name.svg?branch=master)](https://travis-ci.org/manh-vv/eosjs-name)

```sh
npm i eosjs-account-name
```

```sh
yarn add eosjs-account-name
```

Here is [how eosio account name is computed to uint64]
(https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/name.hpp#L21), I
think node developer should have this function too :).

[main.cpp](./examples/main.cpp) show how sample values are created.

```text
"eosio",
"eosio.msig",
"eosio.token",

---- 6138663577826885632
---- 6138663587900751872
---- 6138663591592764928
```