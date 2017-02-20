$(document).ready(function() {
  let orderStatus = false;
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

  // Add Item to Order list
  $(".container").click(function(event) {
    //console.log("EVENT TARGET", event.target);
    if ($(event.target).is('.button')) {
      // console.log('herererere');
      let currID = $(event.target).attr('id')
      // console.log("EVENT TARGET", currID);
      orderObject[currID].quantity += 1
      //console.log(orderObject[currID].quantity);
      createTable(orderObject);
      orderStatus = true;
      // console.log("EVENT TARGET", $(event.target));

    }


  })



  //--------------build table-------------->

  function createTable(data) {

    let table = $('table')
    let tbody = $("#orderTable")
    tbody.html('')

    let subtotal = 0;
    for (name in orderObject) {
      if (orderObject[name].quantity !== 0) {
        let currentTotal = orderObject[name].quantity * orderObject[name].price

        let quantity = orderObject[name].quantity
        subtotal += currentTotal

        let tax = (subtotal * 0.08).toFixed(2)
        let grandTotal = parseFloat(subtotal) + parseFloat(tax)
        grandTotal = (grandTotal).toFixed(2)
        console.log("here!!");
        console.log("SUBTOTAL", subtotal, "TAX", tax, "GTOTAL", grandTotal);

        let row = $('<tr></tr>').appendTo(tbody)
        // console.log("ROW", row);
        $('#sub').text(`$ ${subtotal}`)
        $('#tax').text(`$ ${tax}`)
        $('#grandTotal').text(`$ ${grandTotal}`)
        //img
        $(`<td class="bump"><img src='img/delete.png' id='${name}' height='15px' width='15px' class='delete'></td>`).appendTo(row)
        //menu item
        $(`<td>${name}</td>`).appendTo(row)
        //price
        $(`<td>${currentTotal}</td>`).appendTo(row)
        //quantity
        $(`<td class="bump">${quantity}</td>`).appendTo(row)

      }
    }

    // console.log("TABLE:", table);

    return table[0];
  }

  $('#orderTable').click(function() {
    if ($(event.target).is('.delete')) {
      let toDelete = $(event.target).attr('id')
      orderObject[toDelete].quantity -= 1
      createTable();

    }
  })
  $('#moreStuffButn').click(function(e){
  $('#moreStuff').show();
   e.preventDefault();
});

$('#btn_submit').click(function(){
  let names = $.trim($('#names').val()).length > 0;
  let email = $.trim($('#email').val()).length > 0;
  let phone = $.trim($('#telephone').val()).length > 0;
  let address = $.trim($('#address').val()).length > 0;
  console.log("T OR F", names);
  if (!orderStatus) {
    Materialize.toast('Please place an order', 3000)
  }else if(names && email && phone && address){
    Materialize.toast('Thank you for your order!', 6000)
  }else{
    Materialize.toast('Please complete the form', 3000)
  }
})



})
