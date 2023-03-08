// let root = document.querySelector(".root");
// let input = document.querySelector(".form-box");

// let allMovies = [
//   {
//     name: "Hulk",
//     watched: false,
//   },
//   {
//     name: "Thor",
//     watched: true,
//   },
// ];

// input.addEventListener("keyup", (event) => {
//   if (event.keyCode === 13) {
//     let movie = {
//       name: event.target.value,
//       watched: false,
//     };
//     event.target.value = "";
//     allMovies.push(movie);
//     createUI(allMovies, root);
//   }
// });

// function handleChange(event) {
//   let id = event.target.id;
//   allMovies[id].watched = !allMovies[id].watched;
//   createUI(allMovies, root);
// }

// let createElement = React.createElement;

// function createUI(dataList = allMovies, root = root) {
//   let UI = dataList.map((data, i) => {
//     let li = createElement(
//       "li",
//       {},
//       createElement(
//         "button",
//         {
//           id: i,
//           className: data.watched ? "active" : "",
//           onClick: handleChange,
//         },
//         data.watched ? "Watched" : "To Watch"
//       ),
//       createElement("p", null, data.name)
//     );
//     return li;
//   });
//   ReactDOM.render(UI, root);
// }

// createUI(allMovies, root);
