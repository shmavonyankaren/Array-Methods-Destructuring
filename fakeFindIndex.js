function fakefindIndex(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i], i)) {
            return i;
        }
    }

    return -1;
}

let data = [3, 5, 6];

console.log(fakefindIndex(data, function(val) {
    return val > 4;
}));