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
                  let arrow3 = document.querySelector(".arrow3");
                  arrow3.addEventListener("click", () => {
                    oxo.screens.loadScreen("tutocommande", function() {
                      let arrow4 = document.querySelector(".arrow4");
                      arrow4.addEventListener("click", () => {
                        oxo.screens.loadScreen("game");
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
