import Home from './Views/home.js'
import Aboutus from './Views/aboutus.js'
import Contact from './Views/contact.js'
import Core from './Views/core.js'
import Event from './Views/eventpartners.js'
import Gallery from './Views/gallery.js'
import Header from './Views/header.js'
import Mission from './Views/missionandvision.js'
import Petrovision from './Views/petrovision.js'
import Publications from './Views/publications.js'
import Resources from './Views/resources.js'
import Sponsors from './Views/sponsors.js'

const Routes = [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: Aboutus
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/core",
      name: "core",
      component: Core
    },
    {
      path: "/event",
      name: "event",
      component: Event
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery
    },
    {
      path: "/header",
      name: "header",
      component: Header
    },
    {
      path: "/mission",
      name: "mission",
      component: Mission
    },
    {
      path: "/petrovision",
      name: "petrovision",
      component: Petrovision
    },
    {
      path: "/publications",
      name: "publications",
      component: Publications
    },
    {
      path: "/resources",
      name: "resources",
      component: Resources
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: Sponsors
    },
  ];
  
export default Routes;   