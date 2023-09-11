
let screenEl = document.getElementById("screenspace");
let num1, num2, sum;
let math = "none"
function but1(){
    screenEl.textContent += 1
}
function but2(){
    screenEl.textContent += 2
}
function but3(){
    screenEl.textContent += 3
}
function but4(){
    screenEl.textContent += 4
}
function but5(){
    screenEl.textContent += 5
}
function but6(){
    screenEl.textContent += 6
}
function but7(){
    screenEl.textContent += 7
}
function but8(){
    screenEl.textContent += 8
}
function but9(){
    screenEl.textContent += 9
}
function but0(){
    if (screenEl.textContent.substring(0,1) != 0){
    screenEl.textContent += 0
    }
}
function butdiv(){
    num1 = screenEl.textContent;
    math = "div";
    screenEl.textContent = ""
}
function butcomma(){
    screenEl.textContent += "."
}
function butmul(){
    num1 = parseFloat(screenEl.textContent);
    screenEl.textContent = ""
    math = "mul";
}
function butadd(){
    num1 = parseFloat(screenEl.textContent);
    screenEl.textContent = ""
    math = "add";
}
function butcomma(){
    let checkString = screenEl.textContent;
    console.log(checkString)
    if (checkString.includes(".") == false){
        screenEl.textContent += "."
    }
}
function butequals(){
if (math == "none"){

} else if (math == "add"){
num2 = screenEl.textContent;
sum = parseFloat(num1) + parseFloat(num2);
screenEl.textContent = ""
screenEl.textContent = sum
} else if (math == "sub"){
num2 = screenEl.textContent;
sum = parseFloat(num1) - parseFloat(num2);
screenEl.textContent = sum
} else if(math == "div"){
    num2 = screenEl.textContent;
    sum = parseFloat(num1) / parseFloat(num2);
    screenEl.textContent = sum
} else if (math == "mul"){
    num2 = screenEl.textContent;
    sum = parseFloat(num1) * parseFloat(num2);
    screenEl.textContent = sum
}


}
function butsub(){
    num1 = screenEl.textContent;
    math = "sub";
    screenEl.textContent = ""
}
function butclear(){
    num1 = 0;
    num2 = 0;
    sum = 0;
    screenEl.textContent = "";
    math = "none"
}