function fakeUnshift(arr, addingPart) {
    for(let i = arr.length; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = addingPart;
    return arr.length;
}

const array = [3, 5, 6];

console.log(fakeUnshift(array, 2));
console.log(array);