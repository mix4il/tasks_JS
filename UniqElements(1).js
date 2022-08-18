const array = [3, 3 ,4 , 4 ,6 , 7, 8, 8 , 7];

task1(array);
function task1(array){
    const uniqArray = [...new Set(array)];
    console.log(uniqArray);
}

function uniqArray(array){
    return array.filter((item, index, array) => index === array.indexOf(item));
}

console.log(uniqArray(array));

function uniqArray2(array){
    return array.filter((item) => {
        array.lastIndexOf(item) === array.indexOf(item);
    });
}

console.log(uniqArray2(array));



function uniqArray3(array){
    return array.reduce((uniq, item) => {
        return uniq.includes(item) ? uniq : [...uniq, item];
    }, [])
}

console.log(uniqArray3(array));
