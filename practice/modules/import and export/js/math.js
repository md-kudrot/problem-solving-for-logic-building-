/*
// Method 1: Export while declaring
export const PI = 3.1416;

export function add(a,b) {
    return a + b;
}

export function subtrac(a,b) {
    return a -b;
}

*/



// Method 2: Export at the end

const PI = 3.1416;

function add(a,b) {
    return a + b
}

function subtrac(a,b) {
    return a - b; 
}

export {PI, add, subtrac};