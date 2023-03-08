let root = document.querySelector(".root");
let input = document.querySelector(".form-box");

let allMovies = [
  {
    name: "Hulk",
    watched: false,
  },
  {
    name: "Thor",
    watched: true,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    let movie = {
      name: event.target.value,
      watched: false,
    };
    event.target.value = "";
    allMovies.push(movie);
    createUI(allMovies, root);
  }
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies, root);
}

// function createElement(type, attr = {}, ...children) {
//   let element = document.createElement(type);

//   for (let key in attr) {
//     if (key.startsWith("data-")) {
//       element.setAttribute(key, attr[key]);
//     } else if (key.startsWith("on")) {
//       let eventType = key.replace("on", "").toLowercase();
//       element.addEventListener(eventType, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }

//   children.forEach((child) => {
//     if (typeof child === "object") {
//       element.append(child);
//     }
//     if (typeof child === "string") {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }

let createElement = React.createElement;

function createUI(dataList = allMovies, root = root) {
  let UI = dataList.map((data, i) => {
    let li = createElement(
      "li",
      {},
      createElement(
        "button",
        {
          id: i,
          className: data.watched ? "active" : "",
          onClick: handleChange,
        },
        data.watched ? "Watched" : "To Watch"
      ),
      createElement("p", null, data.name)
    );
    return li;
  });
  ReactDOM.render(UI, root);
}

createUI(allMovies, root);
