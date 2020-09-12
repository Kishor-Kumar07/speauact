import React from 'react';
import {Row,Col} from 'reactstrap';
import petroprobe from '../Images/Group 27.png';
import petroration from '../Images/Rectangle 31.png';
import '../Styles/petr.css'


 function Petr() {
    return (
        <div style={{background:"black"}}>
            <Row style={{margin:'0px'}}>
                <Col md={12} md={12} lg={12}>
                    <hr style={{backgroundColor:'white'}}/>
                </Col>
            </Row>
            <Row style={{margin:'0px'}}>
                <Col sm={12} md={6} >
                    <img src={petroprobe} className="picture1"/>
                    <Col sm={12} md={12} style={{color:'white'}} className="picdetails">
                        <h1 style={{textAlign:"center"}}>Petr-O-Probe</h1>
                        <p>SPE AUACT Student Chapter is extremely ecstatic to
                        present <span style={{fontWeight:"bold"}}>"Petr-O-Probe"</span>, an exhilarative International
                        Level Online Quiz Competition periodically. The chapter
                        provides an enchanting opportunity to the the pupils of oil
                        and gas sectors across the world to enhance the
                        technical exposure and for a good learning experience.
                        This brainstorming quiz session will be hosted in
                        collaboration with <span style={{fontWeight:"bold"}}>MySwots</span>. The Quiz is bifurcated and
                        conducted under two Domains such as "Petroleum" and
                        "Petrochemical" domains, enabling the participants to
                        choose one of or both the Domains while registration. The
                        enthralling event perceived enormous participations from
                        various National and International Universities.
                        </p>
                     </Col>
                </Col>
                <Col sm={12} md={6}>
                    <img src={petroration} className="picture2"/>
                    <Col sm={12} md={12} style={{color:'white'}} className="picdetails">
                        <h1 style={{textAlign:"center"}}>Petr-O-ration</h1>
                        <p>SPE AUACT Student Chapter is immensely gratified to
                            formulate <span style={{fontWeight:"bold"}}>"Petr-O-ration", a Series of Seminars</span> which is
                            aimed to bridge the gap between academia and industry
                            and to provide each affiliate with the opportunities for
                            professional development through the series of
                            <span style={{fontWeight:"bold"}}> Distinguished Lectures</span> by the Stalwarts of Oil and Gas
                            Sector. It also provides an interactive forum to identify the
                            essential manpower skills required for the industry. The
                            seminars also occur through any of Online Platforms in
                            view of various circumstances. Several Pupils, Research
                            scholars, Faculties from various Universities across the
                            world attend it regularly and have got benefitted.
                        </p>
                     </Col>
                </Col>
            </Row>
            
        </div>
    )
}
export default Petr;