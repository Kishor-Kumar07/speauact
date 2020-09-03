import React, { Component } from 'react';
import '../Styles/App.css';
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
import { NavLink as RRNavLink } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sir1 from '../Images/IMG_0106.png'
import sir2 from '../Images/IMG_9815.png'
import pic from '../Images/IMG_9821.png'
import '../Styles/App.css'
import { Row,Col,Button, Navbar,Nav,NavItem,NavLink,Input } from 'reactstrap'
import {Link} from 'react-scroll'
import '../Styles/style.css' 

import {slide as Menu} from 'react-burger-menu'

class App extends Component{
  constructor(props){
    super(props)
    this.state={ 
      open:false,
      drop:false
    } 
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen=(prop)=>{ 
    this.setState({open:prop}) 
  }
  
  handleDrop=(e)=>{ 
    this.setState({drop:!this.state.drop}) 
  }

  render(){
    return(
      <div >
      <div className="bg">
            <Row style={{margin:'0px'}}>
                <Col md={5}>

                </Col>
                <Col md={7}>
                  <h2>AC Tech, Anna University SPE Student Chapter</h2>
                </Col>
            </Row>
            <br />
            <Row style={{margin:'0px'}}>
            <Col md={2} className="offset-md-5">
            <Link to="aboutus" smooth={true} duration={1000}>Mission And Vision</Link>
            </Col>
            <Col md={2}>
            <Link to="core" smooth={true} duration={1000}>Core Committee</Link>
            </Col>
            <Col md={1}>
            <Link to="gallery" smooth={true} duration={1000}>Gallery</Link>
            </Col>
            <Col md={1}>
            <Link to="contact" smooth={true} duration={1000}>Contact Us</Link>
            </Col>
            <Menu isOpen={this.state.open} onOpen={()=>this.handleOpen(true)} onClose={()=>this.handleOpen(false)} right>
        
            </Menu>
            </Row>
            <br />
            <Row style={{margin:'0px'}}>
            <Col md={7} className="offset-md-5">
            <Carousel enableAutoPlay={false} showThumbs={false}>
             <div>
                 <img src={sir1} />
            </div>
             <div>
                 <img src={sir2}/>
             </div>
             <div>
                 <img src={pic}/>
             </div>
            </Carousel>
            </Col>
            </Row>

        </div>
      <div id="aboutus"><Aboutus/></div>
      <Mission/>
      <div id="core"><Core/></div>
      <Petrovision/>
      <Publications/>
      <div id="gallery"><Gallery/></div>
      <Resource />
      <Sponsor />
      <Event/>
      <div id="contact"><Contact/></div>
      
    </div>
    
    )
  }
    
  
}

export default App;
