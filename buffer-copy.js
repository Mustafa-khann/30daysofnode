var buff = Buffer.from("30dayofnode")
var buffCopy = Buffer.alloc(20);
buff.copy(buffCopy);
console.log("Content of the new Copied Buff: "+ buffCopy);
