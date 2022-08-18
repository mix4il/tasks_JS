const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000]
];

function calculate(input) {
    const output = {};

    for(let i = 0; i < input.length; i++) {
        const currency = input[i][0];
        if(output[currency]){
            output[currency] = transaction(input[i][1], input[i][2], output[currency])
        }else{
            output[currency] = transaction(input[i][1], input[i][2]);
        }
    }

    return output;
}

const transaction = (action, cash, deposit = [0, 0]) => {
    let [buyMoney, sellMoney] = deposit;
    switch(action){
        case 'buy':{
            buyMoney += cash;
            break;
        }
        case 'sell':{
            sellMoney += cash;
            break;
        }
    }

    return [buyMoney, sellMoney];
}

console.log(calculate(input))



function calculate2(input){
    return input.reduce((acc, curr)=>{
        acc[curr[0]] = acc[curr[0]] || [0,0];
        acc[curr[0]][curr[1] === 'buy' ? 0 : 1] += curr[2];
        return acc
    }, {})
}

console.log(calculate2(input))