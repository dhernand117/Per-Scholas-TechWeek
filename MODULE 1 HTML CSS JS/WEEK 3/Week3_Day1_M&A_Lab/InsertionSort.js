//THIS INSERTION SORT WILL LOOK AT THE VALUES INSIDE ARRAY(X) AND RE-ARRANGE THEM SO THEY ARE DISPLAYED IN SEQUENCE

var array1 = [4, 6, 8, 2, 9, 5, 1, 7, 3];
var array2 = [2152, 3180, 725, 1781, 1248, 4590, 2990, 633];
var array3 = [4, 1, 6, 3, 8, 4, 2, 9, 4, 5, 1, 7, 3]

let insertionSort = (inputArr) => { //DECLARING THE VALUE OF OUR FUNCTION
    let length = inputArr.length;//DECLARING THE VARIABLE LENGHT TO BE EQUAL TO THE LENGHT OF OUR ARRAY
    for (let i = 1; i < length; i++) {//SETTING THAT OUR INDEX WILL SEARCH FROM THE VALUE 1 AND SUM 1 ON EACH ITERATION
        let key = inputArr[i];//DECLARING OUR KEY FUNCTION THAT WILL SEARCH THE INDEX VALUE OF OUR ARRAY
        let j = i - 1;//DECLARING OUR J VALUE THAT WILL COMPARE THE VALUES TO THE LEFT OF OUR INDEX
        while (j >= 0 && inputArr[j] > key) {//SETTING THAT AS LONG AS J IS LESS THAN THE VALUE OF OUR KEY THE CONDITIONS WILL KEEP RUNING
            inputArr[j + 1] = inputArr[j];//CONDITION WHERE THE VALUE OF THE INDEX IN J+1 WILL BE EQUAL TO J ON THE SAME ARRAY
            j = j - 1;//CONDITION WHERE J WILL ALWAYS SEARCH FOR THE VALUES ON ITS LEFT
        }
        inputArr[j + 1] = key;//WHEN THE VALUES OF OUR KEY IS EQUAL TO THE VALUE OF THE INDEX IN J+1 OUR FOR LOOP WILL BE COMPLETE AND THE ARRAY IN ORDUM EST
    }
    return inputArr;//THIS WILL RETURN THE RESORTED ARRAY AND OUR FUNCTION WILL BE COMPLETED
};
// FUNCTION TO DELETE DUPLICATED ITEMS ON A EXISTING ARRAY AND SORTING IT BY VALUE.
function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

console.log(insertionSort(array1));
console.log(insertionSort(array2));
console.log(insertionSort(array3));
console.log(uniq(array3));
