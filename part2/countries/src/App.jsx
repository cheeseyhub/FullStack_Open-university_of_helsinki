import React, { createRef, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import DataDisplay from "./components/DataDisplay";

export default function App() {
  let [countryName, setCountryName] = useState("");
  let [countryData, setCountryData] = useState([]);
  let [matchingCountries, setMatchingCountries] = useState([]);
  let [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then((response) => {
          setCountryData(response.data);
        });
    };
    fetchData();
  }, []);

  /* Filtering countries from data by the coutry name */
  useEffect(() => {
    if (countryName) {
      let filteredCountries = countryData.filter((country) =>
        country.name.common.toLowerCase().startsWith(countryName.toLowerCase())
      );
      filteredCountries.length > 10 && setMessage("Too many Matches");
      filteredCountries.length === 0 && setMessage("No Matches");

      if (filteredCountries.length < 10 && filteredCountries.length !== 0) {
        setMessage("");
        setMatchingCountries(filteredCountries);
      }
    }
  }, [countryName]);

  return (
    <>
      <Filter countryName={countryName} setCountryName={setCountryName} />
      <DataDisplay
        message={message}
        matchingCountries={matchingCountries}
        showCountry={setCountryName}
      />
      <br />
    </>
  );
}
