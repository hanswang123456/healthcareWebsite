import React, { useState } from "react";
import Header from "../../header";
import "./intro.css";
import {
  faHospital,
  faSearch,
  faCrosshairs,
  faClinicMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../footer/Footer";
const Intro = () => {
  const [searchVal, setSearchVal] = useState("");

  return (
    <div>
      <Header />

      <section id="head">
        <section id="overlay">
          {" "}
          <div>
            {" "}
            <div>
              <h2>
                Health. <br />
                Powered by Azure
              </h2>
              Improving Healthcare Outcome with Intelligent AI.
            </div>
            <div>
              <button>Download the App</button> <button>Learn more</button>
            </div>
          </div>
          <div id="borderDesign">
            <div id="topNotch"></div>
            <div id="rightNotch"></div>
            <div id="topImg"></div>
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

      <section className="bodySection">
        <div className="tech"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Intro;
