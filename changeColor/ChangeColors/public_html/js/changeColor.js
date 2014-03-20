function get(id){
    return document.getElementById(id);
}


var button = get("colorButton");
button.addEventListener("click", function(){var color = get("colorEntered").value; document.body.style.backgroundColor = color;});






    

