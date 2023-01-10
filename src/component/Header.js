import React, { Component } from 'react';
import Menu from'./Menu';
class Header extends Component {
  render() {
    return (
      <>
      <header id="site-header" class="fixed-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="index.html">
                    <i class="fas fa-bold"></i>.
                </a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <Menu/>
                    <form action="#search" method="GET" class="d-flex search-header">
                        <input class="form-control" type="search" placeholder="Enter Keyword..." aria-label="Search"
                            required />
                        <button class="btn btn-style" type="submit">Search</button>
                    </form>
                </div>
               
                <div class="cont-ser-position">
                    <nav class="navigation">
                        <div class="theme-switch-wrapper">
                            <label class="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div class="mode-container">
                                    <i class="gg-sun"></i>
                                    <i class="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
               
            </nav>
        </div>
    </header>
    
      </>
    );
  }
}
 
export default Header