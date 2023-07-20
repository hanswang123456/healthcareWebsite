import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../header";
import Footer from "../../footer/Footer";
import DoctorDetailTile from "../../tiles/doctorDetailTile";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./doctor.css";
const Doctor = () => {
  const [loadDoc, setLoadDoc] = useState(true);
  const [docData, setDocData] = useState();
  const [docDataTemp, setDocDataTemp] = useState();
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    fetch("https://healthcare-api.azurewebsites.net/api/doctor/")
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        const comparison = JSON.parse(sessionStorage.getItem("user")).details
          .doctors;
        console.log(comparison);
        let treatedRes = [];
        for (let i = 0; i < response.length; i++) {
          if (
            comparison.filter((el) => {
              return el.name == response[i].name;
            }).length != 0
          ) {
            // already registered by doc
            response[i].added = true;

            treatedRes.push(response[i]);
          } else {
            response[i].added = false;
            treatedRes.push(response[i]);
          }
        }
        console.log(treatedRes);
        setLoadDoc(false);
        setDocData(treatedRes);
        setDocDataTemp(treatedRes);
      });
  }, []);

  const filterDoc = (res) => {
    setSearchVal(res.target.value);

    let docFilter = docDataTemp.filter((el) => {
      return (
        el.name.includes(res.target.value) ||
        el.hospital.includes(res.target.value) ||
        el.address.includes(res.target.value) ||
        el.specialty.includes(res.target.value)
      );
    });

    //displayList = docFilter;
    setDocData(docFilter);
  };

  return (
    <div>
      <Header />
      <section>
        {" "}
        <div style={{ margin: "0px 10px", width: "100%" }}>
          {" "}
          <h2>Doctor Search</h2>
        </div>
        <div
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
        >
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input
            value={searchVal}
            onChange={(evt) => filterDoc(evt)}
            placeholder="Name / Practice / Address"
          ></input>
        </div>
      </section>
      <section>
        {loadDoc
          ? "Loading"
          : docData.map((el, index) => (
              <DoctorDetailTile key={index} data={el} />
            ))}
      </section>
      <Footer />
    </div>
  );
};

export default Doctor;
