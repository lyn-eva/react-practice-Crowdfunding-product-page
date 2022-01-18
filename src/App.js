import { Fragment } from 'react';

import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Statistics from './components/statistics/Statistics';
import About from './components/about/About';
import ContextProvider from './components/store/ContextProvider';

function App() {
  return <ContextProvider>
    <Header />
    <Intro />
    <Statistics />
    <About />
  </ContextProvider>
}

export default App;
