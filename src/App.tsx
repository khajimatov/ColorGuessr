import React from 'react'
import './App.css'
import ColorCard from './components/ColorCard';
import ToastDemo from './components/ToastDemo';

function App() {

  return (
    <div className="App">
      <ColorCard />
      <p>Guess the color!</p>
      <section>
        <button type="button">Red</button>
        <button type="button">Green</button>
        <button type="button">Blue</button>
        <ToastDemo />
      </section>
    </div>
  )
}

export default App;
