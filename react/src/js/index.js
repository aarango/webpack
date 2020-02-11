import "../css/index.css";
import search from "./search.js.js";
import render from "./render.js.js";

const id = prompt("quien es el pokemos");

search(id)
  .then(data => {
    render(data);
  })
  .catch(() => {
    console.log("no hubo pokemos");
  });
