document.addEventListener("DOMContentLoaded", function () {
  const cat1 = document.getElementById("cat1");
  const cat2 = document.getElementById("cat2");
  const curtain1 = document.querySelector(".curtain1");
  const curtain2 = document.querySelector(".curtain2");
  const curtain3 = document.querySelector(".curtain3");
  const sign1 = document.querySelector(".sign1");
  const sign2 = document.querySelector(".sign2");
  const sign3 = document.querySelector(".sign3");
  const sign5 = document.querySelector(".sign5");

  cat1.addEventListener("animationend", function (e) {
    if (e.animationName === "walkCycle") {
      cat1.style.animation = "scratchCycle 3s steps(8) 1 forwards";

      setTimeout(function () {
        curtain1.style.display = "none";

        setTimeout(function () {
          curtain2.style.display = "none";

          setTimeout(function () {
            curtain3.style.display = "none";

            setTimeout(function () {
              sign1.style.display = "none";

              setTimeout(function () {
                sign2.style.display = "none";

                setTimeout(function () {
                  sign3.style.display = "none";
                  
                  sign5.style.animation = "walkIn3 9s linear infinite";
                }, 700);
              }, 700);
            }, 700);
          }, 700);
        }, 700);
      }, 3000);
    }
  });

  cat2.addEventListener("animationend", function (e) {
    if (e.animationName === "walkCycle") {
      cat2.style.animation = "scratchCycle2 4s steps(12) 1 forwards";
    }
  });
});
