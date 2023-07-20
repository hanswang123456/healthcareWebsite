import "../App.css";

import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import mapboxgl from "mapbox-gl";
//import axios from "axios";
import { useState } from "react";
import HospitalTile from "./tiles/hospitalTile";
import DoctorTile from "./tiles/doctorTile";

//import ReactEcharts from "echarts-for-react";
import EChartsReact from "echarts-for-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
const Body = () => {
  const localizer = momentLocalizer(moment);

  //useStates
  const [loadHospital, setLoadHospital] = useState(true);
  const [hospitalData, setHospitalData] = useState();
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const dateToday = new Date();

  useEffect(() => {
    fetch(`https://healthcare-api.azurewebsites.net/api/auth/local`)
      .then((data) => data.json())
      .then((response) => {
        setLoadHospital(false);
        setHospitalData(response.features);
      });
  }, []);

  function diff(date2, date1) {
    var diff = new Date(date2).getTime() - date1.getTime();

    var msec = diff;
    var dd = Math.floor(msec / 1000 / 60 / 60 / 24);
    msec -= dd * 1000 * 60 * 60 * 24;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    if (dd >= 2 && hh > 2) {
      return dd + " Days " + hh + " Hours";
    } else if (dd >= 2) {
      return dd + " Days " + hh + " Hour";
    } else if (hh >= 2) {
      return dd + " Day " + hh + " Hours";
    } else {
      return dd + " Day " + hh + " Hour";
    }
  }

  function getDocOptions() {
    var holder = {};

    user.details.doctors.forEach(function (d) {
      if (holder.hasOwnProperty(d.specialty)) {
        holder[d.specialty] = holder[d.specialty] + 1;
      } else {
        holder[d.specialty] = 1;
      }
    });

    var ar = [];

    for (var prop in holder) {
      ar.push({ name: prop, value: holder[prop] });
    }

    const doctorOption = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Specialty",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 1,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 10,
              fontWeight: "bold",
            },
          },
          color: ["#9F2B68", "blueviolet", "#301934", "#5D3FD3", "black"],
          labelLine: {
            show: false,
          },
          data: ar,
        },
      ],
    };

    return doctorOption;
  }

  function getAppOptions() {
    var holder = {};

    var holderDoc = [];

    for (let i = 0; i < user.details.doctors.length; i++) {
      holderDoc.push({});
    }

    user.details.appointment
      .sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
      })
      .forEach(function (d) {
        let day = new Date(d.time.split("T").slice(0, 1).toString());
        if (holder.hasOwnProperty(day)) {
          holder[day] = holder[day] + 1;
        } else {
          holder[day] = 1;
        }

        for (let i = 0; i < holderDoc.length; i++) {
          if (user.details.doctors[i].name == d.doctor) {
            if (holderDoc[i].hasOwnProperty(day)) {
              holderDoc[i][day] = holderDoc[i][day] + 1;
            } else {
              // new date
              holderDoc[i][day] = 1;
            }
          } else {
            if (
              // doctor doesnt have appointment on that day (set 0)
              !holderDoc[i].hasOwnProperty(day) &&
              user.details.doctors[i].name != d.doctor
            ) {
              holderDoc[i][day] = 0;
            }
          }
        }
      });

    var xAr = [];
    var yAr = [];

    var yDocAr = [];

    for (var prop in holder) {
      xAr.push(new Date(prop));
    }

    for (var prop in holder) {
      yAr.push(holder[prop]);
    }

    for (let i = 0; i < holderDoc.length; i++) {
      let temp = [];

      for (var prop in holderDoc[i]) {
        temp.push(holderDoc[i][prop]);
      }
      yDocAr.push({
        name: user.details.doctors[i].name,
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: temp,
      });
      temp = [];
    }
    const appointmentOption = {
      title: {
        text: "All Visits by Patient",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: ["Visits"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: xAr,
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: yDocAr,
      color: ["#9F2B68", "blueviolet", "#301934", "#5D3FD3", "black"],

      // [
      //   {
      //     name: "Visits",
      //     type: "line",
      //     stack: "Total",
      //     label: {
      //       show: true,
      //       position: "top",
      //     },
      //     areaStyle: {},
      //     emphasis: {
      //       focus: "series",
      //     },
      //     data: yAr,
      //   },
      // ].concat(yDocAr)
    };

    return appointmentOption;
  }

  function getCalEvent() {
    let appointments = user.details.appointment;

    const res = appointments.map((app) => {
      return {
        id: app._id,
        title: "Appointment with: " + app.doctor,
        start: moment.utc(app.time).toDate(),
        end: moment
          .utc(new Date(app.time).setHours(new Date(app.time).getHours() + 1))
          .toDate(),
        allDay: false,
      };
    });

    console.log(res);

    return res;
  }

  return (
    <div>
      <section id="client-detail">
        <h2>Patient Dashboard</h2>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} className="icon" />
          {dateToday.toString().split(" ").slice(0, 4).join(" ")}
        </div>
      </section>

      <section id="top-chart">
        <div>
          <div className="stats top-nav" id="appointment-map-route">
            <h3>Next Appointment</h3>
            <div>
              {user ? (
                user.details.appointment.filter(
                  (x) => new Date(x.time) > new Date()
                ).length >= 1 ? (
                  <div>
                    <div id="next-appointment-countdown">
                      {diff(
                        user.details.appointment.filter(
                          (x) => new Date(x.time) > new Date()
                        )[0].time,
                        new Date()
                      )}
                    </div>
                    <div id="next-appointment">
                      {user.details.appointment
                        .filter((x) => new Date(x.time) > new Date())[0]
                        .time.split("T")
                        .slice(0, 1)
                        .toString() +
                        " at " +
                        user.details.appointment
                          .filter((x) => new Date(x.time) > new Date())[0]
                          .time.split("T")
                          .slice(1, 2)
                          .toString()
                          .split(".")
                          .slice(0, 1)
                          .toString() +
                        " local time with Dr. " +
                        user.details.appointment.filter(
                          (x) => new Date(x.time) > new Date()
                        )[0].doctor}
                    </div>
                    <div id="next-appointment-location">
                      {
                        user.details.appointment.filter(
                          (x) => new Date(x.time) > new Date()
                        )[0].location
                      }
                    </div>
                  </div>
                ) : (
                  "No upcoming appointments!"
                )
              ) : (
                "Loading"
              )}
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="stats top-nav">
            <h3>Doctor By Practice</h3>
            {user ? <EChartsReact option={getDocOptions()} /> : "Please Log In"}
          </div>
        </div>
        <div>
          {" "}
          <div className="stats top-nav" id="appointment-count">
            <h3>Visits</h3>
            {user ? <EChartsReact option={getAppOptions()} /> : "Please Log In"}
          </div>
        </div>{" "}
      </section>

      <section>
        {" "}
        {user ? (
          <Calendar
            id="calendar"
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            events={getCalEvent()}
            style={{ height: "auto", width: "600px" }}
          />
        ) : (
          "Not Logged In"
        )}
        <div id="right">
          <div id="hospitals">
            <h3>Nearby Hospitals</h3>
            <div className="stats right-nav">
              {loadHospital ? (
                "Loading"
              ) : (
                <>
                  {hospitalData.map((el, index) => (
                    <HospitalTile key={index} data={el} />
                  ))}
                </>
              )}
            </div>
          </div>
          <div id="doctors">
            <h3>Your Doctors</h3>
            <div className="stats right-nav">
              {!user ? (
                "Please Login"
              ) : (
                <>
                  {user.details.doctors.map((el, index) => (
                    <DoctorTile key={index} data={el} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
