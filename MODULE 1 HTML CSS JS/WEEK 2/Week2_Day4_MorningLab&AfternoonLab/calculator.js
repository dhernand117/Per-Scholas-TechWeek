function add() {
  var num1 = document.getElementById("a").value ; //THIS WILL LINK OUR ID A IN OUR HTML FILE TO THE VARIABLE NUM//
  var num2 = document.getElementById("b").value ; //THIS WILL LINK OUR ID B IN OUR HTML FILE TO THE VARIABLE NUM//
  var result = Number(num1)+Number(num2); //THE NUMBER METHOD WILL TURN THE STRING OF OUR VARIABLES TO A NUMBER AND DO THE OPERATION BETWEEN OUR VARIABLES NUM LINKED TO THE ID'S A AND B//
  document.getElementById("result").value = result; //THIS WILL LINK OUR RESULT VARIABLE TO THE ID RESULT ON THE HTML FIELD//
 }
 function subtract() {
   var num1 = document.getElementById("a").value ;  //THIS WILL LINK OUR ID A IN OUR HTML FILE TO THE VARIABLE NUM//
   var num2 = document.getElementById("b").value ;  //THIS WILL LINK OUR ID B IN OUR HTML FILE TO THE VARIABLE NUM//
   var result = Number(num1)-Number(num2);  //THE NUMBER METHOD WILL TURN THE STRING OF OUR VARIABLES TO A NUMBER AND DO THE OPERATION BETWEEN OUR VARIABLES NUM LINKED TO THE ID'S A AND B//
   document.getElementById("result").value = result;  //THIS WILL LINK OUR RESULT VARIABLE TO THE ID RESULT ON THE HTML FIELD//
  }
  function multiply() {
    var num1 = document.getElementById("a").value ; //THIS WILL LINK OUR ID A IN OUR HTML FILE TO THE VARIABLE NUM//
    var num2 = document.getElementById("b").value ; //THIS WILL LINK OUR ID B IN OUR HTML FILE TO THE VARIABLE NUM//
    var result = Number(num1)*Number(num2); //THE NUMBER METHOD WILL TURN THE STRING OF OUR VARIABLES TO A NUMBER AND DO THE OPERATION BETWEEN OUR VARIABLES NUM LINKED TO THE ID'S A AND B//
    document.getElementById("result").value = result; //THIS WILL LINK OUR RESULT VARIABLE TO THE ID RESULT ON THE HTML FIELD//
   }
   function divide() {
     var num1 = document.getElementById("a").value ;  //THIS WILL LINK OUR ID A IN OUR HTML FILE TO THE VARIABLE NUM//
     var num2 = document.getElementById("b").value ;  //THIS WILL LINK OUR ID B IN OUR HTML FILE TO THE VARIABLE NUM//
     var result = Number(num1)/Number(num2);  //THE NUMBER METHOD WILL TURN THE STRING OF OUR VARIABLES TO A NUMBER AND DO THE OPERATION BETWEEN OUR VARIABLES NUM LINKED TO THE ID'S A AND B//
     document.getElementById("result").value = result;  //THIS WILL LINK OUR RESULT VARIABLE TO THE ID RESULT ON THE HTML FIELD//
    }
    function average(){
      var num1 = document.getElementById("a").value ; //THIS WILL LINK OUR ID A IN OUR HTML FILE TO THE VARIABLE NUM//
      var num2 = document.getElementById("b").value ; //THIS WILL LINK OUR ID B IN OUR HTML FILE TO THE VARIABLE NUM//
      var result = (Number(num1)+Number(num2))/2; //THE NUMBER METHOD WILL TURN THE STRING OF OUR VARIABLES TO A NUMBER AND DO THE OPERATION BETWEEN OUR VARIABLES NUM LINKED TO THE ID'S A AND B//
      document.getElementById("result").value = result; //THIS WILL LINK OUR RESULT VARIABLE TO THE ID RESULT ON THE HTML FIELD//
    }
