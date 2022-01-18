import { Fragment } from 'react';

import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Statistics from './components/statistics/Statistics';
import About from './components/about/About';
function App() {
  return <>
    <Header />
    <Intro />
    <Statistics />
    <About />
  </>
}

export default App;
