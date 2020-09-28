import React, { useContext } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { GlobalProvider, GlobalContext } from './context/GlobalState';



function App() {

  return (
    <GlobalProvider>
      <AppRouter/>
    </GlobalProvider>
  );
}

export default App;
