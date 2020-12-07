//I FOUND THIS FUNCTION AND MODIFY IT TO FIT THE BUBBLES
const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16); ///THIS TAKES AN ALMOST INFINITE VALUE TO COMBINE MOST EXISTING COLOR COMBINATIONS
  // "The maximum value for 6 hexadecimal digits in base 10 is 16,777,215. If you also add #000000 you get 16,777,216 as the total number of possible color combinations.
  // If we use RGB, the range of colors is 0-255. Meaning there are 256 possible values for each Red, Green and Blue."
  document.getElementById("cell1").style.backgroundColor = "#" + randomColor;///// REDIRECTING THE COLOR FUNCTION TO SPECIFIC ID'S (BUBBLES)
  document.getElementById("cell2").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell3").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell4").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell5").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell6").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell7").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell8").style.backgroundColor = "#" + randomColor;
  document.getElementById("cell9").style.backgroundColor = "#" + randomColor;
}

//THIS IS ANOTHER WAY TO CHANGE COLORS WITH A FUNCTION AND A EVENT LISTENER EVENT.
// window.addEventListener('click', element)
// function element(){
//var elements = document.getElementsByClassName("cell");
// for (var i=0; i< elements.lenght; i++) {
//   elements[i].style.backgroundColor= "red";
// }
// }
