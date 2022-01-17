import { Fragment } from 'react';

import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Statistics from './components/statistics/Statistics';
import About from './components/about/About';
import Backdrop from './components/modal/Backdrop';
import Modal from './components/modal/Modal';
import PledgeOptionsModal from './components/modal/PledgeOptionsModal';

function App() {
  return <>
    <Header />
    <Intro />
    <Statistics />
    <About />
    {/* <Backdrop /> */}
    {/* <Modal /> */}
    <PledgeOptionsModal />
  </>
}

export default App;
