var output = document.getElementById("output");
output.style.display = "none";
var input = document.getElementById("myInput");
input.addEventListener("input", naira);
function naira() {
  output.style.display = "block";
  var convert = input.value;
  var dollars = document.getElementById("dollarId");
  dollars.innerHTML = convert * 0.024;
  var pounds = document.getElementById("poundsId");
  pounds.innerHTML = convert * 0.023;
  var euros = document.getElementById("eurosId");
  euros.innerHTML = convert * 0.021;
};

