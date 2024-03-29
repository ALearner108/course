// SearchComponent.jsx

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Search1.css";

import courses from "../utils/data";

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const dataset = [...new Set(courses.map((item) => item.category))];
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Call function to get autocomplete suggestions based on input value
    let autocompleteOptions = [];
    if (value.length === 1) {
      autocompleteOptions = getAutocompleteOptions(value);
    } else if (value.length >= 2) {
      autocompleteOptions = getNGramOptions(value);
    }
    setOptions(autocompleteOptions);
    setSearchTerm(value);

    const filteredResults = data.filter((item) =>
      item.course_name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  const handleOptionClick = (option) => {
    // Clear both options and filteredData when an option is clicked
    setOptions([]);
    setFilteredData([]);

    // Additional logic if needed when an option is selected
  };

  const getAutocompleteOptions = (input) => {
    const index = buildIndex(dataset, 2); // Generate 2-gram index
    const inputNGrams = generateNGrams(input.toLowerCase(), 2); // Get 2-grams from input
    const possibleMatches = inputNGrams.reduce((acc, nGram) => {
      return acc.concat(index[nGram] || []);
    }, []);

    // Deduplicate and return unique suggestions
    return Array.from(new Set(possibleMatches));
  };

  const getNGramOptions = (input) => {
    const index = buildIndex(dataset, 2); // Generate 2-gram index
    const inputNGrams = generateNGrams(input.toLowerCase(), 2); // Get 2-grams from input
    const possibleMatches = inputNGrams.reduce((acc, nGram) => {
      return acc.concat(index[nGram] || []);
      
    }, []);

    console.log("possible matches:")
    console.log(Array.from(new Set(possibleMatches)))
    return Array.from(new Set(possibleMatches));
  };

  const generateNGrams = (word, n) => {
    const nGrams = [];
    for (let i = 0; i < word.length - n + 1; i++) {
      nGrams.push(word.slice(i, i + n));
    }
    console.log("generate 2 gram")
    console.log(nGrams)
    return nGrams;
  };

  const buildIndex = (words, n) => {
    const index = {};
    words.forEach((word) => {
      const nGrams = generateNGrams(word.toLowerCase(), n);
      nGrams.forEach((nGram) => {
        if (!index[nGram]) {
          index[nGram] = [];
         
        }
        index[nGram].push(word);
        
      });
    });
    console.log(index)
    return index;
  };

  return (
    <div className="search-box rel flex" searchTerm={searchTerm}>
      <input
        type="text"
        className="qry s15 fontb"
        placeholder="....search"
        value={inputValue}
        onChange={handleInputChange}
      />

      <Link>
        <button className="go cfff s15 fontb">Search</button>
      </Link>
      {!searchTerm ? null : (
        <>
          {/* Conditionally render the suggestion bar */}
          {options.length > 0 && (
            <div className="search-results-container">
              {/* Display n-gram results at the top */}
              {options.map((option, index) => (
                <NavLink
                  to={`/category/${option}`}
                  className="category-item"
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </NavLink>
              ))}
              
              {/* Display remaining results below n-gram results */}
              {filteredData.map((item) => (
                <Link
                  to={`/courses/${item.id}`}
                  className="search-result-item"
                  key={item.id}
                >
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchComponent;
