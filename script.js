document.addEventListener("DOMContentLoaded", function () {
  const cat1 = document.getElementById("cat1");
  const cat2 = document.getElementById("cat2");

  cat1.addEventListener("animationend", function (e) {
    if (e.animationName === "walkCycle") {
      cat1.style.animation = "scratchCycle 3s steps(8) 1 forwards";
    }
  });

  cat2.addEventListener("animationend", function (e) {
    if (e.animationName === "walkCycle") {
      cat2.style.animation = "scratchCycle2 4s steps(12) 1 forwards";
    }
  });
});
