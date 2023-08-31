function fakeforEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i], i);
    }
}

let data = [3, 5, 6];

fakeforEach(data, function(val) {
	return	val + 1;
});

console.log(data);