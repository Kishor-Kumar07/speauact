import React from 'react'
import {Row,Col} from 'reactstrap'
import '../Styles/contact.css';
import fb from '../Images/Group 57.png'
import instagram from '../Images/Group 54.png'
import twitter from '../Images/Group 65.png'
import linkedin from '../Images/Group 71.png'
function Contact() {
    return (
        <div id="contactus">
            <br/>
            <Row style={{margin:'0px'}}>
                <Col md={12} md={12} lg={12} style={{color:"white",backgroundColor:"lightblue"}}>
                    <h1 className="contact">Contact Us</h1>
                </Col>
            </Row>
            <Row style={{margin:'0px',alignItems:'center'}}>
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
                            <label><b>Name</b></label>
                            <br />
                            <input type="text" name="name" placeholder="e.g., John Lee"/>
                            <br />
                            <br />
                            <label><b>Email Address</b></label>
                            <br />
                            <input type="text" name="name" placeholder="johnlee@gmail.com"/>
                            <br />
                            <br />
                            <label><b>Message</b></label>
                            <br />
                            <input type="textarea" name="name" placeholder="Type your message here"/>
                            <br />
                            <br />
                            <input type="submit" />
                         </div>
                    </Col>
                </Row>
            </div>
        )
    }
export default Contact;