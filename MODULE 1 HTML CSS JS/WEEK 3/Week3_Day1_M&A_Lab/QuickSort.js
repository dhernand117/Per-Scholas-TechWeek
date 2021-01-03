//THIS FUNCTION WILL TAKE A PIVOT VALUE AND SORT TAKING THAT PIVOT AS REFERENCE AND RETURNING A SORTED ARRAY

var array1 = [4, 6, 8, 2, 9, 5, 1, 7, 3];
var array2 = [2152, 3180, 725, 1781, 1248, 4590, 2990, 633];
var array3 = [4, 1, 6, 3, 8, 4, 2, 9, 4, 5, 1, 7, 3]

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
//FUNCTION TO FIND THE MEDIAN OF THREE 
function findMedian(first, second, third) {
    if ((second - first) * (third - first) < 0) {
        return first;
    }else if ((first - second) * (third - second) < 0) {
        return second;
    }else if ((first - third)*(second - third) < 0) {
        return third;
    }
}
function findMedianOfThree(array) {
    var len = array.length;
    var firstElement = array[0];
    var lastElement = array[len-1];
    var middleIndex = len%2 ? (len-1)/2 : (len/2)-1;
    var middleElement = array[middleIndex];
    var medianValue = findMedian(firstElement, lastElement, middleElement);
    return medianValue;
}

// first call to quick sort
// var sortedArray = quickSort(MYARRAY, PIVOT, MYARRAY.length - 1); THIS IS HOW IT HAS TO BE SETUP TO WORK WHERE (ITEMS=ARRAYNAME, PIVOT, ARRAYNAME.LENGHT - 1)
var sortedArray1 = quickSort(array1, 0, array1.length - 1);//SORTING BY THE FIRST ELEMENT ON THE ARRAY
var sortedArray1_2 = quickSort(array1, 5, array1.length - 1);//SORTING BY THE MEDIAN OF THREE WITH THE findMedianOfThree FUNCTION
var sortedArray2 = quickSort(array2, 0, array2.length - 1);//SORTING BY THE FIRST ELEMENT ON THE ARRAY
var sortedArray2_2 = quickSort(array2, 3, array2.length - 1);//SORTING BY THE MEDIAN OF THREE WITH THE findMedianOfThree FUNCTION
var sortedArray3 = quickSort(array3, 0, array3.length - 1);

console.log(sortedArray1);
console.log(findMedianOfThree(array1));
console.log(sortedArray1_2);
console.log(sortedArray2);
console.log(findMedianOfThree(array2));
console.log(sortedArray2_2);
console.log(sortedArray3);
