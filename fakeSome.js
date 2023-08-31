function fakeSome(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i], i)) {
            return true;
        }
    }
    return false;
}

let data = [3, 5, 6];

console.log(fakeSome(data, function(val) {
    return val > 4;
}))