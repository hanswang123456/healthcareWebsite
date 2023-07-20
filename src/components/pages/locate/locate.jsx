import React, { useState } from "react";
import Header from "../../header";
import "./locate.css";
import {
  faHospital,
  faSearch,
  faCrosshairs,
  faClinicMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../footer/Footer";
const Locate = () => {
  const [searchVal, setSearchVal] = useState("");

  return (
    <div>
      <Header />
      <section>
        {" "}
        <div style={{ margin: "0px 10px", width: "100%" }}>
          {" "}
          <h2>Facility Locator</h2>
        </div>
        <div
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
        >
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input value={searchVal} placeholder="Area / Name / Type"></input>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ fontWeight: "bold" }}>
            Search Radius:{" "}
            <select className="barButton" id="Mobility" name="Mobility">
              <option selected="">5 Km</option>
              <option>1 Km</option>
              <option>5 Km</option>
              <option>10 Km</option>
              <option>20 Km</option>
            </select>
          </div>
          <div style={{ display: "flex", fontWeight: "bold" }}>
            <div style={{ margin: "auto 5px" }}>Filter by Type: </div>
            <div className="barButton">
              <FontAwesomeIcon icon={faHospital} className="icon small-icon" />
              Hospitals
            </div>
            <div className="barButton">
              <FontAwesomeIcon
                icon={faClinicMedical}
                className="icon small-icon"
              />
              Clinics
            </div>
            <div className="barButton">
              <FontAwesomeIcon
                icon={faCrosshairs}
                className="icon small-icon"
              />
              Emergency
            </div>
          </div>
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d46086.706995652945!2d-79.44502071521111!3d43.784914095413804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospital!5e0!3m2!1sen!2sca!4v1689259903147!5m2!1sen!2sca"
          width="80%"
          height="450"
          style={{ border: "0px", margin: "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default Locate;
