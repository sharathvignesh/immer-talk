const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal)
  ]);
};

class App extends React.component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt me"),
      React.createElement(Pet, {
        name: "daisy",
        animal: "love"
      }),
      React.createElement(Pet, {
        name: "vicky",
        animal: "love-2"
      }),
      React.createElement(Pet, {
        name: "sakthi",
        animal: "love-3"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
