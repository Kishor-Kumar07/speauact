import React from 'react'
import {Row,Col} from 'reactstrap'
import actech from './Images/Mask Group 9.png'
import './Styles/aboutus.css'


 function Aboutus() {
    return (
        <div style={{margin:'0px'}}>
            <Row style={{margin:'0px'}}>
                <Col  sm={12} md={12} lg={12}>
                    <h1 className="header">About US</h1>
               </Col>
            </Row>
            <Row style={{margin:'0px'}}>
                <Col sm={12} md={6}>
                    <img src={actech} className="img"/>
                </Col>      
                <Col sm={12} md={6} className="text">
                    <br/>
                    <p>
                    <b>AC Tech, Anna University SPE Student Chapter (#6098 - Chennai
                    Section)</b> is one of the registered Student Chapters of <b>Society of
                    Petroleum Engineers (SPE) International</b> which provides the
                    operating framework for Society activities at university level. The
                    student chapter is organised under the <b>Department of Applied
                    Science and Technology (DAST), Alagappa College of Technology,
                    Anna University.</b> The department offers Full-Time Courses in B. Tech.
                    Petroleum Engineering and Technology and M. Tech. Industrial Safety
                    and Hazard Management. The department is progressing exponentially
                    with a vision for developing efficient and technically sound students to
                    outperform their contemporaries in their career in oil and gas sector
                    worldwide and the department has always lent a supporting hand to the
                    pupils for their enrichment in technical knowledge and exposure to
                    industrial experience.
                    </p>
                </Col>
            </Row>  
        </div>
    )
}
export default Aboutus;