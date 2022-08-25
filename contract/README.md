# Three Contract

## Description

Ropsten Testnet에서 ThreeToken(SAM)을 발행하고 ThreeToken을 이용하여 NFT를 민팅할 수 있는 스마트 컨트랙트 코드입니다.

## Getting Started

### Dependencies

- Issue a Infura API KEY
- Installed the Node.js
- ganache (if you want to run test code)

### Installing

- npm install

### Executing program

#### compile

```bash
truffle compile
```

#### deploy

```bash
truffle migrate --network ropsten
```

#### Test

```bash
truffle test
```

## Help

env setting

```bash
INFURA_API_KEY = https://ropsten.infura.io/v3/"input your infura api key"
MNEMONIC = "input your account nimonic words"
```

## Authors

Codestates BEB 5th team Bear.

## License

MIT License

## Acknowledgments

- [ERC-20](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20)
- [ERC-721](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721)
