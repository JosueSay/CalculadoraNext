'use client'
import { useState, useEffect, useCallback, useMemo } from 'react';
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
    { title: '+/-', className: 'button-operator' },
    { title: '0', className: 'button-number' },
    { title: '.', className: 'button-number' },
  ], []);

  const buttonDataVertical = useMemo(() => [
    { title: '*', className: 'button-operator' },
    { title: '-', className: 'button-operator' },
    { title: '+', className: 'button-operator' },
    { title: '=', className: 'button-equals' },
  ], []);

  const clickButton = useCallback((text, className, source = 'ratón') => {
    if (text === 'ERROR' || text === 'División por cero') {
      setErrorDisplay(true);
      setDisplayText(text);
      return;
    } else {
      setErrorDisplay(false);
    }

    if (className.includes('button-number')) {
      if (displayText.length < 9) {
        if (currentOperation && displayText === lastValue?.toString()) {
          setDisplayText(text);
        } else {
          setDisplayText(prevText => prevText + text);
        }
      }
    }

    // operaciones
    if (className.includes('button-operator') && text !== '=') {
      setLastValue(parseFloat(displayText));
      setCurrentOperation(text);
      setDisplayText("");
      if (text === '+/-') {
        const newDisplay = cambiarSigno(displayText);
        setDisplayText(newDisplay);
        if (newDisplay === "ERROR") setErrorDisplay(true);
      }
    }    

    // Botones/operaciones
    if (text === '=') {
      if (currentOperation && lastValue !== null) {
        let result;
        const currentValue = parseFloat(displayText);
        switch (currentOperation) {
          case '+':
            result = suma(lastValue, currentValue);
            break;
          case '-':
            result = resta(lastValue, currentValue);
            break;
          case '*':
            result = multiplica(lastValue, currentValue);
            break;
          case '/':
            result = divide(lastValue, currentValue);
            break;
          default:
            result = displayText; // no hacer nada
        }
        if (result.toString().length > 9) {
          result = "ERROR";
        }
        setDisplayText(result.toString());
        if (result === "ERROR" || result === "División por cero") setErrorDisplay(true);
        setCurrentOperation(null);
        setLastValue(null);
      }
    }

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

    if (source === 'teclado') {
      setActiveButton(text);
      setTimeout(() => setActiveButton(null), 100);
    }
    console.log("Current operation: ", currentOperation);
    console.log("Last value: ", lastValue);
    console.log("Display text: ", displayText);




  }, [displayText, currentOperation, lastValue]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      const buttonInfo = buttonDataHorizontal.concat(buttonDataVertical).find(button => button.title === key);
      if (buttonInfo) {
        event.preventDefault();
        clickButton(buttonInfo.title, buttonInfo.className, 'teclado');
      }
      if (key === 'Enter') {
        event.preventDefault();
        const equalsButton = buttonDataVertical.find(button => button.title === '=');
        if (equalsButton) {
          clickButton('=', equalsButton.className, 'teclado');
        }
      } else if (key === 'Backspace') {
        const cButton = buttonDataHorizontal.find(button => button.title === 'C');
        if (cButton) {
          clickButton('C', cButton.className, 'teclado');
        }
      } else if (key === 'Delete') {
        const acButton = buttonDataHorizontal.find(button => button.title === 'AC');
        if (acButton) {
          clickButton('AC', acButton.className, 'teclado');
        }
      }
    };

    const handleKeyUp = () => {
      setActiveButton(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [buttonDataHorizontal, buttonDataVertical, clickButton]);

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
              className={`${className} ${activeButton === title ? 'button-active' : ''}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
