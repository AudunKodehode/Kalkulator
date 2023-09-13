let screenEl = document.getElementById("screenspace");
let num1, num2, sum;
let math = "none";
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
let rotated = false;
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

let animTrigger1 = "1337";
let animTrigger2 = "69";
let animTrigger3 = "420";
let animTrigger4 = "5318008";

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
}
