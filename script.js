document.addEventListener("DOMContentLoaded", function () {
  const cat1 = document.getElementById("cat1");

  cat1.addEventListener("animationend", function(e) {
    if (e.animationName === "walkCycle") {
      cat1.style.animation = 'scratchCycle 3s steps(8) 1 forwards';
    }
  });
});