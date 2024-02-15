import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading", key: "0" }, "This is React!"),
  React.createElement("p", { key: "1" }, "This is a paragraph3"),
  React.createElement("p", { key: "2" }, "This is a paragraph4"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
