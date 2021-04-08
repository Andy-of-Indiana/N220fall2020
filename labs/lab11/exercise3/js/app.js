let objects = [
  { color: "#FF0000", height: 100, width: 300 },
  { color: "#FFFF00", height: 200, width: 200 },
  { color: "#ff0000", height: 300, width: 100 },
 ];

 for(let i = 0; i < objects.length; i++) {
   let newSquare = document.createElement("div");   
   newSquare.style.backgroundColor = objects[i].color;
   newSquare.style.height = objects[i].height + "px";
   newSquare.style.width = objects[i].width + "px";
   document.body.appendChild(newSquare);
 }