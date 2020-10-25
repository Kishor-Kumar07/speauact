import React, { useState} from "react";
import { Collapse,  Navbar, NavbarToggler, NavbarBrand, Nav,Input, NavItem, NavLink,Row,Col } from 'reactstrap';
import SideNav from 'react-simple-sidenav';
import spe from '../Images/spe.png';
import {Link} from 'react-scroll'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMore from '@material-ui/icons/ExpandMore';
import sir1 from '../Images/IMG_0106.png'
import sir2 from '../Images/IMG_9815.png'
import pic from '../Images/IMG_9821.png'
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 390,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Header() {

  const [collapsed,setCollapsed] = useState(false)
  const [sidebarOpen, setOpen] = useState(false)
  const [bar, setbarOpen] = useState(false)
  function toggleNavbar() {
       setCollapsed(
       !collapsed
    )
  }
 function onSetSidebarOpen(prop) {
  setOpen(prop);
} 
const classes = useStyles();
  const [open, setOpener] = React.useState(false);

  const handleClick = () => {
    setOpener(!open);
  };

const element =

<div style={{paddingTop:"20px",textAlign:"center"}}>
    <hr style={{margin:"20px",backgroundColor:"black"}}/>
    <Link to="home" smooth={true} duration={1000}>{'\u2B24'}Home</Link>
    <hr style={{margin:"16px",backgroundColor:"black"}}/>
    <Link to="mission" smooth={true} duration={1000}>{'\u2B24'}Mission And Vision</Link>
    <hr style={{margin:"16px",backgroundColor:"black"}}/>
    <Link to="core" smooth={true} duration={1000}>{'\u2B24'}Core Committe</Link>
    <hr style={{margin:"16px",backgroundColor:"black"}}/>
    
    <List
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"/>
      }
      className={classes.root}>
      <ListItem button onClick={handleClick} >
        <ListItemText  primary="Events" />
        {open ? <i class="fa fa-angle-right"></i> : <ExpandMore/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit >
        <List component="div" disablePadding>
        <hr style={{margin:"8px",backgroundColor:"black"}}/>
          <ListItem button className={classes.nested}>
         <Link activeClass="active" smooth={true} duration={1000} to="petrovision" ><ListItemText className="list" primary="Petrovision"/></Link>
          </ListItem>
          <hr style={{margin:"8px",backgroundColor:"black"}}/>
          <ListItem button className={classes.nested}>
          <Link activeClass="active" smooth={true} duration={1000} to="petr" ><ListItemText className="list" primary="Petr-O-Probe" /></Link>
          </ListItem>
          <hr style={{margin:"8px",backgroundColor:"black"}}/>
          <ListItem button className={classes.nested}>
          <Link activeClass="active" smooth={true} duration={1000} to="petr"><ListItemText className="list" primary="Petr-O-ration" /></Link>
          </ListItem>
          <hr style={{margin:"8px",backgroundColor:"black"}}/>
          <ListItem button className={classes.nested}>
          <Link activeClass="active" smooth={true} duration={1000} to="social"><ListItemText className="list" primary="Social Initiatives" /></Link>
          </ListItem>
          <hr style={{margin:"8px",backgroundColor:"black"}}/>
        </List>
      </Collapse>
    </List>

    <hr style={{margin:"8px",backgroundColor:"black"}}/>
    <Link to="publications" smooth={true} duration={1000}>{'\u2B24'}Publications</Link>
    <hr style={{margin:"16px",backgroundColor:"black"}}/>
    <Link to="gallery" smooth={true} duration={1000}>{'\u2B24'}Gallery</Link>
    <hr style={{margin:"16px",backgroundColor:"black"}}/>
    <Link to="map" smooth={true} duration={1000}>{'\u2B24'}Map</Link>
    <hr style={{margin:"16px",backgroundColor:"black"}}/>
    <Link to="contact" smooth={true} duration={1000}>{'\u2B24'}Contact Us</Link>
    <hr style={{margin:"16px",backgroundColor:"black"}}/>
</div>

 
  
  return (
    <div>
    <div  className="home">
    <Row style={{margin:'0px',textAlign:"center"}}>
        <Col style={{paddingTop:"10px"}} sm={12} md={4}>
            <img width="30%" src={spe}/>
        </Col>
        <Col style={{paddingTop:"35px"}} sm={12} md={8}>
            <h1>AC Tech,Anna University SPE Student Chapter</h1>
        </Col> 
    </Row>
    <SideNav showNav={sidebarOpen} openFromRight="true" title="SPEAUACT WEBSITE DESIGN" children={element} onHideNav={() => onSetSidebarOpen(false)} />
    <Row style={{margin:'0px'}}>
        <Col md={4}/>
    </Row>
    <br />
    <Row style={{margin:'0px'}} >
      <Col md={2} className="offset-md-5 linked">
        <Link to="mission" smooth={true} duration={1000}>{'\u2B24'}Mission And Vision</Link>
      </Col>
      <Col md={2} className="linked">
        <Link to="core" smooth={true} duration={1000}>{'\u2B24'}Core Committee</Link>
      </Col>
      <Col md={1} className="linked">
        <Link to="gallery" smooth={true} duration={1000}>{'\u2B24'}Gallery</Link>
      </Col>
      <Col md={1} className="linked">
        <Link to="contact" smooth={true} duration={1000}>{'\u2B24'}Contact Us</Link>
      </Col>
      <Col md={1}>
        <span className="cart">
          <i className="fa fa-bars fa-2x nav-link" onClick={()=>onSetSidebarOpen(true)}/>
        </span>
    </Col>
    </Row>
      <br/>
   
    
  </div>
      <div className="bg">
        <Row style={{margin:'0px'}}>
          <Col md={7} className="offset-md-5">
            <Carousel className="carousel" enableAutoPlay={false} showThumbs={false}>
            <div>
                <img src={sir1} />
            </div>
            <div>
                <img src={sir2}/>
            </div>
            <div>
                <img src={pic}/>
            </div>
            </Carousel> 
          </Col>
        </Row>
      </div>
    </div>
    );
}

export default Header;