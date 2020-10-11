import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {slide as Menus} from 'react-burger-menu'
import '../Styles/style.css'
import {Link} from 'react-scroll'

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
          <hr/>
          <div className="links"><span className="spots">{'\u2B24'}<span style={{color:"black"}}><Link activeClass="active" className='menu-item'  smooth={true} duration={1000} to="home">Home</Link></span></span></div>
          <hr/>
          <div className="links"><span className="spots">{'\u2B24'}<span style={{color:"black"}}><Link activeClass="active"  className='menu-item' smooth={true} duration={1000} to="mission">Mission and Vision</Link></span></span></div>
          <hr/>
          <div className="links"><span className="spots">{'\u2B24'}<span style={{color:"black"}}><Link activeClass="active"  className='menu-item' smooth={true} duration={1000} to="core">Core Commitee</Link></span></span></div>
          <hr/>
    <List
     
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        
        </ListSubheader>
      }
      className={classes.root}
    >
     
      <ListItem button onClick={handleClick} >
        
        <ListItemText  primary="Events" />
        {open ? <ExpandMore /> : <ExpandLess/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit >
        <List component="div" disablePadding>
        <hr/>
          <ListItem button className={classes.nested}>
         <Link activeClass="active" smooth={true} duration={1000} to="petrovision" ><ListItemText className="list" primary="Petrovision"/></Link>
          </ListItem>
          <hr/>
          <ListItem button className={classes.nested}>
          <Link activeClass="active" smooth={true} duration={1000} to="petr" ><ListItemText className="list" primary="Petr-O-Probe" /></Link>
          </ListItem>
          <hr/>
          <ListItem button className={classes.nested}>
          <Link activeClass="active" smooth={true} duration={1000} to="petr"><ListItemText className="list" primary="Petr-O-ration" /></Link>
          </ListItem>
          <hr/>
          <ListItem button className={classes.nested}>
          <Link activeClass="active" smooth={true} duration={1000} to="social"><ListItemText className="list" primary="Social Initiatives" /></Link>
          </ListItem>
          <hr/>
        </List>
      </Collapse>
    </List>
    <hr/>
          <div className="links"><span className="spots">{'\u2B24'}<span style={{color:"black"}}><Link activeClass="active"  className='menu-item'  smooth={true} duration={1000} to="publications">Publications</Link></span></span></div>
          <hr/>
          <div className="links"><span className="spots">{'\u2B24'}<span style={{color:"black"}}><Link activeClass="active"  className='menu-item' smooth={true} duration={1000} to="gallery">Gallery</Link></span></span></div>
          <hr/>
          <div className="links"><span className="spots">{'\u2B24'}<span style={{color:"black"}}><Link activeClass="active" className='menu-item' smooth={true} duration={1000} to="map">Map</Link></span></span></div>
          <hr/>
          <div className="links"><span className="spots">{'\u2B24'}<span style={{color:"black"}}><Link activeClass="active" className='menu-item' smooth={true} duration={1000} to="contactus">Contact Us</Link></span></span></div>
          <hr/>
          <div style={{textAlign:"center"}}>
            <span style={{paddingRight:"10px"}}>{'\u2B24'}</span>
            <span style={{paddingRight:"10px"}}>{'\u2B24'}</span>
            <span style={{paddingRight:"10px"}}>{'\u2B24'}</span>
          </div>
    </Menus>
    
  );
}
