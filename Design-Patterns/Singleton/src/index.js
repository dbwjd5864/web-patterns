import "./blueButton.js";
import "./redButton.js";
import singletonCounter from "./counter.js";

const count = document.getElementById("count");
count.innerText = singletonCounter.getCount();
