import React from 'react';
import { MDBMedia } from 'mdbreact';
import './style.css'

const MediaObjectPage = () => {
  return (
    <MDBMedia>
      <MDBMedia left middle className="mr-3" href="#">
        <MDBMedia object src="https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Generic placeholder image" />
      </MDBMedia>
      <MDBMedia body>
        <MDBMedia heading>
          Top-aligned media
        </MDBMedia>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec lacinia congue felis in faucibus.</p>
        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </MDBMedia>
    </MDBMedia>
  );
}

export default MediaObjectPage;