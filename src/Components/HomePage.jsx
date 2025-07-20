import React, { useState, useEffect } from "react";
import "./HomePage.css";
import TagInput from "./FilterTag/TagInput";

const initialData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Peter Jones" },
  { id: 4, name: "Mary Johnson" },
  { id: 5, name: "Chris Lee" },
  { id: 6, name: "Patricia Brown" },
  { id: 7, name: "Michael Miller" },
  { id: 8, name: "Linda Davis" },
  { id: 9, name: "William Wilson" },
  { id: 10, name: "Susan Moore" },
  { id: 11, name: "David Taylor" },
  { id: 12, name: "Jessica Anderson" },
  { id: 13, name: "Robert Thomas" },
  { id: 14, name: "Karen Jackson" },
  { id: 15, name: "James White" },
];

const HomePage = ({ isMenuOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    const results = initialData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm]);

  return (
    <main className={`home-page ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="page-header">
        <h2 className="home-title">User data</h2>
      </div>

      <div className="controls-container">
        <div className="search-container">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search by name..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="tag-section-container">
          <TagInput />
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th className="table-header sr-no-col">Sr. No</th>
              <th className="table-header name-col">Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id} className="table-row">
                  <td className="table-cell">{index + 1}</td>
                  <td className="table-cell">{item.name}</td>
                </tr>
              ))
            ) : (
              <tr className="table-row">
                <td className="table-cell no-results" colSpan="2">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default HomePage;
