'use client'
import { useState, useEffect, useMemo } from 'react';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';
import './calculadora.css';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

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

  const clickButton = (text, source, className) => {
    console.log(`Presionaste el botón ${text} con ${source}`);
    if (source === 'teclado') {
      setActiveButton(text);
      setTimeout(() => setActiveButton(null), 100);
    }
  
    if (text === 'ERROR') {
      setErrorDisplay(true);
      setDisplayText(text);
    } else {
      setErrorDisplay(false);
      // Verifica si el botón es de tipo operador antes de actualizar el displayText
      if (!className.includes('button-operator') && !className.includes('button-equals')) {
        setDisplayText(prevText => prevText + text);
      }      
    }
  };  

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      // Obtén tanto el título como la clase del botón correspondiente a la tecla presionada
      const buttonInfo = buttonDataHorizontal.concat(buttonDataVertical).find(button => button.title === key);
    
      if (buttonInfo) { // Solo actuar si se encuentra un botón correspondiente
        event.preventDefault();
        clickButton(buttonInfo.title, 'teclado', buttonInfo.className);
      }
    
      // Manejo especial para teclas específicas
      if (key === 'Enter') {
        event.preventDefault();
        const equalsButton = buttonDataVertical.find(button => button.title === '=');
        if (equalsButton) {
          clickButton('=', 'teclado', equalsButton.className);
        }
      } else if (key === 'Backspace') {
        const cButton = buttonDataHorizontal.find(button => button.title === 'C');
        if (cButton) {
          clickButton('C', 'teclado', cButton.className);
        }
      } else if (key === 'Delete') {
        const acButton = buttonDataHorizontal.find(button => button.title === 'AC');
        if (acButton) {
          clickButton('AC', 'teclado', acButton.className);
        }
      }
    };
    

    const handleKeyUp = (event) => {
      setActiveButton(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [buttonDataHorizontal, buttonDataVertical]);

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
      onClick={() => clickButton(title, 'ratón', className)}
      className={`${className} ${activeButton === title ? 'button-active' : ''}`}
    />
  ))}
</div>
<div className='buttons-calculator-vertical'>
  {buttonDataVertical.map(({ title, className }) => (
    <Button
      key={title}
      title={title}
      onClick={() => clickButton(title, 'ratón', className)}
      className={className}
    />
  ))}
</div>
      </div>
    </main>
  );
}

export default Home;
