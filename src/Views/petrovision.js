import React from 'react'
import {Row,Col} from 'reactstrap'
import petrovision from '../Images/Path 9@2x.png'
import '../Styles/petrovision.css'


 function Petrovision() {
    return (
        <div style={{background:"black"}}>
            <Row style={{margin:'0px'}}>
                <Col md={12} md={12} lg={12}>
                    <h1 className="title">Petrovision</h1>
                </Col>
            </Row>
            <Row style={{margin:'0px'}}>
                <Col sm={12} md={6} >
                    <img src={petrovision} className="pic"/>
                </Col>
                <Col sm={12} md={6}>
                    <p className="detail"><span className="offset-md-2 span">P</span>etrovision is a National Level Technical
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