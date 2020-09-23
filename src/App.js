import React, { Component } from 'react';
import './App.css';
import Aboutus from './aboutus'
import Publications from './publications'
import Sponsor from './sponsors'
import Resource from './resources'
import Core from './core'
import Contact from './contact'
import Mission from './missionandvision'
import Petrovision from './petrovision'
import Gallery from './gallery'
import Event from './eventpartners'
import Header from './header'

function App(){
  return (
    <div >
      <Header />
      <Aboutus/>
      <Mission/>
      <Core />
      <Petrovision/>
      <Publications/>
      <Gallery/>
      <Resource />
      <Sponsor />
      <Event/>
      <Contact />
    </div>
  );
}

export default App;
