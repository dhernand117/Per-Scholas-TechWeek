//1 AN ARRAY THAT PRINTS NUMBERS FROM 1 TO 50
var elements = new Array(50);
for (var i = 0; i < 50; i++) {
    elements[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
}
console.log(elements);

//2 GROCERY SHOPPING LIST ADD AN ITEM USING PUSH
var shoppingList = ["cool ranch doritos", "kings hawaiian sweet bread", "peanut butter oreos", "fruit loops cereal"]
shoppingList.push("Hendricks gin")
console.log(shoppingList);

//3 SORTING STRINGS USING THE FORCE
var yoda = ["try","no","is","there","not","do","or","do"];
console.log(yoda.reverse());

//4 SERVING ONE CUSTOMER AT A TIME
var waitList  = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing= "";

for (var i = 0; i < 5; i++) {// HERE I IS EQUAL TO THE LENGTH OF THE ARRAY SO IT CAN DISPLAY ALL OF ITS VALUES
nowServing= waitList.shift();
console.log('Now Serving customer '+nowServing);
console.log(waitList);
}
console.log("Done");

//5 TURNING AN ARRAY INTO A STRING
var shoe = ["just", "do", "it"];
var shoeString = shoe.toString();
console.log(shoeString);
