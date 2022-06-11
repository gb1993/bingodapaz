import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Tables from './components/Tables';
import BingoProvider from './contexts/BingoProvider';

function App() {
  return (
    <div>
      <BingoProvider>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/table/" element={ <Tables /> } />
        </Routes>
      </BingoProvider>
    </div>
  );
}

export default App;