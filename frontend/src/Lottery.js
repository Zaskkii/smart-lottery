import React, { useState, useEffect } from 'react';
import web3 from './web3';
import lottery from './contract';

function Lottery() {
  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);

      setManager(manager);
      setPlayers(players);
      setBalance(balance);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Manager: {manager}</p>
      <p>Players: {players.length}</p>
      <p>Balance: {web3.utils.fromWei(balance, 'ether')} ether</p>
    </div>
  );
}

export default Lottery;
