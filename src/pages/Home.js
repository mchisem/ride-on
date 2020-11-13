import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import MediaObject from '../components/MediaObject';
import Works from '../components/Works';
// import Features from '../components/Features';
// import Search from '../components/Search';
// import Footer from '../components/Footer';
import AppleIcon from '../components/AppleIcon';
import AndroidIcon from '../components/AndroidIcon';
import '../App.css';

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Get the app and order now.
          <br></br>
          <AppleIcon></AppleIcon>
          <AndroidIcon></AndroidIcon>
        </p>
      </header>
      <MediaObject></MediaObject>
      <Works></Works>
      {/* <Works></Works>
      <Features></Features>
      <Search></Search>
      <Footer></Footer> */}
    </div>
  );
}

export default Homepage;