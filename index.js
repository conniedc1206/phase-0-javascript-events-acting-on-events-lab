//grab the dodger
const dodger = document.getElementById("dodger");

//build our moveDodgerLeft() function, adding a check on the current position of the dodger
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//let's wire this up to our event listener
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

//build our moveDodgerRight() function, adding a check on the current position of the dodger
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (0 < left < 40) {
      dodger.style.left = `${left + 1}px`;
    }
  }

//let's wire this up to our event listener
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
});
