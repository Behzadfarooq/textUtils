import React from "react";
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
// import { a } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={ `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" >Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                {props.aboutText}
              </a>
            </li>
          </ul>

    <Form>
      <Form.Check className={`form-check form switch text-${props.mode === 'light' ? 'dark': 'light'}`}
        type="switch"
        id="custom-switch"
        label={`${props.mode === 'light' ? 'Enable' : 'Disable'} Dark Mode`}
        onClick={props.toggleMode}
      />
 
    </Form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string };
Navbar.defaultProps = { title: "set title here", aboutText: "About" };
// Navbar.defaultProps = { title: "set title here", aboutText: "home" };