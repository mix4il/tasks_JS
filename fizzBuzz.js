const array = [1,2,3,4,5,6,7,8,9];

function fizzBuzz(num) {
    const fizzArray = [];
    for(let i = 1; i < num; i++){
        if(!(i % 3 || i % 5)){
            fizzArray.push('fizzBuzz')
        }
        else if(i% 3 === 0){
            fizzArray.push('fizz')
        }
        else if(i % 5 === 0){
            fizzArray.push('buzz')
        }
        else{
            fizzArray.push(i)
        }
    }
    return fizzArray;
}

console.log(fizzBuzz(16))
