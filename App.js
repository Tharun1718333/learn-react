const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "1"),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "1.1"),
    React.createElement("div", { id: "child1.1" }, [
      React.createElement("h1", {}, "1.1.1"),
      React.createElement("h1", {}, "1.1.2"),
    ]),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "1.2"),
    React.createElement("div", { id: "child1.2" }, [
      React.createElement("h1", {}, "1.2.1"),
      React.createElement("h1", {}, "1.2.2"),
    ]),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
