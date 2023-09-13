
let screenEl = document.getElementById("screenspace");
let num1, num2, sum;
let math = "none"
function but1(){
    screenEl.textContent += 1
    buttonPressed()
}
function but2(){
    screenEl.textContent += 2
    buttonPressed()
}
function but3(){
    screenEl.textContent += 3
    buttonPressed()
}
function but4(){
    screenEl.textContent += 4
    buttonPressed()
}
function but5(){
    screenEl.textContent += 5
    buttonPressed()
}
function but6(){
    screenEl.textContent += 6
    buttonPressed()
}
function but7(){
    screenEl.textContent += 7
    buttonPressed()
}
function but8(){
    screenEl.textContent += 8
    buttonPressed()
}
function but9(){
    screenEl.textContent += 9
    buttonPressed()
}
function but0(){
    if (screenEl.textContent.substring(0,1) != "0"){
    screenEl.textContent += 0
    }
    buttonPressed()
}
function butdiv(){
    num1 = screenEl.textContent;
    math = "div";
    screenEl.textContent = ""
    buttonPressed()
}
function butcomma(){
    screenEl.textContent += "."
    buttonPressed()
}
function butmul(){
    num1 = parseFloat(screenEl.textContent);
    screenEl.textContent = ""
    math = "mul";
    buttonPressed()
}
function butadd(){
    num1 = parseFloat(screenEl.textContent);
    screenEl.textContent = ""
    math = "add";
    buttonPressed()
}
function butcomma(){
    let checkString = screenEl.textContent;
    console.log(checkString)
    if (checkString.includes(".") == false){
        screenEl.textContent += "."
    }
    buttonPressed()
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


buttonPressed()
}
function butsub(){
    num1 = screenEl.textContent;
    math = "sub";
    screenEl.textContent = ""
    buttonPressed()
}
function butclear(){
    num1 = 0;
    num2 = 0;
    sum = 0;
    screenEl.textContent = "";
    math = "none"
    buttonPressed()
}
let animTrigger1 = "1337"
let animTrigger2 = "69"
let animTrigger3 = "420"
let animTrigger4 = "5318008"

function buttonPressed(){
    let result = screenEl.textContent.trim();
    if (result == animTrigger1){
        ///leet
}


if (result == animTrigger2){
    ///69
}

if (result == animTrigger3){
    ///420
}

if (result == animTrigger4){
    ///5318008
}




}