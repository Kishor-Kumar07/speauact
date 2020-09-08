import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {slide as Menus} from 'react-burger-menu'
import { Form,Container,Row,Col,Input,Label, FormFeedback, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import '../Styles/style.css'
import {Accordion,Card} from 'react-bootstrap'
import {Link} from 'react-scroll'
import Menu, {
  Button, 
  Dropdown, 
  Separator, 
  DropdownItem, 
} from "@kenshooui/react-menu";
 

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    
    <Menus  right>
          <hr className="hr"/>
          <div className="links"><Link style={{"color":"black"}} activeClass="active"  smooth={true} duration={1000} to="home" >Home</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="mission">Mission and Vision</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="core">Core Commitee</Link></div>
          <hr className="hr"/>
    <List
     
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        
        </ListSubheader>
      }
      className={classes.root}
    >
     
      <ListItem button onClick={handleClick}>
        
        <ListItemText primary="Events" />
        {open ? <ExpandMore /> : <ExpandLess/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    <hr className="hr"/>
          <div className="links"><Link activeClass="active"  className='menu-item'  smooth={true} duration={1000} to="publications">Publications</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="gallery">Gallery</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="map">Map</Link></div>
          <hr className="hr"/>
          <div className="links"><Link activeClass="active" style={{"color":"black"}} smooth={true} duration={1000} to="contactus">Contact Us</Link></div>
          <hr className="hr"/>
    </Menus>
    
  );
}
