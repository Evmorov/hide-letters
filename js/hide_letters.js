"use strict"

// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length);
}

function hide(str) {
  var len = str.length;
  var open = 0;

  if (len <= 5) {
    open = 0;
  } else if (5 < len && len <= 10) {
    open = 1;
  } else if (10 < len && len <= 15) {
    open = 2;
  } else if (15 < len && len <= 20) {
    open = 3;
  } else if (20 < len){
    open = 4;
  }

  var open_positions = [];
  while (open > 0) {
    var open_position = getRandomInt(1, len);
    if (str.charAt(open_position) == ' ') continue;
    if (open_positions.indexOf(open_position) != -1) continue;
    open_positions.push(open_position);
    open--;
  }

  for (var i = 1; i < len; i++) {
    if (open_positions.indexOf(i) != -1) continue;
    if (str.charAt(i) == ' ') continue;
    str = str.replaceAt(i, '_');
  }

  if (typeof document !== "undefined") {
    document.getElementById("result").value = str
  }
  return str;
}
