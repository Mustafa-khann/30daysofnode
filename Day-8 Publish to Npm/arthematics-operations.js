function addition(x,y){
    var sum = x+y;
    return sum;
}

function subtraction(x,y){
    var sub = x-y;
    return sub;
}

function multiplication(x,y){
    var product = x*y;
    return product;
}

function division(x,y){
    var div = (x/y);
    return div;
}

module.exports = {
    Addition: addition,
    Subtraction: subtraction,
    Multiplication: multiplication,
    Division: division,
}