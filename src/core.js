import React from 'react'
import {Card,CardBody,CardImg,CardText,CardTitle,Row,Col} from 'reactstrap'
import kalai from './Images/Mask Group 11.png'
import priya from './Images/Mask Group 12.png'
import arun from './Images/Mask Group 1.png'
import pandi from './Images/Mask Group 2.png'
import raj from './Images/Mask Group 3.png'
import bharat from './Images/Mask Group 4.png'
import karthi from './Images/Mask Group 5.png'
import srini from './Images/Mask Group 6.png'
import gunalan from './Images/Mask Group 7.png'
import viswa from './Images/5.png'
import benjamin from './Images/9.png'
function Core() {
    return (
        <div>
            <div className="header">
               <h1 >Core Commitee</h1>
            </div>
            <Row style={{margin:'0px',alignItems:'center',justifyContent:'center'}}>
                <Col md={2} className="images">
                  <img src={kalai}/>
                </Col>
                <Col md={3} className="images">
                <span><b>Dr. S. Kalaiselvam
                      <br />
                      Head of the Department
                      <br />
                      Professor, Anna University
                      </b>
                      <br />
                      Phone: +91 - 44 - 22359220
                      <br />
                      E-mail: kalai@annauniv.edu
                      </span>
                </Col>
                <span><div className="line"></div></span>
                <Col md={2} className="images offset-md-1">
                  <img src={priya}/>
                </Col>
                <Col md={3} className="images">
                <span><b>Dr. J. Jayapriya
                      <br />
                      Faculty Advisor
                      <br />
                      Associate Professor, Anna University
                      </b>
                      <br />
                      Phone: +91 9962523696
                      <br />
                      E-mail: jayapriyachem@gmail.com
                      </span>
                </Col>
                </Row>
                <Row style={{margin:'0px',textAlign:'center'}}>
                <Col md={3} className="images " >
                  <img src={benjamin}/>
                  <br />
                <span ><b>Mr. B. J. Maryson Benjamin
                      <br />
                      Vice President
                      </b>
                      <br />
                      Phone: +91 8939146238
                      <br />
                      E-mail: marysonbenjamin18@gmail.com
                      </span>
                </Col>
                <Col md={3} className="images offset-md-1">
                  <br />
                  <img src={arun}/>
                  <br />
                <span><b>Mr. K. Arun
                      <br />
                      President
                      </b>
                      <br />
                      Phone: +91 8870425469
                      <br />
                      E-mail: arunkrishnaa899@gmail.com
                      </span>
                </Col>
                <Col md={3} className="images offset-md-1">
                  <img src={viswa}/>
                  <br />
                <span><b>Mr. V. S. Viswaa Vignesh
                      <br />
                      Membership Chairperson
                      </b>
                      <br />
                      Phone: +91 8667515815
                      <br />
                      E-mail: viswaavignesh0@gmail.com
                      </span>
                </Col>
                <Col md={3} className="images ">
                  <img src={raj}/>
                  <br />
                <span><b>Mr. R. Karanraju
                      <br />
                      Secretary
                      </b>
                      <br />
                      Phone: +91 9566456334
                      <br />
                      E-mail: karanraju1150489@gmail.com
                      </span>
                </Col>
                <Col md={3} className="images offset-md-1">
                  <img src={pandi}/>
                  <br />
                <span><b>Mr. C. Aravind Pandi
                      <br />
                       Treasurer 
                      </b>
                      <br />
                      Phone: +91 9585752515
                      <br />
                      E-mail: c.aravindpandi@gmail.com
                      </span>
                </Col>
                <Col md={3} className="images offset-md-1">
                  <img src={gunalan}/>
                  <br />
                <span><b>Mr. R. Gunalan
                      <br />
                      Technical Mentor
                      </b>
                      <br />
                      Phone: +91 9080648787
                      <br />
                      E-mail: sai863100@gmail.com
                      </span>
                </Col>
                <Col md={3} className="images ">
                  <img src={karthi}/>
                  <br />
                <span><b>Mr. P. Karthikeyan
                      <br />
                      Communication Chairperson
                      </b>
                      <br />
                      Phone: +91 6381621850
                      <br />
                      E-mail: karthikeyan1101999@gmail.com
                      </span>
                </Col>
                <Col md={3} className="images offset-md-1">
                  <img src={srini}/>
                  <br />
                <span><b>Mr. B. Seenivasan
                      <br />
                      Design Head
                      </b>
                      <br />
                      Phone: +91 7094811367
                      <br />
                      E-mail: seeni24vasan@gmail.com
                      </span>
                </Col>
                <Col md={3} className="images offset-md-1">
                  <img src={bharat}/>
                  <br />
                <span><b>Mr. S. Bharat Kumar
                      <br />
                      Marketing Coordinator
                      </b>
                      <br />
                      Phone: +919597409217
                      <br />
                      E-mail: bharatkumar2432@gmail.com
                      </span>
                </Col>
                </Row>
        </div>
    )
}
export default Core;