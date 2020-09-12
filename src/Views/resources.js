import React from 'react'
import {Row,Col} from 'reactstrap'
import webinars from '../Images/webinars.png'
import way from '../Images/twageneric_2049-e1553695702949.png'
import onepetro from '../Images/onepetro-e1553695531704.png'
import connect from '../Images/large-spe-connect-logo-e1553695821789.png'
import jpt from '../Images/jpt-e1553695432661.png'
import emonitos from '../Images/emonitos.png'
import energy from '../Images/Energy4me_logo_RGB-e1553695950745.png'
import wiki from '../Images/2016-06_spe101_hero-e1553695617293.png'
import '../Styles/resource.css'

 function Resources() {
    return (
        <div>
            <Row style={{margin:"0px"}}>
               <Col style={{backgroundColor:"darkblue",color:"white"}}>
                  <h1 className="speresource">SPE Resources</h1>
               </Col>
            </Row>
            <Row style={{margin:'0px',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
                <Col md={3} className="images">
                   <img src={jpt}/>
                   <br />
                   <br />
                   <span>Journey Of Petroleum Technology</span>
                </Col>
                <Col md={3} className="images ">
                   <img src={way} />
                   <br />
                   <br />
                   <span>THE WAY AHEAD</span>
                </Col>
                <Col md={3} className="images ">
                   <img src={energy} />
                   <br />
                   <br />
                   <span>Energy For Me</span>
                </Col>
                <Col md={3} className="images ">
                   <img src={onepetro} />
                   <br />
                   
                   <span>One Petro</span>
                </Col>
                </Row>
                <Row style={{margin:'0px',alignItems:'center',textAlign:'center'}}>
                <Col md={3} className="images ">
                   <img src={emonitos} />
                   <br />
                   
                   <span>SPE e-mentoring Program</span>
                </Col>
                <Col md={3} className="images ">
                   <img src={wiki} />
                   <br />
                   
                   <span>PetroWiki</span>
                </Col>
                <Col md={3} className="images">
                   <img src={connect} />
                   <br />
                   <br />
                   <br />
                   <span>SPE connect</span>
                </Col>
                <Col md={3} className="images ">
                   <img src={webinars} />
                   <br />
                   <br />
                   <span>Webinars</span>
                </Col>
                </Row>
        </div>
    )
}
export default Resources;
