/* document.querySelector("button").addEventListener("click", function myFirstAddListener(){
    prompt("Give us the image we should use");
}) */


var allButtons = document.querySelectorAll(".drum");
function buttonsGetClicked(){
    alert("I got clicked");
}

/* allButtons.forEach(function(button) {
    button.addEventListener("click", buttonsGetClicked);
}); */

for (var i = 0; i< allButtons.length; i++){
    allButtons[i].addEventListener("click", function buttonsGetClicked(){
        alert("I got clicked");
    });
}


























