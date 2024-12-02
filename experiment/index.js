function updateDivWalkerLink(code) {
  let link = document.getElementById("div-walker-link");
  link.setAttribute("href", `javascript:(function(){${code}})();`);
}

async function init() {
  var boxes = document.querySelectorAll(".box");
  boxes[0].style.top = "200px";
  boxes[0].style.left = "200px";

  boxes[1].style.top = "500px";
  boxes[1].style.left = "300px";

  boxes.forEach((box) => {
    box.addEventListener("mousedown", function (e) {
      let shiftX = e.clientX - box.getBoundingClientRect().left;
      let shiftY = e.clientY - box.getBoundingClientRect().top;

      function moveAt(pageX, pageY) {
        box.style.left = pageX - shiftX + "px";
        box.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      box.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", onMouseMove);
        box.onmouseup = null;
      });

      box.ondragstart = function () {
        return false;
      };
    });
  });

  fetch("divwalker.js")
    .then((x) => x.text())
    .then((x) => updateDivWalkerLink(x));
}

function moveElementInArc(element, targetX, targetY, duration) {
  return new Promise((resolve) => {
    let startX = parseInt(element.style.left, 10);
    let startY = parseInt(element.style.top, 10);
    let startTime = null;

    function animateArc(currentTime) {
      if (!startTime) startTime = currentTime;
      let elapsedTime = currentTime - startTime;
      let progress = Math.min(elapsedTime / duration, 1);

      // Calculate the height of the arc based on the minimum of startY and targetY, subtracting 100 for the arc's peak
      let arcHeight = Math.min(startY, targetY) - 100;
      let x = startX + (targetX - startX) * progress;
      let y = startY + (targetY - startY) * progress - arcHeight * Math.sin(Math.PI * progress);

      element.style.left = x + "px";
      element.style.top = y + "px";

      if (progress < 1) {
        requestAnimationFrame(animateArc);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animateArc);
  });
}

document.addEventListener("DOMContentLoaded", init);
