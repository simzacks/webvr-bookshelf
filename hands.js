import. / handsjson.json as hands
//create a line between joints
var drawHand = function(scene){
for (var i = 0; i < hands.length; i++) {
  if (i < hands.length - 1)
    drawLine(vectorFromJson(hands[i][0]), vectorFromJson(hands[i + 1][0]),scene)
  for (var j = 0; j < hands[i].length; j++) {
    if (j < hands.length - 1)
      drawLine(vectorFromJson(hands[i][j]), vectorFromJson(hands[i][j + 1]),scene)
  }
}
}

var drawLine = function(pointStart, pointEnd,scene) {
  //Array of points to construct lines
  var myPoints = [
    pointStart,
    pointEnd
  ];

  //Create lines with updatable parameter set to true for later changes
  var lines = BABYLON.MeshBuilder.CreateLines("lines", {
    points: myPoints,
    updatable: true
  }, scene);
}
var vectorFromJson = function(var a){
  var Vector = new BABYLON.Vector3(a[0],a[1],a[2]);
  return Vector
}
