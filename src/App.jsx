import React from 'react';
import './App.css'
import Header from './assets/Header/Header';
import Chamada from './assets/Page';

function App() {

  return (
    <div  className='container'>
      <header><Header/></header>
      <main><Chamada/></main>
    </div>
  );
};

export default App