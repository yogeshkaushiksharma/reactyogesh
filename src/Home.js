import React, { Component } from 'react';
import about from './images/about.jpg';
import icon6 from './images/icon6.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import yogi from './images/yogi.jpeg';

import g1 from './images/g1.jpg';
import g2 from './images/g2.jpg';
import g3 from './images/g3.jpg';
import g4 from './images/g4.jpg';
import g5 from './images/g5.jpg';
import g6 from './images/g6.jpg';



class Home extends Component {
  render() {
    return (
      <>
        <section class="w3l-banner py-5" id="home">
        <div class="container py-md-5 py-4">
            <div class="row align-items-center pt-4">
                <div class="col-md-6 banner-left pe-xl-5">
                    <h4>Hi, I'm Yogesh Kaushik</h4>
                    <h3 class="mb-3 mt-1">Full Stack Developer</h3>
                    <p class="banner-sub me-md-5">I love to work in React Node developing Project.
                        I always try my best to make good Devloping with the best Projects.
                    </p>
                    <div class="d-flex align-items-center buttons-banner mt-sm-5 mt-4">
                        <a href="about.html" class="btn btn-style me-2">Hire Me</a>
                    </div>
                </div>
                <div class="col-md-6">
                </div>
            </div>
        </div>
        
        <div class="icon-effects-w3-1 text-right">
           
            <img src={icon2} className="App-logo" alt="logo" />
        </div>
        <div class="icon-effects-w3-2 text-right">
           
            <img src={icon3} className="App-logo" alt="logo" />
        </div>
        <div class="icon-effects-w3-3 text-right">
           
            <img src={icon1} className="App-logo" alt="logo" />
        </div>
        <div class="icon-effects-w3-4 text-right">
           
            <img src={icon6} className="App-logo" alt="logo" />
        </div>
       
    </section>
    

   
    <section class="w3l-bottom-grids-6 pt-sm-5 pb-5" id="features">
        <div class="container pt-lg-4">
            <div class="grids-area-hny main-cont-wthree-fea row">
                <div class="col-md-3 col-sm-4 ps-xl-5">
                    <h4 class="ab-exper-count mb-sm-4 ps-lg-4">2</h4>
                    <p class="ab-content ps-lg-4">years of experience working</p>
                </div>
                <div class="col-xl-8 col-md-9 col-sm-8 offset-xl-1 ps-xl-0 pe-xl-5 mt-sm-0 mt-4">
                    <h3 class="title-style mb-sm-5 mb-4">I'm a developer with a passion for web develop</h3>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 grids-feature">
                            <div class="area-box active">
                                <div class="icon-style">
                                    <i class="fas fa-lightbulb"></i>
                                </div>
                                <h4><a href="#feature" class="title-head">Creative Project</a></h4>
                                <a href="about.html" class="btn more p-0">Explore More<i
                                        class="fas fa-long-arrow-alt-right ms-1"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                            <div class="area-box">
                                <div class="icon-style">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <h4><a href="#feature" class="title-head">Web Deverloper</a></h4>
                                <a href="about.html" class="btn more p-0">Explore More<i
                                        class="fas fa-long-arrow-alt-right ms-1"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                            <div class="area-box">
                                <div class="icon-style">
                                    <i class="fas fa-layer-group"></i>
                                </div>
                                <h4><a href="#feature" class="title-head">Brand Identity</a></h4>
                                <a href="about.html" class="btn more p-0">Explore More<i
                                        class="fas fa-long-arrow-alt-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="w3l-aboutblock1 pt-lg-5 pt-2 pb-5" id="about">
        <div class="container py-md-5 py-4">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="position-relative">
                       
                        <img src={yogi} className="App-logo" alt="logo"  class="radius-image img-fluid"/>
                    </div>
                </div>
                <div class="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                    <h5 class="title-small mb-1">My Intro</h5>
                    <h3 class="title-style">About Me</h3>
                    <p class="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
                        adipisicing
                        elit. Non quae, fugiat consequatur voluptatem nihil ad. Lorem ipsum dolor sit amet.</p>
                    <div class="my-info mt-md-5 mt-4">
                        <ul class="single-info">
                            <li class="name-style">Name</li>
                            <li>:</li>
                            <li>
                                <p>Yogesh Kaushik</p>
                            </li>
                        </ul>
                        <ul class="single-info">
                            <li class="name-style">Age</li>
                            <li>:</li>
                            <li>
                                <p>24 Years</p>
                            </li>
                        </ul>
                        <ul class="single-info">
                            <li class="name-style">From</li>
                            <li>:</li>
                            <li>
                                <p>Delhi, India</p>
                            </li>
                        </ul>
                        <ul class="single-info">
                            <li class="name-style">Email</li>
                            <li>:</li>
                            <li>
                                <p><a href="mailto:yogesh.arbhinfotech1@mail.com">yogesh.arbhinfotech1@mail.com</a></p>
                            </li>
                        </ul>
                    </div>
                    <a href="#download" class="btn btn-style mt-5">Download CV</a>
                </div>
            </div>
        </div>
    </section>
    
    <section class="w3l-timeline-1 py-5">
        <div class="container py-lg-5 py-4">
            <div class="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 class="title-small">Resume</h5>
                <h3 class="title-style">Awesome Journey</h3>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h5 class="sub-title-timeline"><i class="fas fa-graduation-cap"></i> Education</h5>
                    <div class="timeline">
                        <div class="column">
                            <div class="title">
                                <h2>Master in Computer Engineering</h2>
                            </div>
                            <div class="description">
                                <p>Harvard University</p>
                                <h6><i class="fas fa-calendar-alt"></i> 2022 - 2023</h6>
                            </div>
                        </div>
                        <div class="column">
                            <div class="title">
                                <h2>Bachelor in Computer Engineering</h2>
                            </div>
                            <div class="description">
                                <p>University of California</p>
                                <h6><i class="fas fa-calendar-alt"></i> 2016 - 2019</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="col-lg-6 mt-lg-0 mt-4">
                    <h5 class="sub-title-timeline"><i class="fas fa-briefcase"></i> Experience</h5>
                    <div class="timeline">
                        <div class="column">
                            <div class="title">
                                <h2>Jr. WooCommerce Wordpress Developer</h2>
                            </div>
                            <div class="description">
                                <p>W3Layouts Pvt Lmt.</p>
                                <h6><i class="fas fa-calendar-alt"></i> 2022 - Current</h6>
                            </div>
                        </div>
                        <div class="column">
                            <div class="title">
                                <h2>Wordpress  Developer</h2>
                            </div>
                            <div class="description">
                                <p>W3Layouts</p>
                                <h6><i class="fas fa-calendar-alt"></i> 2021 - 2022</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="w3l-progress py-5" id="progress">
        <div class="container py-md-5 py-4">
            <div class="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 class="title-small mb-1">My Skills</h5>
                <h3 class="title-style">My Expertise Area</h3>
            </div>
            <div class="row py-lg-4">
                <div class="col-lg-6 pe-lg-5">
                    <div class="progress-info info1">
                        <h6 class="progress-tittle">Web Design <span class="">80%</span></h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped gradient-1" role="progressbar"
                                style={{width: "80"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div class="progress-info info2">
                        <h6 class="progress-tittle">HTML/CSS <span class="">95%</span>
                        </h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped gradient-2" role="progressbar"
                                style={{width: "95"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div class="progress-info info3">
                        <h6 class="progress-tittle">JavaScript <span class="">60%</span></h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped gradient-3" role="progressbar"
                                style={{width: "60"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div class="progress-info info4 mb-0">
                        <h6 class="progress-tittle">React JS <span class="">85%</span></h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped gradient-4" role="progressbar"
                                style={{width: "85"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-5 mt-lg-0 mt-5">
                    <div class="progress-info info1">
                        <h6 class="progress-tittle">Angular Js <span class="">80%</span></h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped gradient-1" role="progressbar"
                                style={{width: "80"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div class="progress-info info2">
                        <h6 class="progress-tittle">Bootstrap <span class="">95%</span>
                        </h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped gradient-2" role="progressbar"
                                style={{width: "90"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div class="progress-info info3">
                        <h6 class="progress-tittle">Graphic Design <span class="">60%</span></h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped gradient-3" role="progressbar"
                                style={{width: "60"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div class="progress-info info4 mb-0">
                        <h6 class="progress-tittle">UI/UX Design <span class="">85%</span></h6>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped gradient-4" role="progressbar"
                                style={{width: "85"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="w3l-gallery pb-5" id="gallery">
        <div class="container py-md-5 py-4">
            <div class="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 class="title-small mb-1">Portfolio</h5>
                <h3 class="title-style">Some of my most recent projects</h3>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 item">
                    <a href="assets/images/g1.jpg" data-lightbox="example-set" data-title="Project 1"
                        class="zoom d-block">
                       
                        <img src={g1} className="App-logo" alt="logo"  class="radius-image img-fluid"/>
                 
                        <span class="overlay__hover"></span>
                        <span class="hover-content">
                            <span class="title">Project 1</span>
                            <span class="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-md-6 item mt-md-0 mt-4">
                    <a href="assets/images/g2.jpg" data-lightbox="example-set" data-title="Project 2"
                        class="zoom d-block">
                        
                        <img src={g2} className="App-logo" alt="logo"  class="radius-image img-fluid"/>
                        <span class="overlay__hover"></span>
                        <span class="hover-content">
                            <span class="title">Project 2</span>
                            <span class="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>

                <div class="col-lg-4 col-md-6 item mt-lg-0 mt-4">
                    <a href="assets/images/g3.jpg" data-lightbox="example-set" data-title="Project 3"
                        class="zoom d-block">
                         <img src={g3} className="App-logo" alt="logo"  class="radius-image img-fluid"/>
                        <span class="overlay__hover"></span>
                        <span class="hover-content">
                            <span class="title">Project 3</span>
                            <span class="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>

                <div class="col-lg-4 col-md-6 item mt-4 pt-lg-2">
                    <a href="assets/images/g5.jpg" data-lightbox="example-set" data-title="Project 4"
                        class="zoom d-block">
                        <img src={g5} className="App-logo" alt="logo"  class="radius-image img-fluid"/>
                        <span class="overlay__hover"></span>
                        <span class="hover-content">
                            <span class="title">Project 4</span>
                            <span class="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>

                <div class="col-lg-4 col-md-6 item mt-4 pt-lg-2">
                    <a href="assets/images/g6.jpg" data-lightbox="example-set" data-title="Project 5"
                        class="zoom d-block">
                             <img src={g6} className="App-logo" alt="logo"  class="radius-image img-fluid"/>
                        <span class="overlay__hover"></span>
                        <span class="hover-content">
                            <span class="title">Project 5</span>
                            <span class="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>

                <div class="col-lg-4 col-md-6 item mt-4 pt-lg-2">
                    <a href="assets/images/g4.jpg" data-lightbox="example-set" data-title="Project 6"
                        class="zoom d-block">
                         <img src={g4} className="App-logo" alt="logo"  class="radius-image img-fluid"/>
                        <span class="overlay__hover"></span>
                        <span class="hover-content">
                            <span class="title">Project 6</span>
                            <span class="content">Quisque ut lectus, eros et, sed commodo risus.</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
   
</>
    );
  }
}
 
export default Home