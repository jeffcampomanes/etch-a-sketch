// default drawing in gray
$(document).ready(function() {
  setGrid();
  setColor("#gray");
});

//draw in gray  
$("#gray").click(function(){ 
    console.log('draw in gray click')
  setGrid();
  setColor("#gray");
});

//draw in multi-colors
$("#colors").click(function(){  
    console.log('draw in color click')
  setGrid();
  setColor("#colors");
});

//erase, will draw on gray by default
$('#erase').click(function(){
    console.log('erase click')
  setGrid();
  setColor("#gray");
});

//asks user to set grid size   
function setGrid()
{ 
  // removeGrid();
  var gridSize=prompt("Please enter a number from 1 to 100 to for nxn grid size.");  
  
  if (gridSize > 0 && gridSize < 101) {     
    removeGrid();
    createGrid(gridSize);   
  }
  else {
    alert("Unable to create grid of that size! Please enter a number from 1 to 100 to for nxn grid size.");
  }
}

// creates grid size  
function createGrid(max) {     
  for(var i=0; i < max; i++) {
    var row= document.getElementById('gridTable').insertRow(i);  

    for(var x=0; x < max; x++) {     
      row.insertCell(x);            
    }   
  }
}

//set sketch background-color for button  
function setColor(option) {
  if(option == "#gray") {
    $("#gridTable td").mouseenter(function(){
      $(this).css("background-color", "gray");
    });
  }
  else {
    $("#gridTable td").mouseenter(function(){
      $(this).css("background-color", newColor());
    });
  }
  
}

//create a new colors for multi-colors
function newColor() {
  var red = Math.floor((Math.random() * 255)+1);
  var green = Math.floor((Math.random() * 255)+1);
  var blue = Math.floor((Math.random() * 255)+1);
  return "rgb(" + red + "," + green + "," + blue + ")";
}
  
//removing old grid and add a new grid
function removeGrid() {   
  $("#gridTable").remove();
  $container_table = $('#container_table');
  $container_table.append("<table id='gridTable'></table>");
}
  
