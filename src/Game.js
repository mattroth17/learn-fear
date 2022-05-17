import React, { useState } from 'react';
import useSound from 'use-sound';
import { GameDict } from './GameDict';
import { sounds } from './sounds';


const Game = (props) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currStep, setCurrStep] = useState('start');

  const startOver = () => {
    setHasStarted(false);
    setCurrStep('start');
  }

  const [playSound] = useSound(
    sounds[currStep],
    { volume: 1 }
  );
  
  if (!hasStarted) {
    return (
      <button onClick={() => {
        setHasStarted(true);
      }}>
          Start Game
      </button>
    )
  } else {
    playSound();
    const text = GameDict[currStep]['text'];
    const buttons = Object.keys(GameDict[currStep]['choices']).map((key, index) => {
      return <button key={index} onClick={() => setCurrStep(key)}>{GameDict[currStep]['choices'][key]}</button>;
    })
    // if it is the end
    const backToHome = GameDict[currStep]['is_end'] ? <button onClick={() => startOver()}>Start Over</button> : <div/>;
    return (
      <div>
        <div>{text}</div>
        {buttons}
        {backToHome}
      </div>
    );
  }
}

export default Game;