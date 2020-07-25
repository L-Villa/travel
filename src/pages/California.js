import React, { useState, useEffect } from "react";
import "./NewYork.css";
import goldenGateSide from "../images/california/goldenGateSideFoggy.png";
import beach from "../images/california/beach.png";
import yosemite from "../images/california/yosemite.png";
import disneyland from "../images/california/disneyland.png";
import goldenGate from "../images/california/goldenGate.png";
import sequoia from "../images/california/sequoia.png";
import santaMonica from "../images/california/santaMonica.png";

export default function NewYork() {
  const [state, setState] = useState([
    {
      description:
        "Yosemite National Park is an American national park located in the western Sierra Nevada of Central California and covers an area of 748,436 acres.",
      active: true,
      visible: false,
      image: yosemite,
    },
    {
      description:
        "Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955.",
      active: false,
      visible: false,
      image: disneyland,
    },
    {
      description:
        "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.",
      active: false,
      visible: false,
      image: goldenGate,
    },
    {
      description:
        "Sequoia National Park is an American national park that protects 404,064 acres of forested mountainous terrain and contains the highest point in the contiguous United States, Mount Whitney",
      active: false,
      visible: false,
      image: sequoia,
    },
    {
      description:
        "The Santa Monica Pier is a large double-jointed pier that contains a small amusement park, concession stands, and areas for views and fishing.",
      active: false,
      visible: false,
      image: santaMonica,
    },
  ]);
  const [smallImage, setSmallImage] = useState(yosemite);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseOver = (index) => {
    let descriptionState = state.map((description, ii) => {
      if (index === ii && description.active === false) {
        description.visible = true;
      }
      return description;
    });
    setState(descriptionState);
  };

  const handleMouseLeave = (index) => {
    let descriptionState = state.map((description, ii) => {
      if (index === ii) {
        description.visible = false;
      }
      return description;
    });
    setState(descriptionState);
  };

  const handleClick = (index) => {
    let descriptionState = state.map((description, ii) => {
      if (index === ii) {
        description.active = true;
        description.visible = false;
      } else {
        description.active = false;
      }
      return description;
    });
    const currentSmallImage = state[index].image;
    setSmallImage(currentSmallImage);
    setState(descriptionState);
  };
  return (
    <div>
      <section className="location-name">
        <h2>California</h2>
        <img
          className="city-image-main"
          src={goldenGateSide}
          alt="Statue of Liberty"
        />
        <div className="location-support-info">
          <div className="location-support-info-card-container">
            <div className="location-support-info-card">
              <h3>238</h3>
              <p>
                Suppliers and the purchasing power of 400 million members,
                Travel can save you more!
              </p>
            </div>
            <div className="location-support-info-card">
              <h3>24/7</h3>
              <p>
                Travel worry-free knowing that our team is here if you need us;
                24 hours a day.
              </p>
            </div>
            <div className="location-support-info-card">
              <h3>56K</h3>
              <p>
                Over 56000 hotels in more than 200 countries and regions with
                flights to over 5000 cities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="experiences">
        <div className="experiences-wrapper">
          <h2>
            Catchy <br></br> <b>California</b> <br></br> Experiences
          </h2>
          <div className="p-container">
            <p className="p-container-first">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              magnam temporibus quisquam incidunt voluptatum, quidem
              praesentium, rem ea ab id nam illo cupiditate at tempore
              consectetur iste commodi quas eius nihil provident voluptates
              corrupti expedita eaque ipsam. Earum itaque excepturi ut nam a sit
              maiores modi quos, mollitia at repudiandae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              magnam temporibus quisquam incidunt voluptatum, quidem
              praesentium, rem ea ab id nam illo cupiditate at tempore
              consectetur iste commodi quas eius nihil provident voluptates
              corrupti expedita eaque ipsam. Earum itaque excepturi ut nam a sit
              maiores modi quos, mollitia at repudiandae!
            </p>
          </div>
          <img src={beach} alt="top of the rock" />
        </div>
      </section>
      <section className="experiences">
        <div className="experiences-wrapper">
          <h2>
            Things <br></br> To See In <br></br> <b>California</b>
          </h2>
          <div className="things-to-see-container">
            <img src={smallImage} alt="top of the rock" />
            <div className="location-description-container">
              {state.map((div, index) => (
                <p
                  className={
                    state[index].visible
                      ? "default-p hovered-p"
                      : "default-p" && state[index].active
                      ? "default-p active-p"
                      : "default-p"
                  }
                  onClick={() => handleClick(index)}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {div.description}
                </p>
              ))}
              ;
            </div>
          </div>
        </div>
      </section>
      <section className="table-1-col-4-row">
        <div className="table-wrapper">
          <div className="table-row">
            <h2>10 Days Trip  +  Breakfast</h2>
            <h2>$ 1500</h2>
          </div>
          <div className="table-row">
            <h2>7 Days Trip  +  Breakfast</h2>
            <h2>$ 1000</h2>
          </div>
          <div className="table-row">
            <h2>4 Days Trip  +  Breakfast</h2>
            <h2>$ 500</h2>
          </div>
          <button className="btn-white-fill-sq-md">Book Now</button>
        </div>
      </section>
    </div>
  );
}