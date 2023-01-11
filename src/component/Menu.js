import React, { Component } from 'react'
import Home from'../Home';
import About from'../About'; 
import {BrowserRouter,Route,Link,Routes } from 'react-router-dom';

export default class 
 extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
            <ul class="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                <li class="nav-item">
                    <Link to class="nav-link active" aria-current="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link  class="nav-link" aria-current to="/about">About</Link>
                </li>
            </ul>
                <Routes>
                    <Route exact path='/' elements={<Home/>}></Route>
                    <Route exact path='/about' elements={<About/>}></Route>
                </Routes>
        </BrowserRouter>
      </>
    )
  }
}
