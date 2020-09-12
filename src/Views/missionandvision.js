import React from 'react'
import {Row,Col} from 'reactstrap'
import mission from '../Images/14111@2x.png'
import '../Styles/mission.css'

 function MissionandVision() {
    return (
        <div id="mission">
            <Row style={{margin:'0px'}}>
                <Col sm={12} md={12} lg={12}>
                    <h1 className="header">Mission and Vision</h1>
               </Col>
            </Row>
            <Row style={{margin:'0px'}}>
                <Col sm={12} md={6} lg={6}>
                    <img src={mission} className="img"/>
                </Col>      
            <Col sm={12} md={6} lg={6} className="data">
                <br/>
                <span>
                AC Tech, Anna University SPE Student Chapter aspires to open doors to each
                affiliate, for individual and professional advancements through an amalgamation of
                events round the year including the Series of Distinguished Lectures by the
                Stalwarts of Oil and Gas Sector, Workshops, Soft Skill Development Seminars and a
                plethora of contests. We will endeavour to provide pupils a typical stage to
                grandstand their insight before famous industry veterans and contend with peers.
                The learning projects will enhance the technical and professional competences of
                student members by collecting, disseminating, and exchanging technical knowledge
                concerning the exploration, development and production of oil and gas resources
                and related technologies for the public benefit and thereby making student
                members familiar with Reservoir, Drilling and Production Engineerings and
                furthermore get acquainted with Health, Safety and Environmental elements of Oil
                and Gas industry. We are envisioned to bridge the gap between Industry and
                Academia for a general proficient development of both students' community and the
                industry.
                <br/><br/>
                We buckle down towards reaching the sky, and our tenacious, ardent and persistent
                undertakings will empower us accomplish the "OUTSTANDING STUDENT CHAPTER
                AWARD" sooner rather than later.
                <br/><br/>
                We look forward to your support and participation in the entirety of our endeavours.
                <br/><br/>
                </span>
             </Col>
            </Row>

            
            
        </div>
    )
}
export default MissionandVision;