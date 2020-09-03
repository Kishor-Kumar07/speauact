import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import {Row,Col,Input, Label, Button} from 'reactstrap'
import Math from './math' 
import Popup from 'reactjs-popup';
import Scroll from 'react-scroll'; 
import MathJax from 'react-mathjax2'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import html2pdf from 'html2pdf.js'
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import _ from 'underscore'
import {Link} from 'react-router-dom'

import {useStore} from './store'

 
function Mydoc(props) { 
 
  const update =  useStore(state =>state.update)
  
  return (
      <div>
        <button onClick={(e)=>{
          e.preventDefault();
          update("1")
        }}>some</button>
          <Link target="_blank" to= '/preview'>
           
                       Preview
                     
                        </Link>
      </div>
  )

}

// class mydoc extends Component {
//      constructor(props)
//      {
//          super(props);
//          this.state={
//            ids:[],
//            pdf:false,
//            open:true
//          }
//          this.closeModal = this.closeModal.bind(this);
         
//      }

 


    
//      closeModal() {
//       this.setState({ open: false });
//     }
//      onClick = (e) => {
//       e.preventDefault();
//       _.uniq(this.state.ids).forEach(id => {
//         this.data(id)
       
//       })
//       this.setState({pdf:true,open:true})
//      }
//      data =(id)=>{
//       html2canvas(document.getElementById(id), {scrollY: -window.scrollY}).then(function(canvas) {
//         console.log('canvas'+id)
//          document.getElementById(id).innerHTML = '<img src="' +  canvas.toDataURL("image/png,1.0") + '" style="max-width: 100%;height: auto;"/>';
//        });
//     }   
//     async exportPDFWithComponent(ids) {
//       // console.log(_.uniq(ids))
//      var x=this.pdfExportComponent;
//      console.log(x)
      
//       console.log('pdf')
//       x.save();
//      }

//     render(props) {
            
//     const { open } = useStore(props.open)
//     console.log(open)
//         this.props.sab.qp.map((x,id) => {
//         <div>
        
//         {this.state.ids.push(1+id)}
//         {this.props.sab.qp[id].subqp.map((xb,subid)=>{
//         {this.state.ids.push(1+id+"."+this.props.csub[subid+1])}
        
        
//         })}
//         </div>
//         })
//         let element= <div>
//            <PDFExport
//           ref={component => (this.pdfExportComponent = component)}
//           paperSize="auto"
//           margin={40}
//           fileName={`Report for ${new Date().getFullYear()}`}
//           author="KendoReact Team"
//       >
//             <div id="pdf1">
            
//             <Row className="form-group">
//               <Col md={5}>
//                 <Label >{"Date : "+this.props.header.date}</Label>
//               </Col>
//               <Col md={3} className="offset-md-4">
//                 <Label >{"Rollno : "}</Label>
//               </Col>
//           </Row>
//           <Row className="form-group row-align">
//           <Label style={{textAlign:'center'}}>{"Subject : "+this.props.header.subject}</Label>
//           </Row>
//           <Row className="form-group row-align"> 
//           <Label style={{textAlign:'center'}}>{"Semester : "+this.props.header.semester}</Label> 
//           </Row>
//           <Row className="form-group row-align"> 
//           <Label style={{textAlign:'center'}}>{"Course : "+this.props.header.course}</Label>
//           </Row>
//           <Row className="form-group row-align"> 
//           <Label style={{textAlign:'center'}}>{"Regulation : "+this.props.header.regulation}</Label>
//           </Row>
//           <Row className="form-group">
//           <Col md={3} className="offset-md-1">
//           <Label >{"Time :"+this.props.header.time}</Label>
//           </Col>
//           <Col md={2} className="offset-md-5">
//           <Label >{"Marks : "+this.props.header.marks}</Label>
//           </Col>
//           </Row>

//             <Row className="form-group row-align"> 
//             <Label style={{textAlign:'center'}}><b>PART-A</b></Label> 
//             <Label>({this.props.totala})</Label> 
//             </Row>
//             {
//             this.props.sab.qp.map((x,id) => {
//             return(
//             <div>
//             <Row>
//             <Col md={1} className="offset-md-1">
//             {this.props.sab.qp[id].subqp.length!==0?<Label style={{textAlign:'right'}}>
//             {1+id+"."+this.props.csub[0]+")"}</Label>
//             :<Label style={{textAlign:'right'}}>{1+id}</Label>}
            
//             </Col>
//            <Col md={8}>
//             <Label id={1+id}><Math ques={x.question}/></Label>
            
//             <img style={{padding:'15px',paddingLeft:'55px',alignItems:'center',justifyContent:'center'}}height="200px" src={x.imagePreviewUrl} />
//             </Col>
//             <Col md={1}>
//             <Label>({x.mark})</Label>
//             </Col>
//             </Row>
            
            
//             {this.props.sab.qp[id].subqp.map((xb,subid)=>{
//             return(
//             <Row>
//             <Col md={1} className="offset-md-1">
//             <Label>{1+id+"."+this.props.csub[subid+1]+")"}</Label>
//             </Col>          
//             <Col md={8}>
            
