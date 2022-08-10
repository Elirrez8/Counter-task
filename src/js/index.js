//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let sec=0;
setInterval(() => {
    if(sec >= 1000){sec=0;} /*al llegar a mil se reiniciara, escribe 10 y pruebalo*/
  sec += 1;

ReactDOM.render( <Home sec ={sec}/>, document.querySelector("#app")
);
}, 500);/*un seg tiene 1000 miliseg, 500 x cuestiones visuales */
