var placeImagee = function (x) {
  var img = "";
  for (var counter = 1; counter <= x; counter++) {
    img +=
      '<li><img class="zoom" src="img/new/img  (' +
      counter +
      ').jpg" alt="" /></li>';
  }
  document.getElementById("picturee").innerHTML = img;
};

function function2() {
  var ul = document.getElementById("picturee");
  var li = document.createElement("li");
  ul.appendChild(li);
}

placeImagee(147);
function2();

var placeImageee = function (x) {
  var img = "";
  for (var counter = 1; counter <= x; counter++) {
    img +=
      '<li><img class="zoom" src="img/1yr/img (' +
      counter +
      ').jpg" alt="" /></li>';
  }
  document.getElementById("pictureee").innerHTML = img;
};
function function3() {
  var ul = document.getElementById("pictureee");
  var li = document.createElement("li");
  ul.appendChild(li);
}

placeImageee(147);
function3();

//2years
var placeImageeee = function (x) {
  var img = "";
  for (var counter = 1; counter <= x; counter++) {
    img +=
      '<li><img class="zoom" src="img/2yr/img (' +
      counter +
      ').jpg" alt="" /></li>';
  }
  document.getElementById("pictureeee").innerHTML = img;
};

function function4() {
  var ul = document.getElementById("pictureeee");
  var li = document.createElement("li");
  ul.appendChild(li);
}
placeImageeee(53);
function4();

//3e=years
var placeImageeeee = function (x) {
  var img = "";
  for (var counter = 1; counter <= x; counter++) {
    img +=
      '<li><img class="zoom" src="img/3yr/img (' +
      counter +
      ').jpg" alt="" /></li>';
  }
  document.getElementById("pictureeeee").innerHTML = img;
};

function function5() {
  var ul = document.getElementById("pictureeeee");
  var li = document.createElement("li");
  ul.appendChild(li);
}
placeImageeeee(138);
function5();
