function hello (){
    console.log('This will run immediately');
}

console.log("It will print the data Immediately");
setImmediate(hello);