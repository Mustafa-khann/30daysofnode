console.time('division');
var x = 20;
var y = 40;
var result = x/y;

if(result == 2)
{
    console.log("Result: %d", result);
}
else
{
    console.log("Result: ", result);
}
console.timeEnd('division');