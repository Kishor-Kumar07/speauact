import React from 'react'
import {Row,Col} from 'reactstrap'
import mission from '../Images/14111@2x.png'
import '../Styles/gallery.css'


 function Gallery() {
    return (
        <div id="gallery">
            <br/>
            <Row style={{margin:'0px'}}>
                <Col sm={12} md={12} lg={12} style={{color:"white",backgroundColor:"darkgreen"}}>
                    <h1 className="gallery">Gallery</h1>
               </Col>
            </Row>
            <br/>
        </div>
    )
}
export default Gallery;