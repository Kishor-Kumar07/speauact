import React, { Component } from "react";
import {slide as Menu} from 'react-burger-menu'
import { Form,Container,Row,Col,Input,Button,Label, FormFeedback, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import '../Styles/style.css'
import {Link} from 'react-scroll'

class Header extends Component {
constructor(props){
  super(props)
  this.state={ 
    open:false
  } 
  this.handleOpen = this.handleOpen.bind(this);
}
handleOpen=(prop)=>{ 
  this.setState({open:prop}) 
}
  render(){
    return (
      <Menu isOpen={this.state.open} onOpen={()=>this.handleOpen(true)} onClose={()=>this.handleOpen(false)} right>
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to='/' activeClassName="active" exact path="/" activeStyle={{backgroundColor: 'violet', color: 'white'}}> Home </NavLink>
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to='/aboutus/' activeClassName="active" exact path="/aboutus/" activeStyle={{backgroundColor: 'violet', color: 'white'}}> About us </NavLink>
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to="/contact/" activeClassName="active" exact path="/contact/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Contact Us</NavLink>
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to="/core/" activeClassName="active" exact path="/core/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Core Commitee</NavLink>
        {/* <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to="/event/" activeClassName="active" exact path="/event/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Events */}
        <Input style={{textAlign:'center'}} type="select" className="form-control"
              id="semester" name="semester" placeholder="Semester">
                <option value="Petrovision"style={{textAlign:'center'}}>Petrovision</option>
                <option value="=-I">Petr-O-Probe</option>
                <option value="Assessment-II">Assessment-II</option>
                <option value="Semester">Semester</option>
                </Input>
          {/* </NavLink> */}
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to="/gallery/" activeClassName="active" exact path="/gallery/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Gallery</NavLink>
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to="/mission/" activeClassName="active" exact path="/mission/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Mission</NavLink>
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to="/petrovision/" activeClassName="active" exact path="/petrovision/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Petrovision</NavLink>
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to="/publications/" activeClassName="active" exact path="/publications/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Publications</NavLink>
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to="/resources/" activeClassName="active" exact path="/resources/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Resources</NavLink>
        <NavLink tag={RRNavLink} onClick={()=>this.handleOpen(false)} className='menu-item' to="/sponsors/" activeClassName="active" exact path="/sponsors/" activeStyle={{backgroundColor: 'violet', color: 'white'}}>Sponsors</NavLink>

      </Menu>
    );
  }
}

export default Header;