function fakeMap(arr, func) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i], i);
    }

    return newArr;
}

let data = [3, 5, 6];

console.log(data);
console.log(fakeMap(data, function(val) {
    return val + 1;
}))
console.log(data);