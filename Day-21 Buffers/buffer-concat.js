var buff1 = Buffer.from("#30daysofnode");
var buff2 = Buffer.from("Challenge");
var buff3 = Buffer.concat([buff1, buff2]);
console.log("buff3 Content: ", buff3.toString());