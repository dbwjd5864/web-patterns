import singletonCounter from "./counter.js";

const redButton = document.getElementById("redButton");
redButton.addEventListener("click", () => {
  console.log("Red Button clicked");
  singletonCounter.decrement();

  const count = document.getElementById("count");
  count.innerText = singletonCounter.getCount();
});
