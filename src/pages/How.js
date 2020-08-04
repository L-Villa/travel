import React from "react";
import "./How.css";
import search from "../images/icons/search.png";
import pack from "../images/icons/pack.png";
import smile from "../images/icons/smile.png";

export default function How() {
  return (
    <div>
      <section className="text-1-col">
        <div className="text-wrapper">
          <h2>We'll Do All The Heavy Lifting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            mollitia voluptate ratione, laborum aspernatur consequatur dolore
            numquam cum temporibus dolor odit quia eius praesentium labore!
            Maiores vel iusto non odio rem ipsum quo, dolore amet placeat
            consequatur facere, ducimus porro!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            mollitia voluptate ratione, laborum aspernatur consequatur dolore
            numquam cum temporibus dolor odit quia eius praesentium labore!
          </p>
        </div>
      </section>
      <section className="info-banner grey-background">
        <div className="info-banner-text-container">
          <h2>How It Works</h2>
          <p>Travel in just a few easy steps</p>
        </div>
        <div className="info-banner-card-container">
          <div className="info-banner-card">
            <img src={search} alt="search" />
            <h2>Search</h2>
            <p>
              Use our search tool to quickly discover your next destination.
            </p>
          </div>
          <div className="info-banner-card">
            <img src={pack} alt="pack luggage" />
            <h2>Pack</h2>
            <p>
              Get your things ready as soon as you've found the destination of
              your dreams.
            </p>
          </div>
          <div className="info-banner-card">
            <img src={smile} alt="smiley face" />
            <h2>Enjoy</h2>
            <p>
              Discover all the wonderful activities located at your new
              destination.
            </p>
          </div>
        </div>
      </section>
      <section className="image-divider"></section>{" "}
    </div>
  );
}
