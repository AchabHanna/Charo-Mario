oxo.screens.loadScreen("home", function() {
  let play = document.querySelector(".play");
  play.addEventListener("click", function() {
    oxo.screens.loadScreen("game0", function() {});
  });
});
