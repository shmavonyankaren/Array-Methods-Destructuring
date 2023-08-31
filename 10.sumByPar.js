function sumByPar(arr) {    
    return arr.filter(val => val >= 18).reduce((aggr, val) => aggr + val);
}

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

console.log(sumByPar(arr));