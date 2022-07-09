var buffer = Buffer.from('30daysofnodejs');
var json = buffer.toJSON(buffer);

console.log(json);