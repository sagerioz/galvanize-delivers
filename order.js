$(document).ready(function() {
  var orderObject = {
    "burger": {
      "name": "Burger",
      "price": 8.99,
      "quantity": 0
    },
    "ribs": {
      "name": "Ribs",
      "price": 14.99,
      "quantity": 0
    },
    "pie": {
      "name": "Pie",
      "price": 11.99,
      "quantity": 0
    },
    "icecream": {
      "name": "Icecream",
      "price": 7.99,
      "quantity": 0
    }
  }


  // Add Item to Console Log

  $("#burger").click(function(e) {
    e.preventDefault();
    let total = 0;
    let name = orderObject['burger']['name']
    let itemQuantity = orderObject['burger']['quantity'] += 1
    let price = orderObject['burger']['price']
    console.log("Quantity", itemQuantity);
    total = orderObject['burger']['price'] * itemQuantity;
    let tax = (Math.round(total * .08)).toFixed(2)
    console.log("total...", total);

    // Add Item to OrderList
    $("#orderTable").prepend("<tr><td>" + "<img src='img/delete.png' id='delete' height='15px' width='15px'" + "</td><td>" + name + "</td><td>$" + price + "</tr>");
    if($("#orderTable>tr").hasClass("placeholder")){
      $("#orderTable")[0].removeChild($('#orderTable')[0].lastChild);
      $("#orderTable")[0].removeChild($('#orderTable')[0].lastChild);
    }
    // $("#orderTable")[0].removeChild($('#orderTable')[0].lastChild);
    //     $("#orderTable")[0].removeChild($('#orderTable')[0].lastChild);
    let temp = $("#orderTable").last()
    console.log("last", temp);

    $("#sub").text('$ ' + total)
    $('#tax').text('$ ' + tax)
    $('#grandTotal').text('$ ' + (total + tax))

  })









})
