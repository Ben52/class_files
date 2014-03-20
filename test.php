<?php
	class myClass{
		public $name;
		public $age;
		public $message;

		function __construct($name, $age){
			$this->name = $name;
			$this->age = $age;
		}

		public function write(){
			$message = "My name is " . $this->name . " and I am " . $this->age . " years old.";
			$this->message = $message;
			return $this->message;
		}
	}
	$obj = new myClass("Binny", 26);
	echo $obj->write();
	foreach ($obj as $key => $value) {
		echo "<br>" . $key . " => " . $value;
	}
 ?>