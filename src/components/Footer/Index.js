import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style.css';

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center">
        <div>
            <h4>Get the culture delivered to your email</h4>
            <hr style={{backgroundColor: "orange", width: "50%"}}></hr>
            <br></br>
            <p>Promotions, News, Business Updates, Employment Opportunities, and more...</p>
            <div className="subscription">
                <input placeholder="Email address..."></input>
                <button id="subscribe-btn">Subscribe</button>
            </div>
            <br></br>
        </div>

      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            <h3 style={{color:"orange"}}>BAM</h3>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Black and Mild Mobile </a>
            <br></br>
            <br></br>
            <div class="social text-center">
                <a class="mx-1" href="#"><i class="fab fa-facebook-f p-2 rounded rgba-white-light white-text"></i></a>
                <a class="mx-1" href="#"><i class="fab fa-twitter p-2 rounded rgba-white-light white-text"></i></a>
                <a class="mx-1" href="#"><i class="fab fa-linkedin-in p-2 rounded rgba-white-light white-text"></i></a>
                <a class="mx-1" href="#"><i class="fab fa-instagram p-2 rounded rgba-white-light white-text"></i></a>
            </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;