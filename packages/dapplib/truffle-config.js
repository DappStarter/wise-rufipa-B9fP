require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot chef rebel place around coral light army genuine'; 
let testAccounts = [
"0x9c6a4d15d93478d8587e8175a66427b7f93072fc4dfe9b3f901398589ed26c57",
"0x0f1f3b2d5f0f8776b15e9c81a8a159dea8231d7c37009e60f0dfd7316357d73d",
"0xad67d26c05aa9f1c13ab3405003bd0240ab70bda610d915e1ac2751b54979c95",
"0x010bde7b08e092a920c125dcd2eb94c5f940f32e424b582c8a686c57f8c767d4",
"0xe6c5deb4a6c8c28745087a5827df63224bce1414769bb07ec3d8a8b77681eac7",
"0xcb28e1aaf6bb7f657aea450548ba4fb69781272a7e218f83bc8fc022e41acca2",
"0x17b26b20464d155a6bf25df0a989692e5292ebcf3e06aa591ae822574e559997",
"0x79b4734a4dfea2dc9feffafe48acfc4fc6949464cc05f66948b8af7f1a78e364",
"0x6c11874e75f78c5a84c1414c60404f134f0ffd59a2ab9a21db5d37d053a1faf8",
"0x99cd9899ea8925a0826c12c19166076661431baa6ea0047c2d2622cc8a0a9198"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

