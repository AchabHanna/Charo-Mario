const rooms = ["living", "bathroom", "corridor"];
let peachPosition;
let marioPosition = "bedroom";
let first = true;

setInterval(function() {
  peachPosition = rooms[oxo.utils.getRandomNumber(0, rooms.length - 1)]; // choisis une pièce du tableau aléatoirement
  document.querySelector("." + peachPosition).classList.add("next"); // sert à récupérer la classe du futur changement, lui donne la classe next. on peut modifier cette classe en css

  console.log("peach va aller vers " + peachPosition); // empeche peach de popper dans la bedroom au debut du jeu
  if (first) {
    rooms.push("bedroom");
    first = false;
  }

  setTimeout(movePeach, 2000);
}, 3000); // change de pièce toutes les 3 secondes

function movePeach() {
  // visuel : déplacement de peach

  if (peachPosition === marioPosition) {
    console.log("perdu"); //game over quand mario et peach sont dans la même pièce
  }
}
// clique jouer #debut
oxo.screens.loadScreen("home", function() {
  let play = document.querySelector(".play");
  play.addEventListener("click", function() {
    oxo.screens.loadScreen("game0", function() {
      const video = document.querySelector("video");

      video.addEventListener("ended", event => {
        oxo.screens.loadScreen("game1");
      });
    });
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
// clique jouer #fin
