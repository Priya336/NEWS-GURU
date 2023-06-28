import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg   navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NAVBAR</Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li  className="navbar-brand">
                  <Link to="/business" >Business</Link>
                </li>
              
                <li  className="navbar-brand">
                  <Link to="/entertainment">Entertainment</Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/general">General</Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/health">Health</Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/science">Science</Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/sports">Sports</Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/topography">Topography</Link>
                </li>
              

              </ul>

            </div>
        
        </nav>
      </div>
    )
  }
}

