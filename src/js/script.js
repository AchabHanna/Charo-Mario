oxo.screens.loadScreen("home", function() {
  let play = document.querySelector(".play");
  play.addEventListener("click", function() {
    oxo.screens.loadScreen("game2", function() {});
  });
});

let daisyHere = document.getElementById("daisyhere");
daisyHere.addEventListener("click", function() {
  let daisy = document.getElementById("sleepingdaisy");
  if (daisy.style.display == "none") {
    daisy.style.display == "block";
  } else {
    daisy.style.display = "none";
  }
});
