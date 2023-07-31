import React, { Component } from 'react'
import favi from './favi.png'
import {Link} from "react-router-dom";
export default class navbar extends Component {
  render() {
    return (
      <div  >
        <nav className="navbar fixed-top navbar-expand-lg   navbar-dark bg-dark">
          <div className="container-fluid" >
          <div><h2 style={{color:'white',margin:10,padding:10,backgroundColor:'#23d923'}}>NEWSGURU</h2></div>
          
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li  className="navbar-brand">
                  <Link to="/business" ><b style={{fontSize:30}}>Business</b></Link>
                </li>
              
                <li  className="navbar-brand">
                  <Link to="/entertainment"><b style={{fontSize:30}}>Entertainment</b></Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/general"><b style={{fontSize:30}}>General</b></Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/health"><b style={{fontSize:30}}>Health</b></Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/science"><b style={{fontSize:30}}>Science</b></Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/sports"><b style={{fontSize:30}}>Sports</b></Link>
                </li>
                <li  className="navbar-brand">
                  <Link to="/topography"><b style={{fontSize:30}}>Topography</b></Link>
                </li>
             

              </ul>

            </div>
        
        </nav>
      </div>
    )
  }
}

