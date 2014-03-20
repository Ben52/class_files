
var change = (function() {
    var get = function(id) {
        return document.getElementById(id);
    },
     button = get("button"),
     element,
     style,
     value,

     assign = function() {
        element = get("givenElement").value;
        style = get("givenStyle").value;
        value = get("givenValue").value;
    };
    return{
        changeFunction: function() {
            button.addEventListener("click", function() {
                assign();
                get(element).style[style] = value;
            });
        }

    };
}());
console.log(document.all);
var mydropdown = document.getElementById("mydropdown");
var i;
for(i in document.all){
   // mydropdown.add(i);
   if(document.all[i].id !== "" && document.all[i].id !== "undefined" )
  {mydropdown.options[mydropdown.options.length] = new Option(document.all[i].id);}
}
var j;
for(j in document.getElementById("myH1").style){
    document.getElementById("mydropdownCSS").options[mydropdownCSS.options.length] = new Option(Object.keys(document.getElementById("myH1").style[0][i]));
}

change.changeFunction();

