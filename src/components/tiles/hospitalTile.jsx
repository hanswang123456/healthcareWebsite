import React from "react";
import "./tile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faHospital } from "@fortawesome/free-solid-svg-icons";
const HospitalTile = ({ data }) => {
  return (
    <div className="hospitalTile">
      <div className="tileTitle">
        <FontAwesomeIcon icon={faHospital} className="icon  small-icon" />
        {data.place_name.split(",")[0]}
      </div>
      <div className="tileInfo">
        <FontAwesomeIcon icon={faLocationPin} className="icon small-icon" />
        {data.properties.address}
      </div>
    </div>
  );
};

export default HospitalTile;
