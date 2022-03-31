import React, { useEffect, useState } from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import {
  WiHorizonAlt,
  WiThermometerExterior,
  WiThermometer,
  WiNightAltCloudyGusts,
} from "react-icons/wi";

import "./style.css";
const Comp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("delhi");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `
      http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=758059a75ad58607bfa89eee250274d5`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      // console.log(resJson);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <h3 className="head">
            {" "}
            <p style={{ fontWeight: 200, color: "brown" }}>Live</p>{" "}
            <p style={{ fontSize: 28 }}>
              Weather <WiNightAltCloudyGusts />{" "}
            </p>{" "}
            <p style={{ fontSize: 35, color: "white" }}>Report</p>
          </h3>
          <input
            placeholder="Enter city name"
            type="search"
            className="inputField"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>

        {!city ? (
          <p> No data found </p>
        ) : (
          <>
            <div className="info">
              <h1 className="location">
                <BsFillGeoAltFill color="white" size={40} />
                {search}
              </h1>
              <h1 className="city">
                {" "}
                <WiHorizonAlt /> {parseFloat(city.temp).toFixed(2)}°C
              </h1>
              <h3>
                {" "}
                <WiThermometerExterior />
                Min: {parseFloat(city.temp_min - 3.26).toFixed(2)}°C{" "}
                <WiThermometer />
                Max: {parseFloat(city.temp_max + 2.49).toFixed(2)}°C{" "}
              </h3>
            </div>

            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Comp;
