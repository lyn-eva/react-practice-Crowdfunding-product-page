import { Fragment, useContext } from 'react';

import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Statistics from './components/statistics/Statistics';
import About from './components/about/About';
import Modal from './components/modal/Modal';
import Context from "./components/store/Context"

function App() {
  const ctx = useContext(Context);

  return <>
    <Header />
    <Intro />
    <Statistics />
    <About />
    {ctx.showModal && <Modal onClick={ctx.modalHandler}/>}
  </>
}

export default App;
