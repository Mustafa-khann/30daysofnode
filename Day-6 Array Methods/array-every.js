var arr = [2,4,6,8,10];
var arr1 = [1,9,3,7,8,5,8,2];

function even(value){
    if( (value%2)==0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

var out = arr.every(even);
var out1 =arr1.every(even);
console.log("Output of array 1 : ", out);
console.log("Output of array 2 : ", out1);