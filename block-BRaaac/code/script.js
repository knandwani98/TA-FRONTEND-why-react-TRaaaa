let root = document.querySelector(".root");
let input = document.querySelector(".form-box");

let allMovies = [];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    let movie = {
      name: event.target.value,
      watched: false,
    };
    event.target.value = "";
    allMovies.push(movie);
    createUI();
  }
});

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI();
}

function elm(type, attr = {}) {
  let element = document.createElement(type);
  for (let key in attr) {
  }
  return element;
}

function createUI(dataList = allMovies) {
  root.innerHTML = "";
  dataList.forEach((data, i) => {
    let li = elm("li");
    let hr = elm("hr");
    let button = elm("button", { id: i });
    button.innerText = data.watched ? "Watched" : "To Watched";
    if (data.watched) button.classList.add("active");
    button.addEventListener("click", handleChange);

    let p = elm("p");
    p.innerHTML = data.name;

    li.append(button, p);
    root.append(hr, li);
  });
}

createUI();
