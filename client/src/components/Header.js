import React from 'react';
import './Header.css';

const Header = () => {
  return(
    <nav className="navbar navbar-expand-sm navbar-dark  fixed-top">        
      <strong><a className="navbar-brand" href="/">Agkolchips</a></strong>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#openUp" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse clearfix" id="openUp">
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
        <li className="nav-item ">
          <strong><a className="nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a></strong>
        </li>
        <li className="nav-item">
          <strong><a className="nav-link text-white" href="#abtUs">About Us</a></strong>
        </li>
        <li className="nav-item">
          <strong><a className="nav-link text-white" href="#services">Services</a></strong>
        </li>
        <li className="nav-item">
          <strong><a className="nav-link text-white" href="#contacts">Contacts</a></strong>
        </li>
      </ul>
    </div>           
  </nav> 
  );
}

export default Header;

     