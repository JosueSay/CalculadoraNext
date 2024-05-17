// pages/index.js
'use client'
import { useState } from 'react';
import { suma, resta, multiplica, divide, cambiarSigno, borrarUltimoDigito, borrarTodo } from './calculator';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';
import './calculadora.css';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [currentOperation, setCurrentOperation] = useState(null);
  const [lastValue, setLastValue] = useState(null);

  const buttonDataHorizontal = [
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
    { title: '+/-', className: 'button-operator' },
    { title: '0', className: 'button-number' },
    { title: '.', className: 'button-number' },
  ];

  const buttonDataVertical = [
    { title: '*', className: 'button-operator' },
    { title: '-', className: 'button-operator' },
    { title: '+', className: 'button-operator' },
    { title: '=', className: 'button-equals' },
  ];

  const clickButton = (text, className) => {
    if (text === 'ERROR' || text === 'División por cero') {
      setErrorDisplay(true);
      setDisplayText(text);
      return;
    } else {
      setErrorDisplay(false);
    }

    // Handle numeric and decimal inputs
    if (className.includes('button-number')) {
      if (displayText.length < 9) {
        if (currentOperation && displayText === lastValue?.toString()) {
          setDisplayText(text);
        } else {
          setDisplayText(prevText => prevText + text);
        }
      }
    }

    // Handle operations
    if (className.includes('button-operator') && text !== '=') {
      setLastValue(parseFloat(displayText));
      setCurrentOperation(text);
      if (text === '+/-') {
        const newDisplay = cambiarSigno(displayText);
        setDisplayText(newDisplay);
        if (newDisplay === "ERROR") setErrorDisplay(true);
      }
    }

    // Handle the equals button
    if (text === '=') {
      if (currentOperation && lastValue !== null) {
        let result;
        switch (currentOperation) {
          case '+':
            result = suma(lastValue, displayText);
            break;
          case '-':
            result = resta(lastValue, displayText);
            break;
          case '*':
            result = multiplica(lastValue, displayText);
            break;
          case '/':
            result = divide(lastValue, displayText);
            break;
          default:
            result = displayText;  // No operation selected
        }
        setDisplayText(result);
        if (result === "ERROR" || result === "División por cero") setErrorDisplay(true);
        setCurrentOperation(null);
        setLastValue(null);
      }
    }

    // Handle clearing and resetting
    if (text === 'AC') {
      setDisplayText(borrarTodo());
      setErrorDisplay(false);
      setCurrentOperation(null);
      setLastValue(null);
    }

    if (text === 'C') {
      setDisplayText(borrarUltimoDigito(displayText));
      if (displayText.length === 1) {
        setErrorDisplay(false);
      }
    }
  };

  return (
    <main className='calculadora-container' tabIndex='0'>
      <div className='display-calculadora'>
        <Display text={displayText} className={errorDisplay ? 'display-text' : 'display-number'} />
      </div>
      <div className='button-calculadora'>
        <div className='buttons-calculator-horizontal'>
          {buttonDataHorizontal.map(({ title, className }) => (
            <Button
              key={title}
              title={title}
              onClick={() => clickButton(title, className)}
              className={`${className} ${activeButton === title ? 'button-active' : ''}`}
            />
          ))}
        </div>
        <div className='buttons-calculator-vertical'>
          {buttonDataVertical.map(({ title, className }) => (
            <Button
              key={title}
              title={title}
              onClick={() => clickButton(title, className)}
              className={className}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
