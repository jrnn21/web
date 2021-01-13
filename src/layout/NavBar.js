import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
  <>
   <nav className="container-fluid bg-dark d-flex justify-content-between align-items-center mb-3">
    <div className="mt-1">
     <NavLink to="/">
      <h3 className="text-light">JRnn21</h3>
     </NavLink>
    </div>
    <div>
     <NavLink to="/gg" className="NavItem" activeClassName="NavActive">
      HOME
     </NavLink>
     <NavLink to="/about" className="NavItem" activeClassName="NavActive">
      ABOUT
     </NavLink>
     <NavLink to="/login" className="NavItem" activeClassName="NavActive">
      LOG IN
     </NavLink>
     <NavLink to="/signup" className="NavItem" activeClassName="NavActive">
      SIGN UP
     </NavLink>
    </div>
   </nav>
  </>
 );
};

export default NavBar;
