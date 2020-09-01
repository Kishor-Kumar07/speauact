import React from 'react'
import {Row,Col} from 'reactstrap'
import petrovision from './Images/Path 9.png'


 function Petrovision() {
    return (
        <div style={{background:"black"}}>
            <div className="header">
               <h1>Petrovision</h1>
            </div>
            <Row style={{margin:'0px'}}>
                <Col md={4} style={{padding:"80px"}}>
                    <img src={petrovision}  width="40%"/>
                </Col>
                <Col style={{"fontSize":"21px",'color':"lightblue","fontSize":"29px"}}>
                    <p><span className="offset-md-2" style={{'fontSize':'90px'}}>P</span>etrovision is a National Level Technical
                    Symposium conducted <b>by AC Tech, Anna University SPE
                    Student Chapter, Department of Applied Science and
                    Technology, Anna University</b> and it will be held over a period of
                    two days annually. Petrovision kindles the flame in young minds
                    through Workshops, Technical Events and Distinguished Lectures
                    for the students to embark on their journey towards industrial
                    glory. It provides opportunities to the students to collaborate with
                    students of different regions and communities of same sector.
                    The objective of organizing this symposium is to provide a forum
                    for interaction among the researchers, technologists,
                    academicians and students to exchange their ideas and identify
                    the manpower skills required for the industry. The deliberations
                    will also provide opportunities for establishing collaborations,
                    identifying avenues for translating research progress to useful
                    products and other application prospects. The fest serves as an
                    arena to encourage a sense of productivity.
                    </p>
                </Col>
            </Row>
            
        </div>
    )
}
export default Petrovision;