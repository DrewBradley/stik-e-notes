import './App.css';
import React from 'react'
import Header from './components/Header'
import NoteDisplay from './components/NoteDisplay'

function App() {
  return (
    <main className="App">
      <Header />
      <NoteDisplay />
    </main>
  );
}

export default App;
