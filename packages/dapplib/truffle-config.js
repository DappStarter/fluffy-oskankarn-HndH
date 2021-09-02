require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name response soap history hover force frame syrup'; 
let testAccounts = [
"0x44230297492fbdcc0e16ca1e56f67c3641562db11e4fafc22db729290cb14d8a",
"0x05d298503204d4a622a48feb664aea95fa77e5ff119b0ca4c05e49ec7b41fcaf",
"0x2702122bf7615247349e7ecbae1930f830e77545f2ed0b7e89aced769028cdf9",
"0x4e45d59a0886fbfb082acd6651acd53ca2f81bf409c0263d4eb76cbe3830ad1b",
"0xcf2941e3b1d10a3578b21f52273dfb373d367111b36daad5f128cd4833a6a019",
"0x2cefa43835aa6a1f3ba90c99b6f038009dd000eb3937ad87af4f36d636334345",
"0xf4becbf4ed6caa1759d9fe2e10e7c78172bf65166cd3c484099f23b07969a3bc",
"0x9efe37d40c3bda7d0164b8c7dfd13e5c390dd79880cccd4b8ab72c84f3341203",
"0x2dda17d1effc104fdb6805b56de94d1110ad807c027b16977f13557a29154718",
"0x69126a7545ae1e34342fbbc6feb961a0d084908e4be15f4ac1331e2e14a8a774"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

