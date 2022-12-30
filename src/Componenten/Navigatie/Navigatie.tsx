import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import "../Navigatie/Navigatie.css";
import { useEffect, useState } from 'react';

const Navigatie = () => {
  
    const [click, setClick] = useState(false);
    return (
      <>
        <nav className='navbar'  >
          <div className='navbar-container'  >
            <Link to='/' className='navbar-logo' >
             Shubham Portfolio
              <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon'>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
              <li className='nav-item' >
                <Link to='/' className='nav-links' >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Portfolio'
                  className='nav-links'
                
                >
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Contact'
                  className='nav-links'
                
                >
                  Contact
                </Link>
                
              </li>
              
                
              
            
            </ul>
           
          </div>
        </nav>
      </>
    );
};

export default Navigatie;

