var email = 'mustafakhann050@gmail.com';
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = email.match(pattern);
if(res)
{
    console.log("Valid Email Addrress");
}
else{
    console.log("Please Enter a valid Email Address");
}