/*const flavors = ['Chocolate', 'Vanilla', 'Strawberry', 'Rainbow'];
flavors.forEach(function (element) {
  document.write('I love ' + element + '! ');
});*/

/*var groceries = [x, y, z];
groceries.sort();*/

$(document).ready(function () {
  $("#groceryList").submit(function(event) {
    event.preventDefault();
    $("#list").text("");
    const p1 = $("#item1").val();
    const p2 = $("#item2").val();
    const p3 = $("#item3").val();
    const p4 = $("#item4").val();
    const p5 = $("#item5").val();

    const groceries = [p1, p2, p3, p4, p5];
    groceries.forEach(function(element) {
      $('#list').append(element + " ");
    });

  });
  $('#result').show();
});
