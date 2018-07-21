const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'salute tissue drink laundry attend outdoor spray punch category dawn forest erode',
  'https://rinkeby.infura.io/jVETSZwQm7wI0uH7adqt'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: '0x' + compiledFactory.bytecode})
    .send({gas: '3000000', from: accounts[1]});

  //console.log(interface);
  console.log('Contract deployed to', result.options.address);
}
deploy();
