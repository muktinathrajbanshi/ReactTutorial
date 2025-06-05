function add(a, b) {
    let sum = a+b;
    return sum;
}

function sub(a, b) {
    let diff = a-b;
    return diff;
}

function multi( a, b) {
    let multiplication = a*b;
    return multiplication;
}

function div(a, b) {
    let division = a/b;
    division = division.toFixed(2);
    return division;
}



export { add, sub, multi, div };