import React, { useState } from "react";
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

  const handleMouseOver = (index) => {
    let dts = state.map((dot, ii) => {
      if (index === ii) {
        dot.visible = true;
      }
      return dot;
    });
    setState(dts);
  };

  const handleMouseLeave = (index) => {
    let dts = state.map((dot, ii) => {
      if (index === ii) {
        dot.visible = false;
      }
      return dot;
    });
    setState(dts);
  };

  const handleClick = (index) => {
    let dts = state.map((dot, ii) => {
      if (index === ii) {
        dot.active = true;
        dot.visible = false;
      } else {
        dot.active = false;
      }
      return dot;
    });
    const currentSmallImage = state[index].image;
    setSmallImage(currentSmallImage);
    setState(dts);
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
                    state[index].visible || state[index].active
                      ? "default-p hovered-p"
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
    </div>
  );
}

{
  /* 
  <div>
{state.map((dot, index) => (
  <div className="dot-container" key={index}>
    <a href={`#${state[index].link}`}>
      <div
        className={state[index].active ? "dot active" : "dot"}
        onClick={() => handleClick(index)}
        onMouseOver={() => handleMouseOver(index)}
        onMouseLeave={() => handleMouseLeave(index)}
      ></div>
    </a>
    <p
      className={
        state[index].visible ? "default-p dot-hovered" : "default-p"
      }
    >
      {dot.title}
    </p>
  </div>
))}
</div> 
*/
}
