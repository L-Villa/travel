import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./NewYork.css";
import statueOfLibertyFoggy from "../images/newYork/statueOfLibertyFoggy.jpg";
import empireStateBuilding from "../images/newYork/empireStateBuilding.jpg";
import centralPark from "../images/newYork/centralPark.png";
import statueOfLiberty from "../images/newYork/statueOfLiberty.png";
import timesSquare from "../images/newYork/timesSquare.png";
import brooklynBridge from "../images/newYork/brooklynBridge.png";

export default function NewYork() {
  const [state, setState] = useState([
    {
      description:
        "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City.",
      active: true,
      visible: false,
      image: empireStateBuilding,
    },
    {
      description:
        "Central Park is the fifth-largest park in the city by area, covering 843 acres. The park is the most visited urban park in the United States.",
      active: false,
      visible: false,
      image: centralPark,
    },
    {
      description:
        "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor.",
      active: false,
      visible: false,
      image: statueOfLiberty,
    },
    {
      description:
        "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section of New York City.",
      active: false,
      visible: false,
      image: timesSquare,
    },
    {
      description:
        "The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn.",
      active: false,
      visible: false,
      image: brooklynBridge,
    },
  ]);
  const [smallImage, setSmallImage] = useState(empireStateBuilding);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    tl.from(".location-name img", {
      duration: 1.8,
      y: 1000,
      ease: "expo.out",
    })
      .from(".location-name h2", {
        duration: 1.8,
        delay: -1.8,
        y: -500,
        ease: "expo.out",
      })
      .from(".location-support-info", {
        duration: 1.8,
        delay: -1.8,
        height: 2500,
        ease: "expo.out",
      });
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
        <h2>New York</h2>
        <img
          className="city-image-main"
          src={statueOfLibertyFoggy}
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
            Catchy <br></br> <b>New York</b> <br></br> Experiences
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
          <img src={empireStateBuilding} alt="top of the rock" />
        </div>
      </section>
      <section className="experiences">
        <div className="experiences-wrapper">
          <h2>
            Things <br></br> To See In <br></br> <b>New York</b>
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
            <h2>10 Days Trip + Breakfast</h2>
            <h2>$ 1500</h2>
          </div>
          <div className="table-row">
            <h2>7 Days Trip + Breakfast</h2>
            <h2>$ 1000</h2>
          </div>
          <div className="table-row">
            <h2>4 Days Trip + Breakfast</h2>
            <h2>$ 500</h2>
          </div>
          <button className="btn-white-fill-sq-md">Book Now</button>
        </div>
      </section>
    </div>
  );
}
