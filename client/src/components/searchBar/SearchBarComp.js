import React from "react";
import Styles from "./searchBar.css";

export default function SearchBarComp() {
  return (
    <div className="searchInput">
      <input type="text" required placeholder="Search Album" />
    </div>
  );
}
