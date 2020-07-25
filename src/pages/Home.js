import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import statueOfLibertyFoggy from "../images/newYork/statueOfLibertyFoggy.jpg";
import goldenGateSide from "../images/goldenGateSide2.png";
import foggyMountain from "../images/foggyMountain.png";
import house from "../images/icons/house.png";
import worldMap from "../images/icons/worldMap.png";
import moneyBag from "../images/icons/moneyBag.png";
import instagram from "../images/icons/instagram.png";
import facebook from "../images/icons/facebook.png";
import linkedin from "../images/icons/linkedin.png";
import portrait2 from "../images/portrait2.png";
import portrait3 from "../images/portrait3.png";
import portrait4 from "../images/portrait4.png";

export default function Home() {
  return (
    <div>
      <section className="home-landing">
        <div className="home-landing-text-container">
          <h2>Discover The Perfect Desination</h2>
          <p>
            Sometimes the problem is not that there is no time to travel, but
            that there is no time to plan it. But you are lucky; you have us.
            Save time and use our service.
          </p>
          <button>Start Searching</button>
        </div>
        <div className="vertical-text left-side">
          <div>
            <a href="#">facebook</a>
          </div>
          <div>
            <a href="#">instagram</a>
          </div>
          <div>
            <a href="#">linkedin</a>
          </div>
        </div>
        <div className="vertical-text right-side">
          <div>
            <a href="#">123-555-0000</a>
          </div>
          <div>/</div>
          <div>
            <a href="#">travel@travel.com</a>
          </div>
        </div>
        <a href="#recent-trips">
          <div className="scroll-down-indicator">↓</div>
        </a>
      </section>
      <section className="recent-trips" id="recent-trips">
        <h2>Recent Trips</h2>
        <div className="recent-trips-card-container">
          <Link to="/newyork">
            <div className="recent-trips-card">
              <div className="recent-trips-card-text-container">
                <h2>New York</h2>
                <p>New York City</p>
              </div>
              <img src={statueOfLibertyFoggy} alt="Statue of Liberty" />
            </div>
          </Link>
          <Link to="/california">
            <div className="recent-trips-card">
              <div className="recent-trips-card-text-container">
                <h2>California</h2>
                <p>San Francisco</p>
              </div>
              <img src={goldenGateSide} alt="Golden Gate Bridge" />
            </div>
          </Link>
          <Link to="/italy">
            <div className="recent-trips-card">
              <div className="recent-trips-card-text-container">
                <h2>Italy</h2>
                <p>South Tyrol</p>
              </div>
              <img src={foggyMountain} alt="" />
            </div>
          </Link>
        </div>
      </section>
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
      <section className="info-banner-2">
        <div className="info-banner-2-wrapper">
          <div className="info-banner-text-container">
            <h2>This trip will be the best</h2>
            <p>
              In travel and after it, as a rule, there is an increase in the
              general vitality and ability to resist the external pressure of
              the environment. The need to solve everyday road problems
              contributes to the development of practical intelligence.
            </p>
          </div>
          <div className="info-banner-card-number-container">
            <div className="info-banner-card-number">
              <h2>1350</h2>
              <p>Trips</p>
            </div>
            <div className="info-banner-card-number">
              <h2>1997</h2>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="info-banner-card-container"></div>
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
      <section className="image-divider"></section>
      <section className="info-banner">
        <div className="info-banner-text-container">
          <h2>Testimonials</h2>
        </div>
        <div className="info-banner-testimonial-container">
          <div className="testimonial-image-container">
            <div className="testimonial-image"></div>
          </div>
          <div className="testimonial-text">
            <h2>Jane Doetu</h2>
            <p>December 15, 2018 at 11:17 am</p>
            <p>
              Booked a vacation through your company in Cyprus at the end of
              April. The hotel is very decent, the quality of food is good, the
              area is large, so even the pool is there. Azure water and white
              velvet sand will not leave anyone indifferent. The nearest beach
              is about 150 meters from this hotel. Thank you very much, guys, I
              look forward to a new meeting with you.
            </p>
            <div className="ratings">
              <div className="rating">
                <h3>Accomodation</h3>
                <div className="rating-line-container">
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line"></div>
                </div>
              </div>
              <div className="rating">
                <h3>Destination</h3>
                <div className="rating-line-container">
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                </div>
              </div>
              <div className="rating">
                <h3>Meals</h3>
                <div className="rating-line-container">
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line"></div>
                  <div className="rating-line"></div>
                </div>
              </div>
              <div className="rating">
                <h3>Transport</h3>
                <div className="rating-line-container">
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line"></div>
                </div>
              </div>
              <div className="rating">
                <h3>Price</h3>
                <div className="rating-line-container">
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line"></div>
                </div>
              </div>
              <div className="rating">
                <h3>Overall</h3>
                <div className="rating-line-container">
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line filled"></div>
                  <div className="rating-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-banner-card-container"></div>
      </section>
      <section className="contact-banner" id="contact">
        <div className="wrapper">
          <form className="contact-container">
            <h2>Get In Touch With Us</h2>
            <p>We'll get back to you as soon as possible</p>
            <div className="input-container">
              <label htmlFor="what">Full Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="input-container">
              <label htmlFor="what">Email</label>
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="input-container">
              <label htmlFor="what">Phone Number</label>
              <input type="text" placeholder="Your Phone Number" />
            </div>
            <div className="input-container">
              <label htmlFor="what">Travel Interests</label>
              <input type="text" placeholder="Your Travel Interests" />
            </div>
            <div className="input-container">
              <label htmlFor="what">Number Of Travelers</label>
              <input type="text" placeholder="How People Will Be Traveling" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}
