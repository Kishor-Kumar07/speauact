import React, { Component } from 'react';
import './App.css';
import Publications from './publications'
import Sponsor from './sponsors'
import Resource from './resources'
import Core from './core'
import Contact from './contact'
function App(){
  return (
    <div >
      <Publications />
      <Sponsor />
      <Resource />
      <Core />
      <Contact />
    </div>
  );
}

export default App;
