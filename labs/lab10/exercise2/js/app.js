  color = "#FF0000";
  
for(let r = 0; r < 100; r++) {
  let newSquare = document.createElement("div");    
  newSquare.style.backgroundColor = color;
  newSquare.style.float = "left";
  newSquare.style.width = "20px";
  newSquare.style.height = "20px"
  newSquare.style.marginRight= "10px"
  newSquare.style.marginBottom= "10px"    
  document.body.appendChild(newSquare);
  color = getColorChange();
}
function getColorChange() {
  let random = Math.floor(Math.random() * 10);
  
  if(random == 1){
    return "#FF0000";
  }
  else if(random == 2){
    return "#FF4400";
  }
  else if(random == 3){
    return "#FFFF00";
  }
  else if(random == 4){
    return "#00FF00";
  }
  else if(random == 5){
    return "#009900";
  }
  else if(random == 6){
    return "#004400";
  }
  else if(random == 7){
    return "#0000FF";
  }
  else if(random == 8){
    return "#00FFFF";
  }
  else if(random == 9){
    return "#0055FF";
  }
  else if(random == 10){
    return "#FF00FF";
  }
  else{
    return "#5500FF";
  }
}