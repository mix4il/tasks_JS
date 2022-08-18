const intervals = [[1, 3], [2, 6],[15,18],  [8, 10]];

const intervals2 = [[1, 4], [2, 3],[5,7],  [6, 8], [8,10], [11,12]];

function mergerIntervals(intervals) {
    const sortedIntervals = intervals.sort((a,b)=> a[0] - b[0]);
    console.log(sortedIntervals)
    const result = [sortedIntervals[0]];
    for(let i = 1; i < sortedIntervals.length; i++) {
        const lastElementResult = result[result.length - 1];
        const leftSide = lastElementResult[0];
        const rightSide = lastElementResult[1];

        if(rightSide >= sortedIntervals[i][0]){
            result[result.length - 1][1] = Math.max(sortedIntervals[i][1], rightSide);
        }else{
            result.push(sortedIntervals[i]);
        }
    } 
    return result;
}


console.log(mergerIntervals(intervals2));
