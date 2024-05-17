'use client'
import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';

function Home() {
  const [displayText, setDisplayText] = useState('');

  const clickButton = (text) => {
    console.log(`Presionaste el botón ${text}`);
    setDisplayText(text);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button title="1" onClick={() => clickButton("1")} className="button-number" />
      <Display text={displayText} />
    </main>
  );
}

export default Home;
