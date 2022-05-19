import React, { useState } from 'react';
import useSound from 'use-sound';
import { GameDict } from './GameDict';
import { sounds } from './sounds';

const INITIAL_IMAGE_LENGTH = 2000;


const Game = (props) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currStep, setCurrStep] = useState('start');
  const [hasLoaded, setHasLoaded] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [showInitialImage, setShowInitialImage] = useState(false);
  const [initialImage, setInitialImage] = useState('');

  // goes back to start of game
  const startOver = () => {
    setHasStarted(false);
    setCurrStep('start');
  }

  // advances step, resets state variables for each step
  const nextStep = (nextStep) => {
    setHasLoaded(false);
    setSoundPlayed(false);
    // if the next step has an initial image to show
    if (GameDict[nextStep]['initial_image']) {
      setShowInitialImage(true);
      setInitialImage(GameDict[nextStep]['initial_image']);
      // stop it in 2 seconds
      setTimeout(() => setShowInitialImage(false), INITIAL_IMAGE_LENGTH);
    }
    setCurrStep(nextStep);
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
  } 
  else if (showInitialImage) {
    return (
      <div className='step'>
        <img className='initial_image' alt='' src={initialImage}  />
      </div>
    )

  } 
  else {
    // if the game has started
    
    
    const text = GameDict[currStep]['text'];
    const buttons = Object.keys(GameDict[currStep]['choices']).map((key, index) => {
      return <button className='choice_button' key={index} onClick={() => nextStep(key)}>{GameDict[currStep]['choices'][key]}</button>;
    })
    // if it is the end
    const backToHome = GameDict[currStep]['is_end'] ? <button className='back_button' onClick={() => startOver()}>Start Over</button> : <div/>;
    
    
    const image = GameDict[currStep]['image'];

    // only play sound if the image has loaded and it hasn't played yet
    if (!soundPlayed && hasLoaded) {
      playSound();
      setSoundPlayed(true);
    }

    // if image hasn't loaded, don't display anything
    if (!hasLoaded) {
      return <img className='step_image' alt='' src={image} display="none" width='400' onLoad={() => setHasLoaded(true)} />;
    }
    
    return (
      <div className='step'>
        <img className='step_image' alt='' src={image} width='400' onload={() => setHasLoaded(true)} />
        <div className='step_text'>{text}</div>
        <div className='buttons'>
          {buttons}
        </div>
        
        {backToHome}
      </div>
    );
  }
}

export default Game;