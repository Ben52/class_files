	function get(id){
	    return document.getElementById(id);
	}

	function setCSS(elem, style, value){
	    elem.style[style] = value;
	}

	theButton = get("theButton");
	setCSS(theButton, "color", "blue");

	function(){
		function Person(first, last){
			this.first = first;
			this.last = last;
		}
	}

	function Employee(department){
		this.department = department;
	}

	Employee.prototype = new Person();