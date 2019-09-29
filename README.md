# Eosio name to uint64

Here is [how eosio account name is computed to uint64]
(https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/name.hpp#L21), I
think node developer should have this function too :).

```text
"eosio",
"eosio.msig",
"eosio.token",

---- 6138663577826885632
---- 6138663587900751872
---- 6138663591592764928
```