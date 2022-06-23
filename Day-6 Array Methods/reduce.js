arr = [3,4,5,6,7,8,9];
console.log(arr);

function mul(value, total)
{
    total = value * total ;
        return total
}
var output = arr.reduce(mul);
console.log("The product of the Array is :", output);