import singletonCounter from "./counter.js";

const blueButton = document.getElementById("blueButton");
blueButton.addEventListener("click", () => {
  console.log("Blue Button clicked");
  singletonCounter.increment();

  const count = document.getElementById("count");
  count.innerText = singletonCounter.getCount();
});
