var placeImage = function (x) {
  var img = "";
  for (var counter = 1; counter <= x; counter++) {
    img +=
      '<li><img class="zoom" src="img/0/img (' +
      counter +
      ').jpg" alt="" /></li>';
  }
  document.getElementById("picture").innerHTML = img;
};

function function1() {
  var ul = document.getElementById("picture");
  var li = document.createElement("li");
  ul.appendChild(li);
}

placeImage(72);
function1();
