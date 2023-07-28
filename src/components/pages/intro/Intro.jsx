import React, { useState } from "react";
import Header from "../../header";
import "./intro.css";
import {
  faNodeJs,
  faReact,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailList from "../../mailList/MailList";
import Footer from "../../footer/Footer";
const Intro = () => {
  return (
    <div>
      <Header />

      <section id="head">
        <section id="overlay">
          {" "}
          <div>
            {" "}
            <div>
              <h1>
                Health. <br />
                Powered by Azure
              </h1>
              Improving Healthcare Outcome with Intelligent AI.
            </div>
            <div>
              <button>Download the App</button> <button>Learn more</button>
            </div>
          </div>
          <div id="borderDesign" style={{ scale: "0.85 0.9" }}>
            <div id="topNotch"></div>
            <div id="rightNotch"></div>
            <div className="topImg" id="first"></div>
          </div>
        </section>
      </section>

      <section className="bodySection">
        <div style={{ position: "relative" }}>
          <div className="outerCutout1"></div>
          <div className="outerCutout2"></div>
          <img
            style={{
              position: "absolute",
              objectFit: "cover",
              width: "98%",
              left: "1%",
              top: "1%",
              height: "98%",
              zIndex: "1",
            }}
            src="https://images.prismic.io/adahealth/1c4846e2-6a1c-4fd4-b007-c2cc522197e0_Homepage_Image.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=0.75&q=60 0.75x, https://images.prismic.io/adahealth/1c4846e2-6a1c-4fd4-b007-c2cc522197e0_Homepage_Image.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=1&q=55 1x, https://images.prismic.io/adahealth/1c4846e2-6a1c-4fd4-b007-c2cc522197e0_Homepage_Image.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=1.5&q=50 1.5x, https://images.prismic.io/adahealth/1c4846e2-6a1c-4fd4-b007-c2cc522197e0_Homepage_Image.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=2&q=40 2x, https://images.prismic.io/adahealth/1c4846e2-6a1c-4fd4-b007-c2cc522197e0_Homepage_Image.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=2.5&q=35 2.5x, https://images.prismic.io/adahealth/1c4846e2-6a1c-4fd4-b007-c2cc522197e0_Homepage_Image.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=3&q=30 3x"
            alt=""
          />
        </div>
        <div>
          <div>
            <h2>Take Good Care of Yourself</h2>
            Your body is sending you important signals about your health.
            Understand, manage, and get care for symptoms with trusted medical
            expertise in minutes.
          </div>
          <div>
            <button>Learn about the Diagnosis Tool</button>
          </div>
        </div>
      </section>

      <section className="bodySection">
        <div>
          <div>
            <h2>Improve health and care with us</h2>
            Deliver better outcomes with powerful enterprise solutions. Inform
            health decisions, enhance triage to appropriate care, reduce
            avoidable costs.
          </div>
          <div>
            <button>Register with a Free Account</button>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="outerCutout1"></div>
          <div className="outerCutout2"></div>
          <img
            style={{
              position: "absolute",
              objectFit: "cover",
              width: "98%",
              left: "1%",
              top: "1%",
              height: "98%",
              zIndex: "1",
            }}
            src="https://images.prismic.io/adahealth/8c0baa60-5933-4fa6-a1f0-a626d352d2e7_home-Laptop.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=0.75&q=60 0.75x, https://images.prismic.io/adahealth/8c0baa60-5933-4fa6-a1f0-a626d352d2e7_home-Laptop.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=1&q=55 1x, https://images.prismic.io/adahealth/8c0baa60-5933-4fa6-a1f0-a626d352d2e7_home-Laptop.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=1.5&q=50 1.5x, https://images.prismic.io/adahealth/8c0baa60-5933-4fa6-a1f0-a626d352d2e7_home-Laptop.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=2&q=40 2x, https://images.prismic.io/adahealth/8c0baa60-5933-4fa6-a1f0-a626d352d2e7_home-Laptop.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=2.5&q=35 2.5x, https://images.prismic.io/adahealth/8c0baa60-5933-4fa6-a1f0-a626d352d2e7_home-Laptop.png?auto=format&ch=Save-Data&fit=crop&h=408&w=617&dpr=3&q=30 3x"
            alt=""
          />
        </div>
      </section>

      <section className="bodySection shorten">
        <h2>Technologies</h2>
      </section>

      <section className="bodySection">
        <div className="tech">
          <FontAwesomeIcon icon={faReact} />
          React.js
        </div>
        <div className="tech">
          <FontAwesomeIcon icon={faNodeJs} />
          Node.js
        </div>
        <div className="tech">
          <FontAwesomeIcon icon={faMicrosoft} />
          CosmosDB for MongoDB
        </div>
        <div className="tech">
          <FontAwesomeIcon icon={faMicrosoft} />
          Azure API App
        </div>
        <div className="tech">
          <FontAwesomeIcon icon={faRobot} />
          Azure Bot Composer SDK
        </div>
        <div className="tech">
          <FontAwesomeIcon icon={faMicrosoft} />
          Azure Cognitive Services
        </div>
        <div className="tech">
          <FontAwesomeIcon icon={faMicrosoft} />
          Azure NLP
        </div>
        <div className="tech">
          <FontAwesomeIcon icon={faMicrosoft} />
          Azure LUIS Authoring
        </div>
      </section>
      <section className="bodySection shorten">
        <h1>What Makes our AI Special?</h1>
      </section>

      <section className="bodySection taller" style={{ position: "relative" }}>
        <div>
          <div>
            <h2>Providing Valuable Knowledge</h2>
            The app features a comprehensive knowledge base of diseases,
            exercises, and self-treatment practices. It is curated by from higly
            reputable sources including CDC sites, Federal Health information,
            and the US National Library of Medicine, whose goal is to let one
            live a safe and enjoyable life. For instance, a user can search for
            the information on back related injuries or get up to date
            information on COVID-19 policies.
          </div>
          <div className="backNum">1</div>
        </div>

        <div
          style={{
            position: "relative",
            width: "5%",
            transform: "rotate(20deg) translateY(-150px) translateX(-100px)",
            scale: "0.5 0.5",
          }}
        >
          <div id="borderDesign">
            <div
              style={{
                position: "absolute",
                width: "450px",
                height: "450px",
                borderRadius: "50%",
                top: "-125px",
                left: "0px",
                backgroundImage: "linear-gradient(purple, black)",
                zIndex: "-5",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                top: "50px",
                left: "-100px",
                backgroundImage: "linear-gradient(pink, blueviolet)",
                zIndex: "-5",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                top: "0px",
                left: "-200px",
                backgroundImage: "linear-gradient(darkblue, magenta)",
                zIndex: "-5",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                top: "50px",
                left: "500px",
                backgroundImage: "linear-gradient(skyblue, magenta)",
                zIndex: "-5",
              }}
            ></div>
            <div id="topNotch"></div>
            <div id="rightNotch"></div>
            <div className="topImg" id="second"></div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "5%",
            marginLeft: "-4%",
            transform: "rotate(20deg) translateY(-190px) translateX(-130px)",
            scale: "0.5 0.5",
          }}
        >
          <div id="borderDesign">
            <div id="topNotch"></div>
            <div id="rightNotch"></div>
            <div className="topImg" id="third"></div>
          </div>
        </div>
      </section>

      <section className="bodySection taller">
        <div
          style={{
            position: "relative",
            width: "5%",
            transform:
              " translateY(-75%) translateX(-100px) rotateX(-60deg) rotateZ(-50deg)",
            scale: "0.4 0.4",
            boxShadow: "50px 95px 0px 65px black, 67px 92px 0px 73px black",
          }}
        >
          <div id="borderDesign">
            <div id="topNotch"></div>
            <div id="rightNotch"></div>
            <div className="topImg" id="seventh"></div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "5%",
            marginLeft: "-4%",
            transform:
              " translateY(-95%) translateX(-50%) rotateX(-60deg) rotateZ(-50deg)",
            scale: "0.4 0.4",
            boxShadow: "50px 95px 0px 65px black, 67px 92px 0px 73px black",
          }}
        >
          <div id="borderDesign">
            <div id="topNotch"></div>
            <div id="rightNotch"></div>
            <div className="topImg" id="fourth"></div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "5%",
            marginLeft: "-4%",
            transform:
              " translateY(-25%) translateX(-300%) rotateX(-60deg) rotateZ(-50deg)",
            scale: "0.4 0.4",
            boxShadow: "50px 95px 0px 65px black, 67px 92px 0px 73px black",
          }}
        >
          <div id="borderDesign">
            <div id="topNotch"></div>
            <div id="rightNotch"></div>
            <div className="topImg" id="fifth"></div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "5%",
            marginLeft: "-4%",
            transform:
              " translateY(-15%) translateX(-1500%) rotateX(-60deg) rotateZ(-50deg)",
            scale: "0.4 0.4",
            boxShadow: "50px 95px 0px 65px black, 67px 92px 0px 73px black",
          }}
        >
          <div id="borderDesign">
            <div id="topNotch"></div>
            <div id="rightNotch"></div>
            <div className="topImg" id="sixth"></div>
          </div>
        </div>

        <div>
          <div>
            <h2>Providing a Sense of Confidence</h2>
            The app helps patients who have recently left the hospital become
            self-sufficient and manage their lives by themselves, knowing that
            they do everything right without a constant need to consult a
            practitioner.
          </div>
          <div className="backNum" style={{ right: "0px" }}>
            2
          </div>
        </div>
      </section>

      <section className="bodySection taller">
        <div>
          <div>
            <h2>Providing Urgent Help</h2>
            If there is a question that requires urgent help of a doctor, the
            app enables a user to consult with an online medical personnel 24/7.
            Surely, it cannot substitute actual medical help in emergency cases
            but the app connect users to informaiton and resources for their
            well being. While the app does not offer a diagnosis or medical
            prescriptions, it is a perfect solution for informational purposes.
          </div>
          <div className="backNum">3</div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="topImg" id="eighth"></div>
          <div>
            <img
              style={{
                position: "absolute",
                zIndex: "1",
                width: "100%",
                height: "100%",
              }}
              src="https://media.istockphoto.com/id/1095608518/vector/laptop-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=FZaxUsYy4iLBw2GH2Hl97IprMJ8ewQMvoV3N4XttVcg="
              alt=""
            />
          </div>
        </div>
      </section>
      <MailList />
      <Footer />
    </div>
  );
};

export default Intro;
