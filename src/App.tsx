import React from 'react';
import './App.css';
import CharacterForm from './components/CharacterForm';

function App() {
  function handleCompare(character1: string, character2: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="App">
    <CharacterForm onCompare={handleCompare} />
    </div>
  );
}

export default App;
