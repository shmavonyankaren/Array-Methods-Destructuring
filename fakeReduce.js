function fakeReduce(arr, func, aggr = arr[0]) {
    for(let i = 0; i < arr.length; i++) {
        aggr = func(aggr, arr[i], i);
    }
    return aggr;
}

let data = [3, 5, 6];

console.log(data);
console.log(fakeReduce(data, function(aggr, val) {
  return aggr + val;
}, 0))
console.log(data);