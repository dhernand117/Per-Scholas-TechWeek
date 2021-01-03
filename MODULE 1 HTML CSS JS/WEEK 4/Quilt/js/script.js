//SCRIPT THAT WILL GENERATE RANDOM SQUARES WITH RANDOM COLORS

//THIS FUNCTION WILL GENERATE N NUMBER OF SQUARES WITH A RANDOM COLOR CALLING THE randColorRGB FUNCTION
const generateSquares = (numberOfSquares) => {
  for (let i = 1; i <= numberOfSquares; i++) {
    console.log(i);
    const $square = $ ('<div>').addClass('square');
    $square.css('background-color', randColorRGB());
    $square.text(i);
    $('body').append($square);
  }
    }
$(() => {
  generateSquares(1000);
  $square.attr('id','square'+i);
});
//THIS FUNCTION WILL GENERATE RANDOM COLORS USING VARIABLE RED GREEN BLUE VALUES
const randColorRGB = () => {
  const red = Math.floor( Math.random()*256);
  const green = Math.floor( Math.random()*256);
  const blue = Math.floor( Math.random()*256);
  return "rgb("+red+","+green+","+blue+")";
}
