/*document.addEventListener("DOMContentLoaded", function () {
  const cat1 = document.getElementById("cat1");
  const cat2 = document.getElementById("cat2");
  const curtain1 = document.querySelector(".curtain1");
  const curtain2 = document.querySelector(".curtain2");
  const curtain3 = document.querySelector(".curtain3");

  cat1.addEventListener("animationend", function (e) {
    if (e.animationName === "walkCycle") {
      cat1.style.animation = "scratchCycle 3s steps(8) 1 forwards";

      setTimeout(function () {
        curtain1.style.display = "none";

        setTimeout(function () {
          curtain2.style.display = "none";

          setTimeout(function () {
            curtain3.style.display = "none";
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
}); */
