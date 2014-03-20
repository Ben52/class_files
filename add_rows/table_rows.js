var pcs = {};

pcs.tools = (function () {
	function get(id) {
		return document.getElementById(id);
	}
	
	function getCSS(elem, style) {
		return window.getComputedStyle(elem, null).getPropertyValue(style);
	}
	
	function addClickHandler(elem, handler) {
		if (elem.addEventListener) { // Other browsers
			elem.addEventListener("click", handler);
		} else if (elem.attachEvent) { // IE 7
			elem.attachEvent("onclick", handler);
		} else {
			alert("Broken");
		}
	}
	
	return {
		get: get,
		getCSS: getCSS,
		addClickHandler: function (id, handler) {
			var elem = get(id);
			addClickHandler(elem, handler);
		}
	};
}());

pcs.wrap = (function(){
	function addRow (tablePart, fields){
		var i;
		var tablePart = pcs.tools.get(tablePart);
		var row = tablePart.insertRow(-1);

			for(i=0; i<fields.length; i++){
				data = pcs.tools.get(fields[i]).value;
				if(data !== ""){
				var cell = row.insertCell(-1);
				cell.innerHTML = data;
				}
				pcs.tools.get(fields[i]).value = null;
			}
	}


	return{
		addRow: addRow
	};
}());

/*For homework please write a utility function that "wraps" a table and provides a method for adding a row - see contacts.html from a few classes
 back for the basic idea - but create a reusable module/function that can be reused anytime you want to add rows to a table.*/