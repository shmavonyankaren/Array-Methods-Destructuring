function fakeFilter(arr, func) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i], i)) {
            newArr.push(arr[i]);	
        }
    }
    return newArr;
}

let data = [3, 5, 6];

console.log(data);
console.log(fakeFilter(data, function(val) {
    return val > 3;
}))
console.log(data);