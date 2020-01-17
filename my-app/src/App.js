import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard'
import './App.css';

export default function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);

  const addStrike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    }
    else {
      setStrikes(strikes + 1);
    }
  }

  const addBall = () => {
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    }
    else {
      setBalls(balls + 1);
    }
  }

  const addFoul = () => {
    if (strikes === 2) {
      setStrikes(2);
      setFoul(foul + 1)
    }
    else {
      setStrikes(strikes + 1);
      setFoul(foul + 1)
    }
  }

  const addHit = () => {
    setStrikes(0)
    setBalls(0)
    setFoul(0)
    setHit(hit + 1)
  }

  const clearHit = () => {
    setStrikes(0)
    setBalls(0)
    setFoul(0)
    setHit(0)
  }

  return (
    <div className="App">
      <header className="App-header"><h1>Baseball Scoreboard</h1></header>
      <Dashboard
        addBall={addBall}
        addStrike={addStrike}
        addFoul={addFoul}
        addHit={addHit}
        clear={clearHit}
      />
      <Display
        balls={balls}
        strikes={strikes}
        foul={foul}
        hit={hit}
      />
    </div>
  );
}