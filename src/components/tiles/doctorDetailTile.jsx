import React, { useState } from "react";
import "./tile.css";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faLocationPin,
  faDeleteLeft,
  faUserPlus,
  faCalendar,
  faHospital,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
const DoctorDetailTile = ({ data }) => {
  const [bookPage, setBookPage] = useState(false);

  return (
    <div className="hospitalTileLarge">
      {bookPage ? (
        <div>
          <p style={{ fontWeight: "bold", fontSize: "15px" }}>
            Here is {data.name}'s Availability{" "}
          </p>
          {data.availability.map((el) => {
            return (
              <div className="doctorTime">
                <FontAwesomeIcon icon={faClock} className="icon small-icon" />
                {el.time}
              </div>
            );
          })}
          <div className="interactionButtonBox">
            {" "}
            <div
              className="interactionButtonPair"
              onClick={() => {
                setBookPage(!bookPage);
              }}
            >
              {" "}
              <FontAwesomeIcon
                icon={faDeleteLeft}
                className="icon small-icon"
              />
              Cancel
            </div>
            <div className="interactionButtonPair">
              {" "}
              <FontAwesomeIcon
                icon={faCalendar}
                className="icon small-icon"
              />{" "}
              Book
            </div>
          </div>
        </div>
      ) : (
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.4398994542153!2d-80.54743252448725!3d43.47228926411391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf6ad02edccff%3A0xdd9df23996268e17!2sUniversity%20of%20Waterloo!5e0!3m2!1sen!2sca!4v1688492551180!5m2!1sen!2sca"
            width="100%"
            height="150px"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="tileTitle">{data.name}</div>
          <div className="tileInfo">
            <FontAwesomeIcon icon={faHospital} className="icon small-icon" />
            {data.hospital}
          </div>
          <div className="tileInfo">
            <FontAwesomeIcon icon={faLocationPin} className="icon small-icon" />
            {data.address}
          </div>
          <div className="tileInfo">
            <FontAwesomeIcon icon={faUserDoctor} className="icon small-icon" />
            {data.specialty}
          </div>
          {!data.added ? (
            <div className="interactionButton">
              {" "}
              <FontAwesomeIcon
                icon={faUserPlus}
                className="icon small-icon"
              />{" "}
              Add Doctor
            </div>
          ) : (
            <div className="interactionButtonBox">
              {" "}
              <div className="interactionButtonPair">
                {" "}
                <FontAwesomeIcon
                  icon={faDeleteLeft}
                  className="icon small-icon"
                />
                Remove Doctor
              </div>
              <div
                className="interactionButtonPair"
                onClick={() => {
                  setBookPage(!bookPage);
                }}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="icon small-icon"
                />{" "}
                Book Appointment
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default DoctorDetailTile;
