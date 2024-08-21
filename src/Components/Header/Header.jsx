import React from 'react';
import "../../Styles/Header.css"

import { FaBars,FaTimes } from 'react-icons/fa';
import { IoPerson,IoAccessibility } from 'react-icons/io5';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const navRef=useRef();
    function showNavBar(){
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <div className='Header'>
           <Link to="/" className='AppLogo'>
           </Link>
            <nav  className='navbar' ref={navRef}>
              <div className="nav-left">
              <Link to="/">Home</Link>
              <Link to="/sinistre">Sinistres</Link>
              <Link to="/contact">Contact</Link>
              </div>
             <div className="nav-right">
             <Link to="/login" className='login'>Connexion</Link>
             <Link to="/contact" className='sign'>Inscri</Link>
             </div>
        <button className='nav-btn nav-close-btn'>
<FaTimes   onClick={showNavBar} /> 
        </button>

            </nav>
            <button className='nav-btn nav-close-btn'>
                <FaBars   onClick={showNavBar} />
            </button>
            
        </div>
    );
}

export default Header;
