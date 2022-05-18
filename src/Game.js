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
      <div className='start_page'>
          <div className='title'>The Boy Who Went Forth to Learn What Fear Was</div>
          <div className='author'>The Brothers Grimm</div>
          <div className='adventure_text'>Choose Your Own Adventure</div>
          <button className='start_button' onClick={() => {
          setHasStarted(true);
          }}>
            Start Game
        </button>

      </div>
      
    )
  } else {
    //playSound();
    const text = GameDict[currStep]['text'];
    const buttons = Object.keys(GameDict[currStep]['choices']).map((key, index) => {
      return <button className='choice_button' key={index} onClick={() => setCurrStep(key)}>{GameDict[currStep]['choices'][key]}</button>;
    })
    // if it is the end
    const backToHome = GameDict[currStep]['is_end'] ? <button onClick={() => startOver()}>Start Over</button> : <div/>;
    //const image = require(GameDict[currStep]['image']);
    const image = GameDict[currStep]['image'];
    console.log(image)
    console.log(typeof(image))
    console.log('./assets/grimms.png')
    console.log(image === './assets/grimms.png')
    return (
      <div className='step'>
        <div className='step_text'>{text}</div>
        <img className='step_image' alt='' src={image} width='400' />
        <div className='buttons'>
          {buttons}
        </div>
        
        {backToHome}
      </div>
    );
  }
}

export default Game;