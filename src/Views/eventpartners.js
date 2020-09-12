import React from 'react'
import {Row,Col} from 'reactstrap'
import mission from '../Images/14111@2x.png'
import '../Styles/events.css'
import ongc from '../Images/logopng.png'
import oil from '../Images/856px-Indian_Oil_Logo.svg.png'
import cpcl from '../Images/1200px-Chennai_Petroleum_Corporation_logo.svg.png'

 function Event() {
    return (
        <div>
            <Row style={{margin:'0px'}}>
                <Col sm={12} md={12} lg={12} style={{color:"white",backgroundColor:"black"}}>
                    <h1 className="sponsors">Event Partners</h1>
               </Col>
            </Row>
            <Row style={{margin:'0px',alignItems:'center',textAlign:'center'}}>
                <Col md={1} className="images offset-md-3" >
                    <img src={ongc} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={cpcl} />
                </Col>
                <Col md={1} className="images offset-md-1" >
                    <img src={oil} />
                </Col>
            </Row>
            
            
        </div>
    )
}
export default Event;