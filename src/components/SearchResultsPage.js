import React from "react";
import { useLocation } from "react-router-dom";
import SearchResultItem from "./SearchComponent"; // Assuming SearchResultItem is exported from SearchComponent

function SearchResultsPage({ data }) {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("q");

  const filteredResults = data.filter(
    (item) =>
      item.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      <ul>
        {filteredResults.map((item) => (
          <SearchResultItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsPage;
