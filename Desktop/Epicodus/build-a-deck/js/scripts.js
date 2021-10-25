$(document).ready(function() {
  let iceCreamArr = ["Chocolate", "Mint", "Vanilla", "Strawberry"]
  let index = 0;
  iceCreamArr.forEach(function(element) {
    $("ul#ice-cream-list").append("<li>" + iceCreamArr[index] + "</li>");
    index += 1;
  });
});

