import React from "react";
import "./About.css";
import house from "../images/icons/house.png";
import worldMap from "../images/icons/worldMap.png";
import moneyBag from "../images/icons/moneyBag.png";
import instagram from "../images/icons/instagram.png";
import facebook from "../images/icons/facebook.png";
import linkedin from "../images/icons/linkedin.png";
import portrait2 from "../images/portraits/portrait2.png";
import portrait3 from "../images/portraits/portrait3.png";
import portrait4 from "../images/portraits/portrait4.png";

export default function About() {
  return (
    <div>
      <section className="info-banner">
        <div className="info-banner-text-container">
          <h2>Why Choose Us</h2>
          <p>A subheading</p>
        </div>
        <div className="info-banner-card-container">
          <div className="info-banner-card">
            <img src={house} alt="house" />
            <h2>Handpicked Hotels</h2>
            <p>
              Every journey is different. Find a home that puts you in the
              correct headspace
            </p>
          </div>
          <div className="info-banner-card">
            <img src={worldMap} alt="world map" />
            <h2>World Class Service</h2>
            <p>
              Our expert employees will take away all the travel stress you may
              experience.
            </p>
          </div>
          <div className="info-banner-card">
            <img src={moneyBag} alt="Money Bag" />
            <h2>Best Price Gaurantee</h2>
            <p>
              Our partnerships will ensure you get the best prices for all your
              purchases.
            </p>
          </div>
        </div>
      </section>
      <section className="info-banner">
        <div className="info-banner-text-container">
          <h2>Our Team</h2>
        </div>
        <div className="info-banner-card-container">
          <div className="info-banner-card-photo">
            <div className="card-photo-icon">
              <img src={portrait4} alt="" />
              <div className="social-button-container">
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
                <img src={facebook} alt="facebook" />
              </div>
            </div>
            <h2>John Doe</h2>
            <p>Travel Expert</p>
          </div>
          <div className="info-banner-card-photo">
            <div className="card-photo-icon">
              <img src={portrait2} alt="" />
              <div className="social-button-container">
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
                <img src={facebook} alt="facebook" />
              </div>
            </div>
            <h2>Doe John</h2>
            <p>Travel Expert</p>
          </div>
          <div className="info-banner-card-photo">
            <div className="card-photo-icon">
              <img src={portrait3} alt="" />
              <div className="social-button-container">
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
                <img src={facebook} alt="facebook" />
              </div>
            </div>
            <h2>Jane Doe</h2>
            <p>Travel Expert</p>
          </div>
        </div>
        <div className="info-banner-card-container"></div>
      </section>
    </div>
  );
}
