import './App.css';
import React from 'react';
import MyRouter from './router';
import Header from './pages/Header';
import Ravi from './components/header/Ravi';
function App() {
  return (
    <div>
      <Header />
      <Ravi />
      <MyRouter />
    </div>
  );
}

export default App;
