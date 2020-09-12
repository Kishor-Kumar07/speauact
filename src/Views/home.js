import React, { Component } from 'react';
import Aboutus from './aboutus'
import Publications from './publications'
import Sponsor from './sponsors'
import Resource from './resources'
import Core from './core'
import Contact from './contact'
import Mission from './missionandvision'
import Petrovision from './petrovision'
import Petr from './petr';
import Social from './social';
import Gallery from './gallery'
import Event from './eventpartners'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sir1 from '../Images/IMG_0106.png'
import sir2 from '../Images/IMG_9815.png'
import pic from '../Images/IMG_9821.png'
import '../Styles/App.css'
import { Row,Col,Button, Navbar,Nav,NavItem,NavLink,Input } from 'reactstrap'
import {Link} from 'react-scroll'
import '../Styles/style.css' 


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
  

  render(){
    return(
      <div id="home">
      <div className="bg">
      
            <Row style={{margin:'0px'}}>
                <Col md={5}>

                </Col>
               
            </Row>
            <br />
            <Row style={{margin:'0px'}} >
            <Col md={2} className="offset-md-5 linked">
            <Link to="aboutus" smooth={true} duration={1000}>Mission And Vision</Link>
            </Col>
            <Col md={2} className="linked">
            <Link to="core" smooth={true} duration={1000}>Core Committee</Link>
            </Col>
            <Col md={1} className="linked">
            <Link to="gallery" smooth={true} duration={1000}>Gallery</Link>
            </Col>
            <Col md={1} className="linked">
            <Link to="contact" smooth={true} duration={1000}>Contact Us</Link>
            </Col>

            </Row>
            <br />
            <Row style={{margin:'0px'}}>
            <Col md={7} className="offset-md-5">
            <Carousel className="carousel" enableAutoPlay={false} showThumbs={false}>
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
    
  
}

export default App;
