/*const flavors = ['Chocolate', 'Vanilla', 'Strawberry', 'Rainbow'];
flavors.forEach(function (element) {
  document.write('I love ' + element + '! ');
});*/

/*var groceries = [x, y, z];
groceries.sort();*/

/* var arr = [[1,2], [3,4], [5,6]];
 for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}*/

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
      groceries.sort();
      document.getElementById("list").innerHTML = groceries;
    })
      $('#list').append(element + " ");
    });

  $('#result').show();
  });
