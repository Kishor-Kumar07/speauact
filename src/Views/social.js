import React from 'react';
import {Row,Col} from 'reactstrap';
import '../Styles/social.css'


 function Social() {
    return (
        <div style={{background:"black"}}>
            <Row style={{margin:'0px'}}>
                <Col md={12} md={12} lg={12}>
                    <hr style={{backgroundColor:'white'}}/>
                </Col>
            </Row>
            <Row style={{margin:'0px'}}>
                <Col sm={12} md={12} lg={12}>
                    <h1 className="social-title" style={{backgroundColor:"black",color:"white",paddingBottom:"60px"}}>Social Initiatives</h1>
               </Col>
            </Row>
            <Row style={{margin:'0px'}}>
                    <Col sm={12} md={5} style={{color:'white'}} className="detail-spe">
                        <h1 className="detail-head1" style={{textAlign:"center"}}>SPE Cares</h1>
                        <p>SPE AUACT Student Chapter is socially
                            concerned by inculcating the goodness of
                            benevolence in us under the scheme of
                            <span style={{fontWeight:"bold"}}> "SPE Cares"</span> by organising numerous <span style={{fontWeight:"bold"}}> Fundraising
                            Events</span> to provide some financial assistance as a
                            timely help to several Voluntary Organisations,
                            Non-Governmental Organisations, Children's Trust ,
                            Old Age Homes to cater the basic needs of
                            humanity to the people from different walks of life.
                            We put a smile in their faces by donating
                            something that would facilitate them in this mean
                            time.
                        </p>
                     </Col>
                     <span><div className="vertical-line"></div></span>
                    <Col sm={12} md={5} style={{color:'white'}} className="detail-green">
                        <h1 className="detail-head2" style={{textAlign:"center"}}>SPE Green Campaign</h1>
                        <p>SPE AUACT Student Chapter feels glad to
                            have launched the <span style={{fontWeight:"bold"}}> "Foster A Tree"</span> initiative
                            under the banner of <span style={{fontWeight:"bold"}}> "SPE Green Campaign"</span>
                            thereby contributing to the sustenance of Earth's
                            biosphere. The Student Chapter Members are
                            encouraged to plant saplings in the places they
                            reside and are advised to adopt those unto its
                            lifespan. As deforestation has ramped up,
                            Earth’s climate has changed significantly and a
                            global reforestation effort can have a gradual
                            climate mitigation impact. What happens to
                            Earth 100 years from Now depends on the
                            choices we make today!
                        </p>
                     </Col>
            </Row>
            
        </div>
    )
}
export default Social;