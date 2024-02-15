const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading" }, "This is React"),
  React.createElement("p", { id: "para" }, "This is a paragraph1"),
  React.createElement("p", { id: "para" }, "This is a paragraph2"),
]);

// JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
