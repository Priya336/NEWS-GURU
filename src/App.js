
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
 
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pagesize=15;
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
    
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
    
  }
  render() {
    return (
      <div>
      <Router>
      
          <Navbar></Navbar>
          <LoadingBar
        color='#f11946'
        
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/" elements={
              <News  apikey={this.apikey}setprogress={ this.setprogress} pagesize={this.pagesize} country="in" key="science" category="science"/>}>
            </Route>
            <Route exact path="/general" element={
              <News  apikey={this.apikey}setprogress={ this.setprogress} pagesize={this.pagesize} country="in" key="general" category="general"/>}>
            </Route>
            <Route exact path="/entertainment" element={
              <News  apikey={this.apikey}setprogress={ this.setprogress} pagesize={this.pagesize} country="in" key="entertainment" category="entertainment"/>}>
            </Route>
            <Route exact path="/sports" element={
              <News  apikey={this.apikey}setprogress={ this.setprogress} pagesize={this.pagesize} country="in" key = "sports" category="sports"/>} >
            </Route>
            <Route exact path="/topography" element={
              <News  apikey={this.apikey}setprogress={ this.setprogress} pagesize={this.pagesize} country="" key="topography" category="topography"/>}>
            </Route>
            <Route exact path="/science"element={
              <News  apikey={this.apikey}setprogress={ this.setprogress} pagesize={this.pagesize} country="in" key="science" category="science"/>}>
            </Route>
            <Route exact path="/health"element ={
              <News  apikey={this.apikey}setprogress={ this.setprogress} pagesize={this.pagesize} country="in" key="health" category="health"/>}>
            </Route>
            <Route exact path="/business"element ={
              <News  apikey={this.apikey}setprogress={ this.setprogress} pagesize={this.pagesize} country="in" key="business" category="business"/>}>
            </Route>
          </Routes>
       
      </Router>
      
      </div>
    )
  }
}


