$(document).ready(function() {
  let orderObject = {
    burger: {
      name: "Burger",
      price: 8.99,
      quantity: 0
    },
    ribs: {
      name: "Ribs",
      price: 14.99,
      quantity: 0
    },
    pie: {
      name: "Pie",
      price: 11.99,
      quantity: 0
    },
    icecream: {
      name: "Icecream",
      price: 7.99,
      quantity: 0
    }
  }

  let total = 0;
  let name = orderObject.burger.name
  let price = orderObject.burger.price
  //console.log("Quantity", itemQuantity);
  //total = orderObject.burger.price * itemQuantity;

  // console.log("total...", total);

  // Add Item to Order list
  // try to target the whole container
  $(".container").click(function(event) {
    event.preventDefault();
    //console.log("EVENT TARGET", event.target);
    if ($(event.target).is('.button')) {
      // console.log('herererere');
      let currID = $(event.target).attr('id')
      // console.log("EVENT TARGET", currID);
      orderObject[currID].quantity += 1
      console.log(orderObject[currID].quantity);
      createTable(orderObject);
      // console.log("EVENT TARGET", $(event.target));

    }


  })



  //--------------build table-------------->

  function createTable(data) {

    let table = $('table')
    let tbody = $("#orderTable")
    tbody.html('')
    //console.log('MY TABLE=',table.children());

    let subtotal = 0;
    for (name in orderObject) {
      if (orderObject[name].quantity !== 0) {

        // console.log("QUANTITY", orderObject[name].quantity);
        // console.log("price", orderObject[name].price);
        let currentTotal = (orderObject[name].quantity * orderObject[name].price)


        subtotal += currentTotal

        let tax = (subtotal * 0.08).toFixed(2)
        let grandTotal = parseInt(subtotal) + parseInt(tax)
        let row = $('<tr></tr>').appendTo(tbody)
        console.log("ROW", row);
        $('#sub').text("$" + subtotal)
        $('#tax').text("$" + tax)
        $('#grandTotal').text("$" + grandTotal)
        //img
        $("<td><img src='img/delete.png' id='delete' height='15px' width='15px'></td>").appendTo(row)
        //menu item
        $(`<td>${name}</td>`).appendTo(row)
        //price
        $(`<td>${currentTotal}</td>`).appendTo(row)

      }
    }

    // console.log("TABLE:", table);

    return table[0];
  }









})
