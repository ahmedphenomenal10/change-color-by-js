var x = document.getElementById("myInput")
var result = document.getElementById("result")
result.style.color = "blue"
x.addEventListener('input', function() {
var userInput = x.value;
if(userInput == "red" || userInput == "Red"){
    result.style.color = "red";
}
});