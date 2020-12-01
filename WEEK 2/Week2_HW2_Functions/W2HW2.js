///////////////// PART 1 FUNCTION THAT RETURNS THE LARGEST VALUE BETWEEN TWO NUMBERS
console.log('1 LARGEST VALUE BETWEEN TWO NUMBERS');
function maxOfTwoNumbers(a,b){
  if (a>=b) { return a;
  } else { return b;}
}; console.log(maxOfTwoNumbers(8,7));


///////////////// PART 2 FUNCTION THAT RETURNS THE LARGEST VALUE BETWEEN THREE NUMBERS
console.log('2 LARGEST VALUE BETWEEN THREE NUMBERS');
function maxOfThree(a,b,c){
  if (a>=b && a>=c) { return a;
  } else if (b>=a && b>=c){ return b;}
  else {return c;}
};
console.log(maxOfThree(23,46,74));
///////////////// PART 3 FUNCTION THAT RETURNS IF A CHARACTER IS A VOWEL
console.log('3 CHARACTER IS A VOWEL');
function isCharacterAVowel(aeiou) {
  if (aeiou == 'a'|| aeiou == 'e' || aeiou == 'i' || aeiou == 'o' || aeiou == 'u') { /////CHECKING IF THE FUNCTION CONTAINS AEIOU
    return "Yes it's a vowel"}
    else { return "Not a vowel"}
  }console.log(isCharacterAVowel('a'));
///////////////// PART 4 FUNCTIONS THAT MULTIPLIES AND SUMS ON ARRAYS
console.log('4 MULTIPLICATION AND SUM ON ARRAYS');

var array = [1,2,3,4,5];
function sumArray(xArray) {
  var sum = 0;
  for (var i = 0;i < xArray.length; i++)
    sum += xArray[i];
  return sum;
}
var sumTotal = sumArray(array);
console.log("The sum is: " + sumTotal);

function multiplyArray(yArray) {
  var multiply = 1;
  var j = 0;
  for (var m=0; m < yArray.length; m++)
    multiply *= yArray[m];
  return multiply;
}
var multiplyTotal = multiplyArray(array);
console.log("The multiplication is: " + multiplyTotal);
///////////////// PART 5 FUNCTION THAT RETURNS THE NUMBER OF ARGUMENTS PASSED WHEN CALLED
console.log('5 NUMBER OF ARGUMENTS PASSED');
function argNum(argument1,argument2,argument3,argument4,argument5,argument6){}
console.log(argNum.length);
///////////////// PART 6 FUNCTION THAT RETURNS THE REVERSAL OF A STRING
console.log('6 REVERSING A STRING');
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
      }
    return newString;
}
console.log(reverseString('ocoL orreP lE'));
///////////////// PART 7 FUNCTION THAT TAKES AN ARRAY OF WORDS AND RETURNS THE LENGHT OF THE LONGEST ONE
function findLongestWord(arr) {
   let word = "";
   for (let i = 0; i < arr.length; i++) { //THIS CREATES THE VARIABLE I THAT ACTS AS A SEARCH INDEX
     if (word.length < arr[i].length) { //THIS CREATES THE CONDITION THAT THE VARIABLE WORD IS LESS THAN THE ARRAY LENGTH TO RETURN THE INDEX
       word = arr[i];//THIS DECLARES THAT WORD WILL BE EQUAL TO THE ARRAY INDEXED SO IT HAS THE VALUE OF THE LARGEST WORD
     }
   }
   return word;
 }

  function findLongestWord(arr) {
   return arr.reduce((a, b) => a.length < b.length ? b : a, "");
 }
  console.log(findLongestWord(["Cochinitapibil", "Tacosdecarnitas"]));

///////////////// PART 8 FUNCTION THAT TAKES AN ARRAY OF WORDS AND A NUMBER I AND RETURNS THE ARRAY OF WORDS THAT ARE LONGER THAN I CHARACTERS LONGER
console.log('8 RETURNING I IN AN ARRAY OF WORDS');
function filterLongWords(stringArray, number){
    var newArray = [];// EMPTY ARRAY
    var count=0;
    console.log(stringArray.length);//PRINTING THE LENGTH OF THE ARRAY
    for (i=0; i<stringArray.length; i++){
      if(stringArray[i].length>number){//CHECKING IF THE INDEX I IS GREATER THAN I VALUE
        newArray[count]=stringArray[i];//WHEN TRUE THE NEW ARRAY WILL BE FILLED WITH I VALUE
        count++;//THIS WILL INCREASE ALSO THE VALUE OF THE COUNT CREATING THE NEW ARRAY THAT MEET THE CONDITIONS
      }
    }
    return newArray;
  }
  var myArray= ["one", "twenty", "some amount","two", "some billions"];
  var myNewArray=filterLongWords(myArray, 12);
  console.log(myNewArray);
 //  function filterLongWord(complete, i) {
 //     let word = [];
 //     for(let z=0; z < complete.length; z++){
 //         if( complete[z].length > i) {
 //            word.push(complete[z]);
 //         }
 //     }
 //     return word;
 // }
 // console.log(filterLongWord(["tennesseeee", "cameroon", "chelsea", "camouflage"],8))
