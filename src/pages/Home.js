import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Header from  "../components/Header/header";
import MediaObject from '../components/MediaObject';
import Works from '../components/Works';
import Features from '../components/Features';
import Search from '../components/Search';
import '../App.css';

function Homepage() {
  return (
    <div className="App">
      <Header></Header>
      <MediaObject></MediaObject>
      <Works></Works>
      <Features></Features>
      <Search></Search>
    </div>
  );
}

export default Homepage;