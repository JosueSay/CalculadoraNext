'use client'
import { useState, useEffect, useMemo } from 'react';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';
import './calculadora.css';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(false);

  const buttonDataHorizontal = useMemo(() => [
    { title: 'AC', className: 'button-operator' },
    { title: 'C', className: 'button-operator' },
    { title: '/', className: 'button-operator' },
    { title: '7', className: 'button-number' },
    { title: '8', className: 'button-number' },
    { title: '9', className: 'button-number' },
    { title: '4', className: 'button-number' },
    { title: '5', className: 'button-number' },
    { title: '6', className: 'button-number' },
    { title: '1', className: 'button-number' },
    { title: '2', className: 'button-number' },
    { title: '3', className: 'button-number' },
    { title: '%', className: 'button-number' },
    { title: '0', className: 'button-number' },
    { title: '.', className: 'button-number' },
  ], []);

  const buttonDataVertical = useMemo(() => [
    { title: '*', className: 'button-operator' },
    { title: '-', className: 'button-operator' },
    { title: '+', className: 'button-operator' },
    { title: '=', className: 'button-equals' },
  ], []);

  const clickButton = (text) => {
    console.log(`Presionaste el botón ${text}`);
    if (text === 'ERROR') {
      setErrorDisplay(true);
      setDisplayText(text);
    } else {
      setErrorDisplay(false);
      setDisplayText(text);
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    const buttonTitles = buttonDataHorizontal.concat(buttonDataVertical).map(button => button.title);

    if (buttonTitles.includes(key)) {
      clickButton(key);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      const buttonTitles = buttonDataHorizontal.concat(buttonDataVertical).map(button => button.title);
      if (key === 'Enter') {
        clickButton('=');
      } else if (key === 'Backspace') {
        clickButton('C');
      } else if (key === 'Delete') {
        clickButton('AC');
      } else if (buttonTitles.includes(key)) {
        clickButton(key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [buttonDataHorizontal, buttonDataVertical]);


  return (
    <main className='calculadora-container' tabIndex='0' onKeyDown={handleKeyDown}>
      <div className='display-calculadora'>
        <Display text={displayText} className={errorDisplay ? 'display-text' : 'display-number'} />
      </div>
      <div className='button-calculadora'>
        <div className='buttons-calculator-horizontal'>
          {buttonDataHorizontal.map(({ title, className }) => (
            <Button key={title} title={title} onClick={() => clickButton(title)} className={className} />
          ))}
        </div>
        <div className='buttons-calculator-vertical'>
          {buttonDataVertical.map(({ title, className }) => (
            <Button key={title} title={title} onClick={() => clickButton(title)} className={className} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
