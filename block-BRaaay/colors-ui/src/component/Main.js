import React from "react";

const Main = (props) => {
  return (
    <main>
      <ul className="grid g-5">
        {props.colors.map((color, i) => {
          return (
            <li className="card">
              <div className="shade" style={{ backgroundColor: color }}></div>
              <div className="flex">
                <span>{i === 0 ? 50 : i * 100}</span>
                <span>{color}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
