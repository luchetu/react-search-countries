import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";

const SearchPage = () => {
  const [input, setInput] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [defaultCountryList, setDefaultCountryList] = useState([]);

  const fetchData = async () => {
    return await fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryList(data);
        setDefaultCountryList(data);
      });
  };



  const updateInput = (e) => {
    setInput(e.target.value);


    setCountryList(defaultCountryList.filter(country => {
      return country.name.toLowerCase().includes(input);
    }));


  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
      <>
      <h1>Country List</h1>
      <SearchBar
          input={input}
          updateInput={updateInput}
      />
      <CountryList
      countries={countryList}

      />
      </>
  )
};

export default SearchPage;