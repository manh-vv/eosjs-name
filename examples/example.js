const {nameToUint64} = require('eosjs-name');

exports.n2u = n => nameToUint64(n);