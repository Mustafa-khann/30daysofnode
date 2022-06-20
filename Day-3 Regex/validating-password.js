var pass = 'Aa#1aaabcde';
var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

var res = pass.match(pattern);
if(res)
{
    console.log("Valid Password");
}
else{
    console.log("Please enter a valid Password");
}