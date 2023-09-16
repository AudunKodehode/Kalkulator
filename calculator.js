const keyFunctions = {
  0: but0,
  1: but1,
  2: but2,
  3: but3,
  4: but4,
  5: but5,
  6: but6,
  7: but7,
  8: but8,
  9: but9,
};
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key in keyFunctions) {
    keyFunctions[key](); // Call the corresponding function
  } else if (key === "Backspace") {
    if (screenEl.textContent.length > 0) {
      screenEl.textContent = screenEl.textContent.substring(
        0,
        screenEl.textContent.length - 1
      );
    }
  } else if (key === "/") {
    butdiv();
    console.log("div");
  } else if (key === "Enter") {
    event.preventDefault();
    butequals();
    console.log("equals");
  } else if (key === "*") {
    butmul();
    console.log("mul");
  } else if (key === "+") {
    butadd();
    console.log("add");
  } else if (key === "-") {
    butsub();
    console.log("subtract");
  } else if (key === "Delete") {
    butclear();
    console.log("clear");
  } else {
  }
});

let screenEl = document.getElementById("screenspace");
let num1, num2, sum;
let math = "none";
let rotated = false;
let animTrigger1 = "1337";
let animTrigger2 = "69";
let animTrigger3 = "420";
let animTrigger4 = "5318008";
let animTrigger5 = "58008";
function but1() {
  screenEl.textContent += 1;
  buttonPressed();
}
function but2() {
  screenEl.textContent += 2;
  buttonPressed();
}
function but3() {
  screenEl.textContent += 3;
  buttonPressed();
}
function but4() {
  screenEl.textContent += 4;
  buttonPressed();
}
function but5() {
  screenEl.textContent += 5;
  buttonPressed();
}
function but6() {
  screenEl.textContent += 6;
  buttonPressed();
}
function but7() {
  screenEl.textContent += 7;
  buttonPressed();
}
function but8() {
  screenEl.textContent += 8;
  buttonPressed();
}
function but9() {
  screenEl.textContent += 9;
  buttonPressed();
}
function but0() {
  if (screenEl.textContent.substring(0, 1) != "0") {
    screenEl.textContent += 0;
  }
  buttonPressed();
}
function butdiv() {
  num1 = screenEl.textContent;
  math = "div";
  screenEl.textContent = "";
  buttonPressed();
}
function butcomma() {
  screenEl.textContent += ".";
  buttonPressed();
}
function butmul() {
  num1 = parseFloat(screenEl.textContent);
  screenEl.textContent = "";
  math = "mul";
  buttonPressed();
}
function butadd() {
  num1 = parseFloat(screenEl.textContent);
  screenEl.textContent = "";
  math = "add";
  buttonPressed();
}
function butcomma() {
  let checkString = screenEl.textContent;
  console.log(checkString);
  if (checkString.includes(".") == false) {
    screenEl.textContent += ".";
  }
  buttonPressed();
}
function butequals() {
  if (math == "none") {
  } else if (math == "add") {
    num2 = screenEl.textContent;
    sum = parseFloat(num1) + parseFloat(num2);
    screenEl.textContent = "";
    screenEl.textContent = sum;
  } else if (math == "sub") {
    num2 = screenEl.textContent;
    sum = parseFloat(num1) - parseFloat(num2);
    screenEl.textContent = sum;
  } else if (math == "div") {
    num2 = screenEl.textContent;
    sum = parseFloat(num1) / parseFloat(num2);
    screenEl.textContent = sum;
  } else if (math == "mul") {
    num2 = screenEl.textContent;
    sum = parseFloat(num1) * parseFloat(num2);
    screenEl.textContent = sum;
  }
  buttonPressed();
}
function butsub() {
  num1 = screenEl.textContent;
  math = "sub";
  screenEl.textContent = "";
  buttonPressed();
}
function butclear() {
  num1 = 0;
  num2 = 0;
  sum = 0;
  screenEl.textContent = "";
  math = "none";
  buttonPressed();
  if (rotated == true) {
    const elem = document.getElementById("screenspace");
    elem.style.transform = "rotate(0deg)";
    rotated = false;
    screenEl.textContent = "5318008";
  }
}
function buttonPressed() {
  let result = screenEl.textContent.trim();
  if (result == animTrigger1) {
    let id = null;
    const elem = document.getElementById("anim1");
    let deg = -90;
    clearInterval(id);
    id = setInterval(frame, 2);
    elem.style.opacity = "1";
    elem.style.left = "800px";
    elem.style.top = "300px";
    function frame() {
      if (deg == 360) {
        clearInterval(id);
        elem.style.opacity = "0";
        elem.style.left = "1800px";
      } else {
        deg++;
        elem.style.transform = "rotate(" + deg + "deg" + ")";
      }
    }
  }
  if (result == animTrigger2) {
    let id = null;
    const elem = document.getElementById("anim2");
    let deg = -90;
    clearInterval(id);
    id = setInterval(frame, 1);
    elem.style.left = "800px";
    elem.style.top = "300px";
    elem.style.opacity = "1";
    function frame() {
      if (deg == 360) {
        clearInterval(id);
        elem.style.opacity = "0";
        elem.style.left = "1800px";
      } else {
        deg++;
        elem.style.transform = "rotate(" + deg + "deg" + ")";
      }
    }
  }
  if (result == animTrigger3) {
    let id = null;
    const elem = document.getElementById("anim3");
    let deg = -90;
    clearInterval(id);
    id = setInterval(frame, 1);
    elem.style.left = "800px";
    elem.style.top = "300px";
    elem.style.opacity = "1";
    function frame() {
      if (deg == 360) {
        clearInterval(id);
        elem.style.opacity = "0";
        elem.style.left = "1800px";
      } else {
        deg++;
        elem.style.transform = "rotate(" + deg + "deg" + ")";
      }
    }
  }
  if (result == animTrigger4) {
    let id = null;
    const elem = document.getElementById("screenspace");
    let deg = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (deg == 180) {
        clearInterval(id);
        rotated = true;
      } else {
        deg++;
        elem.style.transform = "rotate(" + deg + "deg" + ")";
      }
    }
  }
  if (result == animTrigger5) {
    let id = null;
    const elem = document.getElementById("screenspace");
    let deg = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (deg == 180) {
        clearInterval(id);
        rotated = true;
      } else {
        deg++;
        elem.style.transform = "rotate(" + deg + "deg" + ")";
      }
    }
  }
}
