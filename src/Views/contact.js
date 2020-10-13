import React from 'react'
import {Row,Col, Input,Label, Button} from 'reactstrap'
import '../Styles/contact.css';
import fb from '../Images/Group 57.png'
import instagram from '../Images/Group 54.png'
import twitter from '../Images/Group 65.png'
import linkedin from '../Images/Group 71.png'
import '../Styles/App.css'

function Contact() {
    return (
        <div id="contactus">
            <br/>
            <Row style={{margin:'0px'}}>
                <Col md={12} md={12} lg={12} style={{color:"white",backgroundColor:"lightblue"}}>
                    <h1 className="header">Contact Us</h1>
                </Col>
            </Row>
            <Row style={{margin:'0px',alignItems:'center',paddingTop:"20px"}}>
                <Col md={6}>
                    <div className="address">
                    <span>
                    <h2><b>Our Address:</b></h2>
                    AC Tech, Anna University SPE Student Chapter,
                    <br />
                    Department of Applied Science and Technology,
                    <br />
                    Alagappa College of Technology,
                    <br />
                    Anna University,
                    <br />
                    Sardar Patel Road, Guindy,
                    <br />
                    Chennai, Tamil Nadu 600025.
                    </span>
                    <br />
                    <br />
                    <span>
                    <h2><b>E-Mail:</b></h2>
                    speactofficial@gmail.com
                    <br />
                    speauactevents@gmail.com
                    </span>
                    <br />
                    <br />
                    <img src={fb} className="contact-img"/>
                    <img src={instagram} className="contact-img"/>
                    <img src={linkedin} className="contact-img"/>
                    <img src={twitter} className="contact-img"/>
                    </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact">
                            <Label style={{borderRadius:"20px"}} className="address"><b>Name</b></Label>
                            <br />
                            <Input type="text" name="name" placeholder="e.g., John Lee"/>
                            <br />
                            <br />
                            <Label className="address"><b>Email Address</b></Label>
                            <br />
                            <Input type="text" name="name" placeholder="johnlee@gmail.com"/>
                            <br />
                            <br />
                            <Label className="address"><b>Message</b></Label>
                            <br />
                            <Input type="textarea" name="name" placeholder="Type your message here"/>
                            <br />
                            <br />
                            <Button className="btn btn-info">Submit</Button>
                         </div>
                    </Col>
                </Row>
                <Row style={{textAlign:"center"}}>
                    <Col><span style={{paddingRight:"10px"}}>{'\u2B24'}</span>&copy;SPEAUACTSC 2020 <span className="copy-line"></span>All rights reserved  <span style={{paddingLeft:"10px"}}>{'\u2B24'}</span></Col>
                   
                   
                   
                 
                </Row>
                <Row style={{paddingBottom:"20px"}}></Row>
            </div>
        )
    }
export default Contact;