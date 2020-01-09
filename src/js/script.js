



// clique jouer #debut
oxo.screens.loadScreen("home", function() {
  let play = document.querySelector(".play");
  let orders = document.querySelector(".orders");

  orders.addEventListener("click", function() {
    oxo.screens.loadScreen("tutocommande", function() {});
  });

  play.addEventListener("click", function() {
    oxo.screens.loadScreen("video", function() {
      const video = document.querySelector("video"); // lancement de game1 apres la video (game0)

      video.addEventListener("ended", () => {
        oxo.screens.loadScreen("scenario1", function() {
          let arrow1 = document.querySelector(".arrow1");

          arrow1.addEventListener("click", function() {
            oxo.screens.loadScreen("scenario2", function() {
              let arrow2 = document.querySelector(".arrow2");
              arrow2.addEventListener("click", () => {
                oxo.screens.loadScreen("scenario3", function() {
                  scenario3();
                  let arrow3 = document.querySelector(".arrow3");
                  arrow3.addEventListener("click", () => {
                    oxo.screens.loadScreen("tutocommande", function() {
                      let arrow4 = document.querySelector(".arrow4");
                      arrow4.addEventListener("click", () => {
                        oxo.screens.loadScreen("game", game);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});


oxo.screens.loadScreen("home1", function() {
  console.log("yo");
});

function scenario3() {
  let daisyHere = document.getElementById("sleepingdaisy");
  daisyHere.addEventListener("click", function() {
    let daisy = document.getElementById("sleepingdaisy");
    if (daisy.style.display == "none") {
      daisy.style.display == "block";
    } else {
      daisy.style.display = "none";
    }
  });
  // clique jouer #fin
}

function game() {
  const rooms = ["living", "element", "corridor"];
  let peachPosition;
  let marioPosition = "bedroom";
  let first = true;

  prepareMovePeach();

  function prepareMovePeach() {
    peachPosition = rooms[oxo.utils.getRandomNumber(0, rooms.length - 1)]; // choisis une pièce du tableau aléatoirement
    document.querySelector("." + peachPosition).classList.add("next"); // sert à récupérer la classe du futur changement, lui donne la classe next. on peut modifier cette classe en css

    console.log("peach va aller vers " + peachPosition); // empeche peach de popper dans la bedroom au debut du jeu
    if (first) {
      rooms.push("bedroom");
      first = false;
    }

    setTimeout(movePeach, 2000);
  }

  function movePeach() {
    console.log("peach est dans " + peachPosition);
    // visuel : déplacement de peach

    if (peachPosition === marioPosition) {
      console.log("perdu"); //game over quand mario et peach sont dans la même pièce
    } else {
      setTimeout(prepareMovePeach, 3000);
    }
  }

  if (peachPosition === marioPosition) {
    console.log("perdu"); //game over quand mario et peach sont dans la même pièce
  }
}


// Changement de page superposition js data
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
