function fakeEvery(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(!func(arr[i], i)) {
            return false;
        }
    }
    return true;
}

let data = [3, 5, 6];

console.log(fakeEvery(data, function(val) {
    return val > 4
}));