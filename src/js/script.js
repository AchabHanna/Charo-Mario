// const rooms = ["living", "bathroom", "corridor"];
// let peachPosition;
// let marioPosition = "bedroom";
// let first = true;

// setInterval(function() {
//   peachPosition = rooms[oxo.utils.getRandomNumber(0, rooms.length - 1)]; // choisis une pièce du tableau aléatoirement
//   document.querySelector("." + peachPosition).classList.add("next"); // sert à récupérer la classe du futur changement, lui donne la classe next. on peut modifier cette classe en css

//   console.log("peach va aller vers " + peachPosition); // empeche peach de popper dans la bedroom au debut du jeu
//   if (first) {
//     rooms.push("bedroom");
//     first = false;
//   }

//   setTimeout(movePeach, 2000);
// }, 3000); // change de pièce toutes les 3 secondes

// function movePeach() {
//   // visuel : déplacement de peach

//   if (peachPosition === marioPosition) {
//     console.log("perdu"); //game over quand mario et peach sont dans la même pièce
//   }
// }

// clique JOUER ou COMMANDES    #DEBUT
oxo.screens.loadScreen("home", function() {
  let play = document.querySelector(".play");
  let orders = document.querySelector(".orders");

  if (play) {
    play.addEventListener("click", function() {
      oxo.screens.loadScreen("game0", function() {
        const video = document.querySelector("video"); // lancement de game1 apres la video (game0)
        video.addEventListener("ended", event => {
          oxo.screens.loadScreen("game1");
        });
      });
    });
  }
  if (orders) {
    orders.addEventListener("click", function() {
      oxo.screens.loadScreen("tutocommande", function() {});
    });
  }
});
// clique JOUER ou COMMANDES    #FIN

// faire disparaitre Daisy au clique #DEBUT
oxo.screens.loadScreen("game1", function() {
  let daisyHere = document.getElementById("daisyhere");
  daisyHere.addEventListener("click", function clickDaisy() {
    let daisy = document.getElementById("sleepingdaisy");
    if (daisy.style.display == "none") {
      daisy.style.display == "block";
    } else {
      daisy.style.display = "none";
    }
  });
});
// faire disparaitre Daisy au clique #fin

// Changement de page superposition js data #debut
let pieces = document.querySelectorAll(".pieces");
let currentPiece = "piece2";
console.log(pieces);
for (let i = 0; i < pieces.length; i++) {
  if (!pieces[i].classList.contains(currentPiece)) {
    pieces[i].style.display = "none";
  }
}
let elements = document.querySelectorAll(".element");

for (let i = 0; i < elements.length; i++) {
  // on ajoute un ecouteur d'evenement à chaque element
  elements[i].addEventListener("click", function() {
    // on a recupere le numero de piece de l'element
    let pieceNb = elements[i].getAttribute("data-piece");
    for (let j = 0; j < pieces.length; j++) {
      if (pieces[j].getAttribute("data-piece") == pieceNb) {
        console.log("on affiche", pieces[j]);
        pieces[j].style.display = "block";
      } else {
        pieces[j].style.display = "none";

        // piece[j].style.display ="none";
      }
      // on affiche la piece qui est = pieceNb
      // on cache les autre pieces
      console.log(pieces[j].dataset.piece);
    }
  });
}
// Changement de page superposition js data #fin
