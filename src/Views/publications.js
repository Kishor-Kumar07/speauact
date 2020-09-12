import React from 'react'
import {Row,Col} from 'reactstrap'
import neo from '../Images/Artboard 1@4x.png'
import Friday from '../Images/Artboard 1@4xfriday2.png'
import Sunday from '../Images/Artboard 1@4xsunday 2.png'
import sun from '../Images/Artboard 1@4xsunday.png'
import Monday from '../Images/Artboard 1@4xmonday.png'
import '../Styles/publications.css'
import '../Styles/App.css'

function Publications() {
    return (
        <div id="publications">
            <Row style={{margin:'0px'}}>
                <Col style={{color:"white",backgroundColor:"black"}} md={12} md={12} lg={12}>
                    <h1 className="header">Publications</h1>
                </Col>
            </Row>
            <Row style={{margin:'0px',alignItems:'center',justifyContent:'center'}}>
                <Col md={2} className="pimages">
                <img src={neo}/>
                </Col>
                <Col md={2} className="pimages ">
                <img src={sun}/>
                </Col>
                <Col md={2} className="pimages ">
                <img src={Friday}/>
                </Col>
                <Col md={2} className="pimages ">
                <img src={Monday}/>
                </Col>
                <Col md={2} className="pimages ">
                <img src={Sunday}/>
                </Col>
                </Row>
            <div className="content">
                <h2><b>Neoteric News</b></h2>
                <h5>(Since March 26, 2020)</h5>
                <br />
                <h5>SPE AUACT Student Chapter is extremely elated in bringing out the latest energy news, views and updates from all top sources of
                    international energy industries through our literary publication, "Neoteric News" frequently. To ensure that industry leaders keep pace with
                    this fast changing exciting industry, Neoteric News brings the latest developments in this sector. It not only extensively covers the sector
                    but also curates and gets you the most relevant news and analysis in the oil and gas industries.</h5>
            </div>
            <br /><br />
            <div className="content">
                <h2><b>Fossiliferous Friday</b></h2>
                <h5>(Since March 27, 2020)</h5>
                <br />
                <h5>No matter how advanced our economy might be, no matter how sophisticated our equipment becomes, for the foreseeable future we will
                    still depend on fossil fuel. As it's well stated, SPE AUACT Student Chapter finds a great chance of eliciting the fascinating intricacies of
                    fossils and geological facts through a periodical literature called "Fossiliferous Friday" .</h5>
            </div>
            <br /><br />
            <div className="content">
                <h2><b>Safety Sunday</b></h2>
                <h5>(From March 29, 2020 to May 31, 2020)</h5>
                <br />
                <h5>Safety is important to everyone and is a core value for the natural gas and oil industry. Personal safety and process safety work hand-in-
                    hand to ensure responsible development of natural gas and oil by providing the essential products that make modern life possible while
                    keeping our workers and nearby communities safe. SPE AUACT Student Chapter is exceedingly concerned and it throws light on safety
                    procedures to be followed by analysing various disasters of natural gas industries through a periodical literature "Safety Sunday". This
                    periodical edition was ceased on 31st May, 2020 and it paved way for the other Weekly, "Subsurface Sunday"</h5>
            </div>
            <br /><br />
            <div className="content">
                <h2><b>Machinery Monday</b></h2>
                <h5>(Since March 30, 2020)</h5>
                <br />
                <h5>One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man. SPE AUACT Student Chapter
                    insists on being an extraordinary man by mastering the extraordinary machines. Hence the student chapter finds the great opportunity to
                    share the information on machineries that rule the drilling, production, reservoir and refining industries through the periodical literature
                    "Machinery Monday".</h5>
            </div>
            <br /><br />
            <div className="content">
                <h2><b>Subsurface Sunday</b></h2>
                <h5>(Since June 07, 2020)</h5>
                <br />
                <h5>SPE AUACT Student Chapter is immensely privileged for having introduced the periodical literature, "Subsurface Sunday" on the most
                    fascinating facts of Reservoir Engineering which is of a great importance to the technical and economic evaluation of the oil and gas
                    reserves and the selection of the optimum method of recovery. This periodical is exceptionally useful to develop a feel for hydrocarbon
                    behavior in the reservoir and of various recovery methods. It provides the specific applications of the process used in reservoir
                    engineering and enhances the skills in solving reservoir engineering problems and maximizing recoverable reserves.</h5>
            </div>
            <br /><br />
            <h2 style={{paddingLeft:'15%',paddingRight:'15%'}}><b>All our periodicals will be published in our Social Media
                Platforms viz. Facebook, Instagram, LinkedIn and Twitter.</b></h2>
            <br />
            <div className="content">
            <h3 ><b>Do follow us:</b></h3>
            <Row style={{margin:'0px'}}>
                <Col md={3}>
                    <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                    <b>/spe_auact</b>
                </Col>
                <Col md={3}>
                    <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                    <b>@spe_auact</b>
                </Col>
                <Col md={3}>
                    <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                    <b>SPE AUACT SC</b>
                </Col>
                <Col md={3}>
                    <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                    <b>@spe.auact</b>
                </Col>
            </Row>
            </div>
        </div>
    )
}
export default Publications;