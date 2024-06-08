import React from "react";
import { SubHeading } from "../../components";
import "./BookTable.css";
const BookTable = () => {
  return (
    <div className="app__booktable" id="book">
      <div className="content">
        {/* inside we need two div one will contain */}
        <div className="app__booktable-heading">
          <SubHeading title="Reservations" />
          <h1 className="headtext__cormorant">Book A Table</h1>
        </div>
        {/* A div containing all the inputs */}
        <div className="app__booktable-inputs">
          <input type="number" placeholder="Number of Person" />
          <input type="date" placeholder="Date" />
          <input type="time" placeholder="Time" />
        </div>
        <div style={{ marginTop: 30 }} className="button">
          {/* A button to book tables */}
          <button className="custom__button">Book Table</button>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
