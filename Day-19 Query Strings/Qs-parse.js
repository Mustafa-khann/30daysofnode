const querystring = require('querystring');

var value_json_2 = querystring.parse('id=1&name=mk&name=30days&challenge=30daysofnode&creator%nodejs');
console.log("Changing the default 'eq' from '=' to '%' an example is shown below:");
console.log(value_json_2);

var value_json_3 = querystring.parse('id%3#name%emily#name%30daysofnode#challenge%30daysofnode#creator%mustafa','#','%');
console.log("Changing the default Separator 'sep' from '&' to '#'. An example is shown below:")
console.log(value_json_3);