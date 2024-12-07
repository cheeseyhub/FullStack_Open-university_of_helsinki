import { useEffect, useState } from "react";
import axios from "axios";

export default function DataDisplay({
  showCountry,
  matchingCountries,
  message,
}) {
  if (message) {
    return <h3>{message}</h3>;
  }

  if (matchingCountries.length === 1) {
    /* Capital weather */
    let [capitalWeather, setCapitalWeather] = useState({});

    /* Getting weather in capital */
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const apiUrl = import.meta.env.VITE_WEATHER_API_URL;

    useEffect(() => {
      let capitalLatitude = matchingCountries[0]["capitalInfo"]["latlng"][0];
      let capitalLongitude = matchingCountries[0]["capitalInfo"]["latlng"][1];

      let fetchCapitalWeatherData = () => {
        axios
          .get(
            `${apiUrl}lat=${capitalLatitude}&lon=${capitalLongitude}&appid=${apiKey}&units=metric`
          )
          .then((response) => {
            setCapitalWeather(response.data);
          });
      };
      fetchCapitalWeatherData();
    }, []);
    return (
      <>
        <h1>{matchingCountries[0].name.common}</h1>
        <hr />
        <p>
          Capital : <strong>{matchingCountries[0]["capital"][0]}</strong>
        </p>
        <p>
          Area : <strong>{matchingCountries[0].area}</strong>
        </p>
        <hr />
        <h3>Languages</h3>
        <ul>
          {Object.values(matchingCountries[0].languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>

        <figure>
          <img src={matchingCountries[0].flags.svg} />
        </figure>

        <article>
          <h1>Weather in {matchingCountries[0]["capital"][0]} </h1>
          {capitalWeather.main && (
            <p>
              Temperature : <strong>{capitalWeather.main.temp} Celcius</strong>
            </p>
          )}
          {capitalWeather.wind && (
            <p>
              Wind : <strong>{capitalWeather.wind.speed} m/s</strong>
            </p>
          )}
        </article>
      </>
    );
  }

  if (matchingCountries.length > 1) {
    return (
      <>
        {matchingCountries.map((country) => (
          <p key={country.name.common}>
            {country.name.common}{" "}
            <button
              onClick={() => {
                showCountry(country.name.common);
              }}
            >
              Show
            </button>
          </p>
        ))}
      </>
    );
  }
}
