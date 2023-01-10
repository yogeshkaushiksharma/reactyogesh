import React, { Component } from 'react';
 
class Footer extends Component {
  render() {
    return (
      <>
       <footer class="footer-w3ls text-center py-5">
        <div class="container pt-4">
            <div class="mx-auto" style={{maxwidth:"600"}}>
            
                <a href="index.html" class="footer-logo py-1">
                    <i class="fas fa-bold"></i>.
                </a>
                <p class="mt-4 text-white">Itaque earum rerum hic tenetur asaItaque
                    earum rerum hic tenetur asap iente delectus ac elit in
                    coeiciendis maiores.</p>
                <div class="social-icons-main mt-4 pb-3">
                    <ul class="social-icons3">
                        <li>
                            <a href="#facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#linkedinin">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#dribbble">
                                <i class="fab fa-dribbble"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          
            <p class="copy-right-w3 text-white mt-5 pt-4">© 2023 Biodata. All rights reserved | Develeop by
                <a href="mail to : yogesh.arbhinfotech1@gmail.com" target="_blank"> Yogeshkaushik.</a>
            </p>
        </div>
    </footer>
      </>
    );
  }
}
 
export default Footer