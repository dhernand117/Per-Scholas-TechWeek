///////////////// PART 1 FUNCTION THAT RETURNS THE LARGEST VALUE BETWEEN TWO NUMBERS
console.log('LARGEST VALUE BETWEEN TWO NUMBERS');
function maxOfTwoNumbers(a,b){
  if (a>=b) { return a;
  } else { return b;}
}; console.log(maxOfTwoNumbers(8,7));


///////////////// PART 2 FUNCTION THAT RETURNS THE LARGEST VALUE BETWEEN THREE NUMBERS
console.log('LARGEST VALUE BETWEEN THREE NUMBERS');
function maxOfThree(a,b,c){
  if (a>=b && a>=c) { return a;
  } else if (b>=a && b>=c){ return b;}
  else {return c;}
};
console.log(maxOfThree(23,46,74));
///////////////// PART 3 FUNCTION THAT RETURNS IF A CHARACTER IS A VOWEL
console.log('CHARACTER IS A VOWEL');
function isCharacterAVowel(aeiou) {
  if (aeiou == 'a'|| aeiou == 'e' || aeiou == 'i' || aeiou == 'o' || aeiou == 'u') { /////CHECKING IF THE FUNCTION CONTAINS AEIOU
    return "Yes it's a vowel"}
    else { return "Not a vowel"}
  }console.log(isCharacterAVowel('a'));
///////////////// PART 4 FUNCTION THAT RETURNS THE LENGTH OF A STRING
console.log('LENGTH OF A STRING');
function charCount(x) {
  return x.length; ////////.LENGTH RETURNS THE NUMBER OF CHARACTERS IN A STRING
} console.log(charCount('0123456789'));
///////////////// PART 4 FUNCTION THAT RETURNS THE NUMBER OF VOWELS IN A STRING
console.log('THE NUMBER OF VOWELS IN A STRING');
function vowelCount(str1){
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1) ///// INDEXOF METHOD RETURNS THE FIRST INDEX AT WHICH A GIVEN ELEMENT CAN BE FOUND IN AN ARRAY OR BE -1 IF NOT PRESENT
    {  vcount += 1;}
  }
  return vcount;
}
var vowelNum = vowelCount("Quetzalcoatl Ehecatl");
if(vowelNum >= 10) {console.log('Vowels in this string must be less than 10 characters')}
else {console.log('The number of vowels in this string is ' + vowelNum);}
