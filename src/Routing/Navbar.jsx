import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
     {/* header section start */}
<div className="header_section">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo"><a href="index.html"><img src="images/logo.png" /></a></div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customer">CUSTOMER</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">NEWS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">CONTACT US</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/table">TABLE</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login">LOGIN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">SIGNUP</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><img src="images/search-icon.png" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
{/* header section end */}

    </>
  );
}

export default Navbar;
