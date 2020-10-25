import React, { useState} from "react";
import Aboutus from '../Views/aboutus.js'
import Publications from '../Views/publications'
import Sponsor from '../Views/sponsors'
import Resource from '../Views/resources'
import Core from '../Views/core'
import Contact from '../Views/contact'
import Mission from '../Views/missionandvision'
import Petrovision from '../Views/petrovision'
import Petr from '../Views/petr';
import Social from '../Views/social';
import Gallery from '../Views/gallery'
import Event from '../Views/eventpartners'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Row,Col,Button, Navbar,Nav,NavItem,NavLink,Input } from 'reactstrap'
import {Link} from 'react-scroll'
import '../Styles/home.css'   
import SideNav from 'react-simple-sidenav';
import ScrollArea from 'react-scrollbar' 
import Header from '../Component/navbar.js'
   
function App() {  
  
  const [collapsed,setCollapsed] = useState(false) 
  const [sidebarOpen, setOpen] = useState(false)
  const [bar, setbarOpen] = useState(false)
  function toggleNavbar() {  
       setCollapsed(
       !collapsed 
    )
  }
  function onSetBar(prop){
    setbarOpen(prop);
  }
  function closeNavbar(){
    if(collapsed===true){
      toggleNavbar();
    }
  }
 function onSetSidebarOpen(prop) {
  setOpen(prop);
}


    return(
      <div>
       <Header/>
      <div id="aboutus"><Aboutus/></div>
      <div id="mission"><Mission/></div>
      <div id="core"><Core/></div>
      <Petrovision/>
      <Petr/>
      <Social/>
      <Publications/>
      <div id="gallery"><Gallery/></div>
      <Resource />
      <Sponsor />
      <Event/>
      <div id="contact"><Contact/></div>
    </div>
    
    )
  
    
  
}

export default App;