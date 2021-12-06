import { useState, useEffect } from "react";
import calendarific from "../apis/calendarific";
import isoCountries from "./countries.json";

const useHoliday = (defaultSearchTerm) => {
  const [hits, setHits] = useState([]);

  function getCountryName(countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
      return isoCountries[countryCode];
    } else {
      return countryCode;
    }
  }

  ///////////////////////////////////////////////////
  useEffect(() => {
    fetchData(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const fetchData = async (term) => {
    let termFetch = getCountryName(term);
    const response = await calendarific.get("/holidays", {
      params: {
        country: termFetch,
      },
    });
    let arrayHoliday = Object.values(response.data.response);
    let arrayData = arrayHoliday[0];
    setHits(arrayData);
  };
  return [hits, fetchData];
};

export default useHoliday;
