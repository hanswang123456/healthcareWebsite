import React from "react";
import "./tile.css";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faLocationPin } from "@fortawesome/free-solid-svg-icons";
const DoctorTile = ({ data }) => {
  return (
    <div className="hospitalTile">
      <div className="tileTitle">{data.name}</div>
      <div className="tileInfo">
        <FontAwesomeIcon icon={faLocationPin} className="icon small-icon" />
        {data.location}
      </div>
      <div className="tileInfo">
        <FontAwesomeIcon icon={faUserDoctor} className="icon small-icon" />
        {data.specialty}
      </div>
    </div>
  );
};
export default DoctorTile;
