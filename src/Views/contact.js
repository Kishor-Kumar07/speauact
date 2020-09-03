import React from 'react'
import {Row,Col} from 'reactstrap'
import '../Styles/App.css';
function Contact() {
    return (
        <div id="contactus">
            <div className="header">
               <h1 >Contact Us</h1>
            </div>
            <Row style={{margin:'0px',alignItems:'center',justifyContent:'center'}}>
                <Col md={6} className="images ">
            <div className="content">
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
            <span class="fa-stack fa-2x">
            <i class="fa fa-circle-o fa-stack-2x"></i>
            <i class="fa fa-facebook fa-stack-1x "></i>
            </span>
            <span class="fa-stack fa-2x">
            <i class="fa fa-circle-o fa-stack-2x"></i>
            <i class="fa fa-instagram fa-stack-1x "></i>
            </span>
            <span class="fa-stack fa-2x">
            <i class="fa fa-circle-o fa-stack-2x"></i>
            <i class="fa fa-linkedin fa-stack-1x "></i>
            </span>
            <span class="fa-stack fa-2x ">
            <i class="fa fa-circle-o fa-stack-2x "></i>
            <i class="fa fa-twitter fa-stack-1x "></i>
            </span>

            </div>
            </Col>
            <Col md={6}>
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
            </Col>
            </Row>
        </div>
    )
}
export default Contact;