import React from 'react';
// import '../node_module/font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import './Toolbar.css'

const toolbar= ()=>{
    return(
        <header className='tootbar'>
            <nav className='toolbar_navigation'>
                <div></div>
              <div className='toolbar_logo'><a href="#"><img src='../components/img/weblogo.png' alt="LOGO"/></a></div>
              <div className="spacer" />
              <div className='toolbar_navigation_item'>
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                                                             
                  </ul>
              </div>
              <div className="toolbar_navigation_icon">
                  <ul>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>

                  


                  

                  


                  </ul>
              </div>
              

            </nav>
        </header>
        
    )
}

export default toolbar;