import React from 'react'
import {Row,Col} from 'reactstrap'
import ongc from '../Images/logopng.png'
import oil from '../Images/856px-Indian_Oil_Logo.svg.png'
import cpcl from '../Images/1200px-Chennai_Petroleum_Corporation_logo.svg.png'
import kothari from '../Images/download (1).png'
import tnpl from '../Images/download (2).png'
import spic from '../Images/1280px-SPIC_logo.svg.png'
import petrofac from '../Images/640px-Petrofac.svg.png'
import oiltech from '../Images/289.png'
import redhat from '../Images/rzvaammdxaa9vhgwuiot.png'
import petro from '../Images/unnamed.png'
import cub from '../Images/logo.png'
import '../Styles/sponsors.css'
 function Sponsors() {
    return (
        <div>
            <Row style={{margin:'0px'}}>
                <Col sm={12} md={12} lg={12} style={{color:"white",backgroundColor:"black"}}>
                    <h1 className="sponsors">Our Sponsors</h1>
               </Col>
            </Row>
            <Row style={{margin:'0px',alignItems:'center',textAlign:'center'}}>
                <Col md={1} className="images" >
                    <img src={ongc} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={cpcl} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={oil} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={tnpl} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={tnpl} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={spic} />
                </Col>
                </Row>
                <Row style={{margin:'0px',alignItems:'center',textAlign:'center'}}>
                <Col md={1} className="images " >
                    <img src={kothari} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={cub} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={petro} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={oiltech} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={redhat} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={petrofac} />
                </Col>
            </Row>
        </div>
    )
}
export default Sponsors;