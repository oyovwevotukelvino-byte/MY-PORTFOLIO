import './App.css';
import React from 'react';
import Home from './Pages/Home';
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
