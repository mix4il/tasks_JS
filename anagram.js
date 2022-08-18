const str1 = 'register';
const str2 = 'gistrree';

function buildStringMap(str){
    const objSting = {};

    const stringFix = str.toLowerCase();
    
    for(let i = 0; i < stringFix.length;i++){
        objSting[stringFix.charAt(i)] = objSting[stringFix.charAt(i)] + 1 || 1;
    }

    return objSting;
}

console.log(buildStringMap('gistrree'));

function anagram(str1, str2){
    const buildStrMap1 = buildStringMap(str1);
    const buildStrMap2 = buildStringMap(str2);

    if(Object.keys(buildStrMap1).length !== Object.keys(buildStrMap2).length){
        return false;
    }

    for(const char in buildStrMap1){
        if(buildStrMap1[char] !== buildStrMap2[char]){
            return false;
        }
    }
    return true;
}

console.log(anagram('register', 'gistrree'))


const anagramBySort = (a, b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();


console.log(anagramBySort('register', 'gistrree'));