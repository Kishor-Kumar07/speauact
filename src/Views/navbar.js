import React, { Component } from "react";
import {slide as Menu} from 'react-burger-menu'
import { Form,Container,Row,Col,Input,Button,Label, FormFeedback, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import '../Styles/style.css'
import {Accordion,Card} from 'react-bootstrap'
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
      <div>
        <Menu  right>
          <hr className="hr"/>
          <div className="links"><Link style={{"color":"black"}} activeClass="active"  smooth={true} duration={1000} to="home" >Home</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="mission">Mission and Vision</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="core">Core Commitee</Link></div>
          <hr className="hr"/>
            {/* <ul style={{"list-style-type": "none"}} class="cd-accordion margin-top-lg margin-bottom-lg" >
              <li class="cd-accordion__item cd-accordion__item--has-children">
                <input class="cd-accordion__input" type="checkbox" name ="group-1" id="group-1"/>
                <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-1"><span>Group 1</span></label>
                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                    <Link activeClass="active" spy={true} smooth={true} duration={1000} to="mission">Mission and Vision</Link><br/>
                    <hr className="hr"/>
                    <Link activeClass="active" spy={true} smooth={true} duration={1000} to="core">Core Commitee</Link><br/>
                    <hr className="hr"/>
                    <Link activeClass="active" spy={true} smooth={true} duration={1000} to="gallery">Gallery</Link><br/>
                    <hr className="hr"/>
                    <Link activeClass="active" spy={true} smooth={true} duration={1000} to="contactus">Contact Us</Link>
                    <hr className="hr"/>
                    </ul>
                  </li>
              </ul> */}
              <hr className="hr"/>
          <div className="links"><Link activeClass="active" className='menu-item' style={{"color":"black"}} smooth={true} duration={1000} to="publications">Publications</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="gallery">Gallery</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="map">Map</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="contactus">Contact Us</Link></div>
          <hr className="hr"/>
        </Menu>
      </div>
    );
  }
}

export default Header;