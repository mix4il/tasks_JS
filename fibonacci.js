
function fibonacci(n){
    if(n === 1 || n === 0){
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(10));

function fibonacciArray(n){
    const fArray = [0, 1];
    for(let i = 2; i <= n; i++){
        fArray.push(fArray[i-2] + fArray[i-1]);
    };

    return fArray[n];
}

console.log(fibonacciArray(10));