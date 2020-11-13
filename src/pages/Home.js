import React from "react";
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";
import MediaObject from '../components/MediaObject';
import Works from '../components/Works';
import Features from '../components/Features';
import Search from '../components/Search';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Get the app and order now.
          <br></br>
          <a
          className="app-download"
          id="apple-download"
          href="https://www.apple.com/?afid=p238%7CseIEs444j-dc_mtid_1870765e38482_pcrid_479177971632_pgrid_13945964887_&cid=aos-us-kwgo-brand-apple--slid---product-"
          target="apple"
          rel="apple download"
          >
            <MDBIcon fab icon="apple" />
          </a>
          <a
          className="app-download"
          id="android-apple"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            <MDBIcon fab icon="android" />
          </a>
        </p>
      </header>
      <MediaObject></MediaObject>
      <Works></Works>
      <Features></Features>
      <Search></Search>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;