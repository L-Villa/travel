import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./NewYork.css";
import foggyMountain from "../images/italy/foggyMountain.png";
import italyLong from "../images/italy/italyLong.png";
import bridgeOfSighs from "../images/italy/bridgeOfSighs.png";
import colosseum from "../images/italy/colosseum.png";
import leaningTowerOfPisa from "../images/italy/leaningTowerOfPisa.png";
import cinqueTerre from "../images/italy/cinqueTerre.png";
import davidOfMichelangelo from "../images/italy/davidOfMichelangelo.png";

export default function NewYork() {
  const [state, setState] = useState([
    {
      description:
        "The Bridge of Sighs is a bridge in Venice, Italy. The enclosed bridge passes over the Rio di Palazzo and was built in 1600.",
      active: true,
      visible: false,
      image: bridgeOfSighs,
    },
    {
      description:
        "The Colosseum is an oval amphitheatre in the centre of the city of Rome. The largest amphitheatre ever built at the time and held 50,000 to 80,000 spectators.",
      active: false,
      visible: false,
      image: colosseum,
    },
    {
      description:
        "The Leaning Tower of Pisa is the campanile of the cathedral of the Italian city of Pisa, known worldwide for its nearly four-degree lean, the result of an unstable foundation.",
      active: false,
      visible: false,
      image: leaningTowerOfPisa,
    },
    {
      description:
        "The Cinque Terre is a coastal area within Liguria, in the northwest of Italy, and comprises five villages: Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore.",
      active: false,
      visible: false,
      image: cinqueTerre,
    },
    {
      description:
        "David of Michelangelo is a 5.17-metre marble statue of the Biblical figure David, a favoured subject in the art of Florence, created between 1501 and 1504.",
      active: false,
      visible: false,
      image: davidOfMichelangelo,
    },
  ]);
  const [smallImage, setSmallImage] = useState(bridgeOfSighs);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();

    tl.to(".location-name", {
      duration: 0.3,
      opacity: 1,
    })
      .from(".location-name img", {
        duration: 1.8,
        delay: -0.3,
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
        <h2>Italy</h2>
        <img
          className="city-image-main"
          src={foggyMountain}
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
            Catchy <br></br> <b>Italy</b> <br></br> Experiences
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
          <img src={italyLong} alt="top of the rock" />
        </div>
      </section>
      <section className="experiences">
        <div className="experiences-wrapper">
          <h2>
            Things <br></br> To See In <br></br> <b>Italy</b>
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
