function createOrder(name, price){
	var i;
	var order = {name: name, price: price, print: function(){console.log(this.name + " costs " + this.price);}, alert: function(){alert(this.name + " costs " + this.price);}};
	order.print();
	order.alert();
	return order;
}


orderOne = createOrder("Computer", 1000);
orderTwo = createOrder("Table", 250);
orderThree = createOrder("Car", 25000);


/*orders = [orderOne, orderTwo];
var i;
for(i in orders){
	//console.dir(i);
	console.dir(orders[i]);
}
console.dir(orderOne);
*/


