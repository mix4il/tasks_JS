const palindrom1 = 'анна';
const palindrom2 = 'racecar';
const palindrom3 = 'racecarwefwe';

function getPalindrom(palindrom) {
    const mid = Math.floor(palindrom.length / 2);
    for(let i = 0; i <= mid; i++){
        if(palindrom[i] !== palindrom[palindrom.length - (1 + i)]){
            return false;
        }
    }
    return true;
}


console.log(getPalindrom(palindrom1));
