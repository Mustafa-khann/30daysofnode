var hexa = 'FFFFFF';
var pattern = /^[a-fA-F0-9]+$/g;

var res = str.match (pattern);
if(res)
{
    console.log("Valid hexaDecimal Numbers");
}
else{
    console.log("Not a Valid Hexadecimal Number");
}