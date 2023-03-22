import React from "react";
import Main from "./component/Main";
import Sidebar from "./component/Sidebar";

const App = () => {
  return (
    <div className="grid">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