//             <Label id={1+id+"."+this.props.csub[subid+1]}><Math ques={xb.question}/></Label>
//             <img style={{padding:'15px',paddingLeft:'55px',alignItems:'center',justifyContent:'center'}}height="200px" src={xb.imagePreviewUrl} />
//             </Col>
//             <Col md={1}>
//             <Label>({xb.mark})</Label>
//             </Col>
//             </Row>
//             );
//             })}
//             </div>
//             );
//             })
//             }
//             </div>
//             <div>
//             <Row className="form-group row-align">
//             <Label style={{textAlign:'center'}} ><b>PART-B</b></Label> 
//             <Label>({this.props.totalb})</Label> 
//             </Row>
//             {
//             this.props.sb.qp.map((x,id) => {
//             return(
//             <div>
//             <Row>
//             <Col md={1} className="offset-md-1">
//             {this.props.sb.qp[id].subqp.length!==0?<Label>
//             {this.props.id_a+1+id+"."+this.props.csub[0]+")"}</Label>
//             :<Label>{this.props.id_a+1+id}</Label>}
            
//             </Col>
//             <Col md={8}>
            
//             <Label><Math ques={x.question}/></Label>
//             <img style={{padding:'15px',paddingLeft:'55px'}}height="200px" src={x.imagePreviewUrl} />
//             </Col>
//             <Col md={1}>
//             <Label>({x.mark})</Label>
//             </Col>
//             </Row>
            
//             {this.props.sb.qp[id].subqp.map((xb,subid)=>{
//             return(
//             <Row>
//             <Col md={1} className="offset-md-1">
//             <Label>{this.props.id_a+1+id+"."+this.props.csub[subid+1]+")"}</Label>
//             </Col>
//             <Col md={8}>
            
//             <Label><Math ques={xb.question}/></Label>
//             <img style={{padding:'15px',paddingLeft:'55px'}}height="200px" src={xb.imagePreviewUrl} />
//             </Col>
//             <Col md={1}>
//             <Label>({xb.mark})</Label>
//             </Col>
//             </Row>
//             );
//             })}
            
//             </div>
//             );
//             })
//             }
//             </div>
//             <div>
//             <Row className="form-group row-align">
//             <Label style={{textAlign:'center'}}><b>PART-C</b></Label>
//             <Label>({this.props.totalc})</Label>
            
//             </Row>
//             {
//             this.props.sc.map((x,id) => {
//             return(
//             <div>
//             <Row>
//             <Col md={1} className="offset-md-1">
//             {this.props.sc[id].subqp.length!==0?<Label>
//             {this.props.idb+1+id+"."+this.props.csub[0]+")"}</Label>
//             :<Label>{this.props.idb+1+id}</Label>}
            
//             </Col>
//             <Col md={8}>
            
//             <Label><Math ques={x.question}/></Label>
//             <img style={{padding:'15px',paddingLeft:'55px'}}height="200px" src={x.imagePreviewUrl} />
//             </Col>
//             <Col md={1}>
//             <Label>({x.mark})</Label>
//             </Col>
//             </Row>
            
//             {this.props.sc[id].subqp.map((xb,subid)=>{
//             return(
//             <Row>
//             <Col md={1} className="offset-md-1">
//             <Label>{this.props.idb+1+id+"."+this.props.csub[subid+1]+")"}</Label>
//             </Col>
//             <Col md={8}>
            
//             <Label><Math ques={xb.question}/></Label>
//             <img style={{padding:'15px',paddingLeft:'55px'}}height="200px" src={xb.imagePreviewUrl} />
//             </Col>
//             <Col md={1}>
//             <Label>({xb.mark})</Label>
//             </Col>
//             </Row>
//             );
//             })}
            
//             </div>
//             );
//             })
//             }
//             </div>
            
//             </PDFExport>
//         </div>
//         return (
         
//           <div ref={container => (this.container = container)}>
//             <div>
//          <Row>
//            <Col className="preview">
//            <Button className="button col-md-2 offset-md-5" style={{backgroundColor:'violet'}} variant='contained' onClick={this.onClick}>Save</Button>
//             <Link target="_blank" to= '/preview'>
           
//            Preview
          
//             </Link>
//           </Col>
//         </Row>  
//             </div>
//             {console.log(this.state.ids)}
            
//     <Button onClick={()=>this.exportPDFWithComponent(this.state.ids)} disabled={!this.state.pdf} style={{alignItems:'center'}}>Generate PDF</Button>
            
//               <div>
           
//           {element}
        
//                 </div>
            
//             </div>
//         )
//     }
// }
export default Mydoc;
