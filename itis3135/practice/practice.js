var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  var totalOrder = 0;
  var espressoCups = 0;
  var cappuccinoCups = 0;
  //add onclick event handler for each image
  document.getElementById("espressoImage").addEventListener("click", function () {
    var espressoCounter = 1;
    espressoCups += espressoCounter;
    let espressoPrice = 1.95;
    totalOrder += espressoPrice;
    console.log(totalOrder.toFixed(2));
    console.log("Espresso cups " + espressoCups);
    document.getElementById("numberOfEspressos").innerHTML = espressoCups;
  });

  document.getElementById("cappuccinoImage").addEventListener("click", function () {
    var cappuccinoCounter = 1;
    cappuccinoCups += cappuccinoCounter;
    console.log(cappuccinoCounter);
    let cappuccinoPrice = 3.45;
    totalOrder += cappuccinoPrice;
    console.log(totalOrder.toFixed(2));
    console.log("Cappuccino cups " + cappuccinoCups);
    document.getElementById("numberOfCappuccinos").innerHTML = cappuccinoCups;
  });

  // for click event add item to order and update total
  document.getElementById("place_order").addEventListener("click", function () {
    document.getElementById("total").innerHTML = totalOrder.toFixed(2);
  });
  // display order and total
  document.getElementById("clear_order").addEventListener("click", function () {
    document.getElementById("total").innerHTML = 0;
    espressoCups = 0;
    cappuccinoCups = 0;
    document.getElementById("numberOfEspressos").innerHTML = 0;
    document.getElementById("numberOfCappuccinos").innerHTML = 0;
  });

  //CONTACT US
  document.getElementById("contact_us").addEventListener("click", function () {
    var enterEmail = prompt("Please enter your comments");
    alert("We value your feedback. Thank you for your business");
  });
}; // end onload
