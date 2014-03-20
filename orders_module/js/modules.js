var order = (function() {
    var privateOrdersArray = [];
    var button = document.getElementById("orderButton");
    var orderInput = document.getElementById("orderInput");
    var orderid = 1;
    var ordersTable = document.getElementById("tableBody");

    var displayOrders = function() {
        //var ordersTable = document.getElementById("tableBody");
        var row = ordersTable.insertRow(ordersTable.rows.length);
        var orderIdCell = row.insertCell(0);
        var orderItem = row.insertCell(1);
        orderIdCell.innerHTML = orderid++;
        orderItem.innerHTML = orderInput.value;
    };

    var clearText = function() {
        orderInput.value = "";
    };

    return{
        addOrders: function() {
            button.addEventListener("click", function() {
                if (orderInput.value !== "") {
                    privateOrdersArray.push(orderInput.value);
                    displayOrders();
                    clearText();
                    console.log(privateOrdersArray);
                }
            });
        }
    };
}());
order.addOrders();
