function fakeFind(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i], i)) {
            return arr[i];
        }
    }

    return -1;
}

let data = [3, 5, 6];

console.log(fakeFind(data, function(val) {
    return val % 2 === 0;
}));