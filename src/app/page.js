'use client'
import Button from '../components/Button/Button'

function clickButton (){
  console.log('Presionaste el botón')
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button title="Número" onClick={clickButton} className="button-number" />    
    </main>
  );
}
