import React from "react";
import "./Footer.css";
import statueOfLibertyFoggy from "../images/newYork/statueOfLibertyFoggy.jpg";
import goldenGateSide from "../images/california/goldenGateFront.png";
import foggyMountain from "../images/foggyMountain.png";
import phone from "../images/icons/phone.png";
import locationMarker from "../images/icons/locationMarker.png";
import clock from "../images/icons/clock.png";
import instagram from "../images/icons/instagram.png";
import facebook from "../images/icons/facebook.png";
import linkedin from "../images/icons/linkedin.png";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-wrapper">
          <div className="company-info">
            <h2>Company Info</h2>
            <p>Travel.</p>
            <p>A Travel Company</p>
          </div>
          <div className="company-contact">
            <h2>Contacts</h2>
            <div className="contact-detail">
              <img className="footer-icon" src={phone} alt="phone" />
              <p>123-555-0000</p>
            </div>
            <div className="contact-detail">
              <img
                className="footer-icon"
                src={locationMarker}
                alt="location"
              />
              <p>42 Wallaby Way, Sydney</p>
            </div>
            <div className="contact-detail">
              <img className="footer-icon" src={clock} alt="clock" />
              <p>Mon - Sat 8:00 AM - 5:00 PM</p>
            </div>
            <div className="socials-container">
              <img src={instagram} alt="instagram" />
              <img src={linkedin} alt="linkedin" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
          <div className="footer-trips">
            <h2>Recent Trips</h2>
            <div className="footer-recent-trips-image-container">
              <img
                className="footer-recent-trips-image"
                src={statueOfLibertyFoggy}
                alt=""
              />
              <img
                className="footer-recent-trips-image"
                src={goldenGateSide}
                alt=""
              />
              <img
                className="footer-recent-trips-image"
                src={foggyMountain}
                alt=""
              />
              <img
                className="footer-recent-trips-image"
                src={foggyMountain}
                alt=""
              />
              <img
                className="footer-recent-trips-image"
                src={goldenGateSide}
                alt=""
              />
              <img
                className="footer-recent-trips-image"
                src={statueOfLibertyFoggy}
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
