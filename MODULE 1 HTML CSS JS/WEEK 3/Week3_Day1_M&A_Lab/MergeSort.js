// THIS FUNCTION WILL CONCATENATE AND SORT THE VALUE OF TWO DIFERENT ARRAYS DIVIDING IT FURTHER INTO LEFT AND RIGHT SIDE COMPARISONS UNTIL THE ARRAY IS IN ORDER
//https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-2.php

function merge_sort(left_part,right_part)
{
 var i = 0;
 var j = 0;
 var results = [];

 while (i < left_part.length || j < right_part.length) {
   if (i === left_part.length) {
     // j is the only index left_part
     results.push(right_part[j]);
     j++;
   }
     else if (j === right_part.length || left_part[i] <= right_part[j]) {
     results.push(left_part[i]);
     i++;
   } else {
     results.push(right_part[j]);
     j++;
   }
 }
 return results;
}
console.log(merge_sort([1,3,4], [3,7,9]));
