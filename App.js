import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const headerByCreateElement = React.createElement(
  "div",
  { className: "title" },
  [
    React.createElement("h1", {}, "Virat Kohli"),
    React.createElement("h2", {}, "Abraham Bejaman devillers"),
    React.createElement("h3", {}, "Rajath patidhar"),
  ],
);

const HeaderByJSX = () => (
  <div className="parent">
    <img
      src="https://www.w3schools.com/tags/img_girl.jpg"
      width="100"
      height="100"
    ></img>
    <input className="parent"></input>
    <img
      src="https://www.w3schools.com/tags/img_girl.jpg"
      width="100"
      height="100"
    ></img>
  </div>
);

root.render(<HeaderByJSX />);
