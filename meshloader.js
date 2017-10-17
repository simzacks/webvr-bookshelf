var loadbook = function(scene,posForBook){BABYLON.SceneLoader.ImportMesh("book4", "./models/book/", "blank-book.babylon", scene, function(newMeshes) {
  var mesh = newMeshes[0];
  mesh.position = new BABYLON.Vector3(00,30,posForBook)
  mesh.scaling = new BABYLON.Vector3(30, 30, 30);
  mesh.rotation.y = Math.PI;
  return mesh;})
  posForBook+=10;
}
var loadshelf =  function(scene){BABYLON.SceneLoader.ImportMesh("Bookshelf_Design_4__3_Sections_", "./models/bookshelf/", "bookshelf-design-4-3-sections.babylon", scene, function(newMeshes) {
  var mesh = newMeshes[0];
  mesh.position = new BABYLON.Vector3(0,21,0)

  mesh.scaling = new BABYLON.Vector3(1, 1, 1);
  mesh.rotation.y = 30;
  return mesh;})
}
