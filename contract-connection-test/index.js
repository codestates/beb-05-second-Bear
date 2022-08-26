const express = require('express');
const app = express();
const port = 8080;
const Contract = require('web3-eth-contract');

const threeTokenAbi = require('./tokenAbi/ThreeToken.json');

async function getName() {
  try {
    const abi = threeTokenAbi;
    const address = '0x303B1568F8DAb3076D093146394B558f5bf8a1D1';
    Contract.setProvider(
      'https://ropsten.infura.io/v3/ea16b350160f4c659f9379b339da3363'
    );
    const contract = new Contract(abi, address);
    const result = await contract.methods.name().call();
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
}

app.get('/name', (req, res) => {
  getName().then((result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  console.log('Listening...');
});
