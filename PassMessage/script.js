const textInput = document.getElementById("text-input"); 

textInput.addEventListener("keydown", function (event){
    if ((event.key == "Enter") && (textInput.value != "")){
        changeText();
    }
})

function changeText(){
    document.getElementById("message").innerHTML = textInput.value;
    textInput.value = "";
}