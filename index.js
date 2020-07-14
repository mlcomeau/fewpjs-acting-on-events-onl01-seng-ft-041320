// Your code here
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
  });

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    };
};

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
  });

function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
    };
};

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
  });

function moveDodgerUp() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 1}px`;
    };
};
