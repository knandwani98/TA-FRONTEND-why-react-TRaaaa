import React from "react";
import allColors from "./allColors.json";
import Main from "./component/Main";
import Sidebar from "./component/Sidebar";

const App = () => {
  return Object.keys(allColors).map((color) => (
    <section className="grid g-1-4">
      <Sidebar name={color} />
      <Main colors={allColors[color]} />
    </section>
  ));
};

export default App;
