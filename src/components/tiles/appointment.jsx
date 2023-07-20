import React from "react";
import "./tile.css";
const Appointment = ({ data }) => {
  return (
    <div className="hospitalTile">
      <div className="tileTitle">{data.name}</div>
      <div className="tileInfo">{data.location}</div>
      <div className="tileInfo">{data.specialty}</div>
    </div>
  );
};
export default Appointment;
