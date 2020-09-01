import React from 'react'
import { Row,Col,Button, Navbar,Nav,NavItem } from 'reactstrap'
// import Carousel,{consts} from "react-elastic-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sir1 from './Images/IMG_0106.png'
import sir2 from './Images/IMG_9815.png'
import pic from './Images/IMG_9821.png'
import './App.css'
function Header() {
   
    return (
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
            <span>Mission And Vision</span>
            </Col>
            <Col md={2}>
            <span>Core Committee</span>
            </Col>
            <Col md={1}>
            <span>Gallery</span>
            </Col>
            <Col md={1}>
            <span>Contact Us</span>
            </Col>
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
    )
}
export default Header;