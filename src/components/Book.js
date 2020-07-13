import React from "react";

const Book = ({ title, description, imgLocation }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "2em" }}>
      <img className="card-img-top" src={imgLocation} alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Book;
