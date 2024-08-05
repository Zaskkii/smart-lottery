import web3 from './web3';

const address = '0x...'; // Dirección del contrato
const abi = [
  // ABI del contrato
];

const lottery = new web3.eth.Contract(abi, address);

export default lottery;
